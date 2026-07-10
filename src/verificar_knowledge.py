from __future__ import annotations

import json
import re
import unicodedata
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
KNOWLEDGE_DIR = ROOT / "knowledge_base"


@dataclass
class ModuleDimensions:
    tipo: str = ""
    ancho: int = 0
    alto: int = 0
    profundidad: int = 0
    profundidad_estructura: int = 0


def normalize_code(value: str) -> str:
    return str(value or "").upper().strip().replace("S-P", "S/P")


def normalize_piece(value: str) -> str:
    text = unicodedata.normalize("NFD", str(value or "").upper())
    text = "".join(char for char in text if unicodedata.category(char) != "Mn")
    return re.sub(r"\s+", "", text).strip()


def verificar_candidate_paths() -> list[Path]:
    return [
        KNOWLEDGE_DIR / "verificar" / "db_codigos.js",
        ROOT.parent / "VERIFICAR" / "db_codigos.js",
        ROOT / "VERIFICAR" / "db_codigos.js",
    ]


def load_verificar_db() -> dict[str, str]:
    for path in verificar_candidate_paths():
        if path.exists():
            return parse_js_db(path)
    return {}


def parse_js_db(path: Path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8", errors="ignore")
    match = re.search(r"const\s+DB\s*=\s*\{(?P<body>.*?)\};", text, re.DOTALL)
    if not match:
        return {}

    body = match.group("body")
    entries: dict[str, str] = {}
    for item in re.finditer(r'"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"', body):
        key = json.loads(f'"{item.group(1)}"')
        value = json.loads(f'"{item.group(2)}"')
        entries[key.upper()] = value
    return entries


DB = load_verificar_db()
DEFAULT_DESPIECE_RULES = {
    "espesores_default": {
        "bajos": 18,
        "altos": 15,
        "closets": 15,
        "otros": 18,
        "puertas_frentes": 18,
        "respaldo": 6,
        "maletera_closet": 18,
    },
    "descuentos": {
        "ancho_interno_extra": 1,
        "respaldo_ranura": 10,
        "repisa_profundidad": 110,
        "tpm_profundidad": 52,
        "puerta_ancho_total": 3,
        "puerta_alto": 3,
        "puerta_henzo": 35,
        "puerta_novak": 110,
    },
    "ajustes": {
        "ancho_default": 60,
        "posterior_hasta_h4": 1,
        "posterior_desde_h5": 2,
    },
    "puertas": {
        "dos_puertas_desde_ancho": 620,
    },
    "familias": {
        "bajos": ["B", "BS", "MBS", "MB", "EB"],
        "altos": ["A", "EA", "S", "ES"],
        "closets": ["CL", "CLOSET", "ECL"],
    },
}


def load_despiece_rules() -> dict:
    path = KNOWLEDGE_DIR / "verificar" / "reglas_despiece.json"
    if not path.exists():
        return DEFAULT_DESPIECE_RULES
    try:
        loaded = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return DEFAULT_DESPIECE_RULES
    rules = json.loads(json.dumps(DEFAULT_DESPIECE_RULES))
    for section, values in loaded.items():
        if isinstance(values, dict) and isinstance(rules.get(section), dict):
            rules[section].update(values)
    return rules


DESPIECE_RULES = load_despiece_rules()


def rule_int(section: str, key: str, default: int) -> int:
    try:
        return int(DESPIECE_RULES.get(section, {}).get(key, default))
    except (TypeError, ValueError):
        return default


def rule_family(name: str) -> set[str]:
    values = DESPIECE_RULES.get("familias", {}).get(name, [])
    if not isinstance(values, list):
        return set(DEFAULT_DESPIECE_RULES["familias"].get(name, []))
    return {normalize_code(value) for value in values}


def split_clean_description(value: str) -> str:
    seen: set[str] = set()
    parts = []
    for part in str(value or "").split("/"):
        cleaned = part.strip()
        key = cleaned.upper()
        if cleaned and key not in seen:
            seen.add(key)
            parts.append(cleaned)
    return " / ".join(parts)


def translate_token(token: str) -> str:
    clean = normalize_code(token)
    if clean == "SI":
        return "Sistema Invisible"
    if clean == "C1":
        return "1 Tubo Colgador"
    if clean == "C2":
        return "2 Tubos Colgadores"
    if clean in DB:
        return split_clean_description(DB[clean])
    if clean == "SIN-ACV":
        return "Sin Accesorio"
    if clean == "ACV-LE":
        return "Accesorio Vibo Legumbrero"
    if clean == "ST":
        return "Sistema ST"
    if clean == "IN":
        return "1 Interna"

    gavetas = re.match(r"^G(\d+)$", clean)
    if gavetas:
        count = int(gavetas.group(1))
        return "1 Gaveta" if count == 1 else f"{count} Gavetas"
    if re.match(r"^H\d", clean):
        return translate_height(clean)
    if re.match(r"^P\d", clean):
        return translate_depth(clean)
    return clean


def combine_special_tokens(parts: list[str]) -> list[str]:
    result = []
    index = 0
    while index < len(parts):
        current = normalize_code(parts[index])
        next_value = normalize_code(parts[index + 1]) if index + 1 < len(parts) else ""
        if current == "S" and next_value.startswith("P"):
            result.append(f"S/P{next_value[1:]}")
            index += 2
            continue
        if current == "SIN" and next_value == "ACV":
            result.append("SIN-ACV")
            index += 2
            continue
        if current == "ACV" and next_value == "LE":
            result.append("ACV-LE")
            index += 2
            continue
        result.append(parts[index])
        index += 1
    return result


def split_main_and_accessories(code: str) -> tuple[str, list[str]]:
    parts = combine_special_tokens([part for part in re.split(r"[-+]", code) if part])
    if not parts:
        return "", []
    index_with_width = next((i for i, part in enumerate(parts) if re.search(r"[A-Z]+\d", normalize_code(part))), -1)
    if index_with_width <= 0:
        return parts[0], parts[1:]
    return "-".join(parts[: index_with_width + 1]), parts[index_with_width + 1 :]


def known_token_prefix(text: str) -> str:
    text = normalize_code(text)
    for key in sorted(DB, key=len, reverse=True):
        if text.startswith(key):
            return key
    return ""


def split_known_token_with_compact_detail(principal: str) -> tuple[str, str] | None:
    text = normalize_code(principal)
    marker = re.search(r"(HE|H\d+(?:[.,]\d+)?|(?<![/-])P\d+(?:[.,]\d+)?)", text)
    if not marker or marker.start() == 0:
        return None
    candidate = text[: marker.start()]
    detail = text[marker.start() :]
    if candidate in DB:
        return candidate, detail
    token = known_token_prefix(candidate)
    if token and token == candidate:
        return token, detail
    return None


def convert_code_number_to_mm(value: str | float) -> int:
    try:
        number = float(str(value).replace(",", "."))
    except ValueError:
        return 0
    return round(number * 10)


def total_depth_from_p_number(number: float) -> int:
    if number >= 10 and number.is_integer():
        return round(number * 10)
    if 2 <= number <= 4 and number.is_integer():
        return round(number * 100 + 20)
    return round(number * 100 if number < 20 else number * 10)


def translate_height(height: str) -> str:
    code = normalize_code(height)
    if code in DB:
        description = split_clean_description(DB[code])
        for part in description.split("/"):
            if part.strip().upper().startswith("ALTURA"):
                return part.strip()
        return description
    match = re.match(r"^H(\d+(?:[.,]\d+)?)$", code)
    if not match:
        return code
    return f"Altura {code} ({convert_code_number_to_mm(match.group(1))}mm)"


def translate_depth(depth: str) -> str:
    match = re.match(r"^P(\d+(?:[.,]\d+)?)$", normalize_code(depth))
    if not match:
        return normalize_code(depth)
    number = float(match.group(1).replace(",", "."))
    return f"Profundidad {total_depth_from_p_number(number)}mm"


def translate_module_type(tipo: str) -> str:
    tipo = canonical_module_type(tipo)
    types = {
        "B": "Modulo Bajo",
        "A": "Modulo Alto",
        "S": "Modulo Suspendido",
        "BS": "Modulo Bajo Suspendido",
        "MBS": "Mueble Bajo Suspendido",
        "BAR": "Bar",
        "X": "Modulo Auxiliar",
        "E": "Modulo Esquinero",
        "EB": "Esquinero Bajo",
        "EA": "Esquinero Alto",
        "ES": "Esquinero Suspendido",
        "EX": "Esquinero Auxiliar",
        "ECL": "Esquinero Closet",
        "MB": "Mueble de Bano",
        "CL": "Closet",
        "CLOSET": "Closet",
    }
    return types.get(tipo, split_clean_description(DB.get(tipo, "")) or f"Modulo {tipo}")


def canonical_module_type(tipo: str) -> str:
    aliases = {
        "SB": "BS",  # SB + numero: suspendido bajo. SB solo sigue siendo acabado semibrillante.
    }
    return aliases.get(normalize_code(tipo), normalize_code(tipo))


def default_height(tipo: str) -> str:
    family = canonical_module_type(tipo)
    if family in {"BS", "MBS", "S", "ES"}:
        return "H3"
    if family in {"B", "MB", "ST", "EB", "E", "A", "EA"}:
        return "H4"
    if family in {"X", "CL", "CLOSET", "CM", "BAR", "ECL"}:
        return "H11"
    if re.match(r"^(LX|LXTR|LX2L|FX|FXTR)", family):
        return "H11"
    if re.match(r"^(LB|LBTR|LVB|FB|FBTR)", family):
        return "H4"
    return ""


def default_depth(tipo: str) -> int:
    family = canonical_module_type(tipo)
    if family in {"A", "EA"}:
        return 320
    if family in {"BS", "MBS", "S", "ES", "MB"}:
        return 530
    if family == "ST":
        return 600
    if family in {"B", "X", "CM", "BAR", "CL", "CLOSET", "ECL", "EB", "EX"}:
        return 580
    if re.match(r"^(LX|LXTR|LX2L|FX|FXTR|LB|LBTR|LVB|FB|FBTR)", family):
        return 580
    return 0


def type_uses_number_as_depth(tipo: str) -> bool:
    return bool(re.match(r"^(LX|LXTR|LX2L|LB|LBTR|LVB|FX|FXTR|FB|FBTR)", canonical_module_type(tipo)))


def extract_height_mm(text: str) -> int:
    clean = normalize_code(text)
    if "HE" in clean:
        return 1360
    match = re.search(r"H(\d+(?:[.,]\d+)?)", clean)
    if not match:
        return 0
    code = f"H{match.group(1).replace(',', '.')}"
    db_match = re.search(r"(\d+(?:\.\d+)?)\s*mm", DB.get(code, ""), re.IGNORECASE)
    if db_match:
        return round(float(db_match.group(1)))
    return convert_code_number_to_mm(match.group(1))


def extract_depth_mm(text: str) -> int:
    match = re.search(r"(?<![A-Z/])P(\d+(?:[.,]\d+)?)", normalize_code(text))
    if not match:
        return 0
    return total_depth_from_p_number(float(match.group(1).replace(",", ".")))


def structural_depth_from_code(text: str, total_depth: int, tipo: str = "") -> int:
    match = re.search(r"(?<![A-Z/])P(\d+(?:[.,]\d+)?)", normalize_code(text))
    number = float(match.group(1).replace(",", ".")) if match else 0
    family = canonical_module_type(tipo)
    if not total_depth:
        return 0
    if "S/P" in normalize_code(text) or family == "ST":
        return total_depth
    if number == 2:
        return total_depth - 20
    if number in {3, 4} or number >= 20:
        return total_depth
    return total_depth - 20 if total_depth > 20 else 0


def interpret_compact_detail(detail: str) -> list[str]:
    rest = normalize_code(detail)
    parts = []
    while rest:
        if rest[0] in "+-":
            rest = rest[1:]
            continue
        height = re.match(r"^(HE|H\d+(?:[.,]\d+)?)", rest)
        if height:
            parts.append(translate_height(height.group(1)))
            rest = rest[len(height.group(1)) :]
            continue
        if rest.startswith("S/P") or rest.startswith("S-P"):
            parts.append(translate_token("S/P"))
            rest = rest[3:]
            continue
        shelf = re.match(r"^(\d+)R(?:P|EP)?", rest)
        if shelf:
            count = int(shelf.group(1))
            parts.append("1 Repisa" if count == 1 else f"{count} Repisas")
            rest = rest[len(shelf.group(0)) :]
            continue
        depth = re.match(r"^P\d+(?:[.,]\d+)?", rest)
        if depth:
            parts.append(translate_depth(depth.group(0)))
            rest = rest[len(depth.group(0)) :]
            continue
        drawers = re.match(r"^G(\d+)", rest)
        if drawers:
            count = int(drawers.group(1))
            parts.append("1 Gaveta" if count == 1 else f"{count} Gavetas")
            rest = rest[len(drawers.group(0)) :]
            continue
        if rest.startswith("IN"):
            parts.append("1 Interna")
            rest = rest[2:]
            continue
        if rest.startswith("I") or rest.startswith("D"):
            parts.append("Apertura Izquierda" if rest[0] == "I" else "Apertura Derecha")
            rest = rest[1:]
            continue
        token = known_token_prefix(rest)
        if token:
            parts.append(translate_token(token))
            rest = rest[len(token) :]
            continue
        parts.append(rest[0])
        rest = rest[1:]
    return parts


def interpret_code(code: str) -> list[str]:
    code = normalize_code(code)
    if not code:
        return ["Codigo no definido"]
    if code in DB:
        return [split_clean_description(DB[code])]

    principal, accessories = split_main_and_accessories(code)
    compact = split_known_token_with_compact_detail(principal)
    if compact:
        token, detail = compact
        description = [translate_token(token), *interpret_compact_detail(detail)]
    else:
        match = re.match(r"^([A-Z]+(?:-[A-Z]+)*)(\d+(?:[.,]\d+)?)(.*)$", principal)
        if not match:
            return [translate_token(part) for part in combine_special_tokens([part for part in re.split(r"[-+]", code) if part])]
        tipo, width, detail = match.groups()
        tipo = canonical_module_type(tipo)
        description = [translate_module_type(tipo), f"Ancho {convert_code_number_to_mm(width)}mm"]
        details = interpret_compact_detail(detail)
        description.extend(details)
        if not any(item.startswith("Altura") for item in details):
            height = default_height(tipo)
            if height:
                description.append(translate_height(height))

    description.extend(translate_token(item) for item in accessories)
    return [item for item in description if item]


def dimensions_from_code(code: str) -> ModuleDimensions:
    code = normalize_code(code)
    principal, _ = split_main_and_accessories(code)
    dims = ModuleDimensions()
    compact = split_known_token_with_compact_detail(principal)
    match = re.match(r"^([A-Z]+(?:-[A-Z]+)*)(\d+(?:[.,]\d+)?)(.*)$", principal)
    if compact:
        token, detail = compact
        dims.tipo = token
        dims.alto = extract_height_mm(code) or extract_height_mm(detail)
        dims.profundidad = extract_depth_mm(code) or extract_depth_mm(detail)
        dims.profundidad_estructura = structural_depth_from_code(code, dims.profundidad, dims.tipo) if dims.profundidad else 0
    elif match:
        tipo, width, detail = match.groups()
        tipo = canonical_module_type(tipo)
        dims.tipo = tipo
        dims.ancho = 0 if type_uses_number_as_depth(tipo) else convert_code_number_to_mm(width)
        dims.alto = extract_height_mm(code) or extract_height_mm(detail) or extract_height_mm(default_height(tipo))
        dims.profundidad = extract_depth_mm(code) or extract_depth_mm(detail)
        if not dims.profundidad:
            number = float(str(width).replace(",", "."))
            dims.profundidad = total_depth_from_p_number(number) if type_uses_number_as_depth(tipo) else default_depth(tipo)
        dims.profundidad_estructura = structural_depth_from_code(code, dims.profundidad, tipo) if extract_depth_mm(code) or extract_depth_mm(detail) else dims.profundidad
    return dims


def has_token(code: str, token: str) -> bool:
    return token in re.split(r"[-+]", normalize_code(code))


def has_code_marker(code: str, marker: str) -> bool:
    return normalize_code(marker) in normalize_code(code)


def extract_shelf_count(code: str) -> int:
    counts = [int(match.group(1)) for match in re.finditer(r"(?<!H)(\d+)R(?:P|EP)?", normalize_code(code))]
    return max(counts) if counts else 0


def module_without_top(code: str) -> bool:
    clean = normalize_code(code)
    compact = clean.replace(" ", "").replace("_", "-")
    no_top_markers = {"S/T", "SINTECHO", "SIN-TECHO", "NO-TECHO", "NOTECHO"}
    return any(marker in compact for marker in no_top_markers)


def posterior_adjustment_count(dims: ModuleDimensions) -> int:
    h5_height = extract_height_mm("H5") or 950
    return rule_int("ajustes", "posterior_desde_h5", 2) if dims.alto >= h5_height else rule_int("ajustes", "posterior_hasta_h4", 1)


def is_high_module(dims: ModuleDimensions) -> bool:
    family = normalize_code(dims.tipo)
    return family in rule_family("altos")


def is_closet_module(dims: ModuleDimensions) -> bool:
    family = normalize_code(dims.tipo)
    return family in rule_family("closets")


def is_base_module(dims: ModuleDimensions) -> bool:
    family = normalize_code(dims.tipo)
    return family in rule_family("bajos")


def has_tpm(code: str) -> bool:
    return "TPM" in normalize_code(code)


def requested_structure_thickness(text: str) -> int:
    clean = normalize_code(text)
    match = re.search(r"(?:ESPESOR|ESP|MATERIAL|CASCO|ESTRUCTURA|DE|EN)?\s*\b(15|18)\b\s*(?:MM?)?", clean)
    return int(match.group(1)) if match else 0


def default_structure_thickness(dims: ModuleDimensions) -> int:
    if is_base_module(dims):
        return rule_int("espesores_default", "bajos", 18)
    if is_high_module(dims) or is_closet_module(dims):
        return rule_int("espesores_default", "altos", 15) if is_high_module(dims) else rule_int("espesores_default", "closets", 15)
    return rule_int("espesores_default", "otros", 18)


def row(piece: str, qty: int, measure: str, rule: str, thickness: int | str) -> dict[str, str | int]:
    value = f"{thickness} mm" if isinstance(thickness, int) else thickness
    return {"pieza": piece, "cantidad": qty, "medida": measure, "grosor": value, "regla": rule}


def build_piece_rows(code: str, request_text: str = "") -> list[dict[str, str | int]]:
    dims = dimensions_from_code(code)
    if not dims.ancho or not dims.alto or not dims.profundidad:
        return []

    structure_thickness = requested_structure_thickness(f"{code} {request_text}") or default_structure_thickness(dims)
    door_thickness = rule_int("espesores_default", "puertas_frentes", 18)
    back_thickness = rule_int("espesores_default", "respaldo", 6)
    internal_width = dims.ancho - (structure_thickness * 2)
    part_width = internal_width - rule_int("descuentos", "ancho_interno_extra", 1)
    depth = dims.profundidad_estructura or dims.profundidad
    adjustment_width = rule_int("ajustes", "ancho_default", 60)
    is_base = is_base_module(dims)
    uses_tpm = is_base and has_tpm(code)
    has_top = not is_base and not module_without_top(code)
    rows: list[dict[str, str | int]] = [
        row("Lateral", 2, f"{dims.alto} x {depth} mm", "alto x profundidad del modulo", structure_thickness),
        row("Base", 1, f"{part_width} x {depth} mm", "ancho interno menos 1mm x profundidad", structure_thickness),
    ]
    if uses_tpm:
        tpm_depth = max(depth - rule_int("descuentos", "tpm_profundidad", 52), 0)
        rows.append(row("TPM", 1, f"{part_width} x {tpm_depth} mm", "ancho interno menos 1mm x profundidad menos 52mm solo en esta pieza", structure_thickness))
    elif has_top:
        rows.append(row("Techo", 1, f"{part_width} x {depth} mm", "ancho interno menos 1mm x profundidad", structure_thickness))
    else:
        rule = "reemplaza el techo por defecto en modulos bajos" if is_base else "reemplaza el techo cuando el modulo va sin techo"
        rows.append(row("Ajuste superior", 2, f"{part_width} x {adjustment_width} mm", f"ancho interno menos 1mm x 60mm; {rule}", structure_thickness))

    rows.extend(
        [
            row(
                "Ajuste posterior",
                posterior_adjustment_count(dims),
                f"{part_width} x {adjustment_width} mm",
                "ancho interno menos 1mm x 60mm; hasta H4 usa 1 ajuste y desde H5 usa 2 ajustes",
                structure_thickness,
            ),
            row(
                "Respaldo",
                1,
                f"{dims.ancho - (structure_thickness * 2) + rule_int('descuentos', 'respaldo_ranura', 10)} x {dims.alto - (structure_thickness * 2) + rule_int('descuentos', 'respaldo_ranura', 10)} mm",
                f"descuenta laterales de {structure_thickness}mm y suma ranura; respaldo base {back_thickness}mm",
                back_thickness,
            ),
        ]
    )

    if is_closet_module(dims):
        rows.append(row("Maletera", 1, f"{part_width} x {depth} mm", "pieza horizontal de closet; usa ancho interno menos 1mm x profundidad", rule_int("espesores_default", "maletera_closet", 18)))

    shelf_count = extract_shelf_count(code)
    if not shelf_count and is_high_module(dims):
        shelf_count = 1
    if shelf_count:
        shelf_discount = rule_int("descuentos", "repisa_profundidad", 110)
        shelf_depth = depth - shelf_discount if depth > shelf_discount else depth
        shelf_thickness = 18 if is_closet_module(dims) else structure_thickness
        rows.append(row("Repisa movil", shelf_count, f"{part_width} x {shelf_depth} mm", "ancho interno menos 1mm y profundidad menos 110mm", shelf_thickness))

    if "S/P" not in normalize_code(code):
        door_count = 2 if dims.ancho >= rule_int("puertas", "dos_puertas_desde_ancho", 620) else 1
        door_width = round(dims.ancho / door_count) - rule_int("descuentos", "puerta_ancho_total", 3)
        extra_novak = rule_int("descuentos", "puerta_novak", 110) if has_code_marker(code, "NK") else 0
        henzo_discount = rule_int("descuentos", "puerta_henzo", 35) if has_code_marker(code, "HZ") else 0
        door_height = dims.alto + extra_novak if extra_novak else dims.alto - henzo_discount - rule_int("descuentos", "puerta_alto", 3)
        rule = "ancho modulo / cantidad puertas menos 3mm; alto modulo menos 3mm"
        if henzo_discount:
            rule += f"; HZ/Henzo detectado, descuenta {henzo_discount}mm adicionales en alto"
        if extra_novak:
            rule += f"; NK/Novak detectado, suma {extra_novak}mm en alto"
        rows.append(row("Puerta", door_count, f"{door_height} x {door_width} mm", rule, door_thickness))
    return rows


def extract_possible_code(question: str) -> str:
    text = normalize_code(question)
    candidates = re.findall(r"\b[A-Z][A-Z0-9/+=.,-]{1,40}\b", text)
    stopwords = {
        "COD",
        "CODIGO",
        "COMO",
        "CONSULTAR",
        "DAME",
        "DE",
        "DEL",
        "DESPIECE",
        "EL",
        "ES",
        "LA",
        "LAS",
        "LO",
        "LOS",
        "MODULO",
        "MUEBLE",
        "QUE",
        "QUIERO",
        "VALIDAR",
    }
    clean_candidates = [candidate.strip(".,;:") for candidate in candidates if candidate.strip(".,;:") not in stopwords]
    digit_candidates = [candidate for candidate in clean_candidates if re.search(r"\d", candidate)]
    db_candidates = [candidate for candidate in clean_candidates if candidate in DB]
    for candidate in sorted(digit_candidates, key=len, reverse=True):
        return candidate
    for candidate in sorted(db_candidates, key=len, reverse=True):
        if candidate in stopwords:
            continue
        return candidate
    return ""


def looks_like_verificar_question(question: str) -> bool:
    lowered = str(question or "").lower()
    code = extract_possible_code(question)
    if not code:
        return False
    if code in DB or re.search(r"\d", code):
        return True
    keywords = ("despiez", "codigo", "código", "modulo", "módulo", "medida", "puerta", "lateral", "repis", "significa", "que es", "qué es")
    return any(keyword in lowered for keyword in keywords)


def wants_piece_breakdown(question: str) -> bool:
    lowered = str(question or "").lower()
    keywords = (
        "despiece",
        "despiez",
        "despiec",
        "despic",
        "despis",
        "despies",
        "despise",
        "desglos",
        "pieza",
        "piezas",
        "mueble",
        "modulo",
        "módulo",
        "grosor",
        "espesor",
        "material",
        "15",
        "18",
    )
    return any(keyword in lowered for keyword in keywords)


def answer_verificar_question(question: str) -> dict | None:
    if not looks_like_verificar_question(question):
        return None

    code = extract_possible_code(question)
    if not code:
        return None

    description = interpret_code(code)
    dims = dimensions_from_code(code)
    rows = build_piece_rows(code, question)
    include_piece_rows = bool(rows and wants_piece_breakdown(question))
    source = next((str(path) for path in verificar_candidate_paths() if path.exists()), "VERIFICAR/db_codigos.js")

    title = f"Despiece interpretado para `{code}`." if include_piece_rows else f"Entiendo que te refieres a `{code}`."
    lines = [title, ""]
    lines.append("| Campo | Valor |")
    lines.append("|---|---|")
    lines.append(f"| Descripcion | {' + '.join(description)} |")
    lines.append(f"| Tipo | {dims.tipo or 'No detectado'} |")
    lines.append(f"| Ancho | {dims.ancho or 'No detectado'} mm |")
    lines.append(f"| Alto | {dims.alto or 'No detectado'} mm |")
    lines.append(f"| Profundidad | {dims.profundidad or 'No detectada'} mm |")
    lines.append("")

    if include_piece_rows:
        lines.append("| Pieza sugerida | Cantidad | Medida esperada | Grosor | Regla aplicada |")
        lines.append("|---|---:|---|---|---|")
        for row in rows:
            lines.append(f"| {row['pieza']} | {row['cantidad']} | {row['medida']} | {row.get('grosor', '-')} | {row['regla']} |")
        lines.append("")
        lines.append("Este despiece es una propuesta tecnica calculada con las reglas cargadas; si subes filas reales de piezas, se pueden validar contra estas medidas.")
    elif rows:
        lines.append("Si quieres, tambien puedo darte el despiece calculado de este modulo en 15 mm o 18 mm.")
    else:
        lines.append("Pude traducir el codigo, pero no detecte dimensiones suficientes para calcular piezas.")

    return {
        "answer": "\n".join(lines),
        "sources": [{"source": source, "chunk": 1, "text": json.dumps({"code": code, "description": description}, ensure_ascii=False), "score": 1.0, "kind": "verificar"}],
        "is_piece_breakdown": include_piece_rows,
    }
