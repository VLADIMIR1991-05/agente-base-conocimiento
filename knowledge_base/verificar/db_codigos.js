// Base de datos de nomenclaturas del validador.
// Para actualizar codigos, reemplaza solo este archivo y no toques el HTML.
const DB = {

    [
    {
      id: 1,
      nombre: "Melamínico",
      composicion: "El tablero base está fabricado en aglomerado termofundido. Está recubierto con una lámina decorativa impregnada con resina melamínica, lo que garantiza que no se desprenda y sea resistente.",
      caracteristicasTecnicas: {
        formato: "color/color",
        espesor: "18 mm",
        canto: "Canto duro de 22x1 mm para estructuras y frentes"
      },
      ventajas: [
        "Brinda cortes limpios y una menor absorción de humedad al estar libre de impurezas.",
        "Alta resistencia al rayado, a la abrasión, a las manchas, a la humedad, al calor y a disolventes.",
        "Propiedades antibacteriales al 99% en texturas mate y fantasía."
      ],
      nomenclatura: {
        CO: "Corrugado",
        MT: "Mate",
        PO: "Poro",
        TE: "Textil",
        WO: "Wood",
        NV: "Nativo",
        SY: "Synchro",
        CU: "Cuero",
        ME: "Metal",
        PI: "Piedra"
      },
      listadoColores: {
        cocinasYCatatogoGeneral: {
          categoria1: ["Blanco CO", "Blanco Roble", "Capri CO", "Taupe CO", "Plomo CO", "Gris CO", "Capri Cuero", "Panela SY", "Cartagena SY", "Positano SY", "Avellana PO", "Burdeos CO", "Galápagos CU", "Inox ME", "Ambar ME", "Mamba CU"],
          categoria2: ["Lino CO", "Toquilla CU", "Niebla PO", "Ceniza MT", "Tivoli CU", "Negro Roble", "Nacar SY", "Bellota SY", "Bardolino SY", "Milán SY", "Fume SY"],
          categoria3: ["Seike NV", "Cuarzo PI", "Trama TX", "Verde Silvestre CO", "Petra PI", "Gris Industrial PI", "Roble Natural NV", "Roble Chic NV", "Catania NV"]
        },
        vestidoresConfortYClosets: {
          categoriaMinus1: ["Blanco CO"],
          categoria0: ["Blanco Roble"],
          categoria1: ["Capri CO", "Capri CU", "Gris CO", "Plomo CO", "Taupe CO", "Ambar ME", "Avellana PO", "Burdeos CO", "Cartagena SY", "Galápagos CU", "Inox ME", "Mamba CU", "Positano SY", "Panela SY"],
          categoria2: ["Bardolino SY", "Ballota SY", "Ceniza MT", "Fume SY", "Lino CO", "Milán SY", "Nacar SY", "Negro Roble", "Tivoli CU", "Toquilla CU", "Niebla PO", "Verde Silvestre CO"],
          categoria3: ["Catania NV", "Cuarzo PI", "Gris Industrial PI", "Petra PI", "Roble Chic NV", "Roble Natural NV", "Seike NV", "Trama TX"],
          notaPremium: "Para la línea de Clósets Premium (solo estructuras), el Blanco CO, Blanco Roble, Capri CO, Capri CU, Plomo CO y Gris CO entran en Categoría 0."
        }
      }
    },
    {
      id: 2,
      nombre: "Laca (sobre MDF)",
      composicion: "Utiliza como núcleo un tablero de MDF obtenido de troncos de pino radiata. A este tablero se le aplica una laca poliuretana de dos componentes de alta resistencia.",
      caracteristicasTecnicas: {
        espesor: "18 mm",
        caras: "Primera cara lacada y la posterior en color de melamina"
      },
      consideracionesUso: [
        "Material exclusivo para uso en interiores.",
        "No debe exponerse al contacto directo con el agua ni a una humedad excesiva.",
        "No debe exponerse a fuentes de calor que excedan los 50°C."
      ],
      ventajas: [
        "Superficie sin imperfecciones, ideal para hacer molduras y lograr excelentes acabados."
      ],
      listadoColores porAcabado: {
        mate: ["Blanco", "Sabbia", "Arena", "Bruma", "Fume", "Pino", "Verde Selva", "Grafito", "Boreal", "Azul Azabache", "Ocaso", "Terra", "Andesita", "Nube", "Otoño", "Urban", "Cacao Gold"],
        semibrillante: ["Habano", "Marrón", "Luna"],
        brillante: ["Blanco", "Chimborazo", "Alba", "Marrón", "Sabbia", "Ocaso", "Cacao Gold", "Luna"],
        metalizadoMate: ["Cacao White", "Palo de Rosa", "Galápagos", "Fog", "Noche"],
        metalizadoBrillante: ["Gris"]
      }
    },
    {
      id: 3,
      nombre: "Enchape (sobre MDF o Aglomerado)",
      composicion: "El tablero base es MDF crudo recubierto con chapa de madera natural o reconstituida.",
      caracteristicasTecnicas: {
        espesor: "19 mm",
        formato: "color/color",
        cantos: "Recubiertos con la misma chapa y acabado final en laca de poliuretano acrílico"
      },
      listadoColores: {
        naturales: ["Roble Americano Canela", "Seike Caramelo", "Roble Americano Miel", "Roble Obsidiana", "Roble Humo"],
        reconstituidos: ["Roble Claro Natural", "Nogal Mallado Natural", "Roble Rústico", "Roble Rameado Rústico"]
      }
    },
    {
      id: 4,
      nombre: "Altobrillo 1C",
      composicion: "Tablero de MDF revestido con un laminado acrílico brillante en el frente y melamina soft en la contracara.",
      caracteristicasTecnicas: {
        espesor: "18 mm",
        acabadoSuperficie: "Brillante de 100 Gloss",
        restricciones: "No es posible hacer repisas engrosadas"
      },
      ventajas: [
        "Resistente a los rayos ultravioletas, conserva inalterado su color.",
        "Excelente resistencia al calor, al agua y a las manchas.",
        "Resistencia al impacto de diez a veinte veces más que la del vidrio."
      ],
      listadoColores: ["Blanco 1C", "Beige 1C", "Negro 1C"]
    },
    {
      id: 5,
      nombre: "Soft Touch",
      composicion: "Tablero de MDF recubierto con una lámina de poliéster (PET) con acabado especial usando un pegamento de poliuretano.",
      caracteristicasTecnicas: {
        espesor: "18 mm",
        disponibilidad: "1 o 2 caras decorativas",
        restricciones: "No admite repisas engrosadas"
      },
      ventajas: [
        "Suave al tacto, da la sensación de ser una superficie lacada.",
        "Propiedades anti-huella.",
        "Resistente al rayado."
      ],
      listadoColores: ["SFT Blanco 1C", "SFT Gris 1C", "SFT Verde 1C"]
    },
    {
      id: 6,
      nombre: "Tmatt",
      composicion: "Tablero de MDF con 1 cara lacada supermate.",
      caracteristicasTecnicas: {
        espesor: "18 mm",
        caraPosterior: "Melamina del mismo color que el frente",
        restricciones: "No se pueden realizar repisas engrosadas debido al ancho del canto"
      },
      ventajas: [
        "Superficie suave al tacto.",
        "Resistente al rayado y a la abrasión.",
        "Propiedades anti-huella y auto-regenerativas."
      ],
      listadoColores: ["Tmatt Negro"]
    },
    {
      id: 7,
      nombre: "Materiales Especiales",
      subtipos: [
        {
          nombre: "Syros",
          composicion: "Tablero de MDF con una lámina coextruida sobre un poliéster base, formulada para reproducir el efecto de metales cepillados.",
          caracteristicasTecnicas: {
            espesor: "18 mm",
            restricciones: "No permite repisas engrosadas"
          },
          ventajas: ["Suave al tacto", "Resistente a rayos UV", "Resistente a la luz", "Resistente a rayones", "Resistente a cambios de temperatura"],
          colores: ["Syros Gold", "Syros Rose"]
        },
        {
          nombre: "Mirror Bronzo",
          caracteristicasTecnicas: {
            detalles: "Tablero de 1 cara que utiliza canto negro"
          },
          colores: ["Mirror Bronzo"]
        },
        {
          nombre: "Ranurados",
          caracteristicasTecnicas: {
            detalles: "Tableros con una cara ranurada y otra plana, manteniendo el mismo color tanto en sus caras como en el canto"
          },
          colores: ["Blanco Oro Ranurado", "Negro Ranurado"]
        },
        {
          nombre: "Formex Metal Líquido",
          caracteristicasTecnicas: {
            detalles: "Tableros que mantienen las dos caras y el canto del mismo color"
          },
          colores: ["Ottone", "Grigo Minerale", "Grigo Alfa"]
        }
      ]
    },
    {
      id: 8,
      nombre: "Puertas (Aluminio y Madera con Vidrio)",
      tipos: [
        {
          nombre: "Marcos de Aluminio",
          estructura: "Puertas estructuradas con perfiles de aluminio y vidrios de 4 mm de espesor.",
          coloresPerfil: ["Aluminio", "Negro", "Grafito", "Cacao Gold", "Luna"],
          coloresVidrios: ["Arenado", "Transparente", "Bronce", "Bronce Reflectivo", "Ónix", "Acanalado"],
          vidriosPintados: ["Negro", "Marrón", "Humo", "Carbón"]
        },
        {
          nombre: "Marcos de Madera con Vidrio",
          estructura: "Puertas de melamínico o MDF (laca, termolaminado o enchape) con vidrio embutido.",
          coloresVidrios: ["Arenado", "Transparente", "Bronce", "Bronce Reflectivo", "Plata Reflectivo", "Ónix"]
        }
      ]
    }
  ]
    
    "A": "Modulo Alto",
    "B": "Modulo Bajo",
    "C": "CUBERTERO",
    "D": "Apertura Derecha / Doble / DESPENSA",
    "E": "Modulo Esquinero / Escobero / ESPECIERO",
    "F": "Fregadero / Escobero Fraccionado",
    "H": "Altura",
    "I": "Apertura Izquierda / Tipo \"I\"",
    "O": "OLLERO",
    "P": "Profundidad",
    "R": "Repisero / ROLLOS",
    "S": "Modulo Suspendido / Simple / SUBDIVISION",
    "T": "BOTELLERO",
    "U": "Gaveta vacÃ­a en U / Lateral Tipo U",
    "X": "Modulo Auxiliar",
    "3R": "3 Repisas",
    "AI": "Asiento Iluminado (Base Vidrio + LED) / Asiento Iluminado (Base de vidrio + luz led)",
    "AU": "Detalle Decorativo Estilo Aurora",
    "BF": "Bisagra Frenada / BISAGRA FRENO",
    "BP": "Bandeja Libell",
    "BS": "Modulo Bajo Suspendido",
    "C1": "MÃ³dulo con 1 tubo colgador",
    "C2": "MÃ³dulo con 2 tubos colgadores",
    "CF": "Freno Cajon FGV",
    "CG": "Cacao Gold Mate / Acabado Laca Cacao Gold MT",
    "CL": "Closet",
    "CM": "Comodin",
    "CO": "Condimentero",
    "CP": "Complementario / Calentador de Platos / Calentador de Platos / Complementario",
    "CR": "Cornisa",
    "CT": "Detalle Decorativo Estilo Shaker 2.0",
    "CU": "Cobre Texturizado / Acabado Laca Cobre Texturizada / Lateral Curcu",
    "DE": "Despensa",
    "DM": "Despensa Multiple / Despensa MÃºltible",
    "DO": "Dorado Texturizado / Acabado Laca Dorado Texturizada",
    "E1": "1 Compartimento",
    "E3": "Engrosado 3cm / Engrosado",
    "E6": "Engrosado 6cm",
    "E8": "Lateral Engrosado de 8cm",
    "EA": "Esquinero Alto",
    "EB": "Esquinero Bajo",
    "EE": "Extractor Embutido",
    "ES": "Esquinero Suspendido",
    "EX": "Extractor Visto / Esquinero Auxiliar",
    "FB": "Forro Bajo",
    "FH": "FRENTE HORNO",
    "G2": "2 Gavetas",
    "G3": "3 Gavetas",
    "G4": "4 gavetas",
    "GF": "Grafito Texturizado / Acabado Laca Grafito Texturizada",
    "H1": "Altura H1 (190mm) / 190",
    "H2": "Altura H2 (380mm) / 380",
    "H3": "Altura H3 (570mm) / 570",
    "H4": "Altura Estandar H4 (760mm) / Altura H4 (760mm) / 760",
    "H5": "Altura H5 (950mm) / 950",
    "H6": "Altura H6 (1140mm) / 1140",
    "H7": "Altura H7 (1330mm) / 1330",
    "H8": "Altura Auxiliar H8 (1550mm) / Altura H8 (1550mm) / 1550",
    "H9": "Altura Auxiliar H9 (1740mm) / Altura H9 (1740mm) / 1740",
    "HC": "Horno Combinado (Microondas + Horno) / Horno combinado: mircoondas + horno",
    "HE": "Altura Auxiliar HE (1360mm) / Altura HE (1360mm) / 1360",
    "HS": "Horno Simple",
    "HT": "Horno Triple (Espacio Calienta Platos) / Horno Triple. (Espacio adicional para calienta platos)",
    "HZ": "Henzo",
    "L2": "Doble Frente",
    "LA": "Lateral Alto",
    "LB": "Lateral Bajo",
    "LF": "Luz LED Full",
    "LU": "Luna Semi Brillante / Acabado Laca Luna SB",
    "LX": "Lateral Auxiliar / Lateral de auxiliar",
    "MH": "Microondas",
    "ML": "Maletera",
    "MQ": "Maquila (Proveedor, no mencionarlo en la descripciÃ³n)",
    "NE": "Negro Texturizado / Acabado Laca Negro Texturizada",
    "NK": "Novak",
    "OL": "Organizador de Limpieza",
    "ON": "Tip-On Gavetas",
    "PG": "Puerta Giratoria / Sistema Pocket EXL / Puerta Giratoria: Puertas pocket herraje EXL / Puerta Giratoria Sistema EXL",
    "PM": "Premeson Tablero Crudo / PremesÃ³n tablero crudo",
    "QU": "Cuatro",
    "R1": "REPISA METALICA LATITUD CERO",
    "R2": "REPISA METALICA LATITUD CERO",
    "R3": "REPISA METALICA LATITUD CERO",
    "R4": "REPISA METALICA LATITUD CERO",
    "R5": "REPISA METALICA LATITUD CERO",
    "R6": "REPISA METALICA LATITUD CERO",
    "R7": "REPISA METALICA LATITUD CERO",
    "RF": "Alto sobre Refrigerador / Complemento Refrigerador / Alto sobre Refrigerador / Repisero Fraccionado / Refrigerador",
    "RM": "Respaldo Removible / REPISAS DE MADERA",
    "SD": "SERVO DRIVE",
    "SI": "Sistema Invisible",
    "SR": "Sin Respaldo",
    "ST": "Estructura de Isla",
    "T1": "Tipo 1",
    "TA": "REPISA TAPA (DINAMIK)",
    "TI": "Tiradera Interna",
    "TR": "Tipo Recto",
    "VI": "Gaveta con costado vidrio MRV",
    "1PA": "1 Pata Engrosada a 6cm",
    "2PA": "2 Patas Engrosadas a 6cm",
    "3RV": "3 Repisas de vidrio",
    "8RV": "8 Repisas de vidrio",
    "ACJ": "Accesorio Jennair Incluido / Accesorio Jenair Incluido",
    "ACK": "Accesorio Kessebohmer",
    "ACP": "Accesorio Peka",
    "ACS": "Accesorio Sirius Incluido",
    "AHG": "ALZAS 1,8CM HORNO A GAS",
    "ANT": "Bandeja Lemans Antracita",
    "ASM": "Alto Sobre Meson / Alto Sobre MesÃ³n",
    "B4C": "4 CUBOS DE BASURA 2 DE 8 LITROS Y 2 DE 17 LITROS",
    "BLA": "Bandeja Lemans Color Blanco",
    "BOT": "Botellas / Botellero",
    "DEC": "Acabado Interno Decorativo",
    "DEF": "Despensa Fraccionada",
    "E2S": "2 Compartimentos",
    "E3S": "3 Compartimentos",
    "E4S": "4 Compartimentos",
    "E6S": "6 Compartimentos",
    "END": "Enderezador",
    "ESC": "ESCALERA STEP POLO PEKA",
    "G2I": "2 Gavetas Internas",
    "H11": "Altura Estandar Auxiliar H11 (2120mm) / Altura H11 (2120mm) / 2120",
    "H12": "Altura Auxiliar H12 (2310mm) / Altura H12 (2310mm) / 2310",
    "INF": "Envolvente Inferior de Mueble Alto",
    "LAD": "Lateral Alto Derecho",
    "LAI": "Lateral Alto Izquierdo",
    "LBA": "Luz LED Base",
    "LBD": "Lateral Bajo Derecho",
    "LBI": "Lateral Bajo Izquierdo",
    "LDD": "Lateral Derecho Decorativo",
    "LEX": "LUZ LEX EXTERIOR",
    "LGA": "LUZ LED GAVETAS",
    "LID": "Lateral Izquierdo Decorativo",
    "LIM": "LIMITADOR APERTURA HF",
    "LIN": "Line",
    "LLT": "Luz LED Lateral Doble",
    "LRC": "LUZ LED CONTINUA",
    "LRE": "Luz LED Repisa / LUZ LED REPISAS",
    "LSP": "Luz LED Spot",
    "LSU": "Luz LED Superior",
    "LTC": "Luz LED Tubo",
    "LTD": "Luz LED Lateral Derecha",
    "LTI": "Luz LED Lateral Izquierda",
    "LXD": "Lateral Auxiliar Derecho",
    "LXI": "Lateral Auxiliar Izquierdo",
    "MES": "Meson",
    "MET": "Estructura Metalica / Estructura MetÃ¡lica",
    "MRV": "Merivobox",
    "NIV": "Nivelador",
    "ONI": "TIP-ON EN GAVETA INFERIOR",
    "OTP": "Oreta Tipo Recto",
    "PCD": "PORTA CINTURONES INF DER",
    "PCI": "PORTA CINTURONES INF IZQ",
    "PEL": "Perfil para Tablero Iluminacion Aurora / Perfil para tablero iluminaciÃ³n Aurora",
    "PFC": "Perforacion Central / PerforaciÃ³n Central para Estructura / PERFORACION CENTRAL PARA EST",
    "PFD": "Perforacion Derecha / PerforaciÃ³n Derecha para Estructura / PERFORACION DERECHA PARA EST",
    "PFI": "Perforacion Izquierda / PerforaciÃ³n Izquierda para Estructura / PERFORACION IZQUIERDA PARA EST",
    "RDE": "Repisero Despensa",
    "REP": "Repisa",
    "REX": "Repisa Extraible",
    "RFH": "REPISA HORNO",
    "RMV": "Repisa de Madera con Vidrio e Iluminacion LED / REPISA DE MADERA CON VIDRIO INCLUYE LUZ LED",
    "SFR": "Soporte Fregadero",
    "STC": "Estructura Corta",
    "SUP": "Envolvente Superior de Mueble Alto",
    "TAP": "Repisa Interior",
    "TBZ": "Tapa Base incluye patas plÃ¡sticas",
    "TEK": "Modulo Adaptado a Electrodomestico Teka / MÃ³dulo adaptado a electrodomÃ©stico Teka",
    "TPL": "Tapa losa incluye perfiles de fijaciÃ³n",
    "TPM": "Tapa Premeson",
    "TRI": "TRAVESAÃ‘O COUNTRY INFERIOR",
    "TRS": "TRAVESAÃ‘O COUNTRY SUPERIOR",
    "VOL": "Volado",
    "10RV": "10 Repisas de vidrio",
    "1RVG": "1 Repisa de vidrio grande",
    "5BAN": "LATERALES BANDEJA",
    "AQUA": "Protector Aquanon",
    "BAXD": "Base Decorativo/Crudo / BASE DEC/CRUDO",
    "DESY": "Desayunador",
    "DIAM": "Desayunador Diamante",
    "E8AS": "8 Compartimentos",
    "FATA": "Forramiento Alto Tipo Armazon",
    "FBAD": "Fregadero con Basurero Izquierda y Puerta Apertura Derecha",
    "FBAI": "Fregadero con Basurero Derecha y Puerta Apertura Izquierda",
    "FBTA": "Forramiento Bajo Tipo Armazon",
    "FBTR": "Forramiento Bajo Tipo Recto",
    "FXTA": "Forramiento Auxiliar Tipo Armazon",
    "FXTR": "Forramiento Auxiliar Tipo Recto",
    "G3IN": "2 gavetas externas + 1 gaveta interna",
    "H886": "Altura Especial H886 (886mm) / Altura H886 (886mm) / 886",
    "ILUM": "Iluminada",
    "INPR": "INTERRUPTOR DE PRESION",
    "LATR": "Lateral Alto Tipo Recto",
    "LB2L": "Lateral Bajo 2 Lados Decorativos",
    "LBTR": "Lateral Bajo Tipo Recto / Lateral bajo, tipo recto",
    "LX2L": "Lateral Auxiliar Tipo Recto",
    "LXTR": "Lateral Auxiliar Tipo Recto",
    "PCOD": "PORTA CORBATAS SUP DER",
    "PCOI": "PORTA CORBATAS SUP IZQ",
    "PGVD": "Perfil Gola Vertical Doble / DESTAJE PARA PERFIL GOLA VERTICA DERECHO",
    "PGVI": "DESTAJE PARA PERFIL GOLA VERTICA IZQUIERDO",
    "PUSH": "Puerta Push",
    "TEXD": "Techo Decorativo/Crudo / TECHO DEC/CRUDO",
    "TXC6": "TEXTIL CLARO",
    "TXO6": "TEXTIL OSUCURO",
    "1GOCU": "GAVETA OCULTA",
    "2PULS": "2 Pulsadores Luz LED",
    "CAJA1": "1ra Caja MetÃ¡lica",
    "CAJA2": "2da Caja MetÃ¡lica",
    "CAJA3": "3ra Caja MetÃ¡lica",
    "CANTO": "Oreja de Canto Aurora",
    "DEX55": "DISTANCIADOR 55",
    "G1H16": "Gaveta inferior de horno altura 16 cm",
    "G1H26": "Gaveta inferior de horno altura 26cm",
    "G1H28": "Gaveta inferior de horno altura 28cm",
    "G1H38": "Gaveta inferior de horno altura 38cm",
    "H2246": "Altura H2246 (2246mm) / 2246",
    "H2436": "Altura H2436 (2436mm) / 2436",
    "MALLA": "Puerta de Malla",
    "PTD60": "Puerta Combinada Derecha 60cm / Puerta Combinada. Puerta derecha de 60cm",
    "PTI60": "Puerta Combinada Izquierda 60cm / Puerta Combinada. Puerta izquierda de 60cm",
    "SE=84": "SOPORTE ENTRE MESON-ESTR H=84",
    "SE=94": "SOPORTE ENTRE MESON-ESTR H=94",
    "SOP80": "Soporte sobre Meson para Estructura Desayunador / Soporte sobre mesÃ³n para estructura desayunador",
    "DEX110": "DISTANCIADOR 110",
    "DU=100": "Ducto sobre Campana = 100 mm / DUCTO SOBRE CAMPANA H=100",
    "DU=200": "Ducto sobre Campana = 200 mm / DUCTO SOBRE CAMPANA H=200",
    "DU=300": "Ducto sobre Campana = 300 mm / DUCTO SOBRE CAMPANA H=300",
    "DU=400": "Ducto sobre Campana = 400 mm / DUCTO SOBRE CAMPANA H=400",
    "DU=500": "Ducto sobre Campana = 500 mm / DUCTO SOBRE CAMPANA H=500",
    "DU=600": "Ducto sobre Campana = 600 mm / DUCTO SOBRE CAMPANA H=600",
    "DU=700": "Ducto sobre Campana = 700 mm / DUCTO SOBRE CAMPANA H=700",
    "G3H1IN": "3 gavetas: 2 gavetas externas (1 gaveta h1) y 1 gaveta interna",
    "LVAENV": "Lateral Visto Alto Envolvente",
    "PCOPX3": "PORTACOPAS X3",
    "REFRIG": "Modulo para Embutir Refrigerador / MÃ³dulo para embutir refrigerador",
    "SE=104": "SOPORTE ENTRE MESON-ESTR H=104",
    "SE=112": "SOPORTE ENTRE MESON-ESTR H=112",
    "TOMCOR": "Tomacorriente de Cajon",
    "REJILLA": "Rejilla de Ventilacion / Rejilla de ventilaciÃ³n",
    "TAPADEC": "Tapa Decorativa",
    "BANDEJAS": "Divisiones Verticales",
    "CRAUH8.6": "Cornisa con Detalle Aurora",
    "GANCHOX3": "3 ganchos metÃ¡licos",
    "ZAPPL(10)": "10 ZAPATERAS COLOR NEGRO",
    "ZAPPL(20)": "20 ZAPATERAS COLOR NEGRO",
    "ZAPPL(30)": "30 ZAPATERAS COLOR NEGRO",
    "ALTURA(MM)": "AplicaciÃ³n principal",
    "TAPADECESP": "Tapa Decorativa especial",
    "DU=ESPECIAL": "DUCTO SOBRE CAMPANA H=ESP",
    "PROFUNDIDAD": "P3, P4, P6, P67, P(medida fuera de lo estandar)",
    "SE=ESPECIAL": "SOPORTE ENTRE MESON-ESTR H=ESP",
    "TIPODEMÃ“DULO": "B: Bajo, A: Alto, S: Suspendido, X: Auxiliar, E: Esquinero",
    "FUNCIÃ“NESPECIAL": "F: Fregadero, G1: 1 gaveta, G2: 2 gavetas, Abatible + tipo de abatible, etc",
    "SISTEMADEGAVETAS": "SM: Metabox, SLIM: Matrix Slim, MRV: Merivobox, SL: Legrabox",
    "MÃ“DULOSAUXILIARES": "(11x190)+30, estÃ¡ndar en auxiliares / (12x190)+30, mÃ¡xima altura modular",
    "SENTIDODEAPERTURA": "I: Izquierda, D: Derecha, (vacÃ­o: doble puerta)",
    "ALTURA(SINOESESTÃNDAR)": "H1, H2, H3, H4, etc. (H4 es estÃ¡ndar y se omite)",
    "MEDIDAENCM(SINDECIMALES)": "60, 90, 120",
    "LATERALALTODERECHOP34H2.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP34H3.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP34H4.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP34H5.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP34H6.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP34H7.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP44H2.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP44H3.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP44H4.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP44H5.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP44H6.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP44H7.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP60H2.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP60H3.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP60H4.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP60H5.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP60H6.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP60H7.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP67H2.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP67H3.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP67H4.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP67H5.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP67H6.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTODERECHOP67H7.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP34H2.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP34H3.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP34H4.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP34H5.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP34H6.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP34H7.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP44H2.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP44H3.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP44H4.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP44H5.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP44H6.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP44H7.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP60H2.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP60H3.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP60H4.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP60H5.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP60H6.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP60H7.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP67H2.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP67H3.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP67H4.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP67H5.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP67H6.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LATERALALTOIZQUIERDOP67H7.TIPOESTRUCTURACORTA": "Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "ESTRUCTURADECAMPANALOFT.2COMPARTIMENTOS.SINRESPALDO.LUZSPOT.DUCTOSOBRECAMPANA=500MM.ACABADOLACACACAOGOLDMT": "El codigo CG se repite 2 veces. No es necesarion ser redundante, se puede mencionarlo una sola vez en la descripciÃ³n",
    "C/R": "Con Respaldo",
    "S/B": "GAVETA SIN BOX SIDE",
    "S/P": "Sin Puerta / Sin Puertas",
    "S/R": "Sin Respaldo",
    "CP/J": "Accesorio Jennair No Incluido / Accesorio Jenair No incluido",
    "CP/S": "Accesorio Sirius No Incluido",
    "S/SL": "Subdivision 45 SL",
    "1/2PGVD": "Perfil Gola Vertical Derecho / PERFIL GOLA VERTICA DERECHO",
    "1/2PGVI": "Perfil Gola Vertical Izquierdo / PERFIL GOLA VERTICA IZQUIERDO",
    "COMPONENTES/ACCESORIOS": "PUSH, ON, SD, BF, etc. (separados por guiones)",
    "C-H": "CUBERTERO Y CUCHILLERO SL 45CM / CUBERTERO Y CUCHILLERO SL 60CM / CUBERTERO Y CUCHILLERO SL 90CM",
    "C-R": "CUBERTERO Y ROLLOS SL 45CM / CUBERTERO Y ROLLOS SL 60CM / CUBERTERO Y ROLLOS SL 90CM",
    "C-S": "CUBERTERO Y SUBDIVISIO SL 45CM / CUBERTERO Y SUBDIVISIO SL 60CM / CUBERTERO Y SUBDIVISIO SL 90CM",
    "D-D": "2 Despensas",
    "H-R": "CUCHILLERO Y ROLLOS SL 45CM / CUCHILLERO Y ROLLOS SL 60CM / CUCHILLERO Y ROLLOS SL 90CM",
    "H-S": "CUCHILLERO Y SUBDIVISI SL 45CM / CUCHILLERO Y SUBDIVISI SL 60CM / CUCHILLERO Y SUBDIVISI SL 90CM",
    "L-S": "Lateral Tipo L Simple / Lateral tipo \"L\" Simple",
    "S-R": "SUBDIVISION Y ROLLOS SL 45CM / SUBDIVISION Y ROLLOS SL 60CM / SUBDIVISION Y ROLLOS SL 90CM",
    "U-S": "Lateral Tipo U Simple / Lateral tipo \"U\" Simple",
    "C-AM": "CUBERTERO AMBIALINE",
    "C-OR": "CUBERTERO ORGANILE",
    "CU-U": "Lateral curcu tipo \"U\"",
    "E-AM": "ESPECIERO AMBIALINE",
    "E-OR": "ESPECIERO ORGALINE",
    "H-AM": "CUCHILLERO AMBIALINE",
    "H-OR": "CUCHILLERO ORGANILE",
    "LD-I": "Lado Derecho I / LATERAL DERECHO \"I\"",
    "LD-J": "Lado Derecho Jota / LATERAL DERECHO \"J\"",
    "LI-I": "Lado Izquierdo I / LATERAL IZQUIERDO \"I\"",
    "LI-J": "Lado Izquierdo Jota / LATERAL IZQUIERDO \"J\"",
    "R-AM": "ROLLOS AMBIALINE",
    "R-OR": "ROLLOS ORGANILE",
    "S-AM": "SUBDIVISION AMBIALINE",
    "S-OR": "SUBDIVISION ORGANILE",
    "ACF-B": "Accesorio FGV Fregadero Basurero Redondo 10L / Accesorio FGV Fregadero Basurero Redondo 10 litros",
    "ACF-U": "Accesorio FGV Fregadero U / Accesorio FGV Fregadero \"U\"",
    "CU-LD": "Lateral curcu tipo \"L\" Derecho",
    "CU-LI": "Lateral curcu tipo \"L\" Izquierdo",
    "CU-SD": "Lateral Curcu tipo \"S\" Derecho",
    "CU-SI": "Lateral Curcu tipo \"S\" Izquierdo",
    "LD-E3": "LATERAL DERECHO \"E3\"",
    "LI-E3": "LATERAL IZQUIERDO \"E3\"",
    "MET-A": "MÃ³dulos altos MetÃ¡licos",
    "MET-I": "Estructura metÃ¡lica sobre mesÃ³n",
    "RV-BN": "Repisa Vidrio Bronce Natural",
    "RV-EC": "Repisa Vidrio Extra Claro",
    "TA-LS": "REPISA TAPA CON LUZ (DINAMIK)",
    "AB-COM": "Abatible Compas",
    "AB-GIR": "Abatible Giratorio / Abatible Simple",
    "AB-PLE": "Abatible Plegable / Abatible Plegable.",
    "AB-SIM": "Abatible Simple",
    "ACF-BL": "Accesorio Bandeja Lemans",
    "ACF-CO": "Condimentero FGV",
    "ACF-DD": "Accesorio FGV Despensa Doble",
    "ACF-DX": "Accesorio FGV Despensa Extraible",
    "ACF-EP": "Accesorio FGV Escurre Platos",
    "ACF-MC": "Accesorio Moving Corner",
    "ACF-PP": "Accesorio Planchador Retractil Plegable FGV",
    "ACH-CO": "Condimentero Hengel",
    "ACH-DD": "Accesorio Hengel Despensa Doble",
    "ACH-DS": "Accesorio Hengel Despensa Simple",
    "ACK-BL": "Accesorio Kessebohmer Bandeja Lemans",
    "ACK-CO": "Condimentero Kessebohmer",
    "ACL-TV": "Accesorio Hafele Elevador TV / Acesorio Hafele elevador TV",
    "ACV-BA": "Accesorio Vibo Basurero",
    "ACV-CO": "Condimentero Vibo",
    "ACV-DS": "Accesorio Vibo Despensa Simple",
    "CE-GSU": "GAVETA SUP CERRADURA HUELLA",
    "CIL-CT": "Cenefa de Iluminacion / Cenefa de iluminaciÃ³n",
    "CU-TPD": "Tapa Curcu Lado Derecho",
    "CU-TPI": "Tapa Curcu Lado Izquierdo",
    "MET-AI": "Estructura Loft Alto sobre Isla",
    "MET-IS": "Estructura MetÃ¡lica Loft Sobre Isla",
    "PEL-CT": "Perfil Superior Tipo Puerta",
    "RI-MIX": "Riel Mixta",
    "SI-DEC": "Gavetas decorativas Sistema Invisible",
    "VOL-3S": "Repisa volada con 3 soportes",
    "VOL-4S": "Repisa volada con 4 soportes",
    "VOL-5S": "Repisa volada con 5 soportes",
    "ACP-LIM": "Accesorio de Limpieza Peka",
    "AQUA-BA": "Protector Aquanon de Basurero",
    "CMP-IND": "Campana Meson Indurama",
    "CMP-MES": "Campana Meson",
    "CU-TP4L": "Tapa Curcu en 4 lados",
    "MET-BAS": "MÃ³dulo intermedio para bases lago.",
    "MET-REP": "Repisa MetÃ¡lica \"U\"",
    "VIN-HOR": "Vinera Horizontal",
    "ACC-PESC": "SUJETA MANGOS 4 ESCOBAS",
    "ACK-ELEV": "Accesorio Elevador Kessebohmer",
    "ACV-FLBX": "Accesorio Vibo Fly Box",
    "ACV-JINO": "Accesorio Vibo Carrito Jino",
    "CAMP-MES": "Campana Meson",
    "EST-CAMP": "Estructura Campana Loft",
    "OTPE6-AU": "Oreja de Ajuste con Detalle Decorativo Aurora",
    "ACE-PPUSH": "4 Puertas Plegables",
    "EST-DLOFT": "Estructura de Desayunador Loft",
    "OTP10X-HZ": "Oreja Auxiliar Henzo H11",
    "OTP15X-HZ": "Oreja Auxiliar Henzo H11",
    "OTP20X-HZ": "Oreja Auxiliar Henzo H11",
    "PATAE6-AU": "Pata Decorativa Estilo Aurora / Pata decoratuva estilo Aurora",
    "DACE-PPUSH": "2 Puertas Plegables Lado Derecho",
    "HS-REJILLA": "Horno Simple con Rejilla de Ventilacion / Horno Simple con rejilla de ventilaciÃ³n",
    "IACE-PPUSH": "2 Puertas Plegables Lado Izquierdo",
    "GOTD-95P150": "Desayunador Gota Derecho 95cm de diÃ¡metro y 150cm de profundidad",
    "GOTI-95P150": "Desayunador Gota Izquierdo 95cm de diÃ¡metro y 150cm de profundidad",
    "T(ANCHO)-TR": "Tablero Lacado",
    "CU-DES12090R": "Desayunador Curcu Recto 120cm de largo y 90cm de radio",
    "CU-DES14090R": "Desayunador Curcu Recto 140cm de largo y 90cm de radio",
    "CU-DES15090R": "Desayunador Curcu Recto 150cm de largo y 90cm de radio",
    "CU-DES18090R": "Desayunador Curcu Recto 180cm de largo y 90cm de radio",
    "CU-DES21090R": "Desayunador Curcu Recto 210cm de largo y 90cm de radio",
    "CU-DES90090R": "Desayunador Curcu Recto Redondo 90cm de radio",
    "D-O_DEOL60SL": "DESPENSA Y OLLAS SL 60 CM",
    "D-O_DEOL90SL": "DESPENSA Y OLLAS SL 90 CM",
    "D-P_DEPO60SL": "DESPENSA Y PORTAPLATO SL 60 CM",
    "D-P_DEPO90SL": "DESPENSA Y PORTAPLATO SL 90 CM",
    "GOTD-105P167": "Desayunador Gota Derecho 105cm de diÃ¡metro y 167cm de profundidad",
    "GOTD-120P192": "Desayunador Gota Derecho 120cm de diÃ¡metro y 192cm de profundidad",
    "GOTD-150P240": "Desayunador Gota Derecho 150cm de diÃ¡metro y 240cm de profundidad",
    "GOTI-105P167": "Desayunador Gota Izquierdo 105cm de diÃ¡metro y 167cm de profundidad",
    "GOTI-120P192": "Desayunador Gota Izquierdo 120cm de diÃ¡metro y 192cm de profundidad",
    "GOTI-150P240": "Desayunador Gota Izquierdo 150cm de diÃ¡metro y 240cm de profundidad",
    "O-P_OLPO60SL": "OLLAS Y PORTAPLATOS SL 60 CM",
    "O-P_OLPO90SL": "OLLAS Y PORTAPLATOS SL 90 CM",
    "OTP10XH12-HZ": "Oreja Auxiliar Henzo H12",
    "OTP15XH12-HZ": "Oreja Auxiliar Henzo H12",
    "OTP20XH12-HZ": "Oreja Auxiliar Henzo H12",
    "CU-DES100100R": "Desayunador Curcu Recto Redondo 100cm de radio",
    "CU-DES110110R": "Desayunador Curcu Recto Redondo 110cm de radio",
    "CU-DES120100R": "Desayunador Curcu Recto 120cm de largo y 100cm de radio",
    "CU-DES120110R": "Desayunador Curcu Recto 120cm de largo y 110cm de radio",
    "CU-DES12090CH": "Desayunador Curcu Chaflanado 120cm de largo y 90cm de radio",
    "CU-DES12090EP": "Desayunador Curcu Recto Espina de Pez 120cm de largo y 90cm de radio / Desayunador Curcu Chaflanado Espina de Pez 120cm de largo y 90cm de radio",
    "CU-DES140100R": "Desayunador Curcu Recto 140cm de largo y 100cm de radio",
    "CU-DES140110R": "Desayunador Curcu Recto 140cm de largo y 110cm de radio",
    "CU-DES14090CH": "Desayunador Curcu Chaflanado 140cm de largo y 90cm de radio",
    "CU-DES14090EP": "Desayunador Curcu Recto Espina de Pez 140cm de largo y 90cm de radio / Desayunador Curcu Chaflanado Espina de Pez 140cm de largo y 90cm de radio",
    "CU-DES150100R": "Desayunador Curcu Recto 150cm de largo y 100cm de radio",
    "CU-DES150110R": "Desayunador Curcu Recto 150cm de largo y 110cm de radio",
    "CU-DES15090CH": "Desayunador Curcu Chaflanado 150cm de largo y 90cm de radio",
    "CU-DES15090EP": "Desayunador Curcu Recto Espina de Pez 150cm de largo y 90cm de radio / Desayunador Curcu Chaflanado Espina de Pez 150cm de largo y 90cm de radio",
    "CU-DES180100R": "Desayunador Curcu Recto 180cm de largo y 100cm de radio",
    "CU-DES180110R": "Desayunador Curcu Recto 180cm de largo y 110cm de radio",
    "CU-DES18090CH": "Desayunador Curcu Chaflanado 180cm de largo y 90cm de radio",
    "CU-DES18090EP": "Desayunador Curcu Recto Espina de Pez 180cm de largo y 90cm de radio / Desayunador Curcu Chaflanado Espina de Pez 180cm de largo y 90cm de radio",
    "CU-DES210100R": "Desayunador Curcu Recto 210cm de largo y 100cm de radio",
    "CU-DES210110R": "Desayunador Curcu Recto 210cm de largo y 110cm de radio",
    "CU-DES21090CH": "Desayunador Curcu Chaflanado 210cm de largo y 90cm de radio",
    "CU-DES21090EP": "Desayunador Curcu Recto Espina de Pez 210cm de largo y 90cm de radio / Desayunador Curcu Chaflanado Espina de Pez 210cm de largo y 90cm de radio",
    "CU-DES90090CH": "Desayunador Curcu Chaflanado Redondo 90cm de radio",
    "CU-DES90090EP": "Desayunador Curcu Recto Espina de Pez Redondo 90cm de radio / Desayunador Curcu Chaflanado Espina de Pez Redondo 90cm de radio",
    "MET-RJ120H0.5": "Riel metÃ¡lica fija a pared para colocar accesorios",
    "MET-RJ150H0.5": "Riel metÃ¡lica fija a pared para colocar accesorios",
    "MET-RJ180H0.5": "Riel metÃ¡lica fija a pared para colocar accesorios",
    "CG-DES12P4H1.0": "Desayunador Caja de Granito",
    "CG-DES90P4H1.2": "Desayunador Caja de Granito",
    "CU-DES100100CH": "Desayunador Curcu Chaflanado Redondo 100cm de radio",
    "CU-DES100100EP": "Desayunador Curcu Recto Espina de Pez Redondo 100cm de radio / Desayunador Curcu Chaflanado Espina de Pez Redondo 100cm de radio",
    "CU-DES110110CH": "Desayunador Curcu Chaflanado Redondo 110cm de radio",
    "CU-DES110110EP": "Desayunador Curcu Recto Espina de Pez Redondo 110cm de radio / Desayunador Curcu Chaflanado Espina de Pez Redondo 110cm de radio",
    "CU-DES120100CH": "Desayunador Curcu Chaflanado 120cm de largo y 100cm de radio",
    "CU-DES120100EP": "Desayunador Curcu Recto Espina de Pez 120cm de largo y 100cm de radio / Desayunador Curcu Chaflanado Espina de Pez 120cm de largo y 100cm de radio",
    "CU-DES120110CH": "Desayunador Curcu Chaflanado 120cm de largo y 110cm de radio",
    "CU-DES120110EP": "Desayunador Curcu Recto Espina de Pez 120cm de largo y 110cm de radio / Desayunador Curcu Chaflanado Espina de Pez 120cm de largo y 110cm de radio",
    "CU-DES140100CH": "Desayunador Curcu Chaflanado 140cm de largo y 100cm de radio",
    "CU-DES140100EP": "Desayunador Curcu Recto Espina de Pez 140cm de largo y 100cm de radio / Desayunador Curcu Chaflanado Espina de Pez 140cm de largo y 100cm de radio",
    "CU-DES140110CH": "Desayunador Curcu Chaflanado 140cm de largo y 110cm de radio",
    "CU-DES140110EP": "Desayunador Curcu Recto Espina de Pez 140cm de largo y 110cm de radio / Desayunador Curcu Chaflanado Espina de Pez 140cm de largo y 110cm de radio",
    "CU-DES150100CH": "Desayunador Curcu Chaflanado 150cm de largo y 100cm de radio",
    "CU-DES150100EP": "Desayunador Curcu Recto Espina de Pez 150cm de largo y 100cm de radio / Desayunador Curcu Chaflanado Espina de Pez 150cm de largo y 100cm de radio",
    "CU-DES150110CH": "Desayunador Curcu Chaflanado 150cm de largo y 110cm de radio",
    "CU-DES150110EP": "Desayunador Curcu Recto Espina de Pez 150cm de largo y 110cm de radio / Desayunador Curcu Chaflanado Espina de Pez 150cm de largo y 110cm de radio",
    "CU-DES180100CH": "Desayunador Curcu Chaflanado 180cm de largo y 100cm de radio",
    "CU-DES180100EP": "Desayunador Curcu Recto Espina de Pez 180cm de largo y 100cm de radio / Desayunador Curcu Chaflanado Espina de Pez 180cm de largo y 100cm de radio",
    "CU-DES180110CH": "Desayunador Curcu Chaflanado 180cm de largo y 110cm de radio",
    "CU-DES180110EP": "Desayunador Curcu Recto Espina de Pez 180cm de largo y 110cm de radio / Desayunador Curcu Chaflanado Espina de Pez 180cm de largo y 110cm de radio",
    "CU-DES210100CH": "Desayunador Curcu Chaflanado 210cm de largo y 100cm de radio",
    "CU-DES210100EP": "Desayunador Curcu Recto Espina de Pez 210cm de largo y 100cm de radio / Desayunador Curcu Chaflanado Espina de Pez 210cm de largo y 100cm de radio",
    "CU-DES210110CH": "Desayunador Curcu Chaflanado 210cm de largo y 110cm de radio",
    "CU-DES210110EP": "Desayunador Curcu Recto Espina de Pez 210cm de largo y 110cm de radio / Desayunador Curcu Chaflanado Espina de Pez 210cm de largo y 110cm de radio",
    "CG-DES12.4P4H0.8": "Desayunador Caja de Granito",
    "EST-DLOFTH73120*70": "Estructura de desayunador loft. Altura 73cm. Ancho 120cm y profundidad 70cm",
    "C/R-V": "Con Respaldo",
    "F-C/R": "Fregadero con respaldo",
    "SM-E-T": "Sistema MÃ©tabox con accesorio especiero y botellero",
    "LIN-L-S": "Tipo L Line",
    "LIN-U-S": "Tipo U Line",
    "CU-TPI-D": "Tapa Curcu Lado izquierdo y Derecho",
    "E-RESP-D": "RESPALDO ESTRUCTURA-DEC",
    "ACR-PE-SG": "Accesorio Persiana Aluminio Sobre Meson / Accesorio persiana de aluminio sobre mesÃ³n",
    "ACR-PE-SM": "Accesorio Persiana Aluminio Sobre Modulo / Accesorio persiana de aluminio sobre mÃ³dulo",
    "PATA-A-GF": "Pata Tipo A Color Grafito MT",
    "PATA-A-NE": "Pata Tipo A Color Negro MT",
    "ACC-ESC-PL": "ESCALERA PLEGABLE",
    "FB60HZ-I-D": "Forro Bajo 60 Profundidad 8cm Henzo Tipo \"I\" Doble",
    "FB60HZ-I-S": "Forro Bajo 60 Profundidad 8cm Henzo Tipo \"I\" Simple",
    "FB90HZ-I-D": "Forro Bajo 90 Profundidad 8cm Henzo Tipo \"I\" Doble",
    "FB90HZ-I-S": "Forro Bajo 90 Profundidad 8cm Henzo Tipo \"I\" Simple",
    "LB68HZ-U-D": "Lateral Bajo Izquierdo P68 Henzo Tipo \"U\" Doble",
    "LB68HZ-U-S": "Lateral Bajo Izquierdo P68 Henzo Tipo \"U\" Simple",
    "LB82HZ-U-D": "Lateral Bajo Izquierdo P82 Henzo Tipo \"U\" Doble",
    "LB82HZ-U-S": "Lateral Bajo Izquierdo P82 Henzo Tipo \"U\" Simple",
    "LB94HZ-U-D": "Lateral Bajo Izquierdo P94 Henzo Tipo \"U\" Doble",
    "LB94HZ-U-S": "Lateral Bajo Izquierdo P94 Henzo Tipo \"U\" Simple",
    "ESTR-DES-A1": "Estructura para desayunador tipo A1",
    "ESTR-DES-A2": "Estructura para desayunador tipo A2",
    "ESTR-DES-A3": "Estructura para desayunador tipo A3",
    "ESTR-DES-B1": "Estructura para desayunador tipo B1",
    "ESTR-DES-B2": "Estructura para desayunador tipo B2",
    "ESTR-DES-C1": "Estructura para desayunador tipo C1",
    "ESTR-DES-C2": "Estructura para desayunador tipo C2",
    "ESTR-DES-D1": "Estructura para desayunador tipo D1",
    "ESTR-DES-D2": "Estructura para desayunador tipo D2",
    "FB100HZ-I-D": "Forro Bajo 100 Profundidad 8cm Henzo Tipo \"I\" Doble",
    "FB100HZ-I-S": "Forro Bajo 100 Profundidad 8cm Henzo Tipo \"I\" Simple",
    "FB120HZ-I-D": "Forro Bajo 120 Profundidad 8cm Henzo Tipo \"I\" Doble",
    "FB120HZ-I-S": "Forro Bajo 120 Profundidad 8cm Henzo Tipo \"I\" Simple",
    "LAD34-L-STC": "Lateral alto Derecho P34 H4. Tipo Estructura Corta",
    "LAD44-L-STC": "Lateral alto Derecho P44 H4. Tipo Estructura Corta",
    "LAD60-L-STC": "Lateral alto Derecho P60 H4. Tipo Estructura Corta",
    "LAD67-L-STC": "Lateral alto Derecho P67 H4. Tipo Estructura Corta",
    "LAI34-L-STC": "Lateral alto Izquierdo P34 H4. Tipo Estructura Corta",
    "LAI44-L-STC": "Lateral alto Izquierdo P44 H4. Tipo Estructura Corta",
    "LAI60-L-STC": "Lateral alto Izquierdo P60 H4. Tipo Estructura Corta",
    "LAI67-L-STC": "Lateral alto Izquierdo P67 H4. Tipo Estructura Corta",
    "LB104HZ-U-D": "Lateral Bajo Izquierdo P104 Henzo Tipo \"U\" Doble",
    "LB104HZ-U-S": "Lateral Bajo Izquierdo P104 Henzo Tipo \"U\" Simple",
    "LB120HZ-U-D": "Lateral Bajo Izquierdo P120 Henzo Tipo \"U\" Doble",
    "LB120HZ-U-S": "Lateral Bajo Izquierdo P120 Henzo Tipo \"U\" Simple",
    "LBD34HZ-L-D": "Lateral Bajo Derecho P34 Henzo Tipo \"L\" Doble",
    "LBD34HZ-L-S": "Lateral Bajo Derecho P34 Henzo Tipo \"L\" Simple",
    "LBD44HZ-L-D": "Lateral Bajo Derecho P44 Henzo Tipo \"L\" Doble",
    "LBD44HZ-L-S": "Lateral Bajo Derecho P44 Henzo Tipo \"L\" Simple",
    "LBD60HZ-L-D": "Lateral Bajo Derecho P60 Henzo Tipo \"L\" Doble",
    "LBD60HZ-L-S": "Lateral Bajo Derecho P60 Henzo Tipo \"L\" Simple",
    "LBD67HZ-L-D": "Lateral Bajo Derecho P67 Henzo Tipo \"L\" Doble",
    "LBD67HZ-L-S": "Lateral Bajo Derecho P67 Henzo Tipo \"L\" Simple",
    "LBI34HZ-L-D": "Lateral (L) Bajo (B) 34. Henzo (HZ). Tipo \"L\" (L). Doble (D). / Lateral Bajo Izquierdo P34 Henzo Tipo \"L\" Doble",
    "LBI34HZ-L-S": "Lateral (L) Bajo (B) 34. Henzo (HZ). Tipo \"L\" (L). Simple (S). / Lateral Bajo Izquierdo P34 Henzo Tipo \"L\" Simple",
    "LBI44HZ-L-D": "Lateral Bajo Izquierdo P44 Henzo Tipo \"L\" Doble",
    "LBI44HZ-L-S": "Lateral Bajo Izquierdo P44 Henzo Tipo \"L\" Simple",
    "LBI60HZ-L-D": "Lateral Bajo Izquierdo P60 Henzo Tipo \"L\" Doble",
    "LBI60HZ-L-S": "Lateral Bajo Izquierdo P60 Henzo Tipo \"L\" Simple",
    "LBI67HZ-L-D": "Lateral Bajo Izquierdo P67 Henzo Tipo \"L\" Doble",
    "LBI67HZ-L-S": "Lateral Bajo Izquierdo P67 Henzo Tipo \"L\" Simple",
    "LXD34HZ-L-D": "Lateral Auxiliar Derecho P34 H11 Henzo Tipo \"L\" Doble",
    "LXD34HZ-L-S": "Lateral Auxiliar Derecho P34 H11 Henzo Tipo \"L\" Simple",
    "LXD44HZ-L-D": "Lateral Auxiliar Derecho P44 H11 Henzo Tipo \"L\" Doble",
    "LXD44HZ-L-S": "Lateral Auxiliar Derecho P44 H11 Henzo Tipo \"L\" Simple",
    "LXD60HZ-L-D": "Lateral Auxiliar Derecho P60 H11 Henzo Tipo \"L\" Doble",
    "LXD60HZ-L-S": "Lateral Auxiliar Derecho P60 H11 Henzo Tipo \"L\" Simple",
    "LXD67HZ-L-D": "Lateral Auxiliar Derecho P67 H11 Henzo Tipo \"L\" Doble",
    "LXD67HZ-L-S": "Lateral Auxiliar Derecho P67 H11 Henzo Tipo \"L\" Simple",
    "LXI34HZ-L-D": "Lateral Auxiliar Izquierdo P34 H11 Henzo Tipo \"L\" Doble",
    "LXI34HZ-L-S": "Lateral Auxiliar Izquierdo P34 H11 Henzo Tipo \"L\" Simple",
    "LXI44HZ-L-D": "Lateral Auxiliar Izquierdo P44 H11 Henzo Tipo \"L\" Doble",
    "LXI44HZ-L-S": "Lateral Auxiliar Izquierdo P44 H11 Henzo Tipo \"L\" Simple",
    "LXI60HZ-L-D": "Lateral Auxiliar Izquierdo P60 H11 Henzo Tipo \"L\" Doble",
    "LXI60HZ-L-S": "Lateral Auxiliar Izquierdo P60 H11 Henzo Tipo \"L\" Simple",
    "LXI67HZ-L-D": "Lateral Auxiliar Izquierdo P67 H11 Henzo Tipo \"L\" Doble",
    "LXI67HZ-L-S": "Lateral Auxiliar Izquierdo P67 H11 Henzo Tipo \"L\" Simple",
    "OTP10B-HZ-D": "Oreja Baja Henzo Doble",
    "OTP10B-HZ-S": "Oreja Baja Henzo Simple",
    "OTP15B-HZ-D": "Oreja Baja Henzo Doble",
    "OTP15B-HZ-S": "Oreja Baja Henzo Simple",
    "OTP20B-HZ-D": "Oreja Baja Henzo Doble",
    "OTP20B-HZ-S": "Oreja Baja Henzo Simple",
    "FB1100HZ-I-D": "Forro Bajo 110 Profundidad 8cm Henzo Tipo \"I\" Doble",
    "FB1100HZ-I-S": "Forro Bajo 110 Profundidad 8cm Henzo Tipo \"I\" Simple",
    "FB60P2HZ-I-D": "Forro Bajo 60 Profundidad 20cm Henzo Tipo \"I\" Doble",
    "FB60P2HZ-I-S": "Forro Bajo 60 Profundidad 20cm Henzo Tipo \"I\" Simple",
    "FB60P3HZ-I-D": "Forro Bajo 60 Profundidad 34cm Henzo Tipo \"I\" Doble",
    "FB60P3HZ-I-S": "Forro Bajo 60 Profundidad 34cm Henzo Tipo \"I\" Simple",
    "FB60P4HZ-I-D": "Forro Bajo 60 Profundidad 44cm Henzo Tipo \"I\" Doble",
    "FB60P4HZ-I-S": "Forro Bajo 60 Profundidad 44cm Henzo Tipo \"I\" Simple",
    "FB90P2HZ-I-D": "Forro Bajo 90 Profundidad 20cm Henzo Tipo \"I\" Doble",
    "FB90P2HZ-I-S": "Forro Bajo 90 Profundidad 20cm Henzo Tipo \"I\" Simple",
    "FB90P3HZ-I-D": "Forro Bajo 90 Profundidad 34cm Henzo Tipo \"I\" Doble",
    "FB90P3HZ-I-S": "Forro Bajo 90 Profundidad 34cm Henzo Tipo \"I\" Simple",
    "FB90P4HZ-I-D": "Forro Bajo 90 Profundidad 44cm Henzo Tipo \"I\" Doble",
    "FB90P4HZ-I-S": "Forro Bajo 90 Profundidad 44cm Henzo Tipo \"I\" Simple",
    "LB68H3HZ-U-S": "Lateral Bajo Izquierdo P68 H3 Henzo Tipo \"U\" Simple",
    "LB82H3HZ-U-S": "Lateral Bajo Izquierdo P82 H3 Henzo Tipo \"U\" Simple",
    "LB94H3HZ-U-S": "Lateral Bajo Izquierdo P94 H3 Henzo Tipo \"U\" Simple",
    "B45BA-SLIM-HZ": "MÃ³dulo bajo de 45cm de ancho para basurero, sistema Hafele Slim, colecciÃ³n Henzo",
    "FB100P2HZ-I-D": "Forro Bajo 100 Profundidad 20cm Henzo Tipo \"I\" Doble",
    "FB100P2HZ-I-S": "Forro Bajo 100 Profundidad 20cm Henzo Tipo \"I\" Simple",
    "FB100P3HZ-I-D": "Forro Bajo 100 Profundidad 34cm Henzo Tipo \"I\" Doble",
    "FB100P3HZ-I-S": "Forro Bajo 100 Profundidad 34cm Henzo Tipo \"I\" Simple",
    "FB100P4HZ-I-D": "Forro Bajo 100 Profundidad 44cm Henzo Tipo \"I\" Doble",
    "FB100P4HZ-I-S": "Forro Bajo 100 Profundidad 44cm Henzo Tipo \"I\" Simple",
    "FB120P2HZ-I-D": "Forro Bajo 120 Profundidad 20cm Henzo Tipo \"I\" Doble",
    "FB120P2HZ-I-S": "Forro Bajo 120 Profundidad 20cm Henzo Tipo \"I\" Simple",
    "FB120P3HZ-I-D": "Forro Bajo 120 Profundidad 34cm Henzo Tipo \"I\" Doble",
    "FB120P3HZ-I-S": "Forro Bajo 120 Profundidad 34cm Henzo Tipo \"I\" Simple",
    "FB120P4HZ-I-D": "Forro Bajo 120 Profundidad 44cm Henzo Tipo \"I\" Doble",
    "FB120P4HZ-I-S": "Forro Bajo 120 Profundidad 44cm Henzo Tipo \"I\" Simple",
    "LAD34H2-L-STC": "Lateral alto Derecho P34 H2. Tipo Estructura Corta",
    "LAD34H3-L-STC": "Lateral alto Derecho P34 H3. Tipo Estructura Corta",
    "LAD34H5-L-STC": "Lateral alto Derecho P34 H5. Tipo Estructura Corta",
    "LAD34H6-L-STC": "Lateral alto Derecho P34 H6. Tipo Estructura Corta",
    "LAD34H7-L-STC": "Lateral alto Derecho P34 H7. Tipo Estructura Corta",
    "LAD44H2-L-STC": "Lateral alto Derecho P44 H2. Tipo Estructura Corta",
    "LAD44H3-L-STC": "Lateral alto Derecho P44 H3. Tipo Estructura Corta",
    "LAD44H5-L-STC": "Lateral alto Derecho P44 H5. Tipo Estructura Corta",
    "LAD44H6-L-STC": "Lateral alto Derecho P44 H6. Tipo Estructura Corta",
    "LAD44H7-L-STC": "Lateral alto Derecho P44 H7. Tipo Estructura Corta",
    "LAD60H2-L-STC": "Lateral alto Derecho P60 H2. Tipo Estructura Corta",
    "LAD60H3-L-STC": "Lateral alto Derecho P60 H3. Tipo Estructura Corta",
    "LAD60H5-L-STC": "Lateral alto Derecho P60 H5. Tipo Estructura Corta",
    "LAD60H6-L-STC": "Lateral alto Derecho P60 H6. Tipo Estructura Corta",
    "LAD60H7-L-STC": "Lateral alto Derecho P60 H7. Tipo Estructura Corta",
    "LAD67H2-L-STC": "Lateral alto Derecho P67 H2. Tipo Estructura Corta",
    "LAD67H3-L-STC": "Lateral alto Derecho P67 H3. Tipo Estructura Corta",
    "LAD67H5-L-STC": "Lateral alto Derecho P67 H5. Tipo Estructura Corta",
    "LAD67H6-L-STC": "Lateral alto Derecho P67 H6. Tipo Estructura Corta",
    "LAD67H7-L-STC": "Lateral alto Derecho P67 H7. Tipo Estructura Corta",
    "LAI34H2-L-STC": "Lateral alto Izquierdo P34 H2. Tipo Estructura Corta",
    "LAI34H3-L-STC": "Lateral alto Izquierdo P34 H3. Tipo Estructura Corta",
    "LAI34H5-L-STC": "Lateral alto Izquierdo P34 H5. Tipo Estructura Corta",
    "LAI34H6-L-STC": "Lateral alto Izquierdo P34 H6. Tipo Estructura Corta",
    "LAI34H7-L-STC": "Lateral alto Izquierdo P34 H7. Tipo Estructura Corta",
    "LAI44H2-L-STC": "Lateral alto Izquierdo P44 H2. Tipo Estructura Corta",
    "LAI44H3-L-STC": "Lateral alto Izquierdo P44 H3. Tipo Estructura Corta",
    "LAI44H5-L-STC": "Lateral alto Izquierdo P44 H5. Tipo Estructura Corta",
    "LAI44H6-L-STC": "Lateral alto Izquierdo P44 H6. Tipo Estructura Corta",
    "LAI44H7-L-STC": "Lateral alto Izquierdo P44 H7. Tipo Estructura Corta",
    "LAI60H2-L-STC": "Lateral alto Izquierdo P60 H2. Tipo Estructura Corta",
    "LAI60H3-L-STC": "Lateral alto Izquierdo P60 H3. Tipo Estructura Corta",
    "LAI60H5-L-STC": "Lateral alto Izquierdo P60 H5. Tipo Estructura Corta",
    "LAI60H6-L-STC": "Lateral alto Izquierdo P60 H6. Tipo Estructura Corta",
    "LAI60H7-L-STC": "Lateral alto Izquierdo P60 H7. Tipo Estructura Corta",
    "LAI67H2-L-STC": "Lateral alto Izquierdo P67 H2. Tipo Estructura Corta",
    "LAI67H3-L-STC": "Lateral alto Izquierdo P67 H3. Tipo Estructura Corta",
    "LAI67H5-L-STC": "Lateral alto Izquierdo P67 H5. Tipo Estructura Corta",
    "LAI67H6-L-STC": "Lateral alto Izquierdo P67 H6. Tipo Estructura Corta",
    "LAI67H7-L-STC": "Lateral alto Izquierdo P67 H7. Tipo Estructura Corta",
    "LB104H3HZ-U-S": "Lateral Bajo Izquierdo P104 H3 Henzo Tipo \"U\" Simple",
    "LB120H3HZ-U-S": "Lateral Bajo Izquierdo P120 H3 Henzo Tipo \"U\" Simple",
    "LBD34H2HZ-L-D": "Lateral Bajo Derecho P34 H2 Henzo Tipo \"L\" Doble",
    "LBD34H2HZ-L-S": "Lateral Bajo Derecho P34 H2 Henzo Tipo \"L\" Simple",
    "LBD34H3HZ-L-D": "Lateral Bajo Derecho P34 H3 Henzo Tipo \"L\" Doble",
    "LBD34H3HZ-L-S": "Lateral Bajo Derecho P34 H3 Henzo Tipo \"L\" Simple",
    "LBD44H2HZ-L-D": "Lateral Bajo Derecho P44 H2 Henzo Tipo \"L\" Doble",
    "LBD44H2HZ-L-S": "Lateral Bajo Derecho P44 H2 Henzo Tipo \"L\" Simple",
    "LBD44H3HZ-L-D": "Lateral Bajo Derecho P44 H3 Henzo Tipo \"L\" Doble",
    "LBD44H3HZ-L-S": "Lateral Bajo Derecho P44 H3 Henzo Tipo \"L\" Simple",
    "LBD60H2HZ-L-D": "Lateral Bajo Derecho P60 H2 Henzo Tipo \"L\" Doble",
    "LBD60H2HZ-L-S": "Lateral Bajo Derecho P60 H2 Henzo Tipo \"L\" Simple",
    "LBD60H3HZ-L-D": "Lateral Bajo Derecho P60 H3 Henzo Tipo \"L\" Doble",
    "LBD60H3HZ-L-S": "Lateral Bajo Derecho P60 H3 Henzo Tipo \"L\" Simple",
    "LBD67H2HZ-L-D": "Lateral Bajo Derecho P67 H2 Henzo Tipo \"L\" Doble",
    "LBD67H2HZ-L-S": "Lateral Bajo Derecho P67 H2 Henzo Tipo \"L\" Simple",
    "LBD67H3HZ-L-D": "Lateral Bajo Derecho P67 H3 Henzo Tipo \"L\" Doble",
    "LBD67H3HZ-L-S": "Lateral Bajo Derecho P67 H3 Henzo Tipo \"L\" Simple",
    "LBI34H2HZ-L-D": "Lateral Bajo Izquierdo P34 H2 Henzo Tipo \"L\" Doble",
    "LBI34H2HZ-L-S": "Lateral Bajo Izquierdo P34 H2 Henzo Tipo \"L\" Simple",
    "LBI34H3HZ-L-D": "Lateral Bajo Izquierdo P34 H3 Henzo Tipo \"L\" Doble",
    "LBI34H3HZ-L-S": "Lateral Bajo Izquierdo P34 H3 Henzo Tipo \"L\" Simple",
    "LBI44H2HZ-L-D": "Lateral Bajo Izquierdo P44 H2 Henzo Tipo \"L\" Doble",
    "LBI44H2HZ-L-S": "Lateral Bajo Izquierdo P44 H2 Henzo Tipo \"L\" Simple",
    "LBI44H3HZ-L-D": "Lateral Bajo Izquierdo P44 H3 Henzo Tipo \"L\" Doble",
    "LBI44H3HZ-L-S": "Lateral Bajo Izquierdo P44 H3 Henzo Tipo \"L\" Simple",
    "LBI60H2HZ-L-D": "Lateral Bajo Izquierdo P60 H2 Henzo Tipo \"L\" Doble",
    "LBI60H2HZ-L-S": "Lateral Bajo Izquierdo P60 H2 Henzo Tipo \"L\" Simple",
    "LBI60H3HZ-L-D": "Lateral Bajo Izquierdo P60 H3 Henzo Tipo \"L\" Doble",
    "LBI60H3HZ-L-S": "Lateral Bajo Izquierdo P60 H3 Henzo Tipo \"L\" Simple",
    "LBI67H2HZ-L-D": "Lateral Bajo Izquierdo P67 H2 Henzo Tipo \"L\" Doble",
    "LBI67H2HZ-L-S": "Lateral Bajo Izquierdo P67 H2 Henzo Tipo \"L\" Simple",
    "LBI67H3HZ-L-D": "Lateral Bajo Izquierdo P67 H3 Henzo Tipo \"L\" Doble",
    "LBI67H3HZ-L-S": "Lateral Bajo Izquierdo P67 H3 Henzo Tipo \"L\" Simple",
    "LXD34HEHZ-L-D": "Lateral Auxiliar Derecho P34 HE Henzo Tipo \"L\" Doble",
    "LXD34HEHZ-L-S": "Lateral Auxiliar Derecho P34 HE Henzo Tipo \"L\" Simple",
    "LXD44HEHZ-L-D": "Lateral Auxiliar Derecho P44 HE Henzo Tipo \"L\" Doble",
    "LXD44HEHZ-L-S": "Lateral Auxiliar Derecho P44 HE Henzo Tipo \"L\" Simple",
    "LXD60HEHZ-L-D": "Lateral Auxiliar Derecho P60 HE Henzo Tipo \"L\" Doble",
    "LXD60HEHZ-L-S": "Lateral Auxiliar Derecho P60 HE Henzo Tipo \"L\" Simple",
    "LXD67HEHZ-L-D": "Lateral Auxiliar Derecho P67 HE Henzo Tipo \"L\" Doble",
    "LXD67HEHZ-L-S": "Lateral Auxiliar Derecho P67 HE Henzo Tipo \"L\" Simple",
    "LXI34HEHZ-L-D": "Lateral Auxiliar Izquierdo P34 HE Henzo Tipo \"L\" Doble",
    "LXI34HEHZ-L-S": "Lateral Auxiliar Izquierdo P34 HE Henzo Tipo \"L\" Simple",
    "LXI44HEHZ-L-D": "Lateral Auxiliar Izquierdo P44 HE Henzo Tipo \"L\" Doble",
    "LXI44HEHZ-L-S": "Lateral Auxiliar Izquierdo P44 HE Henzo Tipo \"L\" Simple",
    "LXI60HEHZ-L-D": "Lateral Auxiliar Izquierdo P60 HE Henzo Tipo \"L\" Doble",
    "LXI60HEHZ-L-S": "Lateral Auxiliar Izquierdo P60 HE Henzo Tipo \"L\" Simple",
    "LXI67HEHZ-L-D": "Lateral Auxiliar Izquierdo P67 HE Henzo Tipo \"L\" Doble",
    "LXI67HEHZ-L-S": "Lateral Auxiliar Izquierdo P67 HE Henzo Tipo \"L\" Simple",
    "OTP10X-INV-HZ": "Oreja Auxiliar Invertida Henzo",
    "OTP15X-INV-HZ": "Oreja Auxiliar Invertida Henzo",
    "OTP20X-INV-HZ": "Oreja Auxiliar Invertida Henzo",
    "FB1100P2HZ-I-D": "Forro Bajo 110 Profundidad 20cm Henzo Tipo \"I\" Doble",
    "FB1100P2HZ-I-S": "Forro Bajo 110 Profundidad 20cm Henzo Tipo \"I\" Simple",
    "FB1100P3HZ-I-D": "Forro Bajo 110 Profundidad 34cm Henzo Tipo \"I\" Doble",
    "FB1100P3HZ-I-S": "Forro Bajo 110 Profundidad 34cm Henzo Tipo \"I\" Simple",
    "FB1100P4HZ-I-D": "Forro Bajo 110 Profundidad 44cm Henzo Tipo \"I\" Doble",
    "FB1100P4HZ-I-S": "Forro Bajo 110 Profundidad 44cm Henzo Tipo \"I\" Simple",
    "LXD34H12HZ-L-D": "Lateral Auxiliar Derecho P34 H12 Henzo Tipo \"L\" Doble",
    "LXD34H12HZ-L-S": "Lateral Auxiliar Derecho P34 H12 Henzo Tipo \"L\" Simple",
    "LXD44H12HZ-L-D": "Lateral Auxiliar Derecho P44 H12 Henzo Tipo \"L\" Doble",
    "LXD44H12HZ-L-S": "Lateral Auxiliar Derecho P44 H12 Henzo Tipo \"L\" Simple",
    "LXD60H12HZ-L-D": "Lateral Auxiliar Derecho P60 H12 Henzo Tipo \"L\" Doble",
    "LXD60H12HZ-L-S": "Lateral Auxiliar Derecho P60 H12 Henzo Tipo \"L\" Simple",
    "LXD67H12HZ-L-D": "Lateral Auxiliar Derecho P67 H12 Henzo Tipo \"L\" Doble",
    "LXD67H12HZ-L-S": "Lateral Auxiliar Derecho P67 H12 Henzo Tipo \"L\" Simple",
    "LXI34H12HZ-L-D": "Lateral Auxiliar Izquierdo P34 H12 Henzo Tipo \"L\" Doble",
    "LXI34H12HZ-L-S": "Lateral Auxiliar Izquierdo P34 H12 Henzo Tipo \"L\" Simple",
    "LXI44H12HZ-L-D": "Lateral Auxiliar Izquierdo P44 H12 Henzo Tipo \"L\" Doble",
    "LXI44H12HZ-L-S": "Lateral Auxiliar Izquierdo P44 H12 Henzo Tipo \"L\" Simple",
    "LXI60H12HZ-L-D": "Lateral Auxiliar Izquierdo P60 H12 Henzo Tipo \"L\" Doble",
    "LXI60H12HZ-L-S": "Lateral Auxiliar Izquierdo P60 H12 Henzo Tipo \"L\" Simple",
    "LXI67H12HZ-L-D": "Lateral Auxiliar Izquierdo P67 H12 Henzo Tipo \"L\" Doble",
    "LXI67H12HZ-L-S": "Lateral Auxiliar Izquierdo P67 H12 Henzo Tipo \"L\" Simple",
    "C-H-AM_CUHU45MR": "CUB Y CUCH MR 45CM",
    "C-H-AM_CUHU60MR": "CUB Y CUCH MR 60CM",
    "C-H-AM_CUHU90MR": "CUB Y CUCH MR 90CM",
    "C-R-AM_CURO45MR": "CUB Y ROLLOS MR 45CM",
    "C-R-AM_CURO60MR": "CUB Y ROLLOS MR 60CM",
    "C-R-AM_CURO90MR": "CUB Y ROLLOS MR 90CM",
    "C-S-AM_CUSU45MR": "CUB Y SUB MR 45CM",
    "C-S-AM_CUSU60MR": "CUB Y SUBD MR 60CM",
    "C-S-AM_CUSU90MR": "CUB Y SUB MR 90CM",
    "H-R-AM_HURO45MR": "CUCH Y ROLLOS MR 45CM",
    "H-R-AM_HURO60MR": "CUCH Y ROLLOS MR 60CM",
    "H-R-AM_HURO90MR": "CUCH Y ROLLOS MR 90CM",
    "H-S-AM_HUSU45MR": "CUCH Y SUB MR 45CM",
    "H-S-AM_HUSU60MR": "CUCH Y SUB MR 60CM",
    "H-S-AM_HUSU90MR": "CUCH Y SUB MR 90CM",
    "S-R-AM_SURO45MR": "SUBD Y ROLLOS MR 45CM",
    "S-R-AM_SURO60MR": "SUB Y ROLLOS MR 60CM",
    "S-R-AM_SURO90MR": "SUB Y ROLLOS MR 90CM",
    "MET-TUBO-IN32X12": "Tubo de instalaciones",
    "B60DH3P3-ON-MALLA": "MÃ³dulo Bajo. Puerta Apertura Derecha. Altura 570mm. Profundidad 340mm. Apertura Tip-On. Puerta de Malla",
    "CAJA-MES-BREAK180": "Desayunador extraible sistema breakfast 1800 x 940",
    "CAJA-MES-BREAK300": "Desayunador extraible sistema breakfast 3000 x 940",
    "MET-BAS-LAGO107.5": "MÃ³dulo Extremo con terminaciÃ³n redonda Base Lago",
    "MET-BAS-LAGO137.5": "MÃ³dulo Extremo con terminaciÃ³n redonda Base Lago",
    "V-D-D-D": "Vacio - Despensa - Despensa - Despensa / VacÃ­o - Despensa - Despensa - Despensa",
    "LOF-CAM-M-I": "Campana Revestida Madera Isla",
    "LOF-CAM-M-P": "Campana Revestida Madera Pared",
    "LOF-CAM-P-I": "Campana Revestida Piedra Isla",
    "LOF-CAM-P-P": "Campana Revestida Piedra Pared",
    "ACK-AB-PAR-1GI": "Accesorio Kessebohmer Abatible Paralelo con 1 Gaveta Interna / Accesorio Kessebohmer Abatible Paralelo con gaveta interna",
    "TAPA-VID-166.4P6-E3": "TAPA VIDRIO ISLA CUBIK",
    "EST-CAMP-LOFT-DU=100": "Estructura de campana loft. Ducto sobre campana = 100mm",
    "CAJA-MES-93X105X7.2-MQ": "Desayunador Caja acabado decorativo",
    "CAJA-MES-123X105X7.2-MQ": "Desayunador Caja acabado decorativo",
    "MET-REP120H0.5P0.8-RIEL-LB": "Repisa metÃ¡lica con sistema de riel para colocar accesorios",
    "MET-REP150H0.5P0.8-RIEL-LB": "Repisa metÃ¡lica con sistema de riel para colocar accesorios",
    "MET-REP180H0.5P0.8-RIEL-LB": "Repisa metÃ¡lica con sistema de riel para colocar accesorios",
    "MET-BAS-LAGO60-H31.6-P6P4-NE": "MÃ³dulo intermedio para bases lago. Ancho 60cm y profundidad para combinar modulos P6 y P4. Color Laca Negro MT.",
    "MET-BAS-LAGO107.5-H31.6-P6P4-NE": "MÃ³dulo Extremo con terminaciÃ³n redonda Base Lago. Ancho de 107.5 cm y profundidad para combinar modulos P6 y P4. Color Laca Negro MT.",
    "MET-BAS-LAGO137.5-H31.6-P6P4-GF": "MÃ³dulo Extremo con terminaciÃ³n redonda Base Lago. Ancho de 137.5 cm y profundidad para combinar modulos P6 y P4. Color Laca Grafito MT.",
    "MET-AI90H2P44H100-E2S-NE-PFD-LSP": "Estructura Loft Alto sobre Isla. Ancho 90cm H2 (380mm) Profundidad 44cm. Altura 100cm. 2 Compartimentos. Acabado Laca Negro Texturizado. PerforaciÃ³n Derecha para Estructura. Luz Led Spot.",
    "MET-B104H3P3-E4S-S/R-GF-LSP": "Estructura metÃ¡lica loft. MÃ³dulo bajo ancho 104 cm. H3 (570mm). P3 (340mm). Compartimentos. Sin Respaldo. Acabado Gratito Texturizado. Luz Spot",
    "MET-B60H2P6E1-C/R-V-CU-PFC-LSP": "Estructura metÃ¡lica loft. MÃ³dulo bajo de ancho 60cm . H2 (380mm) profundidad de 600mm. Con 1 compartimento. Con respaldo. Estructura Cobre Texturizado. PerforaciÃ³n Central para Estructura. Luz Spot",
    "EST-CAMP-E2S-S/R-CG-LSP-DU=500-CG": "Estructura de campana loft. 2 compartimentos. Sin Respaldo. Luz spot. Ducto sobre campana = 500mm. Acabado Laca Cacao Gold MT",

    // Claves agregadas desde Guia_lectura_codigos.xlsx.
    "1": "Tipo de modulo / B: Bajo / A: Alto / S: Suspendido / X: Auxiliar / E: Esquinero / B / A / S / X / E",
    "-1/2PGVD": "PERFIL GOLA VERTICA DERECHO",
    "-1/2PGVI": "PERFIL GOLA VERTICA IZQUIERDO",
    "1BANDEJAS": "1 Division Vertical",
    "-1GOCU": "GAVETA OCULTA",
    "2": "Ancho / Medida en cm (sin decimales) / 60 / 90 / 120",
    "2BANDEJAS": "2 Divisiones Verticales",
    "-2PULS": "2 PULSADORES LUZ LED",
    "3": "Sentido de apertura / I: Izquierda / D: Derecha / (vacio: doble puerta) / I / D",
    "3BANDEJAS": "3 Divisiones Verticales",
    "4": "Profundidad / P3, P4, P6, P67, P(medida fuera de lo estandar) / P20 / P3 / P4 / P67",
    "5": "Altura (si no es estandar) / H1, H2, H3, H4, etc. (H4 es estandar y se omite) / H3 / H2 / H1",
    "-5BAN": "LATERALES BANDEJA",
    "6": "Funcion especial / F: Fregadero / G1: 1 gaveta / G2: 2 gavetas, Abatible + tipo de abatible, etc / F / G2 / BAG2IN",
    "7": "Sistema de gavetas / SM: Metabox / SLIM: Matrix Slim / MRV: Merivobox / SL: Legrabox / -SM / -SLIM / -MRV / -SL",
    "8": "Componentes / Accesorios / PUSH, ON, SD, BF, etc. (separados por guiones) / -PUSH / -ON / -SD / -BF",
    "A60H132V": "Modulo Alto vitrina de vidrio ancho 60cm",
    "A90H132V": "Modulo Alto vitrina de vidrio ancho 60cm",
    "AC-APN": "Apoyapies Negro.",
    "AC-BASE ISLA": "Base de isla ancho: 900 Profundidad: 600 Alto: 316",
    "AC-BASE ISLA 105": "Base de isla ancho: 105 Profundidad: 600 Alto: 316",
    "AC-BD(MEDIDA)R": "Base desayunador rectangular color acero inoxidable",
    "AC-BD(MEDIDA)RNE": "Base desayunador rectangular color negro",
    "AC-BDESRED": "Soporte desayunador de pata redonda para tableros en islas Duo",
    "AC-BDP-P0.76H0.7": "Desayunador de estructura metalica y aglomerado para revestir con piedra",
    "AC-BDP-P0.94H1.1": "Desayunador de estructura metalica y aglomerado para revestir con piedra",
    "-ACC-ESC-PL": "ESCALERA PLEGABLE",
    "-ACC-PESC": "SUJETA MANGOS 4 ESCOBAS",
    "ACMOV": "Accesorio Mover",
    "ACMOV-R": "Accesorio Mover con repisa intermedia",
    "ACMOV-S/B": "Accesorio Mover Sin Base",
    "ACMOV-S/B-R": "Accesorio Mover Sin Base con repisa interna",
    "AC-PATA-CRUZ": "Pata para desayunador en cruz",
    "AC-PATA-H": "Pata desayunador H",
    "AC-PATA-X-H(ALTURA)": "Pata desayunador X",
    "AC-PVT45H69.6": "Pata de vidrio. Ancho 45cm. Altura 69.6cm",
    "AC-PVT60H69.6": "Pata de vidrio. Ancho 60cm. Altura 69.6cm",
    "AC-PVT60H88.6": "Pata de vidrio. Ancho 60cm. Altura 88.6cm",
    "AC-PVT4588.6": "Pata de vidrio. Ancho 45cm. Altura 88.6cm",
    "AC-SDAP": "Soporte desayunador tipo \"A\". Pintado",
    "AC-SDFI": "Soporte tipo \"F\" color acero inoxidable",
    "AC-SDHI": "Soporte desayunador tipo \"H\". Color acero inoxidable",
    "AC-SDHP": "Soporte desayunador tipo \"H\". Pintado",
    "AC-SDII": "Soporte desayunador \"I\". Color acero inoxidable",
    "AC-SDIP": "Soporte desayunador \"I\". Pintado",
    "AC-SDLP": "Soporte en L pintado H:16 Alto:220 Profundidad: 160",
    "AC-SDLP40": "Soporte en L pintado H:16 Alto:300 Profundidad: 400",
    "AC-SDTI": "Soporte desayunador \"T\" color acero inoxidable",
    "AC-SDTP": "Soporte desayunador \"T\" pintado",
    "AC-SDZD-GRANITO": "Soporte Desayunador volado Z derecho para islas Duo para revestimiento de piedras de 20mm",
    "AC-SDZD-PIEDRA": "Soporte Desayunador volado Z derecho para islas Duo para revestimiento de piedras de 12mm",
    "AC-SDZI-GRANITO": "Soporte Desayunador volado Z izquierdo para islas Duo para revestimiento de piedras de 20mm",
    "AC-SDZI-PIEDRA": "Soporte Desayunador volado Z izquierdo para islas Duo para revestimiento de piedras de 12mm",
    "AD": "Vidrio Acanalado Dorado",
    "A-DR180P4-MC": "Desayunador rustico de madera clara color claro Tipo Recto",
    "A-DR180P4-MO": "Desayunador rustico de madera clara color oscuro Tipo Recto",
    "A-DR-220H115-MC\"L\"": "Desayunador rustico de madera solida color claro tipo \"L\"",
    "A-DR-220H115-MO\"L\"": "Desayunador rustico de madera solida color oscuro tipo \"L\"",
    "A-DR220P4-MC": "Desayunador rustico de madera clara color claro Tipo Recto",
    "A-DR220P4-MO": "Desayunador rustico de madera clara color oscuro Tipo Recto",
    "AE": "Vidrio Acanalado Espejo / Discontinuado por el proveedor",
    "AG": "Vidrio Acanalado Gris",
    "-AHG": "ALZAS 1,8CM HORNO A GAS",
    "AL": "Perfil de Aluminio y vidrio normal",
    "ALAB-COM": "Aluminio Abatible Compas",
    "ALAB-GIR": "Frente de Aluminio Abatible Giratorio",
    "ALAB-PLE": "Frente de Aluminio Abatible Plegable Aluminio-Aluminio",
    "ALAB-SIM": "Frente de Aluminio Abatible Simple",
    "ALALCB-PLE": "Frente de Aluminio Perfil Cuatro Abatible Plegable Aluminio - Aluminio",
    "ALALKAB-PLE": "Frente de Aluminio Perfil Crystal Abatible Plegable Aluminio - Aluminio",
    "ALC": "Perfil de Aluminio Cuatro",
    "ALCAB-COM": "Frente de Aluminio Perfil Cuatro Abatible Compas",
    "ALCAB-GIR": "Frente de Aluminio Perfil Cuatro Abatible Giratorio",
    "ALCSOAB-PLE": "Frente de Aluminio Perfil Cuatro Abatible Plegable Aluminio - Solido",
    "ALK": "Perfil de Aluminio Crystal",
    "ALKAB-COM": "Frente de Aluminio Perfil Crystal Abatible Compas",
    "ALKAB-GIR": "Frente de Aluminio Perfil Crystal Abatible Giratorio",
    "ALKAB-SIM": "Frente de Aluminio Perfil Crystal Abatible Simple",
    "ALSOAB-PLE": "Frente de Aluminio Abatible Plegable Aluminio-Solido",
    "ALSOKAB-PLE": "Frente de Aluminio Perfil Crystal Abatible Plegable Aluminio - Solido",
    "A-MD90P4E6-NA": "Desayunador Madera Solida Ancho 90cm P40cm Espesor 6cm Color Natural",
    "A-MD120P4E6-NA": "Desayunador Madera Solida Ancho 120cm P40cm Espesor 6cm Color Natural",
    "A-MD150P4E6-NA": "Desayunador Madera Solida Ancho 150cm P40cm Espesor 6cm Color Natural",
    "A-MD180P4E6-NA": "Desayunador Madera Solida Ancho 180cm P40cm Espesor 6cm Color Natural",
    "A-MDESPE6-NA": "Desayunador Madera Solida Medida especial Espesor 6cm Color Natural",
    "AO": "Vidrio Acanalado Opaco",
    "A-PMDESPE6-NAH": "Desayunador Madera Solida Medida especial Espesor 6cm y Altura 94,6cm Color Natural Veta Horizontal",
    "A-PMDESPE6-NAV": "Desayunador Madera Solida Medida especial Espesor 6cm y Altura 94,6cm Color Natural Veta Vertical",
    "AR": "Vidrio Arenado",
    "-B4C": "4 CUBOS DE BASURA 2 DE 8 LITROS Y 2 DE 17 LITROS",
    "B140LDH2P62-DECE3-LED": "Modulo bajo abierto en \"L\" derecho decorativo engrosado con luz led superior",
    "B140LIH2P62-DECE3-LED": "Modulo bajo abierto en \"L\" izquierdo decorativo engrosado con luz led superior",
    "B200LDH2P62-DECE3-LED": "Modulo bajo abierto en \"L\" derecho decorativo engrosado con luz led superior",
    "B200LIH2P62-DECE3-LED": "Modulo bajo abierto en \"L\" izquierdo decorativo engrosado con luz led superior",
    "BAR": "Modulo de Bar",
    "BARPG-SB-T1": "Bar Tipo 1 (con 2 repisas) con puerta Giratora Sin base. Para colocar sobre meson",
    "BARPG-SB-T2": "Bar Tipo 2 (con 2 repisas + 1 repisa pequena) con puerta Giratora. Sin Base. Para colocar sobre meson",
    "BARPG-SB-V": "Bar con interior vacio. Con puerta Giratora. Sin Base. Para colocar sobre meson",
    "BARPG-T1": "Bar Tipo 1 (con 2 repisas) con puerta Giratora. Para colocar sobre meson",
    "BARPG-T2": "Bar Tipo 2 (con 2 repisas + 1 repisa pequena) con puerta Giratora. Para colocar sobre meson",
    "BARPG-V": "Bar con interior vacio. Con puerta Giratora. Para colocar sobre meson",
    "-BAXD": "BASE DEC / CRUDO",
    "-BF": "BISAGRA FRENO",
    "BL": "Vidrio Blanco",
    "BN": "Vidrio Bronce",
    "BNT": "Repisa Vidrio Bronce Natural Templado / Vidrio Bronce Natural Templado",
    "BOTL": "Botellero",
    "BR": "Vidrio Reflectivo Bronce",
    "-C": "CUBERTERO",
    "CA": "Vidrio Carbon",
    "-C-AM": "CUBERTERO AMBIALINE",
    "-CE-GSU": "GAVETA SUP CERRADURA HUELLA",
    "-CF": "FRENO CAJON FGV",
    "CG-DES": "Desayunador Caja de Granito",
    "CGF": "Perfil Cuatro Grafito",
    "-C-H": "CUBERTERO Y CUCHILLERO SL 45CM / CUBERTERO Y CUCHILLERO SL 60CM / CUBERTERO Y CUCHILLERO SL 90CM",
    "-C-H-AM_CUHU45MR": "CUB Y CUCH MR 45CM",
    "-C-H-AM_CUHU60MR": "CUB Y CUCH MR 60CM",
    "-C-H-AM_CUHU90MR": "CUB Y CUCH MR 90CM",
    "CNE": "Perfil Cuatro Negro",
    "-C-OR": "CUBERTERO ORGANILE",
    "CP-MES": "Campana Meson",
    "-C-R": "CUBERTERO Y ROLLOS SL 45CM / CUBERTERO Y ROLLOS SL 60CM / CUBERTERO Y ROLLOS SL 90CM",
    "-C-R-AM_CURO45MR": "CUB Y ROLLOS MR 45CM",
    "-C-R-AM_CURO60MR": "CUB Y ROLLOS MR 60CM",
    "-C-R-AM_CURO90MR": "CUB Y ROLLOS MR 90CM",
    "-C-S": "CUBERTERO Y SUBDIVISIO SL 45CM / CUBERTERO Y SUBDIVISIO SL 60CM / CUBERTERO Y SUBDIVISIO SL 90CM",
    "-C-S-AM_CUSU45MR": "CUB Y SUB MR 45CM",
    "-C-S-AM_CUSU60MR": "CUB Y SUBD MR 60CM",
    "-C-S-AM_CUSU90MR": "CUB Y SUB MR 90CM",
    "CZF": "Perfil Cuatro Aluminio",
    "-D": "DESPENSA",
    "DES-SESTANTE": "Desayunador Sestante",
    "-DEX55": "DISTANCIADOR 55",
    "-DEX110": "DISTANCIADOR 110",
    "DGT": "Vidrio Dark Grey Templado",
    "-D-O_DEOL60SL": "DESPENSA Y OLLAS SL 60 CM",
    "-D-O_DEOL90SL": "DESPENSA Y OLLAS SL 90 CM",
    "-D-P_DEPO60SL": "DESPENSA Y PORTAPLATO SL 60 CM",
    "-D-P_DEPO90SL": "DESPENSA Y PORTAPLATO SL 90 CM",
    "-DU=100": "DUCTO SOBRE CAMPANA H=100",
    "-DU=200": "DUCTO SOBRE CAMPANA H=200",
    "-DU=300": "DUCTO SOBRE CAMPANA H=300",
    "-DU=400": "DUCTO SOBRE CAMPANA H=400",
    "-DU=500": "DUCTO SOBRE CAMPANA H=500",
    "-DU=600": "DUCTO SOBRE CAMPANA H=600",
    "-DU=700": "DUCTO SOBRE CAMPANA H=700",
    "-DU=ESPECIAL": "DUCTO SOBRE CAMPANA H=ESP",
    "-E": "ESPECIERO",
    "-E-AM": "ESPECIERO AMBIALINE",
    "ECT": "Repisa Vidrio Extra Claro Templado / Vidrio Extra Claro Templado",
    "ECT-ECT": "Repisa Extra Clara",
    "-E-OR": "ESPECIERO ORGALINE",
    "-E-RESP-D": "RESPALDO ESTRUCTURA-DEC",
    "-ESC": "ESCALERA STEP POLO PEKA",
    "EST-D LOFT": "Estructura de Desayunador Loft",
    "EST-D LOFTH73 120*70": "Estructura de desayunador loft. Altura 73cm. Ancho 120cm y profundidad 70cm",
    "EST-DES-DUO": "Estructura desayunador Duo",
    "ESTH1ED-NC": "Estructura New Concept Esquinera Derecha",
    "ESTH1EI-NC": "Estructura New Concept Esquinera Izquierda",
    "ESTH1-NC": "Estructura New Concept",
    "ESTR-DES160P105-NC": "Estructura para meson desayunador new concept",
    "ESTR-DES180P105H95-NC": "Estructura para meson desayunador new concept",
    "FB60DUO-I": "Forro Bajo 60 H4 Profundidad 8cm Henzo Tipo \"I\"",
    "FB60H3DUO-I": "Forro Bajo 60 H3 Profundidad 8cm Henzo Tipo \"I\"",
    "FB60HZ-LIN-I-D": "Forro Bajo 60 Profundidad 8cm Henzo Line Tipo \"I\" Doble",
    "FB60HZ-LIN-I-S": "Forro Bajo 60 Profundidad 8cm Henzo Line Tipo \"I\" Simple",
    "FB60P2DUO-I": "Forro Bajo 60 H4 Profundidad 220cm Henzo Tipo \"I\"",
    "FB60P2H3DUO-I": "Forro Bajo 60 H3 Profundidad 220cm Henzo Tipo \"I\"",
    "FB60P2HZ-LIN-I-D": "Forro Bajo 60 Profundidad 20cm Henzo Line Tipo \"I\" Doble",
    "FB60P2HZ-LIN-I-S": "Forro Bajo 60 Profundidad 20cm Henzo Line Tipo \"I\" Simple",
    "FB60P3DUO-I": "Forro Bajo 60 H4 Profundidad 340cm Henzo Tipo \"I\"",
    "FB60P3H3DUO-I": "Forro Bajo 60 H3 Profundidad 340cm Henzo Tipo \"I\"",
    "FB60P3HZ-LIN-I-D": "Forro Bajo 60 Profundidad 34cm Henzo Line Tipo \"I\" Doble",
    "FB60P3HZ-LIN-I-S": "Forro Bajo 60 Profundidad 34cm Henzo Line Tipo \"I\" Simple",
    "FB60P4DUO-I": "Forro Bajo 60 H4 Profundidad 440cm Henzo Tipo \"I\"",
    "FB60P4H3DUO-I": "Forro Bajo 60 H3 Profundidad 440cm Henzo Tipo \"I\"",
    "FB60P4HZ-LIN-I-D": "Forro Bajo 60 Profundidad 44cm Henzo Line Tipo \"I\" Doble",
    "FB60P4HZ-LIN-I-S": "Forro Bajo 60 Profundidad 44cm Henzo Line Tipo \"I\" Simple",
    "FB90DUO-I": "Forro Bajo 90 H4 Profundidad 8cm Henzo Tipo \"I\"",
    "FB90H3DUO-I": "Forro Bajo 90 H3 Profundidad 8cm Henzo Tipo \"I\"",
    "FB90HZ-LIN-I-D": "Forro Bajo 90 Profundidad 8cm Henzo Line Tipo \"I\" Doble",
    "FB90HZ-LIN-I-S": "Forro Bajo 90 Profundidad 8cm Henzo Line Tipo \"I\" Simple",
    "FB90P2DUO-I": "Forro Bajo 90 H4 Profundidad 220cm Henzo Tipo \"I\"",
    "FB90P2H3DUO-I": "Forro Bajo 90 H3 Profundidad 220cm Henzo Tipo \"I\"",
    "FB90P2HZ-LIN-I-D": "Forro Bajo 90 Profundidad 20cm Henzo Line Tipo \"I\" Doble",
    "FB90P2HZ-LIN-I-S": "Forro Bajo 90 Profundidad 20cm Henzo Line Tipo \"I\" Simple",
    "FB90P3DUO-I": "Forro Bajo 90 H4 Profundidad 340cm Henzo Tipo \"I\"",
    "FB90P3H3DUO-I": "Forro Bajo 90 H3 Profundidad 340cm Henzo Tipo \"I\"",
    "FB90P3HZ-LIN-I-D": "Forro Bajo 90 Profundidad 34cm Henzo Line Tipo \"I\" Doble",
    "FB90P3HZ-LIN-I-S": "Forro Bajo 90 Profundidad 34cm Henzo Line Tipo \"I\" Simple",
    "FB90P4DUO-I": "Forro Bajo 90 H4 Profundidad 440cm Henzo Tipo \"I\"",
    "FB90P4H3DUO-I": "Forro Bajo 90 H3 Profundidad 440cm Henzo Tipo \"I\"",
    "FB90P4HZ-LIN-I-D": "Forro Bajo 90 Profundidad 44cm Henzo Line Tipo \"I\" Doble",
    "FB90P4HZ-LIN-I-S": "Forro Bajo 90 Profundidad 44cm Henzo Line Tipo \"I\" Simple",
    "FB100DUO-I": "Forro Bajo 100 H4 Profundidad 8cm Henzo Tipo \"I\"",
    "FB100H3DUO-I": "Forro Bajo 100 H3 Profundidad 8cm Henzo Tipo \"I\"",
    "FB100HZ-LIN-I-D": "Forro Bajo 100 Profundidad 8cm Henzo Line Tipo \"I\" Doble",
    "FB100HZ-LIN-I-S": "Forro Bajo 100 Profundidad 8cm Henzo Line Tipo \"I\" Simple",
    "FB100P2DUO-I": "Forro Bajo 100 H4 Profundidad 220cm Henzo Tipo \"I\"",
    "FB100P2H3DUO-I": "Forro Bajo 100 H3 Profundidad 220cm Henzo Tipo \"I\"",
    "FB100P2HZ-LIN-I-D": "Forro Bajo 100 Profundidad 20cm Henzo Line Tipo \"I\" Doble",
    "FB100P2HZ-LIN-I-S": "Forro Bajo 100 Profundidad 20cm Henzo Line Tipo \"I\" Simple",
    "FB100P3DUO-I": "Forro Bajo 100 H4 Profundidad 340cm Henzo Tipo \"I\"",
    "FB100P3H3DUO-I": "Forro Bajo 100 H3 Profundidad 340cm Henzo Tipo \"I\"",
    "FB100P3HZ-LIN-I-D": "Forro Bajo 100 Profundidad 34cm Henzo Line Tipo \"I\" Doble",
    "FB100P3HZ-LIN-I-S": "Forro Bajo 100 Profundidad 34cm Henzo Line Tipo \"I\" Simple",
    "FB100P4DUO-I": "Forro Bajo 100 H4 Profundidad 440cm Henzo Tipo \"I\"",
    "FB100P4H3DUO-I": "Forro Bajo 100 H3 Profundidad 440cm Henzo Tipo \"I\"",
    "FB100P4HZ-LIN-I-D": "Forro Bajo 100 Profundidad 44cm Henzo Line Tipo \"I\" Doble",
    "FB100P4HZ-LIN-I-S": "Forro Bajo 100 Profundidad 44cm Henzo Line Tipo \"I\" Simple",
    "FB110DUO-I": "Forro Bajo 110 H4 Profundidad 8cm Henzo Tipo \"I\"",
    "FB110H3DUO-I": "Forro Bajo 110 H3 Profundidad 8cm Henzo Tipo \"I\"",
    "FB110P2DUO-I": "Forro Bajo 110 H4 Profundidad 220cm Henzo Tipo \"I\"",
    "FB110P2H3DUO-I": "Forro Bajo 110 H3 Profundidad 220cm Henzo Tipo \"I\"",
    "FB110P3DUO-I": "Forro Bajo 110 H4 Profundidad 340cm Henzo Tipo \"I\"",
    "FB110P3H3DUO-I": "Forro Bajo 110 H3 Profundidad 340cm Henzo Tipo \"I\"",
    "FB110P4DUO-I": "Forro Bajo 110 H4 Profundidad 440cm Henzo Tipo \"I\"",
    "FB110P4H3DUO-I": "Forro Bajo 110 H3 Profundidad 440cm Henzo Tipo \"I\"",
    "FB120DUO-I": "Forro Bajo 120 H4 Profundidad 8cm Henzo Tipo \"I\"",
    "FB120H3DUO-I": "Forro Bajo 120 H3 Profundidad 8cm Henzo Tipo \"I\"",
    "FB120HZ-LIN-I-D": "Forro Bajo 120 Profundidad 8cm Henzo Line Tipo \"I\" Doble",
    "FB120HZ-LIN-I-S": "Forro Bajo 120 Profundidad 8cm Henzo Line Tipo \"I\" Simple",
    "FB120P2DUO-I": "Forro Bajo 120 H4 Profundidad 220cm Henzo Tipo \"I\"",
    "FB120P2H3DUO-I": "Forro Bajo 120 H3 Profundidad 220cm Henzo Tipo \"I\"",
    "FB120P2HZ-LIN-I-D": "Forro Bajo 120 Profundidad 20cm Henzo Line Tipo \"I\" Doble",
    "FB120P2HZ-LIN-I-S": "Forro Bajo 120 Profundidad 20cm Henzo Line Tipo \"I\" Simple",
    "FB120P3DUO-I": "Forro Bajo 120 H4 Profundidad 340cm Henzo Tipo \"I\"",
    "FB120P3H3DUO-I": "Forro Bajo 120 H3 Profundidad 340cm Henzo Tipo \"I\"",
    "FB120P3HZ-LIN-I-D": "Forro Bajo 120 Profundidad 34cm Henzo Line Tipo \"I\" Doble",
    "FB120P3HZ-LIN-I-S": "Forro Bajo 120 Profundidad 34cm Henzo Line Tipo \"I\" Simple",
    "FB120P4DUO-I": "Forro Bajo 120 H4 Profundidad 440cm Henzo Tipo \"I\"",
    "FB120P4H3DUO-I": "Forro Bajo 120 H3 Profundidad 440cm Henzo Tipo \"I\"",
    "FB120P4HZ-LIN-I-D": "Forro Bajo 120 Profundidad 44cm Henzo Line Tipo \"I\" Doble",
    "FB120P4HZ-LIN-I-S": "Forro Bajo 120 Profundidad 44cm Henzo Line Tipo \"I\" Simple",
    "FB1100HZ-LIN-I-D": "Forro Bajo 110 Profundidad 8cm Henzo Line Tipo \"I\" Doble",
    "FB1100HZ-LIN-I-S": "Forro Bajo 110 Profundidad 8cm Henzo Line Tipo \"I\" Simple",
    "FB1100P2HZ-LIN-I-D": "Forro Bajo 110 Profundidad 20cm Henzo Line Tipo \"I\" Doble",
    "FB1100P2HZ-LIN-I-S": "Forro Bajo 110 Profundidad 20cm Henzo Line Tipo \"I\" Simple",
    "FB1100P3HZ-LIN-I-D": "Forro Bajo 110 Profundidad 34cm Henzo Line Tipo \"I\" Doble",
    "FB1100P3HZ-LIN-I-S": "Forro Bajo 110 Profundidad 34cm Henzo Line Tipo \"I\" Simple",
    "FB1100P4HZ-LIN-I-D": "Forro Bajo 110 Profundidad 44cm Henzo Line Tipo \"I\" Doble",
    "FB1100P4HZ-LIN-I-S": "Forro Bajo 110 Profundidad 44cm Henzo Line Tipo \"I\" Simple",
    "FF": "Frente Falso / (FF)Parte superior Duo sin espacio interno utilizable.",
    "-FH": "FRENTE HORNO",
    "FU": "Frente Util / (FF)Parte superior Duo sin espacio interno utilizable.",
    "FV68H3DUO-U": "Lateral Bajo P68 H3 Duo Tipo \"U\" / Ancho 8cm",
    "FV78H3DUO-U": "Lateral Bajo P78 H3 Duo Tipo \"U\" / Ancho 8cm",
    "FV92DUO-U-H14": "Estructura Superior Ancho 920 H14 Tipo \"U\" Para Desayunadores Duo",
    "FV92DUO-U-H14-H2": "Estructura Inferior Ancho 920 H2 Tipo \"U\" Con perfil gola superior",
    "FV92DUO-U-H14-H3": "Estructura Inferior Ancho 920 H3 Tipo \"U\" Con perfil gola superior",
    "FV94H3DUO-U": "Lateral Bajo P94 H3 Duo Tipo \"U\" / Ancho 8cm",
    "FV102DUO-U-H14": "Estructura Superior Ancho 102 H14 Tipo \"U\" Para Desayunadores Duo",
    "FV102DUO-U-H14-H2": "Estructura Inferior Ancho 102 H2 Tipo \"U\" Con perfil gola superior",
    "FV102DUO-U-H14-H3": "Estructura Inferior Ancho 102 H3 Tipo \"U\" Con perfil gola superior",
    "FV102H3DUO-U": "Lateral Bajo P102 H3 Duo Tipo \"U\" / Ancho 8cm",
    "FV104H3DUO-U": "Lateral Bajo P104 H3 Duo Tipo \"U\" / Ancho 8cm",
    "FV112DUO-U-H14": "Estructura Superior Ancho 112 H14 Tipo \"U\" Para Desayunadores Duo",
    "FV112DUO-U-H14-H2": "Estructura Inferior Ancho 112 H2 Tipo \"U\" Con perfil gola superior",
    "FV112DUO-U-H14-H3": "Estructura Inferior Ancho 112 H3 Tipo \"U\" Con perfil gola superior",
    "FV120DUO-U-H14": "Estructura Superior Ancho 120 H14 Tipo \"U\" Para Desayunadores Duo",
    "FV120DUO-U-H14-H2": "Estructura Inferior Ancho 120 H2 Tipo \"U\" Con perfil gola superior",
    "FV120DUO-U-H14-H3": "Estructura Inferior Ancho 120 H3 Tipo \"U\" Con perfil gola superior",
    "FV120H3DUO-U": "Lateral Bajo P120 H3 Duo Tipo \"U\" / Ancho 8cm",
    "FV132DUO-U-H14": "Estructura Superior Ancho 132 H14 Tipo \"U\" Para Desayunadores Duo",
    "FV132DUO-U-H14-H2": "Estructura Inferior Ancho 132 H2 Tipo \"U\" Con perfil gola superior",
    "FV132DUO-U-H14-H3": "Estructura Inferior Ancho 132 H3 Tipo \"U\" Con perfil gola superior",
    "G1ABLAV": "Modulo de lavanderia",
    "-H": "CUCHILLERO",
    "-H-AM": "CUCHILLERO AMBIALINE",
    "-H-OR": "CUCHILLERO ORGANILE",
    "-H-R": "CUCHILLERO Y ROLLOS SL 45CM / CUCHILLERO Y ROLLOS SL 60CM / CUCHILLERO Y ROLLOS SL 90CM",
    "-H-R-AM_HURO45MR": "CUCH Y ROLLOS MR 45CM",
    "-H-R-AM_HURO60MR": "CUCH Y ROLLOS MR 60CM",
    "-H-R-AM_HURO90MR": "CUCH Y ROLLOS MR 90CM",
    "-H-S": "CUCHILLERO Y SUBDIVISI SL 45CM / CUCHILLERO Y SUBDIVISI SL 60CM / CUCHILLERO Y SUBDIVISI SL 90CM",
    "-H-S-AM_HUSU45MR": "CUCH Y SUB MR 45CM",
    "-H-S-AM_HUSU60MR": "CUCH Y SUB MR 60CM",
    "-H-S-AM_HUSU90MR": "CUCH Y SUB MR 90CM",
    "HU": "Vidrio Humo",
    "-INPR": "INTERRUPTOR DE PRESION",
    "KIT AVENTOS": "Kit para servodrive en aventos",
    "KIT-EXTENSION SERVO DRIVE": "Kit de extension para servodrive",
    "KIT-GAVETA SERVO DRIVE": "Kit para servodrive en gavetas",
    "LAD34H2-LIN-L-STC": "Lateral alto Derecho P34 H2 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD34H3-LIN-L-STC": "Lateral alto Derecho P34 H3 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD34H5-LIN-L-STC": "Lateral alto Derecho P34 H5 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD34H6-LIN-L-STC": "Lateral alto Derecho P34 H6 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD34H7-LIN-L-STC": "Lateral alto Derecho P34 H7 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD34-LIN-L-STC": "Lateral alto Derecho P34 H4 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD44H2-LIN-L-STC": "Lateral alto Derecho P44 H2 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD44H3-LIN-L-STC": "Lateral alto Derecho P44 H3 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD44H5-LIN-L-STC": "Lateral alto Derecho P44 H5 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD44H6-LIN-L-STC": "Lateral alto Derecho P44 H6 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD44H7-LIN-L-STC": "Lateral alto Derecho P44 H7 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD44-LIN-L-STC": "Lateral alto Derecho P44 H4 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD60H2-LIN-L-STC": "Lateral alto Derecho P60 H2 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD60H3-LIN-L-STC": "Lateral alto Derecho P60 H3 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD60H5-LIN-L-STC": "Lateral alto Derecho P60 H5 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD60H6-LIN-L-STC": "Lateral alto Derecho P60 H6 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD60H7-LIN-L-STC": "Lateral alto Derecho P60 H7 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD60-LIN-L-STC": "Lateral alto Derecho P60 H4 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD67H2-LIN-L-STC": "Lateral alto Derecho P67 H2 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD67H3-LIN-L-STC": "Lateral alto Derecho P67 H3 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD67H5-LIN-L-STC": "Lateral alto Derecho P67 H5 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD67H6-LIN-L-STC": "Lateral alto Derecho P67 H6 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD67H7-LIN-L-STC": "Lateral alto Derecho P67 H7 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAD67-LIN-L-STC": "Lateral alto Derecho P67 H4 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI34H2-LIN-L-STC": "Lateral alto Izquierdo P34 H2 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI34H3-LIN-L-STC": "Lateral alto Izquierdo P34 H3 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI34H5-LIN-L-STC": "Lateral alto Izquierdo P34 H5 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI34H6-LIN-L-STC": "Lateral alto Izquierdo P34 H6 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI34H7-LIN-L-STC": "Lateral alto Izquierdo P34 H7 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI34-LIN-L-STC": "Lateral alto Izquierdo P34 H4 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI44H2-LIN-L-STC": "Lateral alto Izquierdo P44 H2 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI44H3-LIN-L-STC": "Lateral alto Izquierdo P44 H3 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI44H5-LIN-L-STC": "Lateral alto Izquierdo P44 H5 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI44H6-LIN-L-STC": "Lateral alto Izquierdo P44 H6 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI44H7-LIN-L-STC": "Lateral alto Izquierdo P44 H7 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI44-LIN-L-STC": "Lateral alto Izquierdo P44 H4 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI60H2-LIN-L-STC": "Lateral alto Izquierdo P60 H2 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI60H3-LIN-L-STC": "Lateral alto Izquierdo P60 H3 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI60H5-LIN-L-STC": "Lateral alto Izquierdo P60 H5 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI60H6-LIN-L-STC": "Lateral alto Izquierdo P60 H6 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI60H7-LIN-L-STC": "Lateral alto Izquierdo P60 H7 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI60-LIN-L-STC": "Lateral alto Izquierdo P60 H4 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI67H2-LIN-L-STC": "Lateral alto Izquierdo P67 H2 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI67H3-LIN-L-STC": "Lateral alto Izquierdo P67 H3 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI67H5-LIN-L-STC": "Lateral alto Izquierdo P67 H5 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI67H6-LIN-L-STC": "Lateral alto Izquierdo P67 H6 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI67H7-LIN-L-STC": "Lateral alto Izquierdo P67 H7 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LAI67-LIN-L-STC": "Lateral alto Izquierdo P67 H4 Line. Tipo Estructura Corta / Para colocar sobre lateral bajo con perfil gola, ancho 8cm",
    "LB68DUO-U": "Lateral Bajo P68 H4 Duo Tipo \"U\" Sin Perfil Gola / Ancho 8cm",
    "LB68H3DUO-U": "Lateral Bajo P68 H3 Duo Tipo \"U\" Sin Perfil Gola / Ancho 8cm",
    "LB68H3HZ-LIN-U-S": "Lateral Bajo Izquierdo P68 H3 Henzo Line Tipo \"U\" Simple / Ancho 8cm",
    "LB68HZ-LIN-U-D": "Lateral Bajo Izquierdo P68 Henzo Line Tipo \"U\" Doble / Ancho 8cm",
    "LB68HZ-LIN-U-S": "Lateral Bajo Izquierdo P68 Henzo Line Tipo \"U\" Simple / Ancho 8cm",
    "LB82DUO-U": "Lateral Bajo P82 H4 Duo Tipo \"U\" Sin Perfil Gola / Ancho 8cm",
    "LB82H3DUO-U": "Lateral Bajo P82 H3 Duo Tipo \"U\" Sin Perfil Gola / Ancho 8cm",
    "LB82H3HZ-LIN-U-S": "Lateral Bajo Izquierdo P82 H3 Henzo Line Tipo \"U\" Simple / Ancho 8cm",
    "LB82HZ-LIN-U-D": "Lateral Bajo Izquierdo P82 Henzo Line Tipo \"U\" Doble / Ancho 8cm",
    "LB82HZ-LIN-U-S": "Lateral Bajo Izquierdo P82 Henzo Line Tipo \"U\" Simple / Ancho 8cm",
    "LB94DUO-U": "Lateral Bajo P94 H4 Duo Tipo \"U\" Sin Perfil Gola / Ancho 8cm",
    "LB94H3DUO-U": "Lateral Bajo P94 H3 Duo Tipo \"U\" Sin Perfil Gola / Ancho 8cm",
    "LB94H3HZ-LIN-U-S": "Lateral Bajo Izquierdo P94 H3 Henzo Line Tipo \"U\" Simple / Ancho 8cm",
    "LB94HZ-LIN-U-D": "Lateral Bajo Izquierdo P94 Henzo Line Tipo \"U\" Doble / Ancho 8cm",
    "LB94HZ-LIN-U-S": "Lateral Bajo Izquierdo P94 Henzo Line Tipo \"U\" Simple / Ancho 8cm",
    "LB104DUO-U": "Lateral Bajo P104 H4 Duo Tipo \"U\" Sin Perfil Gola / Ancho 8cm",
    "LB104H3DUO-U": "Lateral Bajo P104 H3 Duo Tipo \"U\" Sin Perfil Gola / Ancho 8cm",
    "LB104H3HZ-LIN-U-S": "Lateral Bajo Izquierdo P104 H3 Henzo Line Tipo \"U\" Simple / Ancho 8cm",
    "LB104HZ-LIN-U-D": "Lateral Bajo Izquierdo P104 Henzo Line Tipo \"U\" Doble / Ancho 8cm",
    "LB104HZ-LIN-U-S": "Lateral Bajo Izquierdo P104 Henzo Line Tipo \"U\" Simple / Ancho 8cm",
    "LB120DUO-U": "Lateral Bajo P120 H4 Duo Tipo \"U\" Sin Perfil Gola / Ancho 8cm",
    "LB120H3DUO-U": "Lateral Bajo P120 H3 Duo Tipo \"U\" Sin Perfil Gola / Ancho 8cm",
    "LB120H3HZ-LIN-U-S": "Lateral Bajo Izquierdo P120 H3 Henzo Line Tipo \"U\" Simple / Ancho 8cm",
    "LB120HZ-LIN-U-D": "Lateral Bajo Izquierdo P120 Henzo Line Tipo \"U\" Doble / Ancho 8cm",
    "LB120HZ-LIN-U-S": "Lateral Bajo Izquierdo P120 Henzo Line Tipo \"U\" Simple / Ancho 8cm",
    "-LBA": "LUZ LED BASE",
    "LBD34DUO-L": "Lateral Bajo Derecho P34 Duo Tipo \"L\" / Ancho 8cm",
    "LBD34H2HZ-LIN-L-D": "Lateral Bajo Derecho P34 H2 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBD34H2HZ-LIN-L-S": "Lateral Bajo Derecho P34 H2 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBD34H3DUO-L": "Lateral Bajo Derecho P34 H3 Duo Tipo \"L\" / Ancho 8cm",
    "LBD34H3HZ-LIN-L-D": "Lateral Bajo Derecho P34 H3 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBD34H3HZ-LIN-L-S": "Lateral Bajo Derecho P34 H3 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBD34HZ-LIN-L-D": "Lateral Bajo Derecho P34 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBD34HZ-LIN-L-S": "Lateral Bajo Derecho P34Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBD44DUO-L": "Lateral Bajo Derecho P44 Duo Tipo \"L\" / Ancho 8cm",
    "LBD44H2HZ-LIN-L-D": "Lateral Bajo Derecho P44 H2 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBD44H2HZ-LIN-L-S": "Lateral Bajo Derecho P44 H2 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBD44H3DUO-L": "Lateral Bajo Derecho P44 H3 Duo Tipo \"L\" / Ancho 8cm",
    "LBD44H3HZ-LIN-L-D": "Lateral Bajo Derecho P44 H3 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBD44H3HZ-LIN-L-S": "Lateral Bajo Derecho P44 H3 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBD44HZ-LIN-L-D": "Lateral Bajo Derecho P44 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBD44HZ-LIN-L-S": "Lateral Bajo Derecho P44 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBD60DUO-L": "Lateral Bajo Derecho P60 Duo Tipo \"L\" / Ancho 8cm",
    "LBD60H2HZ-LIN-L-D": "Lateral Bajo Derecho P60 H2 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBD60H2HZ-LIN-L-S": "Lateral Bajo Derecho P60 H2 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBD60H3DUO-L": "Lateral Bajo Derecho P60 H3 Duo Tipo \"L\" / Ancho 8cm",
    "LBD60H3HZ-LIN-L-D": "Lateral Bajo Derecho P60 H3 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBD60H3HZ-LIN-L-S": "Lateral Bajo Derecho P60 H3 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBD60H6DUO-L": "Lateral Bajo Derecho P60 H6 Duo Tipo \"L\" / Ancho 8cm",
    "LBD60HZ-LIN-L-D": "Lateral Bajo Derecho P60 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBD60HZ-LIN-L-S": "Lateral Bajo Derecho P60 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBD67DUO-L": "Lateral Bajo Derecho P67 Duo Tipo \"L\" / Ancho 8cm",
    "LBD67H2HZ-LIN-L-D": "Lateral Bajo Derecho P67 H2 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBD67H2HZ-LIN-L-S": "Lateral Bajo Derecho P67 H2 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBD67H3DUO-L": "Lateral Bajo Derecho P67 H3 Duo Tipo \"L\" / Ancho 8cm",
    "LBD67H3HZ-LIN-L-D": "Lateral Bajo Derecho P67 H3 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBD67H3HZ-LIN-L-S": "Lateral Bajo Derecho P67 H3 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBD67H6DUO-L": "Lateral Bajo Derecho P67 H6 Duo Tipo \"L\" / Ancho 8cm",
    "LBD67HZ-LIN-L-D": "Lateral Bajo Derecho P67 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBD67HZ-LIN-L-S": "Lateral Bajo Derecho P67 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBI34DUO-L": "Lateral Bajo Izquierdo P34 Duo Tipo \"L\" / Ancho 8cm",
    "LBI34H2HZ-LIN-L-D": "Lateral Bajo Izquierdo P34 H2 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBI34H2HZ-LIN-L-S": "Lateral Bajo Izquierdo P34 H2 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBI34H3DUO-L": "Lateral Bajo Izquierdo P34 H3 Duo Tipo \"L\" / Ancho 8cm",
    "LBI34H3HZ-LIN-L-D": "Lateral Bajo Izquierdo P34 H3 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBI34H3HZ-LIN-L-S": "Lateral Bajo Izquierdo P34 H3 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBI34HZ-LIN-L-D": "Lateral Bajo Izquierdo P34 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBI34HZ-LIN-L-S": "Lateral Bajo Izquierdo P34 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBI44DUO-L": "Lateral Bajo Izquierdo P44 Duo Tipo \"L\" / Ancho 8cm",
    "LBI44H2HZ-LIN-L-D": "Lateral Bajo Izquierdo P44 H2 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBI44H2HZ-LIN-L-S": "Lateral Bajo Izquierdo P44 H2 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBI44H3DUO-L": "Lateral Bajo Izquierdo P44 H3 Duo Tipo \"L\" / Ancho 8cm",
    "LBI44H3HZ-LIN-L-D": "Lateral Bajo Izquierdo P44 H3 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBI44H3HZ-LIN-L-S": "Lateral Bajo Izquierdo P44 H3 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBI44HZ-LIN-L-D": "Lateral Bajo Izquierdo P44 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBI44HZ-LIN-L-S": "Lateral Bajo Izquierdo P44 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBI60DUO-L": "Lateral Bajo Izquierdo P60 Duo Tipo \"L\" / Ancho 8cm",
    "LBI60H2HZ-LIN-L-D": "Lateral Bajo Izquierdo P60 H2 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBI60H2HZ-LIN-L-S": "Lateral Bajo Izquierdo P60 H2 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBI60H3DUO-L": "Lateral Bajo Izquierdo P60 H3 Duo Tipo \"L\" / Ancho 8cm",
    "LBI60H3HZ-LIN-L-D": "Lateral Bajo Izquierdo P60 H3 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBI60H3HZ-LIN-L-S": "Lateral Bajo Izquierdo P60 H3 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBI60H6DUO-L": "Lateral Bajo Izquierdo P60 H6 Duo Tipo \"L\" / Ancho 8cm",
    "LBI60HZ-LIN-L-D": "Lateral Bajo Izquierdo P60 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBI60HZ-LIN-L-S": "Lateral Bajo Izquierdo P60 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBI67DUO-L": "Lateral Bajo Izquierdo P67 Duo Tipo \"L\" / Ancho 8cm",
    "LBI67H2HZ-LIN-L-D": "Lateral Bajo Izquierdo P67 H2 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBI67H2HZ-LIN-L-S": "Lateral Bajo Izquierdo P67 H2 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBI67H3DUO-L": "Lateral Bajo Izquierdo P67 H3 Duo Tipo \"L\" / Ancho 8cm",
    "LBI67H3HZ-LIN-L-D": "Lateral Bajo Izquierdo P67 H3 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBI67H3HZ-LIN-L-S": "Lateral Bajo Izquierdo P67 H3 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LBI67H6DUO-L": "Lateral Bajo Izquierdo P67 H6 Duo Tipo \"L\" / Ancho 8cm",
    "LBI67HZ-LIN-L-D": "Lateral Bajo Izquierdo P67 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LBI67HZ-LIN-L-S": "Lateral Bajo Izquierdo P67 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "-LDD": "LATERAL DERECHO DECORATIVO",
    "-LD-E3": "LATERAL DERECHO \"E3\"",
    "-LD-I": "LATERAL DERECHO \"I\"",
    "-LD-J": "LATERAL DERECHO \"J\"",
    "-LEX": "LUZ LEX EXTERIOR",
    "-LF": "LUZ LED FULL",
    "-LGA": "LUZ LED GAVETAS",
    "LH12D60DUO-L": "Lateral Auxiliar H12 Derecho P60 Duo Tipo \"L\" / Ancho 8cm",
    "LH12D67DUO-L": "Lateral Auxiliar H12 Derecho P67 Duo Tipo \"L\" / Ancho 8cm",
    "LH12D70DUO-L": "Lateral Auxiliar H12 Derecho P70 Duo Tipo \"L\" / Ancho 8cm",
    "LH12D80DUO-L": "Lateral Auxiliar H12 Derecho P80 Duo Tipo \"L\" / Ancho 8cm",
    "LH12I60DUO-L": "Lateral Auxiliar H12 Izquierdo P60 Duo Tipo \"L\" / Ancho 8cm",
    "LH12I67DUO-L": "Lateral Auxiliar H12 Izquierdo P67 Duo Tipo \"L\" / Ancho 8cm",
    "LH12I70DUO-L": "Lateral Auxiliar H12 Izquierdo P70 Duo Tipo \"L\" / Ancho 8cm",
    "LH12I80DUO-L": "Lateral Auxiliar H12 Izquierdo P80 Duo Tipo \"L\" / Ancho 8cm",
    "-LID": "LATERAL IZQUIERDO DECORATIVO",
    "-LI-E3": "LATERAL IZQUIERDO \"E3\"",
    "-LI-I": "LATERAL IZQUIERDO \"I\"",
    "-LI-J": "LATERAL IZQUIERDO \"J\"",
    "-LIM": "LIMITADOR APERTURA HF",
    "-LLT": "LUZ LED LATERAL DOBLE",
    "-LRC": "LUZ LED CONTINUA",
    "-LRE": "LUZ LED REPISAS",
    "-LSP": "LUZ LED SPOT",
    "-LSU": "LUZ LED SUPERIOR",
    "-LTC": "LUZ LED TUBO",
    "-LTD": "LUZ LED LATERAL DERECHA",
    "-LTI": "LUZ LED LATERAL IZQUIERDA",
    "LXD34H12HZ-LIN-L-D": "Lateral Auxiliar Derecho P34 H12 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXD34H12HZ-LIN-L-S": "Lateral Auxiliar Derecho P34 H12 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXD34HEHZ-LIN-L-D": "Lateral Auxiliar Derecho P34 HE Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXD34HEHZ-LIN-L-S": "Lateral Auxiliar Derecho P34 HE Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXD34HZ-LIN-L-D": "Lateral Auxiliar Derecho P34 H11 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXD34HZ-LIN-L-S": "Lateral Auxiliar Derecho P34 H11 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXD44H12HZ-LIN-L-D": "Lateral Auxiliar Derecho P44 H12 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXD44H12HZ-LIN-L-S": "Lateral Auxiliar Derecho P44 H12 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXD44HEHZ-LIN-L-D": "Lateral Auxiliar Derecho P44 HE Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXD44HEHZ-LIN-L-S": "Lateral Auxiliar Derecho P44 HE Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXD44HZ-LIN-L-D": "Lateral Auxiliar Derecho P44 H11 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXD44HZ-LIN-L-S": "Lateral Auxiliar Derecho P44 H11 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXD60DUO-L": "Lateral Auxiliar H11 Derecho P60 Duo Tipo \"L\" / Ancho 8cm",
    "LXD60H12HZ-LIN-L-D": "Lateral Auxiliar Derecho P60 H12 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXD60H12HZ-LIN-L-S": "Lateral Auxiliar Derecho P60 H12 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXD60HEHZ-LIN-L-D": "Lateral Auxiliar Derecho P60 HE Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXD60HEHZ-LIN-L-S": "Lateral Auxiliar Derecho P60 HE Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXD60HZ-LIN-L-D": "Lateral Auxiliar Derecho P60 H11 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXD60HZ-LIN-L-S": "Lateral Auxiliar Derecho P60 H11 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXD67DUO-L": "Lateral Auxiliar H11 Derecho P67 Duo Tipo \"L\" / Ancho 8cm",
    "LXD67H12HZ-LIN-L-D": "Lateral Auxiliar Derecho P67 H12 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXD67H12HZ-LIN-L-S": "Lateral Auxiliar Derecho P67 H12 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXD67HEHZ-LIN-L-D": "Lateral Auxiliar Derecho P67 HE Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXD67HEHZ-LIN-L-S": "Lateral Auxiliar Derecho P67 HE Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXD67HZ-LIN-L-D": "Lateral Auxiliar Derecho P67 H11 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXD67HZ-LIN-L-S": "Lateral Auxiliar Derecho P67 H11 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXD70DUO-L": "Lateral Auxiliar H11 Derecho P70 Duo Tipo \"L\" / Ancho 8cm",
    "LXD80DUO-L": "Lateral Auxiliar H11 Derecho P80 Duo Tipo \"L\" / Ancho 8cm",
    "LXI34H12HZ-LIN-L-D": "Lateral Auxiliar Izquierdo P34 H12 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXI34H12HZ-LIN-L-S": "Lateral Auxiliar Izquierdo P34 H12 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXI34HEHZ-LIN-L-D": "Lateral Auxiliar Izquierdo P34 HE Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXI34HEHZ-LIN-L-S": "Lateral Auxiliar Izquierdo P34 HE Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXI34HZ-LIN-L-D": "Lateral Auxiliar Izquierdo P34 H11 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXI34HZ-LIN-L-S": "Lateral Auxiliar Izquierdo P34 H11 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXI44H12HZ-LIN-L-D": "Lateral Auxiliar Izquierdo P44 H12 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXI44H12HZ-LIN-L-S": "Lateral Auxiliar Izquierdo P44 H12 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXI44HEHZ-LIN-L-D": "Lateral Auxiliar Izquierdo P44 HE Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXI44HEHZ-LIN-L-S": "Lateral Auxiliar Izquierdo P44 HE Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXI44HZ-LIN-L-D": "Lateral Auxiliar Izquierdo P44 H11 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXI44HZ-LIN-L-S": "Lateral Auxiliar Izquierdo P44 H11 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXI60DUO-L": "Lateral Auxiliar H11 Izquierdo P60 Duo Tipo \"L\" / Ancho 8cm",
    "LXI60H12HZ-LIN-L-D": "Lateral Auxiliar Izquierdo P60 H12 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXI60H12HZ-LIN-L-S": "Lateral Auxiliar Izquierdo P60 H12 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXI60HEHZ-LIN-L-D": "Lateral Auxiliar Izquierdo P60 HE Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXI60HEHZ-LIN-L-S": "Lateral Auxiliar Izquierdo P60 HE Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXI60HZ-LIN-L-D": "Lateral Auxiliar Izquierdo P60 H11 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXI60HZ-LIN-L-S": "Lateral Auxiliar Izquierdo P60 H11 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXI67DUO-L": "Lateral Auxiliar H11 Izquierdo P67 Duo Tipo \"L\" / Ancho 8cm",
    "LXI67H12HZ-LIN-L-D": "Lateral Auxiliar Izquierdo P67 H12 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXI67H12HZ-LIN-L-S": "Lateral Auxiliar Izquierdo P67 H12 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXI67HEHZ-LIN-L-D": "Lateral Auxiliar Izquierdo P67 HE Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXI67HEHZ-LIN-L-S": "Lateral Auxiliar Izquierdo P67 HE Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXI67HZ-LIN-L-D": "Lateral Auxiliar Izquierdo P67 H11 Henzo Line Tipo \"L\" Doble / Ancho 8cm",
    "LXI67HZ-LIN-L-S": "Lateral Auxiliar Izquierdo P67 H11 Henzo Line Tipo \"L\" Simple / Ancho 8cm",
    "LXI70DUO-L": "Lateral Auxiliar H11 Izquierdo P70 Duo Tipo \"L\" / Ancho 8cm",
    "LXI80DUO-L": "Lateral Auxiliar H11 Izquierdo P80 Duo Tipo \"L\" / Ancho 8cm",
    "MES-E3-GOTD": "Meson Desayunador Gota Derecho",
    "MES-E3-GOTI": "Meson Desayunador Gota Izquierdo",
    "MET-14,6-H31-P3": "Base metalica para bar decorativo",
    "MR": "Vidrio Marron",
    "MTX90 DESAYDUOP68": "Premeson MTX Desayunador Duo P68",
    "MTX90 DESAYDUOP82": "Premeson MTX Desayunador Duo P82",
    "MTX90 DESAYDUOP94": "Premeson MTX Desayunador Duo P94",
    "MTX90 DESAYDUOP104": "Premeson MTX Desayunador Duo P104",
    "MTX90 DESAYDUOP120": "Premeson MTX Desayunador Duo P120",
    "-O": "OLLERO",
    "-OL": "ORGANIZADOR DE LIMPIEZA",
    "-ON": "TIP-ON GAVETAS",
    "-ONI": "TIP-ON EN GAVETA INFERIOR",
    "-O-P_OLPO60SL": "OLLAS Y PORTAPLATOS SL 60 CM",
    "-O-P_OLPO90SL": "OLLAS Y PORTAPLATOS SL 90 CM",
    "OTP10B-DUO": "Oreja Baja Tipo Puerta ancho 10cm H4",
    "OTP10BH3-DUO": "Oreja Baja Tipo Puerta ancho 10cm H3",
    "OTP10BH6-DUO": "Oreja Baja Tipo Puerta ancho 10cm H6",
    "OTP10B-HZ-LIN-D": "Oreja Baja Henzo Line Doble",
    "OTP10B-HZ-LIN-S": "Oreja Baja Henzo Line Simple",
    "OTP10XH12-HZ-LIN": "Oreja Auxiliar Henzo Line H12",
    "OTP10X-HZ-LIN": "Oreja Auxiliar Henzo Line H11",
    "OTP10X-INV-HZ-LIN": "Oreja Auxiliar Invertida Henzo Line",
    "OTP15B-DUO": "Oreja Baja Tipo Puerta ancho 15cm H4",
    "OTP15BH3-DUO": "Oreja Baja Tipo Puerta ancho 15cm H3",
    "OTP15BH6-DUO": "Oreja Baja Tipo Puerta ancho 15cm H6",
    "OTP15B-HZ-LIN-D": "Oreja Baja Henzo Line Doble",
    "OTP15B-HZ-LIN-S": "Oreja Baja Henzo Line Simple",
    "OTP15XH12-HZ-LIN": "Oreja Auxiliar Henzo Line H12",
    "OTP15X-HZ-LIN": "Oreja Auxiliar Henzo Line H11",
    "OTP15X-INV-HZ-LIN": "Oreja Auxiliar Invertida Henzo Line",
    "OTP20B-DUO": "Oreja Baja Tipo Puerta ancho 20cm H4",
    "OTP20BH3-DUO": "Oreja Baja Tipo Puerta ancho 20cm H3",
    "OTP20BH6-DUO": "Oreja Baja Tipo Puerta ancho 20cm H6",
    "OTP20B-HZ-LIN-D": "Oreja Baja Henzo Line Doble",
    "OTP20B-HZ-LIN-S": "Oreja Baja Henzo Line Simple",
    "OTP20XH12-HZ-LIN": "Oreja Auxiliar Henzo Line H12",
    "OTP20X-HZ-LIN": "Oreja Auxiliar Henzo Line H11",
    "OTP20X-INV-HZ-LIN": "Oreja Auxiliar Invertida Henzo Line",
    "OX": "Vidrio Onix",
    "-P": "PORTAPLATOS",
    "PATA-DES-DUO": "Pata Desayunador Duo",
    "-PCD": "PORTA CINTURONES INF DER",
    "-PCI": "PORTA CINTURONES INF IZQ",
    "-PCOD": "PORTA CORBATAS SUP DER",
    "-PCOI": "PORTA CORBATAS SUP IZQ",
    "-PCOPX3": "PORTACOPAS X3",
    "-PFC": "PERFORACION CENTRAL PARA EST",
    "-PFD": "PERFORACION DERECHA PARA EST",
    "-PFI": "PERFORACION IZQUIERDA PARA EST",
    "-PGVD": "DESTAJE PARA PERFIL GOLA VERTICA DERECHO",
    "-PGVI": "DESTAJE PARA PERFIL GOLA VERTICA IZQUIERDO",
    "PIE AMIGO 30X25": "Pie de amigo ancho 25 alto 300 profundidad 250",
    "PIE AMIGO 30X55": "Pie de amigo ancho 25 alto 300 profundidad 550",
    "PORTAPLATOS BLUM": "Portaplatos Blum.",
    "PTA-TINF": "Tiradera inferior en puerta de aluminio",
    "PTA-TLAT": "Tiradera lateral en puerta de aluminio",
    "-PUSH": "PUERTA PUSH",
    "-R": "ROLLOS",
    "-R1": "REPISA METALICA LATITUD CERO",
    "-R2": "REPISA METALICA LATITUD CERO",
    "-R3": "REPISA METALICA LATITUD CERO",
    "-R4": "REPISA METALICA LATITUD CERO",
    "-R5": "REPISA METALICA LATITUD CERO",
    "-R6": "REPISA METALICA LATITUD CERO",
    "-R7": "REPISA METALICA LATITUD CERO",
    "-R-AM": "ROLLOS AMBIALINE",
    "RESP-TP-ST": "Respaldo tipo puerta",
    "-RFH": "REPISA HORNO",
    "R-INCL": "Repisa inclinada",
    "-RM": "REPISAS DE MADERA",
    "-RMV": "REPISA DE MADERA CON VIDRIO INCLUYE LUZ LED",
    "-R-OR": "ROLLOS ORGANILE",
    "-RV-BN": "REPISA VIDRIO BRONCE NATURAL",
    "-RV-EC": "REPISA VIDRIO EXTRA CLARO",
    "RV-ECT": "Repisa de vidrio",
    "-S": "SUBDIVISION",
    "-S/B": "GAVETA SIN BOX SIDE",
    "S/EST-NC": "Modulo New concept sin estructura metalica",
    "-S/SL": "SUBDIVISION 45 SL",
    "-S-AM": "SUBDIVISION AMBIALINE",
    "-SD": "SERVO DRIVE",
    "-SE=84": "SOPORTE ENTRE MESON-ESTR H=84",
    "-SE=94": "SOPORTE ENTRE MESON-ESTR H=94",
    "-SE=104": "SOPORTE ENTRE MESON-ESTR H=104",
    "-SE=112": "SOPORTE ENTRE MESON-ESTR H=112",
    "-SE=ESPECIAL": "SOPORTE ENTRE MESON-ESTR H=ESP",
    "SOALAB-PLE": "Frente de Aluminio Abatible Plegable Solido-Aluminio",
    "SOALCAB-PLE": "Frente de Aluminio Perfil Cuatro Abatible Plegable Solido - Aluminio",
    "SOALKAB-PLE": "Frente de Aluminio Perfil Crystal Abatible Plegable Solido - Aluminio",
    "SOP-BX8": "Soporte con pines para botella x 8",
    "SOP-BX12": "Soporte con pines para botella x 12",
    "SOP-BX14": "Soporte con pines para botella x 14",
    "SOP-BX15": "Soporte con pines para botella x 15",
    "SOP-BX18": "Soporte con pines para botella x 18",
    "SOP-BX24": "Soporte con pines para botella x 24",
    "-S-OR": "SUBDIVISION ORGANILE",
    "SOSOAB-PLE": "Abatible Plegable Frente Solido-Solido",
    "-S-R": "SUBDIVISION Y ROLLOS SL 45CM / SUBDIVISION Y ROLLOS SL 60CM / SUBDIVISION Y ROLLOS SL 90CM",
    "-S-R-AM_SURO45MR": "SUBD Y ROLLOS MR 45CM",
    "-S-R-AM_SURO60MR": "SUB Y ROLLOS MR 60CM",
    "-S-R-AM_SURO90MR": "SUB Y ROLLOS MR 90CM",
    "-T": "BOTELLERO",
    "T. COLGADOR": "Tubo colgador de closet",
    "-TA": "REPISA TAPA (DINAMIK)",
    "-TA-LS": "REPISA TAPA CON LUZ (DINAMIK)",
    "-TAPA-VID-166.4P6-E3": "TAPA VIDRIO ISLA CUBIK",
    "-TEXD": "TECHO DEC / CRUDO",
    "-TOMCOR": "TOMACORRIENTE DE CAJON",
    "-TPM": "TAPA PREMESON",
    "-TRI": "TRAVESANO COUNTRY INFERIOR",
    "-TRS": "TRAVESANO COUNTRY SUPERIOR",
    "TXC3": "Textil Claro 35cm",
    "TXC4": "Textil Claro 45cm",
    "-TXC6": "TEXTIL CLARO",
    "TXC9": "Textil Claro 90cm",
    "TXC27": "Textil Claro 27cm",
    "TXO3": "Textil Oscuro 35cm",
    "TXO4": "Textil Oscuro 45cm",
    "-TXO6": "TEXTIL OSUCURO",
    "TXO9": "Textil Oscuro 90cm",
    "TXO27": "Textil Oscuro 27cm",
    "UNI-90-ZOC-PER-ALU": "Union de 90 grados para Zocalo Perfil Aluminio",
    "UNI-180-ZOC-PER-ALU": "Union recta para Zocalo Perfil Aluminio",
    "-VI": "GAVETA CON COSTADO VIDRIO MRV",
    "VTDEC": "Vidrio Transparente Decorativo",
    "-ZAPPL(10)": "10 ZAPATERAS COLOR NEGRO",
    "-ZAPPL(20)": "20 ZAPATERAS COLOR NEGRO",
    "-ZAPPL(30)": "30 ZAPATERAS COLOR NEGRO",
    "ZF": "Perfil Aluminio Natural",
    "ZOCMEL": "Zocalo de melamina",
    "ZOCMEL2L": "Zocalo de melamina 2 lados",
    "ZOC-PER-ALU": "Zocalo Perfil Aluminio",



    // Claves agregadas desde LISTADO_CODIGOS_ZICOM.xlsx.

    "0520000006": "CEMENTO DE CONTACTO / GL",

    "0520000014": "COLA BLANCA / GL",

    "0520000039": "THINNER / GL",

    "0520000046": "TORNILLO AVELLANADO 1/2*6 / UNI",

    "0520000055": "WAIPE / UNI",

    "0520000074": "TAPAS ADHESIVAS BLANCAS PLASTICAS / UNI",

    "0520000084": "TUBO COLGADOR DE ALUMINIO / UNI",

    "0520000109": "FRENO PARA RIEL CON LATERAL / UNI",

    "0520000554": "TAPAS ADHESIVAS Ø14mm GRIS / UNI",

    "0520000575": "TAPAS ADHESIVAS Ø14mm ROBLE CHIC / UNI",

    "0520000579": "TAPAS ADHESIVAS Ø14mm LINO / UNI",

    "0520000736": "IN-FE-NIVELADOR NEGRO LEVELLER-LE3 / UNI",

    "0520000754": "TAPAS ADHESIVAS Ø14mm ROVERE / UNI",

    "0520000760": "TAPAS ADHESIVAS Ø14mm CEMENTO / UNI",

    "0520000763": "TAPAS ADHESIVAS Ø14mm CENIZA / UNI",

    "0520000785": "PATA REGULABLE PLASTICA 14-18cm / UNI",

    "0520000864": "TAPAS ADHESIVAS Ø14mm CARAMELO / UNI",

    "0520000866": "TAPAS ADHESIVAS Ø14mm PLOMO / UNI",

    "0520000869": "TORNILLO ALEN M5 / UNI",

    "0520000872": "REJILLA PARA VENTILLACION 70mm*230mm GRIS PLAST / UNI",

    "0520000878": "TAPAS ADHESIVAS Ø14mm ONIX / UNI",

    "0520000882": "TAPAS ADHESIVAS Ø14mm TAUPE / UNI",

    "0520000883": "TAPAS ADHESIVAS Ø14mm GALES / UNI",

    "0520000889": "TAPAS ADHESIVAS Ø14mm NIEBLA / UNI",

    "0520000895": "CAMPANOLA DE ALUMINIO NEGRO / UNI",

    "0520000897": "TAPAS ADHESIVAS Ø14mm CATANIA / UNI",

    "0520000906": "TAPAS ADHESIVAS Ø14mm CAPRI / UNI",

    "0520000907": "TAPAS ADHESIVAS Ø14mm NACAR / UNI",

    "0520000912": "TAPAS ADHESIVAS Ø14mm BELLOTA / UNI",

    "0520000915": "TAPAS ADHESIVAS Ø14mm PETRA / UNI",

    "0520000917": "TAPAS ADHESIVAS Ø14mm IBIZA / UNI",

    "0520000928": "TAPAS ADHESIVAS Ø14mm ROBLE NATURAL / UNI",

    "0520000929": "TAPAS ADHESIVAS Ø14mm NEGRO ROBLE / UNI",

    "0520000930": "TAPAS ADHESIVAS Ø14mm GRIS PIEDRA / UNI",

    "0520000933": "TAPAS ADHESIVAS Ø14mm TITANIO PIEDRA / UNI",

    "0520000934": "TAPAS ADHESIVAS Ø14mm FUME OLMO / UNI",

    "0520000935": "TAPAS ADHESIVAS Ø14mm TOQUILLA / UNI",

    "0520000936": "TAPAS ADHESIVAS Ø14mm AGAVE CUERO / UNI",

    "0520000937": "TAPAS ADHESIVAS Ø14mm PANELA / UNI",

    "0520000939": "TAPAS ADHESIVAS Ø14mm NEGRO PIEDRA / UNI",

    "0520000940": "TAPAS ADHESIVAS Ø14mm VERDE SILVESTRE / UNI",

    "0520000942": "TAPAS ADHESIVAS Ø14mm COSMOPOLITA / UNI",

    "0520000944": "TAPAS ADHESIVAS Ø14mm TIVOLI / UNI",

    "0520000945": "TAPAS ADHESIVAS Ø14mm ARUPO / UNI",

    "0520000947": "TAPAS ADHESIVAS Ø14mm BARDOLINO / UNI",

    "0520000949": "TAPAS ADHESIVAS Ø14mm GRIS INDUSTRIAL PIEDRA / UNI",

    "0520000950": "TAPAS ADHESIVAS Ø14mm MILAN ALAMO / UNI",

    "0520000951": "TAPAS ADHESIVAS Ø14mm NAZCA / UNI",

    "0520000952": "TAPAS ADHESIVAS Ø14mm BLANCO PIEDRA / UNI",

    "0520000953": "TAPAS ADHESIVAS Ø14mm BLANCO ROBLE / UNI",

    "0520000954": "TAPAS ADHESIVAS Ø14mm CENIT / UNI",

    "0520000960": "REJILLA 300*80 DE EMBUTIR NEGR MATE / UNI",

    "0520000973": "TAPAS ADHESIVAS Ø14mm AMARETTO CARTAGENA / UNI",

    "0520000974": "TAPAS ADHESIVAS Ø14mm BURDEOS MATE / UNI",

    "0520000975": "TAPAS ADHESIVAS Ø14mm AVELLANA MATE / UNI",

    "0520000976": "TAPAS ADHESIVAS Ø14mm INOX METAL / UNI",

    "0520000977": "TAPAS ADHESIVAS Ø14mm AMBAR METAL / UNI",

    "0520000978": "TAPAS ADHESIVAS Ø14mm MAMBA CUERO / UNI",

    "0520000979": "TAPAS ADHESIVAS Ø14mm GALAPAGOS CUERO / UNI",

    "0520000981": "TAPAS ADHESIVAS Ø14mm POSITANO SY / UNI",

    "0520000986": "TAPAS ADHESIVAS Ø14mm TRAMA TX / UNI",

    "0520000987": "TAPAS ADHESIVAS Ø14mm SEIKE NV / UNI",

    "0520000988": "TAPAS ADHESIVAS Ø14mm CUARZO PI / UNI",

    "10": "BOTELLERO - CONDIMENTERO 30 / BOTELLERO - FREGADERO / BOTELLERO 30",

    "105.90999999999998": "203.67307692307688",

    "107.1": "205.96153846153845",

    "11": "88.6 / BOTELLERO - CONDIMENTERO 45",

    "117.44999999999999": "225.86538461538458",

    "12": "GAVETA U - FREGADERO 1200 / ORGANIZADOR 45-60 SOLO APLICA PARA CAJON FREE",

    "123.24000000000004": "237.00000000000006",

    "14.299999999999999": "30",

    "142.04999999999998": "273.1730769230769",

    "149.28": "287.0769230769231",

    "157.31999999999994": "302.53846153846143",

    "2505000017": "ACOPLE DERECHO PARA RIEL TANDEM / UNI / 1 / SI_AD / SC / 0.9 / ACOPLE DERECHO PARA RIEL TANDEM / UNI / 1",

    "2505000018": "ACOPLE IZQUIERDO PARA RIEL TANDEM / UNI / 1 / SI_AI / SC / 0.9 / ACOPLE IZQUIERDO PARA RIEL TANDEM / UNI / 1",

    "2505000160": "Z45C470S.E2 TABIQUE / UNI / 2 / 4492540 / Z45C470S.E2 / und / 33.5 / 128.84615384615384 / Z45C470S.E2 TABIQUE / UNI / 2 / 4492540 / Z45C470S.E2 / und / 3 / 33.5 / 193.26923076923077 / Z45C470S.E2 TABIQUE / UNI / 1 / 4492540 / und / 29.86 / 57.42307692307692",

    "2505000193": "RIEL CON LATERAL DE 117*45 / UNI",

    "2505000203": "SOPORTE LATERAL NIQUEL CAMPANOLA / UNI",

    "2505000250": "Z4830B0I6 TINA PARA BOTELLAS / UNI / 1 / 4050440 / Z4830B0I6 / und / 44.36 / 85.3076923076923",

    "2505000257": "ZFZ.30GOI ESPECIERO ANCHO DE 300MM / UNI / 2 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / 7 / ZFZ.30GOI ESPECIERO ANCHO DE 300MM / 2 / 6484430 / 17.9 / 35.8 / 103.46153846153845",

    "2505000258": "ZFZ.45GOI ESPECIERO ANCHO DE 450mm / UNI / 2 / 6565430 / ZFZ.45GOI / 26.1 / 52.2 / 100.38461538461539 / ZFZ.45GOI ESPECIERO ANCHO DE 450mm / UNI / 2 / 6565430 / ZFZ.45GOI / und / 24.97 / 96.03846153846153",

    "2505000263": "ZRG.1094U GUARDACUERPO INAJUSTABLE 1094 / UNI / 2 / 3521006 / ZRG.1104U / 3.9 / 7.8 / ZRG.1094U GUARDACUERPO INAJUSTABLE 1094 / UNI / 3 / 3521006 / ZRG.1104U / 3.9 / 11.7 / ZRG.1094U GUARDACUERPO INAJUSTABLE 1094 / UNI / 4 / 3521006 / ZRG.1104U / 3.9 / 15.6 / ZRG.1094U GUARDACUERPO INAJUSTABLE 1094 / UNI / 1 / 3521006 / ZRG.1104U / 2 / 3.9 / 7.8 / 18.26923076923077 / ZRG.1094U GUARDACUERPO INAJUSTABLE 1094 / UNI / 1 / 3521006 / ZRG.1104U / 2 / 3.9 / 7.8 / 21.538461538461537 / ZRG.1094U GUARDACUERPO INAJUSTABLE 1094 / UNI / 2 / 3521006 / ZRG.1104U / 3.9 / 7.8 / 34.61538461538461 / ZRG.1094U GUARDACUERPO INAJUSTABLE 1094 / UNI / 3 / 3521006 / ZRG.1104U / 3.9 / 11.7 / 42.11538461538461 / ZRG.1094U GUARDACUERPO INAJUSTABLE 1094 / UNI / 3 / 3521006 / ZRG.1104U / 3.9 / 11.7 / 61.73076923076922",

    "2505000274": "ZSI.500FI2 CAJON INOXIDABLE CUADRO 202MM / UNI / 1 / 6702440 / ZSI.500FI2 / und / 28.54 / 54.88461538461538 / ZSI.500FI2 CAJON INOXIDABLE CUADRO 202MM / UNI / 1 / 6702440 / ZSI.500FI2 / und / 35.9 / 69.03846153846153",

    "2505000275": "ZSI.500FI3 CUBERTERO INOX 291*500mm / UNI / 1 / ZSI.500FI3 / 41.67 / 80.13461538461539 / ZSI.500FI3 SUBDIVISION INOX 291*500mm / UNId / 2 / 41.67 / 160.26923076923077 / ZSI.500FI3 CUBERTERO INOX 291*500mm / UNI / 2 / ZSI.500FI3 / 41.67 / 160.26923076923077",

    "2505000280": "ZSI.60VEI6 CUBERTERO INOX 600mm / UNI / 1 / 6715400 / ZSI.60VEI6 / jgo / 92.96 / 178.76923076923075",

    "2505000284": "ZSI.90VEI6 CUBERTERO INOX 900mm / UNI / 1 / 6720400 / ZSI.90VEI6 / jgo / 126.94 / 244.1153846153846",

    "2505000287": "ZSZ02M0 ORGALINE CUCHILLERO / UNI / 1 / 6484600 / ZSZ02M0 / und / 24.14 / 46.42307692307692",

    "2505000299": "ACCESORIO TIP-ON IZ+DER BLUM NEGRO / UNI / 1 / SI_TO / SC / 14.67 / ACCESORIO TIP-ON IZ+DER BLUM NEGRO / UNI / 1",

    "2505000570": "TIP ON (956.1004) VERSION CORTA P/TALADRAR, CON IMAN, GRIS / UNI / PUSH BLUM",

    "2505000584": "TIP ON (956A1004) VERSION LARGA P/TALADRAR, CON IMAN, GRIS / UNI / PUSH BLUM",

    "2505000669": "LOOX-SOCKET DE ALIMENTACION / UNI / 1 / KIT 9 ML/BANDA LED-BASICO / LOOX-SOCKET DE ALIMENTACION / UNI / 1 / KIT 9 ML/BANDA LED-SWITCH / LOOX-SOCKET DE ALIMENTACION / UNI / 1 / KIT ECO 4 ML/BANDA LED / LOOX-SOCKET DE ALIMENTACION / UNI / 1 / KIT 6 ML/BANDA LED-BASICO",

    "2505000696": "CORTADOR DE PAPEL ALUMINIO / UNI / 1 / 9068380 / ZSZ.02F0 / und / 36.59 / 70.36538461538461 / 200.3076923076923 / CORTADOR DE PAPEL ALUMINIO / UNI / 1 / 9068380 / ZSZ.02F0 / und / 36.59 / 70.36538461538461 / 280.44230769230774 / CORTADOR DE PAPEL ALUMINIO / UNI / 1 / 9068380 / ZSZ.02F0 / und / 36.59 / 70.36538461538461 / 360.5769230769231",

    "2505000697": "CORTADOR DE PAPEL FILM / UNI / 1 / 9068450 / ZSZ.01F0 / und / 39.03 / 75.0576923076923",

    "2505000698": "BASE H:02 FGV - EUROTORNILLO PREMONTADO 12mm / UNI / BASE BIS SIN FRENO",

    "2505000700": "BISAGRA 90° FGV - INTEREJE 45 - TACO 8 mm / UNI / 90° SIN FRENO",

    "2505000701": "BISAGRA PIE CORNER FGV - INTEREJE 45 - TACO 8 mm / UNI / BISAGRA EBT",

    "2505000702": "BISAGRA 175° FGV - INTEREJE 45 - TACO 8mm / UNI / BISAGRA EBT",

    "2505000703": "BISAGRA RECTA 100° FGV - INTEREJE 45 - TORNILLO 8mm / UNI / BIS SIN FRENO",

    "2505000712": "BISAGRA BLUM 155° CLIP - DESPENSA - TORN / UNI / 155° SIN FRENO / BLUM ANTIGUA",

    "2505000920": "Z40H177S DIVISOR TRANSVERSAL 300MM / UNI / 4 / 4022590 / und / 5.81 / 44.692307692307686",

    "2505001206": "DK-SI-NA-SMP-V-P45 / 2505000215 / TANDEM 450 mm 30 KG BLUM SVI PAR / UNI / 1 / DK-SI-NA-SMP-V-P40 / 2505003327 / TANDEM 400 mm 30 KG BLUM SVI PAR / UNI / 1",

    "2505001207": "DK-SI-SON-P45 / 2505000416 / RIEL TIPON SIN BLUMOTION 45cmSVI / UNI / 1 / DK-SI-SON-P40 / 2505000549 / RIEL TIPON SIN BLUMOTION 40cm SVI / UNI / 1",

    "2505001208": "DK-SI-NA-SMP-V-P35 / 2505000214 / TANDEM 350mm 30KG BLUM SVI PAR / UNI / 1 / SI_R / SC / 26.42 / DK-SI-NA-SMP-V-P27 / 2505000212 / TANDEM 270mm 30KG BLUM SVI PAR / UNI / 1 / SI_R / SC / 26.42",

    "2505001209": "DK-SI-SON-P3 / 2505000633 / RIEL TIPON SIN BLUMOTION 27cm SVI / UNI / 1 / SI_RT / SC / 16.81 / REVISAR FORMULA 3D EN LA RIEL",

    "2505001218": "LOOX-PUSH SWITCH DC 12V NEGRO / UNI / 1 / PULSADOR VERDE 24V",

    "2505001368": "IN- FGV- Base bisagra FRENADA, H:02 cuerpo simple con Euro premontado / UNI / BASE BIS FRENADA / FGV",

    "2505001370": "LOOX-MULTI SWITCH (3 SALIDAS) / UNI / 1 / MULTI SWICHT",

    "2505001407": "BISAGRA BLUM 155º SIN SIMBRA 70T7500NTL / UNI / 155º PUSH",

    "2505001418": "Guia de cuerpo LGB con BLUMOTION izquierda / UNI / 1 / SL_GBI / SC / 4922514 / 750.5001B / 13.54 / Guia de cuerpo LGB con BLUMOTION, izquierda / UNI / 1 / SL_GBI / SC / 4922514 / 750.5001B / 13.54 / Guia de cuerpo LGB con BLUMOTION, izquierda / UNI / 1 / 9554467 / 750.5001M / 28.48",

    "2505001420": "Guia de cuerpo LGB con BLUMOTION, derecha / UNI / 1 / SL_GBD / SC / 4737284 / 750.5001B / 13.54 / Guia de cuerpo LGB con BLUMOTION, derecha / UNI / 1 / 9554467 / 750.5001M / 28.48",

    "2505001422": "LGB Adaptadores para trasera Altura C izquierda / UNI / 1 / SL_ATCI / SC / 2260649 / ZB7C000S / 0.77 / LGB Adaptadores para trasera Altura C izquierda / UNI / 2 / SL_ATCI / SC / 2260649 / ZB7C000S / 0.77 / 1.54 / LGB Adaptadores para trasera Altura C izquierda / UNI / 1 / SL_ATMI / SC / 8650259 / ZB7M000S / 0.56",

    "2505001423": "LGB Adaptadores para trasera Altura C, derecha / UNI / 1 / SL_ATCD / SC / 8148550 / ZB7C000S / 0.77 / LGB Adaptadores para trasera Altura C derecha / UNI / 2 / SL_ATCD / SC / 8148550 / ZB7C000S / 0.77 / 1.54 / LGB Adaptadores para trasera Altura C derecha / UNI / 1 / SL_ATCD / SC / 8148550 / ZB7C000S / 0.77 / LGB Adaptadores para trasera Altura C derecha / UNI / 1 / SL_ATMD / SC / 3168711 / ZB7M000S / 0.56",

    "2505001424": "LGB ELEMENTO DE INSERCION - DELANTE, H138*334 VIDRIO / UNI / 1 / SL_EIV / SC / 8337328 / ZE7W1088G / 10 / VIDRIO DES 60 / 0138*0484 / VIDRIO DES 45 / 0138*0334 / LGB Elemento de insercion - delante, H138 Vidrio / UNI / 1 / SL_EIV / SC / 8337328 / ZE7W1088G / 10",

    "2505001425": "LGB Fijacion frontal, Altura C, cajon interior derecha / UNI / 1 / SL_FFCD / SC / 4331413 / ZI7.2C01.01 / 5.3",

    "2505001426": "LGB Pantalla frontal modulo extraible interior derecha / UNI / 1 / SL_PFFD / SC / 4050748 / ZI7.2C08 / 0.6",

    "2505001427": "LGB Pieza delantera con ranura para Cajon interior / UNI / 1 / SL_PDR / SC / 1302013 / ZV7.1043MN1 / 15.68",

    "2505001428": "LGB Tapa frontal modulo extraible interior, Altura C, izq / UNI / 1 / SL_TCCD / SC / 4939331 / ZI7.2CS3 / 1.81",

    "2505001429": "LGB Tapa frontal modulo extraible interior, Altura C, der / UNI / 1 / SL_TCCI / SC / 8190871 / ZI7.2CS3 / 1.81",

    "2505001430": "LGB Tapa interior Altura M/C/F/K, rectangular / UNI / 2 / SL_TI / SC / 2550380 / ZA7.5700.BT / 0.152 / 0.304 / LGB Tapa interior Altura M/C/F/K rectangular / UNI / 2 / SL_TI / SC / 2550380 / ZA7.5700.BT / 0.152 / 0.304 / LGB Tapa interior Altura M/C/F/K, rectangular / UNI / 2 / SL_TI / SC / 2550380 / ZA7.5700.BT / 0.08 / 0.16 / LGB Tapa interior Altura M/C/F/K rectangular / UNI / 4 / SL_TI / SC / 2550380 / ZA7.5700.BT / 0.08 / 0.32 / LGB Tapa interior Altura M/C/F/K rectangular / UNI / 2 / SL_TI / SC / 2550380 / ZA7.5700.BT / 0.08 / 0.16",

    "2505001433": "LGB Adaptadores para trasera Altura M derecha / UNI / 1 / SL_ATMD / SC / 3168711 / ZB7M000S / 0.56",

    "2505001434": "LGB Adaptadores para trasera Altura M izquierda / UNI / 1 / SL_ATMI / SC / 8650259 / ZB7M000S / 0.56",

    "2505001435": "LGB Fijacion frontal, Altura C, cajon interior, izquierda / UNI / 1 / SL_FFCI / SC / 9247976 / ZI7.2C01.01 / 5.3",

    "2505001436": "LGB Fijacion frontal, Altura M / UNI / 2 / SL_FFM / SC / 7054881 / ZF7M70E2 / 0.38 / 0.76 / LGB Fijacion frontal, Altura M / UNI / 4 / SL_FFM / SC / 7054881 / ZF7M70E2 / 0.38 / 1.52 / LGB Fijacion frontal, Altura M / UNI / 8 / SL_FFM / SC / 7054881 / ZF7M70E2 / 0.38 / 3.04",

    "2505001437": "LGB Fijacion frontal, Altura M, Cajon interior, derecha / UNI / 1 / SL_FFMD / SC / 9220596 / ZI7.0M01.01 / 3.62",

    "2505001438": "LGB Fijacion frontal, Altura M, Cajon interior, izquierda / UNI / 1 / SL_FFMI / SC / 2355874 / ZI7.0M01.01 / 3.62",

    "2505001439": "LGB Pantalla frontal modulo extraible interior izquierda / UNI / 1 / SL_PFFI / SC / 3048718 / ZI7.2C08 / 0.6",

    "2505001440": "LGB Pieza delantera Cajon interior con transversal / UNI / 1 / SL_PDI / SC / 5897587 / ZV7.1043C01 / 16.4",

    "2505001441": "LGB Tapa exterior rectangular / UNI / 2 / SL_TE / SC / 5077340 / ZA7.0700 / 0.08 / 0.16 / LGB Tapa exterior rectangular / UNI / 2 / SL_TE / SC / 5077340 / ZA7.0700 / 0.38 / 0.76 / LGB Tapa exterior rectangular / UNI / 4 / SL_TE / SC / 5077340 / ZA7.0700 / 0.38 / 1.52 / LGB Tapa exterior rectangular (Madeval) / UNI / 2 / SL_TE / SC / 5077340 / ZA7.0700 / 0.38 / 0.76",

    "2505001442": "LGB Tapa frontal cajon interior, Altura M, derecha / UNI / 1 / SL_TCMD / SC / 8248549 / ZI7.0MS3 / 1.33",

    "2505001443": "LGB Tapa frontal cajon interior, Altura M, izquierda / UNI / 1 / SL_TCMI / SC / 4682008 / ZI7.0MS3 / 1.33",

    "2505001445": "Perfil LGB pure derecho Altura M P500 / UNI / 1 / SL_PMD / SC / 2426165 / 770M5002S / 8.06",

    "2505001447": "Perfil LGB pure derecho, Altura C P500 / UNI / 1 / SL_PCD / SC / 2578980 / 770C5002S / 17.49 / Perfil LGB pure derecho, Altura C P500 mm / UNI / 1 / SL_PCD / SC / 2578980 / 770C5002S / 17.49 / Perfil LGB pure derecho, Altura C P500 / UNI / 2 / SL_PCD / SC / 2578980 / 770C5002S / 17.49 / 34.98",

    "2505001451": "Perfil LGB pure izquierdo, Altura C P500 / UNI / 1 / SL_PCI / SC / 2739732 / 770C5002S / 17.49",

    "2505001453": "Pieza de sujecion, Materia plastica / UNI / 1 / SL_PS / SC / 4412881 / Z31A0008 / 0.29 / Pieza de sujecion, Materia plastica / UNI / 1 / SL_PS / ` / 4412881 / Z31A0008 / 0.29",

    "2505001454": "LEGRABOX-CUBERTERO 300mm / UNI / 1 / B4497947 / ZC7S500BS3 / und / 88.08 / LEGRABOX-CUBERTERO 300mm / UNI / 2 / B4497947 / ZC7S500BS3 / und / 88.08 / 176.16 / 338.7692307692308 / LEGRABOX-CUBERTERO 300mm / B4497947 / ZC7S500BS3 / und / 88.08 / 160.14545454545453",

    "2505001455": "LEGRABOX-SUBDIVISION SIMPLE DE 100mm / UNI / 1 / B8693820 / ZC7S500RS1 / und / 24.02 / 215.57692307692307 / LEGRABOX-SUBDIVISION SIMPLE DE 100mm / UNI / 1 / B8693820 / ZC7S500RS1 / und / 24.02 / 104.46153846153845 / LEGRABOX-SUBDIVISION SIMPLE DE 100mm / UNI / 1 / B8693820 / ZC7S500RS1 / und / 24.02 / 160.9230769230769 / LEGRABOX-SUBDIVISION SIMPLE DE 100mm / UNI / 2 / B8693820 / ZC7S500RS1 / und / 24.02 / 48.04 / 207.11538461538458 / LEGRABOX-SUBDIVISION SIMPLE DE 100mm / UNI / 1 / B8693820 / ZC7S500RS1 / und / 24.02 / 273.84615384615387 / LEGRABOX-SUBDIVISION SIMPLE DE 100mm / UNI / 1 / B8693820 / ZC7S500RS1 / und / 24.02 / 189.40384615384613 / LEGRABOX-SUBDIVISION SIMPLE DE 100mm / UNI / 1 / B8693820 / ZC7S500RS1 / und / 24.02 / 302.3269230769231 / LEGRABOX-SUBDIVISION SIMPLE DE 100mm / UNI / 1 / B8693820 / ZC7S500RS1 / und / 24.02 / 102.65384615384615 / LEGRABOX-SUBDIVISION SIMPLE DE 100mm / UNI / 2 / B8693820 / ZC7S500RS1 / und / 24.02 / 48.04 / 148.84615384615384 / LEGRABOX-SUBDIVISION SIMPLE DE 100mm / UNI / 1 / B8693820 / ZC7S500RS1 / und / 24.02 / 159.1153846153846 / LEGRABOX-SUBDIVISION SIMPLE DE 100mm / B8693820 / ZC7S500RS1 / und / 24.02 / 43.67272727272727",

    "2505001456": "LEGRABOX-CUBO DOBLE / UNI / 2 / B7649432 / ZC7F400RSP / und / 50.71 / 101.42 / LEGRABOX-CUBO DOBLE / B7649432 / ZC7F400RSP / und / 50.71 / 92.19999999999999",

    "2505001457": "LEGRABOX-ADAPTADOR IMANTADO / UNI / 1 / B4293657 / ZC7A0U0C / und / 5.74 / 108.5576923076923 / LEGRABOX-ADAPTADOR IMANTADO / UNI / 2 / B4293657 / ZC7A0U0C / und / 5.74 / 11.48 / 217.1153846153846 / LEGRABOX-ADAPTADOR IMANTADO / B4293657 / ZC7A0U0C / und / 5.74 / 10.436363636363636",

    "2505001460": "LEGRABOX-ESPECIERO 300MM / UNI / 1 / B8058240 / ZC7G0P0I / und / 30.3 / LEGRABOX-ESPECIERO 300mm / B8058240 / ZC7G0P0I / und / 46.31 / 168.4 / LEGRABOX-ESPECIERO 300mm + subdivision / B8058240 / ZC7G0P0I / und / 46.31 / 221.78181818181818",

    "2505001462": "LEGRABOX-CUCHILLERO 300mm / UNI / 1 / B9809820 / ZC7M0200 / und / 30.3 / LEGRABOX-CUCHILLERO 300mm / B9809820 / ZC7M0200 / und / 30.3 / 55.090909090909086",

    "2505001463": "LEGRABOX-SUBDIVISION 200MM / UNI / 1 / SD20L / SC / B4595319 / ZC7S500RS2 / 29.36 / LEGRABOX-SUBDIVISION SIMPLE DE 200mm / UNI / 1 / B4595319 / ZC7S500RS2 / und / 29.36 / LEGRABOX-SUBDIVISION SIMPLE DE 200mm / UNI / 2 / B4595319 / ZC7S500RS2 / und / 29.36 / 3 / 88.08 / LEGRABOX-SUBDIVISION SIMPLE DE 200mm / UNI / 2 / B4595319 / ZC7S500RS2 / und / 29.36 / 58.72 / 256.13461538461536 / LEGRABOX-SUBDIVISION SIMPLE DE 200mm / UNI / 2 / B4595319 / ZC7S500RS2 / und / 29.36 / 58.72 / LEGRABOX-SUBDIVISION SIMPLE DE 200mm / UNI / 1 / B4595319 / ZC7S500RS2 / und / 29.36 / 109.5576923076923 / LEGRABOX-SUBDIVISION SIMPLE DE 200mm / B4595319 / ZC7S500RS2 / und / 29.36 / 53.381818181818176",

    "2505001466": "LEGRABOX-PORTAROLLOS 300mm ALUMINIO + PAPEL FILM / jgo / 1 / B5952958 / ZC7C0000 / 74.47 / LEGRABOX-PORTAROLLOS 300mm ALUMINIO + PAPEL FILM / B5952958 / ZC7C0000 / jgo / 74.47 / 135.39999999999998",

    "2505001483": "20F7011 AVENTOS LIMITADOR DE ANGULO P/HF / UNI / LIMITADOR AVENTOS",

    "2505001688": "METABOX Fijacion frontal, Altura M/K/H, Encaje a presion, izquierda / UNI / 1 / MET_FFI / SC / 1349033 / ZSF.1800 / 0.6 / METABOX Fijacion frontal, Altura M/K/H, Encaje a presion, izquierda / UNI / 2 / MET_FFI / SC / 1349033 / ZSF.1800 / 0.6 / 1.2 / METABOX Fijacion frontal, Altura M/K/H, Encaje a presion, izquierda / UNI / 1 / MET_GC / SC / 1810206 / ZRR.8000.01 / 4",

    "2505001689": "METABOX Fijacion frontal, Altura M/K/H, Encaje a presion, derecha / UNI / 1 / MET_FFD / SC / 1348903 / ZSF.1800 / 0.6 / METABOX Fijacion frontal, Altura M/K/H, Encaje a presion, derecha / UNI / 2 / MET_FFD / SC / 1348903 / ZSF.1800 / 0.6 / 1.2 / METABOX Fijacion frontal, Altura M/K/H, Encaje a presion, derecha / UNI / 1 / MET_FFI / SC / 1349033 / ZSF.1800 / 0.6",

    "2505001690": "METABOX Tapa, rectangular, izquierda, para ZSF.17/18, con impresion (blum) / PAR / 1 / MET_TR / SC / 1388276 / ZAA.3500.BL / 0.1",

    "2505001691": "BLUMOTION para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / 27.499999999999996 / BLUMOTION para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / 20.961538461538456 / BLUMOTION para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / 23.46153846153846 / BLUMOTION para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / 34.61538461538461 / BLUMOTION para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / 42.307692307692314 / BLUMOTION para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / BLUMOTION para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / 28.46153846153846 / BLUMOTION para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / 23.269230769230766",

    "2505001692": "JUEGO DE GUARDACUERPOS y SUJETADORES POSTERIORES 500 mm / UNI / 1 / MET_GC / SC / 1810206 / ZRR.8000.01 / 4 / JUEGO DE GUARDACUERPOS y SUJETADORES POSTERIORES 500 mm / UNI / 2 / MET-GC / SC / 1810206 / ZRR.8000.01 / 4 / 8 / JUEGO DE GUARDACUERPOS y SUJETADORES POSTERIORES 500 mm / UNI / 1 / MET_GC / SC / 1810206 / ZRR.8000.01 / 3.9",

    "2505001710": "LEGRABOX-BOTELLERO 200MM / UNI / 1 / BOLT / SC / B4250192 / ZC7B0200S / 27.61",

    "2505001724": "METABOX Fijacion frontal, Altura M, para cajon interior, izquierda / UNI / 1 / MET_FFII / SC / 3004030 / ZIF.3000.02 / 1.3",

    "2505001725": "METABOX Fijacion frontal, Altura M, para cajon interior, derecha / UNI / 1 / MET_FFID / SC / 3004110 / ZIF.3000.02 / 1.3",

    "2505001739": "DK-SI-NA-SMP-V-P50 / 2505001685 / TANDEM 500mm 30kg BLUM SVI PAR / UNI / 1 / SI_R / SC / 35.75 / REVISAR FORMULA 3D EN LA RIEL",

    "2505001740": "DK-SI-SON-P5 / 2505001712 / RIEL TIPON SIN BLUMOTION 50cmSVI / UNI / 1 / SI_RT / SC / 20.2 / REVISAR FORMULA 3D EN LA RIEL",

    "2505001742": "Z98.10E1 SOPORTE ESTABILIZADOR DE FRENTE Z98.10E1 / UNI / 1 / SOEF / SC / 6448980 / Z96.10E1 / 1.22 / CONFIRMAR SI VA ESTE ITEM / Z98.10E1 SOPORTE ESTABILIZADOR DE FRENTE Z98.10E1 / UNI / 2 / SOEF / SC / 6448980 / Z96.10E1 / 1.22 / 2.44",

    "2505001743": "ZST.500BB ESTABILIZADOR LATERAL TANDEMBOX / UNI / 1 / ELTA / SC / 4320680 / ZST.500BB / 16.6",

    "2505001756": "METABOX soporte esquinero doble gris / UNI / 2 / MET_SDG / SC / 2058260 / ZTU.00Z0 / 1.84 / 3.68 / METABOX soporte guardacuerpo doble gris (ZRU.00Z0) / UNI / 8 / MET_SDG / SC / 2058260 / ZRU.00Z0 / 1.7 / 13.6 / METABOX soporte guardacuerpo doblre gris (ZRU.00Z0) / UNI / 6 / MET_SDG / SC / 2058260 / ZRU.00Z0 / 1.7 / 10.2 / METABOX soporte guardacuerpo doblre gris (ZRU.00Z0) / UNI / 4 / MET_SDG / SC / 2058260 / ZRU.00Z0 / 1.7 / 6.8",

    "2505001757": "metabox guardacuerpo transversar para cortar 1104mm - blanco (ZRG.1104U / UNI / 1 / MET_GT / SC / 3521006 / ZRG.1104U / 3.9 / 56.88461538461539 / metabox guardacuerpo transversar para cortar 1104mm - blanco (ZRG.1104U / UNI / 1 / MET_GT / SC / 3521006 / ZRG.1104U / 3.9 / 95.76923076923076 / metabox guardacuerpo transversar para cortar 1104mm - blanco (ZRG.1104U / UNI / 3 / MET_GT / SC / 3521006 / ZRG.1104U / 3.9 / 11.7 / 77.69230769230771 / metabox guardacuerpo transversar para cortar 1104mm - blanco (ZRG.1104U / UNI / 1 / MET_GT / SC / 3521006 / ZRG.1104U / 3.9 / 56.15384615384616",

    "2505001759": "LGB separador transversal para cortar de 1080mm / UNI / 2 / SL_ST / SC / 3359148 / ZR7.1080U / 7.74 / 15.48 / LGB separador transversal para cortar de 1080mm / UNI / 1 / SL_ST / SC / 3359148 / ZR7.1080U / 7.74",

    "2505001760": "LGB soporte de separador transversal color pure / UNI / 12 / SL_SST / SC / 6678082 / ZC7U10E0 / 2.4 / 28.799999999999997 / LGB soporte de separador transversal color pure / UNI / 6 / SL_SST / SC / 6678082 / ZC7U10E0 / 2.4 / 14.399999999999999",

    "2505001808": "CUBERTERO ALUMETALIC DE 600mm gris, PARA METABOX / UNI / 1 / AC-SM-GR-C-060 / 660KO / 23 / 44.230769230769226",

    "2505001809": "CUBERTERO ALUMETALIC DE 900mm gris, PARA METABOX / UNI / 1 / AC-SM-GR-C-090 / 690KO / 48 / 92.3076923076923",

    "2505001846": "LEGRABOX-SEPARADOR TRANSVERSAL 1080mm / UNI / 1 / B3359148 / ZR7.1080U / und / 7.74 / LEGRABOX-SEPARADOR TRANSVERSAL 1080mm / UNI / 2 / B3359148 / ZR7.1080U / und / 7.74 / 15.48 / LEGRABOX-SEPARADOR TRANSVERSAL 1080mm / B3359148 / ZR7.1080U / und / 7.74 / 14.072727272727272",

    "2505001847": "LEGRABOX-SOPORTE SEPARADOR TRANSVERSAL / UNI / 4 / B6678082 / ZC7U10E0 / und / 2.4 / 9.6 / LEGRABOX-SOPORTE SEPARADOR TRANSVERSAL / UNI / 2 / B6678082 / ZC7U10E0 / und / 2.4 / 4.8 / 16.673076923076923 / LEGRABOX-SOPORTE SEPARADOR TRANSVERSAL / UNI / 2 / B6678082 / ZC7U10E0 / und / 2.4 / 4.8 / 24.115384615384613 / LEGRABOX-SOPORTE SEPARADOR TRANSVERSAL / UNI / 6 / B7649432 / ZC7F400RSP / und / 2.4 / 14.399999999999999 / 35.13461538461538 / LEGRABOX-SOPORTE SEPARADOR TRANSVERSAL / B6678082 / ZC7U10E0 / und / 2.4 / 4.363636363636363",

    "2505001848": "LEGRABOX- SEPARADOR LONGITUDINAL / UNI / 3 / B7297748 / ZC7U10F0 / und / 1.07 / 3.21 / 39.51923076923077 / LEGRABOX- SEPARADOR LONGITUDINAL / UNI / 4 / B7297748 / ZC7U10F0 / und / 1.07 / 4.28 / 41.57692307692308 / LEGRABOX- SEPARADOR LONGITUDINAL / UNI / 6 / B7297748 / ZC7U10F0 / und / 1.07 / 6.42 / 60.57692307692307 / LEGRABOX- SEPARADOR LONGITUDINAL / B7297748 / ZC7U10F0 / und / 1.07 / 1.9454545454545453",

    "2505001849": "PS ZTH.0350 SOPORTE DE PLATOS / UNI / 4 / 1366848 / ZC7T0350 / und / 45.11 / 347 / LEGRABOX-PORTAPLATOS / UNI / 4 / B1366848 / ZC7T0350 / und / 45.11 / 180.44 / 347 / LEGRABOX-PORTAPLATOS / B1366848 / ZC7T0350 / und / 45.11 / 82.01818181818182",

    "2505001850": "LEGRABOX-BOTELLERO 200mm / UNI / 1 / B4250192 / ZC7B0200S / und / 27.61 / LEGRABOX-BOTELLERO 200mm / B4250192 / ZC7B0200S / und / 27.61 / 50.199999999999996",

    "2505001864": "BISAGRA BLUM 95º PUSH SIN MUELLE- RINCONERO-ACERO / UNI / 95º PUSH",

    "2505001877": "LEGRABOX (T60L7540) UNI TIP-ON BLUMOTION LBX TIPO L3 D+I / UNI / 1 / 1365128 / T60L7540 / 16.82 / LEGRABOX (T60L7540) UNI TIP-ON BLUMOTION LBX TIPO L3 D+I / UNI / 1",

    "2505001878": "ADAPTADOR SIMETRICO PINON PARA ARBOL DE SINCRONIZACION / UNI / 2 / LGB ADAPTADOR SIMETRICO PINON PARA ARBOL DE SINCRONIZACION / UNI / 2 / 1512005 / T60.000D / 0.24 / 0.48",

    "2505001886": "BISAGRAS (71B3780) CLIP TOP ESTANDAR 110°. INTERIOR A PRESION / UNI / CODO FRENO",

    "2505001893": "LATERAL CAJON TEN SOLWMOTION H:90 BLANCO / PAR / 1 / TEN_LT / SC / 58X0A0F15000000 / 8.04",

    "2505001894": "SUJETADOR POSTERIOR BLANCO H:90 TEN ABIERTO PARA TUBOS LATERALES / PAR / 1 / TEN_SP / SC / 58AXPAF1U00A00 / 1.43",

    "2505001895": "SUJETADOR FRONTAL CAJON TEN PARA TORNILLOS / PAR / 1 / TEN_SF / SC / 58AX40F10000000 / 5.11",

    "2505001896": "TUBO LATERAL CACEROLERO BLANCO TEN 500mm / PAR / 1 / TEN_TL / SC / 58RX03F150 / 7.04 / TUBO LATERAL CACEROLERO BLANCO TEN 500mm / PAR / 2 / TEN_TL / SC / 58RX03F150 / 7.04 / 14.08 / TUBO LATERAL CACEROLERO BLANCO TEN 500mm / PAR / 1 / TEN_FM / SC / 58PX4AF10000000 / 19.59",

    "2505001897": "CONECTOR TRASERO INDIVIDUAL TEN PARA TUBOS BLANCOS / PAR / 1 / TEN_CT / SC / 58AXPWF100 / 1.18 / CONECTOR TRASERO INDIVIDUAL TEN PARA TUBOS BLANCOS / PAR / 2 / TEN_CT / SC / 58AXPWF100 / 1.18 / 2.36 / CONECTOR TRASERO INDIVIDUAL TEN PARA TUBOS BLANCOS / PAR / 1 / TEN_SU / SC / 58PX4AF11000000 / 5.11",

    "2505001943": "Metabox - divisores pequenos para botellas / UNI / 3 / 7632330 / 0.8 / 2.4000000000000004 / 32.69230769230769 / Metabox - divisores pequenos para botellas / UNI / 4 / 7632330 / 0.8 / 3.2 / 41.730769230769226 / Metabox - divisores pequenos para botellas / UNI / 6 / 7632330 / 0.8 / 4.800000000000001 / 52.30769230769231",

    "2505001952": "BISAGRAS (70T3750.TL) CLIP TOP ESTANDAR 110°. S/MUELLE MONTAJE INTERIOR / UNI / CODO PUSH",

    "2505002191": "REPUESTO ACCESORIO ROPA SUCIA YUTE / UNI / ROPA SUCIA",

    "2505002352": "ORG-SOPORTE TRANSVERSAL GRIS P/BOXIDE Z40H002Z / UNI / 4 / 6128130 / Z40H000A / und / 1 / 7.692307692307692 / ORG-SOPORTE TRANSVERSAL GRIS P/BOXIDE Z40H002Z / UNI / 2 / 6128130 / Z40H000A / und / 1 / 3.846153846153846",

    "2505002353": "ORG-ANTARO DIVISOR TRANSVERSAL P/CORTAR 1077mm GRIS Z40L1077A / UNI / 1 / 6127670 / Z40H1077A / und / 16.7 / 32.11538461538461 / ORG-ANTARO DIVISOR TRANSVERSAL P/CORTAR 1077mm GRIS Z40L1077A / UNI / 2 / 6127670 / Z40H1077A / und / 16.7 / 64.23076923076923",

    "2505002354": "ORG-ANTARO DIVISOR LONGITUDINAL 97.6mm GRIS Z43L100S / UNI / 3 / 4168100 / Z43H100S.01 / und / 3.58 / 20.653846153846153 / ORG-ANTARO DIVISOR LONGITUDINAL 97.6mm GRIS Z43L100S / UNI / 4 / 4168100 / Z43H100S.01 / und / 3.58 / 27.538461538461537 / ORG-ANTARO DIVISOR LONGITUDINAL 97.6mm GRIS Z43L100S / UNI / 6 / 4168100 / Z43H100S.01 / und / 3.58 / 41.30769230769231",

    "2505002357": "TAPA EMBELLECEDORA CAJON TEN BLANCO / UNI / 2 / TAPA EMBELLECEDORA CAJON TEN BLANCO / UNI / 2 / 51.25",

    "2505002367": "ENDEREZADOR PUERTA CLOSET 73347 HETTICH / UNI / EDIMCA SE PUDE CORTAR Y CAMBIAR ANCHOS",

    "2505002394": "TUBO LATERAL BLANCO UNISET 450mm / UNI",

    "2505002395": "CONECTOR TRASERO PARA UNISET FGV / UNI",

    "2505002398": "PERFIL ALUMINIO VERTICAL PARA PANELES / UNI / HERRAJES VIVVO",

    "2505002399": "PLACA DE FIJACION SIMPLE / UNI",

    "2505002400": "CLIP PARA PANELES / UNI",

    "2505002401": "SOPORTE DE REPISA IZQUIERDO / UNI",

    "2505002402": "SOPORTE DE REPISA DERECHO / UNI",

    "2505002403": "SOPORTE DE REPISA CENTRAL / UNI",

    "2505002404": "SOPORTE DE CAJONERA / UNI",

    "2505002405": "SOPORTE ZAPATERA IZQUIERA / UNI",

    "2505002406": "SOPORTE ZAPATERA DERECHA / UNI",

    "2505002407": "SOPORTE ZAPATERA CENTRAL / UNI",

    "2505002408": "PERFIL POSTERIOR ALUMINIO 600*25mm. L=590 / UNI",

    "2505002409": "PERFIL DELANTERO ALUMINIO 600*25 L=590 / UNI",

    "2505002410": "TUBO RECTANGULAR PARA ARMARIO / ML",

    "2505002411": "SOPORTE DE TUBO RECTANGULAR / UNI",

    "2505002412": "PLACA DE FIJACION ANGULAR / UNI",

    "2505002413": "SOPORTE DE ESTANTE ESQUINERO / UNI",

    "2505002416": "IN- FGV- BISAGRA RECTA INTEGRA FRENADA INTEREJE 45 mm / UNI / BIS FRENO",

    "2505002420": "LGB GUIA ESPECIAL TIP ON + BLUMOTION 270mm / UNI / 1 / SL_GB27 / SC / 1854191 / 750.2701B / 32.3 / LGB GUIA ESPECIAL TIP ON + BLUMOTION 270 mm / UNI / 1 / SL_GB27 / SC / 1854191 / 750.2701B / 32.3",

    "2505002421": "LEGRABOX (T60L7040) UNI TIP-ON BLUMOTION LBX TIPO S0 D+I / UNI / 1",

    "2505002435": "METABOX GRIS GUARDACUERPO TRANSVERSAR P/CORTAR 1104mm ZRG.1094U / UNI / 1 / MET_GT / SC / 3521006 / ZRG.1104U / 3.9 / 56.88461538461539 / METABOX GRIS GUARDACUERPO TRANSVERSAR P/CORTAR 1104mm ZRG.1094U / UNI / 1 / MET_GT / SC / 3521006 / ZRG.1104U / 3.9 / 96.15384615384615 / METABOX GRIS GUARDACUERPO TRANSVERSAR P/CORTAR 1104mm ZRG.1094U / UNI / 3 / MET_GT / SC / 3521006 / ZRG.1104U / 3.9 / 11.7 / 77.69230769230771 / METABOX GRIS GUARDACUERPO TRANSVERSAR P/CORTAR 1104mm ZRG.1094U / UNI / 1 / MET_GT / SC / 3521006 / ZRG.1104U / 3.9 / 56.15384615384616",

    "2505002437": "PERFIL POSTERIOR ALUMINIO 900 / UNI",

    "2505002438": "PERFIL DELANTERO ALUMINIO 900 / UNI",

    "2505002488": "LGB ELEMENTO DE INSERCION - DELANTE, H138*484 VIDRIO / UNI / 1 / SL_EIV / SC / 8337328 / ZE7W1088G / 10 / VIDRIO DES 60 / 0138*0484 / VIDRIO DES 45 / 0138*0334",

    "2505002530": "BISAGRA 95° CLIP TOP BLUMOTION R. FALSO NIQU / UNI / 95º CON FRENO",

    "2505002709": "SAFETI METALICO 5mm NIQUEL / UNI",

    "2505002785": "TUBO COLGADOR NEGRO / UNI",

    "2505002797": "BISAGRA RECTA BAYONETA CH SIN PRESION INTEREJE 48mm / UNI / BIS PUSH",

    "2505002798": "EXPULSOR PUSH EXTRA MEDIO STRONG 20mm MAGNETICO ANTRACITA / UNI / PUSH INSUMAD",

    "2505002900": "RIEL CON LATERAL BLANCA 117*50 / UNI",

    "2505002901": "TUBO LATERAL BLANCO UNISET 500mm / UNI",

    "2505002904": "MOVENTO(T51.7601)ACOPLE CON AJUSTE LATERAL /DERECHO / UNI / 1",

    "2505002905": "MOVENTO(T51.7601)ACOPLE CON AJUSTE LATERAL /IZQUIERDO / UNI / 1",

    "2505002907": "LEGRABOX / TBX (T60.000D)TIP-ON BLUMOTION PINON ADAPTADOR / UNI / 2",

    "2505002908": "TBX(T60.1125W)BARRA ESTABILIZADOR P/CORTAR TIP-ON BLUMOTION / UNI / 1 / LGB ARBOL DE SINCRONIZACION PARA CORTAR / UNI / 1 / 2101757 / T60.1125W / 3.98",

    "2505002909": "LEGRABOX (T60L7540) UNI TIP-ON BLUMOTION LBX TIPO L3 D+I / UNI / 1",

    "2505002910": "TBX(T60B000H)SOPORTE DE ARBOL SICRONIZAC / UNI / 1 / LGB SOPORTE DE ARBOL DE SINCRONIZACION / UNI / 1 / 5690481 / T60B000H / 0.25 / TBX(T60B000H)SOPORTE DE ARBOL SICRONIZACION /TIP-ON B.GRIS / UNI / 1",

    "2505002911": "TANDEM(295H5700)INMOVILIZADOR P/TANDEM-MOVENTO / UNI / 1 / TANDEM(295H5700)INMOVILIZADOR P/TANDEM-MOVENTO / UNI / 1 / SI_TO / SC / 14.67",

    "2505002912": "TANDEM(ZST.1089W)ARBOL P/INMOVILIZADOR TANDEM-MOVENTO. / UNI / 1",

    "2505002970": "BLUMOTION GRIS para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / 27.499999999999996 / BLUMOTION GRIS para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / 21.153846153846153 / BLUMOTION GRIS para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / 28.46153846153846 / BLUMOTION GRIS para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / 34.61538461538461 / BLUMOTION GRIS para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / 42.11538461538463 / BLUMOTION GRIS para sistemas de extension, 32x METABOX / UNI / 1 / MET_BM / SC / 9177736 / Z70.0320 / 3.5 / BLUMOTION GRIS para sistemas de extension, 32x METABOX / UNI / 1 / MET_TR / SC / 1388276 / ZAA.3500.BL / 0.1",

    "2505002972": "METABOX GRIS Guardacuerpo L=500 mm (2 guardacuerpos, 2 soportes) / UNI / 1 / MET_GC / SC / 1810206 / ZRR.8000.01 / 4 / METABOX GRIS Guardacuerpo L=500 mm (2 guardacuerpos, 2 soportes) / UNI / 2 / MET-GC / SC / 1810206 / ZRR.8000.01 / 4 / 8",

    "2505002980": "GUIA MX OCU.A30C GALV.AM.CLIP3D 16/450mm FRENO",

    "2505002981": "GUIA MX OCU.A30C GALV.AM.CLIP3D 16/450mm PUSH TO OPEN",

    "2505002982": "GUIA MX OCU.A30C GALV.AM.CLIP3D 16/500mm FRENO",

    "2505002983": "GUIA MX OCU.A30C GAL.PTO CLIP3D 16/500mm PUSH TO OPEN",

    "2505002984": "GUIA MX OCU.A30C GALV.AM.CLIP3D 16/350mm FRENO",

    "2505002985": "GUIA MX OCU.A30C GAL.PTO CLIP3D 16/350mm PUSH TO OPEN",

    "2505003007": "BISAGRA BLUM 155° CLIP TOP BLUMOTION 71B / UNI / 155° CON FRENO",

    "2505003328": "LOOX5-PERFIL 1104 ALUMINIO EMBUTIBLE 3000mm / ML / 1",

    "2505003330": "LOOX5-TERMINAL 1104 PLASTICO SILVER LED EMBUTIBLE / UNI / 1",

    "2505003515": "PROFILE 2194 ALU.SILVER.OPAL/2.5M / UNI / 1",

    "2505003516": "JUEGO TAPAS FINALES 6-PIEZAS PLAS.PLAT. / UNI / 1",

    "2505003517": "CLIP DE RETENCION P. 833.74.835/AC.INOX / UNI / 1",

    "2505003724": "PROTECTOR MUEBLE BAJO FREGADERO 200*0.55cm PLATEADO (AQUA-NO / UNI",

    "2505003837": "BASE (177H3100E) BASE RECTA. OMM. EXPANDO. BCOR / UNI / BASE RECTA / BCOR",

    "2505003857": "TAPAS P/METABOX (ZAA.35000H8) BRANDING MADEVAL, GRIS POLVO / UNI / 2 / MET_TR / SC / 1388276 / ZAA.3500.BL / 0.1 / 0.2 / TAPAS P/METABOX (ZAA.35000H8) BRANDING MADEVAL, GRIS POLVO / UNI / 2 / MET_FFID / SC / 3004110 / ZIF.3000.02 / 1.3 / 2.6 / TAPAS P/METABOX (ZAA.35000H8) BRANDING MADEVAL, GRIS POLVO / UNI / 2 / MET_TR / SC / 1388356 / ZAA.3500.BL / 0.1 / 0.2 / TAPAS P/METABOX (ZAA.35000H8) BRANDING MADEVAL, GRIS POLVO / UNI / 4 / MET_TR / SC / 1388276 / ZAA.3500.BL / 0.1 / 0.4 / TAPAS P/METABOX (ZAA.35000H8) BRANDING MADEVAL, GRIS POLVO / UNI / 2 / MET_FFD / SC / 1348903 / ZSF.1800 / 0.6 / 1.2 / TAPAS P/METABOX (ZAA.35000H8), BRANDING MADEVAL, GRIS POLVO, DER+IZQ / UNI / 2 / MET_TR / SC / 1388276 / ZAA.3500.BL / 0.1 / 0.2 / TAPAS P/METABOX (ZAA.35000H8), BRANDING MADEVAL, GRIS POLVO, DER+IZQ / UNI / 2 / MET_TR / SC / 1388356 / ZAA.3500.BL / 0.1 / 0.2",

    "2505003902": "AMBIA-LINE (ZC7S500RS1) MARCO P/CAJON MVBX. LN=500MM. ANCHO=100MM. INDIUM GREY / UNI / 1 / AMBIA-LINE (ZC7S500RS1) MARCO P/CAJON MVBX. LN=500MM. ANCHO=100MM. INDIUM GREY / UNI / 2",

    "2505003903": "AMBIA-LINE (ZC7S500RS2) MARCO P/CAJON MVBX. LN=500MM. ANCHO=200MM. IND / UNI / 1 / AMBIA-LINE (ZC7S500RS2) MARCO P/CAJON MVBX. LN=500MM. ANCHO=200MM. INDIUM GREY / UNI / 1 / AMBIA-LINE (ZC7S500RS2) MARCO P/CAJON MVBX. LN=500MM. ANCHO=200MM. INDIUM GREY / UNI / 3 / AMBIA-LINE (ZC7S500RS2) MARCO P/CAJON MVBX. LN=500MM. ANCHO=200MM. INDIUM GREY / UNI / 2",

    "2505003905": "AMBIA-LINE (ZC7A0P0C) ADAPTADOR IMANTADO P/MARCO CACEROLERO MVBX. INDI / UNI / 1 / AMBIA-LINE (ZC7A0P0C) ADAPTADOR IMANTADO P/MARCO CACEROLERO MVBX. INDI / UNI / 2",

    "2505003906": "AMBIA-LINE (ZC4U10E0) ALOJAMIENTO DE SEPARADOR TRANSVERSAL P/BOXCAP. INDIUM GREY / UNI / 2 / AMBIA-LINE (ZC4U10E0) ALOJAMIENTO DE SEPARADOR TRANSVERSAL P/BOXCAP. INDIUM GREY / UNI / 4",

    "2505003907": "AMBIA-LINE (ZC4U10F0) DIVISOR LONGITUDINAL P/SEPARADOR TRANSVERSAL P/MVBX. INDIU / UNI / 3 / AMBIA-LINE (ZC4U10F0) DIVISOR LONGITUDINAL P/SEPARADOR TRANSVERSAL P/MVBX. INDIU / UNI / 4 / AMBIA-LINE (ZC4U10F0) DIVISOR LONGITUDINAL P/SEPARADOR TRANSVERSAL P/MVBX. INDIU / UNI / 6",

    "2505003908": "AMBIA-LINE (ZC4U10E0) ALOJAMIENTO DE SEPARADOR TRANSVERSAL P/BOXCOVER. INDIUM GR / UNI / 2 / AMBIA-LINE (ZC4U10E0) ALOJAMIENTO DE SEPARADOR TRANSVERSAL P/BOXCOVER. INDIUM GR / UNI / 4",

    "2505003949": "BISAGRAS (71B3580) CLIP TOP BLUMOTION. BCOR. 110°. TOPE ANGULAR. P/ PRESION / UNI / RECTA FRENO",

    "2505003950": "BISAGRAS (74T1550.TL) CLIP TOP BISAGRA ESTANDAR 107°. S/MUELLE. BCOR. ATORNILLAR / UNI / RECTA PUSH",

    "2505003951": "BISAGRA BCOR (71B7550) 155° C/TOP BLUMOTION TOPE ANGULAR / UNI / 155º FRENO",

    "2505003952": "BISAGRA BCOR (70T7550.TLMB) 155° C/TOP ESTANDAR S/MUELLE / UNI / 155° PUSH",

    "2505003958": "SOPORTE KINTAI 5mm GRIS / UNI",

    "2505003960": "SOPORTE KINTAI 5mm ANTRACITA / UNI",

    "2505003984": "MATRIX BOX SLIM A30 VARI RECTANG ANTRACITA 500MM / PAR / 1 / 552.30.515 / MATRIX BOX SLIM A30 VARI RECTANG ANTRACITA 500MM / PAR / 2 / 552.30.515",

    "2505003985": "MATRIX BOX SLIM A30 PANEL FRON ALU ANTRACITA 1100MM / UNI / 1 / 552.31.509",

    "2505003986": "MATRIX BOX SLIM A30 FIJA FRONT/C-INT ANTRACITA H89 / UNI / 1 / 552.31.590",

    "2505003987": "MATRIX BOX SLIM A30 FIJA FRONT/C-INT ANTRACITA H128 / UNI / 1 / 552.31.591",

    "2505003989": "MATRIX BOX SLIM A30 SOPORTE DIV TRANSVERSAL ANTRACITA / UNI / 2 / 552.31.585 / MATRIX BOX SLIM A30 SOPORTE DIV TRANSVERSAL ANTRACITA / UNI / 4 / 552.31.585",

    "2505004107": "TAPA SLIM A30 ANTRACITA LOGO MADEVAL / UNI / 2 / 552.31.590 / TAPA SLIM A30 ANTRACITA LOGO MADEVAL / UNI / 2 / 552.22.555 / TAPA SLIM A30 ANTRACITA LOGO MADEVAL / UNI / 2 / 552.31.591 / TAPA SLIM A30 ANTRACITA LOGO MADEVAL / UNI / 2 / 552.30.515",

    "2505004191": "BASURERI KOMBI2 60 / UNI / BASURERO VIBO 60",

    "2505004193": "VIBO BASURERO PEQUENO 200*196*180 / UNI / BASURERO VIBO 60",

    "2505004206": "ENDEREZADOR/TENSOR P/FRENTES P/CORTAR H 2248 MAX, AJUSTE / UNI / DKOCINA no se puede cortar",

    "2505004260": "ARBOL DE SINCR.P/GUIAS C/TIP-ON, LARGO=1140 MM / UNI / 1 / SI_TO / SC / 14.67 / ARBOL DE SINCR.P/GUIAS C/TIP-ON, LARGO=1140 MM / UNI / 1",

    "2505004402": "LOOX5-LED3064 24V/9.6W/M 3000K/CRI90/50M / ML / 1",

    "2505004403": "LOOX5-DISTRIBUIDOR 6-CONTACTOS 24V/0.10M / UNI / 1 / KIT 9 ML/BANDA LED-BASICO / LOOX5-DISTRIBUIDOR 6-CONTACTOS 24V/0.10M / UNI / 1 / KIT 6 ML/BANDA LED-BASICO",

    "2505004405": "LOOX5-CABLE DE PROLONGACION 24V/2,0M / UNI / 1",

    "2505004406": "LOOX5-CABLE ALIM.BANDA LED 5MM/24V/2,0M / UNI / 1 / BANDA LED VERDE 24V COCINAS MADEVAL / LOOX5-CABLE ALIM.BANDA LED 5MM/24V/2,0M / UNI / 1 / BANDA LED VERDE CLOSET 24V / LOOX5-CABLE ALIM.BANDA LED 5MM/24V/2,0M / UNI / 1 / LUZ GAVETA SIN SENSOR 24V",

    "2505004409": "LOOX LED3090 24V/1.2W 30K/IRC90/ALU/2M / UNI / 1 / SPOT LED VERDE 24V",

    "2505004410": "LOOX5-CAJA MONT.EMBUT. PLAST.PLAT./CUAD/33.1 / UNI / 1",

    "2505004412": "LOOX5-PERFIL 1102 PLAS.BLANCO OPALINO/3M / ML / 1",

    "2505004413": "LOOX5-ECO TRANSF+ENCHU.100-127V/24V/40W / UNI / 1 / KIT ECO 4 ML/BANDA LED",

    "2505004415": "LOOX5-DISTRIBUID.6-CONT+INTERRUP. 24V/5.0A/NEG / UNI / 1 / KIT 9 ML/BANDA LED-SWITCH / LOOX5-DISTRIBUID.6-CONT+INTERRUP. 24V/5.0A/NEG / UNI / 1",

    "2505004416": "LOOX5-ALIMENT.LED 100-240V/24V/60W/PFC / UNI / 1 / KIT 6 ML/BANDA LED-BASICO",

    "2505004453": "SERVO (Z10NE04UG) TRANSFORMADOR 72W / UNI / 1 / KIT- AVENTOS",

    "2505004488": "LOOX5-TRANSFORMADOR 100-240V/24V/90W/PFC / UNI / 1 / KIT 9 ML/BANDA LED-BASICO / LOOX5-TRANSFORMADOR 100-240V/24V/90W/PFC / UNI / 1 / KIT 9 ML/BANDA LED-SWITCH",

    "2505004875": "GUIA CAJ MATRIX BOX SLIM A30C 16/500MM SINC / UNI / 1 / 433.03.655",

    "2610001012": "PROTECTOR ANTIDESLIZANTE ESTERILLA 120*50 GRIS / UNI",

    "350MM": "Altura M / Interior / BLUMOTION / 2505003894 / MERIVOBOX (450.3501B) GUIAS, BLUMOTION+TOBM, LN=350MM, IZQ.+DER. / UNI / 1 / 20.51 / Altura M / Interior / BLUMOTION / 2505003893 / MERIVOBOX (470M3502S) PERFIL \"M\", LN=350MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 19.53 / Altura M / Interior / BLUMOTION / 2505003876 / MERIVOBOX (ZB4M000S) ADAPTADOR TRASERA \"M\", INDIUM GREY, IZQ.+DER. / UNI / 1 / 1.09 / Altura M / Interior / BLUMOTION / 2505003883 / MERIVOBOX (ZI4.0MS1) FIJACION FRONTAL P/CAJON INT., INDIUM GREY, IZQ+DER / UNI / 1 / 11.29 / Altura M / Interior / BLUMOTION / 2505003887 / MERIVOBOX (ZV4.1042M) PIEZA DELANTERA P/CAJON INTERIOR, INDIUM GREY, ANM=1200MM / UNI / 1 / 16.52 / Altura M / Interior / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura M / Basico / BLUMOTION / 2505003894 / MERIVOBOX (450.3501B) GUIAS, BLUMOTION+TOBM, LN=350MM, IZQ.+DER. / UNI / 1 / 20.51 / Altura M / Basico / BLUMOTION / 2505003893 / MERIVOBOX (470M3502S) PERFIL \"M\", LN=350MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 19.53 / Altura M / Basico / BLUMOTION / 2505003876 / MERIVOBOX (ZB4M000S) ADAPTADOR TRASERA \"M\", INDIUM GREY, IZQ.+DER. / UNI / 1 / 1.09 / Altura M / Basico / BLUMOTION / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura M / Basico / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura M / Basico / TIP-ON / 2505003894 / MERIVOBOX (450.3501B) GUIAS, BLUMOTION+TOBM, LN=350MM, IZQ.+DER. / UNI / 1 / 20.51 / Altura M / Basico / TIP-ON / 2505003893 / MERIVOBOX (470M3502S) PERFIL \"M\", LN=350MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 19.53 / Altura M / Basico / TIP-ON / 2505003876 / MERIVOBOX (ZB4M000S) ADAPTADOR TRASERA \"M\", INDIUM GREY, IZQ.+DER. / UNI / 1 / 1.09 / Altura M / Basico / TIP-ON / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura M / Basico / TIP-ON / 2505003889 / MERIVOBOX (T60H4340) JUEGO PARA TOBM P/MERIVOBOX, L1, IZQ.+DER. / UNI / 1 / 16.98 / Altura M / Basico / TIP-ON / 2505002910 / TBX(T60B000H)SOPORTE DE ARBOL SICRONIZAC / UNI / 1 / 0.26 / Altura M / Basico / TIP-ON / 2505002908 / TBX(T60.1125W)BARRA ESTABILIZADOR P/CORTAR TIP-ON BLUMOTION / UNI / 1 / 4.07 / Altura M / Basico / TIP-ON / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003894 / MERIVOBOX (450.3501B) GUIAS, BLUMOTION+TOBM, LN=350MM, IZQ.+DER. / UNI / 1 / 20.51 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003893 / MERIVOBOX (470M3502S) PERFIL \"M\", LN=350MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 19.53 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003879 / MERIVOBOX (ZF4.50I2) FIJACION FRONTAL SUPERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.43 / 0.86 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003892 / MERIVOBOX (ZR4.350RS.E) GUARDACUERPO LONGITUDINAL. INDIUM GREY. LN=350 / PAR / 1 / 5.35 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003894 / MERIVOBOX (450.3501B) GUIAS, BLUMOTION+TOBM, LN=350MM, IZQ.+DER. / UNI / 1 / 20.51 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003893 / MERIVOBOX (470M3502S) PERFIL \"M\", LN=350MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 19.53 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003879 / MERIVOBOX (ZF4.50I2) FIJACION FRONTAL SUPERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.43 / 0.86 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003882 / MERIVOBOX (ZL4M00808) BOXCOVER, ALTURA \"E\", DELANTERO Y TRASERO, INDIUM GREY, I+ / UNI / 1 / 16.52 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003900 / VIDRIO LATERAL P/ CACEROLERO \"E\" MERIVOBOX C/BOXCOVER NL=350mm (26X9.5X0.8CM), P / PAR / 1 / 2.8 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003894 / MERIVOBOX (450.3501B) GUIAS, BLUMOTION+TOBM, LN=350MM, IZQ.+DER. / UNI / 1 / 20.51 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003893 / MERIVOBOX (470M3502S) PERFIL \"M\", LN=350MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 19.53 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003879 / MERIVOBOX (ZF4.50I2) FIJACION FRONTAL SUPERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.43 / 0.86 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003890 / MERIVOBOX (T60H4540) JUEGO PARA TOBM P/MERIVOBOX, L3, IZQ.+DER. / UNI / 1 / 16.98 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505002910 / TBX(T60B000H)SOPORTE DE ARBOL SICRONIZAC / UNI / 1 / 0.26 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505002908 / TBX(T60.1125W)BARRA ESTABILIZADOR P/CORTAR TIP-ON BLUMOTION / UNI / 1 / 4.07 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003892 / MERIVOBOX (ZR4.350RS.E) GUARDACUERPO LONGITUDINAL. INDIUM GREY. LN=350 / PAR / 1 / 5.35 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003894 / MERIVOBOX (450.3501B) GUIAS, BLUMOTION+TOBM, LN=350MM, IZQ.+DER. / UNI / 1 / 20.51 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003893 / MERIVOBOX (470M3502S) PERFIL \"M\", LN=350MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 19.53 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003879 / MERIVOBOX (ZF4.50I2) FIJACION FRONTAL SUPERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.43 / 0.86 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003890 / MERIVOBOX (T60H4540) JUEGO PARA TOBM P/MERIVOBOX, L3, IZQ.+DER. / UNI / 1 / 16.98 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505002910 / TBX(T60B000H)SOPORTE DE ARBOL SICRONIZAC / UNI / 1 / 0.26 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505002908 / TBX(T60.1125W)BARRA ESTABILIZADOR P/CORTAR TIP-ON BLUMOTION / UNI / 1 / 4.07 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003882 / MERIVOBOX (ZL4M00808) BOXCOVER, ALTURA \"E\", DELANTERO Y TRASERO, INDIUM GREY, I+ / UNI / 1 / 16.52 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003900 / VIDRIO LATERAL P/ CACEROLERO \"E\" MERIVOBOX C/BOXCOVER NL=350mm (26X9.5X0.8CM), P / PAR / 1 / 2.8 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003894 / MERIVOBOX (450.3501B) GUIAS, BLUMOTION+TOBM, LN=350MM, IZQ.+DER. / UNI / 1 / 20.51 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003893 / MERIVOBOX (470M3502S) PERFIL \"M\", LN=350MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 19.53 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003885 / MERIVOBOX (ZI4.4ES1) FIJACION FRONTAL P/CACEROLERO INT. C/ELEMENTO INSERCION, IN / UNI / 1 / 15.39 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003886 / MERIVOBOX (ZV4.1042NN) PIEZA FRONTAL P/CACEROLERO INTERIOR C/RANURA, INDIUM GREY / UNI / 1 / 16.7 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003896 / VIDRIO CLARO FRONTAL P/CACEROLERO \"E\" INT. MERIVOBOX MOD.1200mm(106.6X14.2X0.8CM / UNI / 1 / 11.05 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003882 / MERIVOBOX (ZL4M00808) BOXCOVER, ALTURA \"E\", DELANTERO Y TRASERO, INDIUM GREY, I+ / UNI / 1 / 16.52 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003900 / VIDRIO LATERAL P/ CACEROLERO \"E\" MERIVOBOX C/BOXCOVER NL=350mm (26X9.5X0.8CM), P / PAR / 1 / 2.8 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003894 / MERIVOBOX (450.3501B) GUIAS, BLUMOTION+TOBM, LN=350MM, IZQ.+DER. / UNI / 1 / 20.51 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003893 / MERIVOBOX (470M3502S) PERFIL \"M\", LN=350MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 19.53 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003884 / MERIVOBOX (ZI4.2ES1) FIJACION FRONTAL P/CACEROLERO INT., INDIUM GREY, IZQ+DER / UNI / 1 / 16.14 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003887 / MERIVOBOX (ZV4.1042M) PIEZA DELANTERA P/CAJON INTERIOR, INDIUM GREY, ANM=1200MM / UNI / 1 / 16.52 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003888 / MERIVOBOX (ZR4.1059U) GUARDACUERPO P/CAJON INT., ANM=1200MM, INDIUM GREY / UNI / 1 / 6 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003892 / MERIVOBOX (ZR4.350RS.E) GUARDACUERPO LONGITUDINAL. INDIUM GREY. LN=350 / PAR / 1 / 5.35 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47",

    "45.544000000000004": "87.58461538461539",

    "500MM": "Altura M / Interior / BLUMOTION / 2505003874 / MERIVOBOX (450.5001B) GUIAS, BLUMOTION+TOBM, LN=500MM, 40KG., IZQ.+DER. / UNI / 1 / 21.42 / Altura M / Interior / BLUMOTION / 2505003875 / MERIVOBOX (470M5002S) PERFIL \"M\", LN=500MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 20.21 / Altura M / Interior / BLUMOTION / 2505003876 / MERIVOBOX (ZB4M000S) ADAPTADOR TRASERA \"M\", INDIUM GREY, IZQ.+DER. / UNI / 1 / 1.09 / Altura M / Interior / BLUMOTION / 2505003883 / MERIVOBOX (ZI4.0MS1) FIJACION FRONTAL P/CAJON INT., INDIUM GREY, IZQ+DER / UNI / 1 / 11.29 / Altura M / Interior / BLUMOTION / 2505003887 / MERIVOBOX (ZV4.1042M) PIEZA DELANTERA P/CAJON INTERIOR, INDIUM GREY, ANM=1200MM / UNI / 1 / 16.52 / Altura M / Interior / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura M / Basico / BLUMOTION / 2505003874 / MERIVOBOX (450.5001B) GUIAS, BLUMOTION+TOBM, LN=500MM, 40KG., IZQ.+DER. / UNI / 1 / 21.42 / Altura M / Basico / BLUMOTION / 2505003875 / MERIVOBOX (470M5002S) PERFIL \"M\", LN=500MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 20.21 / Altura M / Basico / BLUMOTION / 2505003876 / MERIVOBOX (ZB4M000S) ADAPTADOR TRASERA \"M\", INDIUM GREY, IZQ.+DER. / UNI / 1 / 1.09 / Altura M / Basico / BLUMOTION / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura M / Basico / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura M / Basico / TIP-ON / 2505003874 / MERIVOBOX (450.5001B) GUIAS, BLUMOTION+TOBM, LN=500MM, 40KG., IZQ.+DER. / UNI / 1 / 21.42 / Altura M / Basico / TIP-ON / 2505003875 / MERIVOBOX (470M5002S) PERFIL \"M\", LN=500MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 20.21 / Altura M / Basico / TIP-ON / 2505003876 / MERIVOBOX (ZB4M000S) ADAPTADOR TRASERA \"M\", INDIUM GREY, IZQ.+DER. / UNI / 1 / 1.09 / Altura M / Basico / TIP-ON / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura M / Basico / TIP-ON / 2505003889 / MERIVOBOX (T60H4340) JUEGO PARA TOBM P/MERIVOBOX, L1, IZQ.+DER. / UNI / 1 / 16.98 / Altura M / Basico / TIP-ON / 2505002910 / TBX(T60B000H)SOPORTE DE ARBOL SICRONIZAC / UNI / 1 / 0.26 / Altura M / Basico / TIP-ON / 2505002908 / TBX(T60.1125W)BARRA ESTABILIZADOR P/CORTAR TIP-ON BLUMOTION / UNI / 1 / 4.07 / Altura M / Basico / TIP-ON / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003874 / MERIVOBOX (450.5001B) GUIAS, BLUMOTION+TOBM, LN=500MM, 40KG., IZQ.+DER. / UNI / 1 / 21.42 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003875 / MERIVOBOX (470M5002S) PERFIL \"M\", LN=500MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 20.21 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003879 / MERIVOBOX (ZF4.50I2) FIJACION FRONTAL SUPERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.43 / 0.86 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003880 / MERIVOBOX (ZR4.500RS.E) GUARDACUERPO LONGITUDINAL, INDIUM GREY, LN=500MM, D+I / UNI / 1 / 5.7 / Altura E / Basico / Guardacuerpo lateral / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Basico / BOXCAP [Metalico] / BLUMOTION / 2505003874 / MERIVOBOX (450.5001B) GUIAS, BLUMOTION+TOBM, LN=500MM, 40KG., IZQ.+DER. / UNI / 1 / 21.42 / Altura E / Basico / BOXCAP [Metalico] / BLUMOTION / 2505003875 / MERIVOBOX (470M5002S) PERFIL \"M\", LN=500MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 20.21 / Altura E / Basico / BOXCAP [Metalico] / BLUMOTION / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Basico / BOXCAP [Metalico] / BLUMOTION / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura E / Basico / BOXCAP [Metalico] / BLUMOTION / 2505003879 / MERIVOBOX (ZF4.50I2) FIJACION FRONTAL SUPERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.43 / 0.86 / Altura E / Basico / BOXCAP [Metalico] / BLUMOTION / 2505003881 / MERIVOBOX (ZL4.500S.E) BOXCAP ALTURA \"E\", LN=500MM, DER+IZQ, INDIUM GREY / UNI / 1 / 14.24 / Altura E / Basico / BOXCAP [Metalico] / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003874 / MERIVOBOX (450.5001B) GUIAS, BLUMOTION+TOBM, LN=500MM, 40KG., IZQ.+DER. / UNI / 1 / 21.42 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003875 / MERIVOBOX (470M5002S) PERFIL \"M\", LN=500MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 20.21 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003879 / MERIVOBOX (ZF4.50I2) FIJACION FRONTAL SUPERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.43 / 0.86 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003882 / MERIVOBOX (ZL4M00808) BOXCOVER, ALTURA \"E\", DELANTERO Y TRASERO, INDIUM GREY, I+ / UNI / 1 / 16.52 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003895 / VIDRIO LATERAL P/ CACEROLERO \"E\" MERIVOBOX C/BOXCOVER NL=500mm (41X9.5X0.8CM), P / PAR / 1 / 5.95 / Altura E / Basico / BOXCOVER [c/vidrio] / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003874 / MERIVOBOX (450.5001B) GUIAS, BLUMOTION+TOBM, LN=500MM, 40KG., IZQ.+DER. / UNI / 1 / 21.42 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003875 / MERIVOBOX (470M5002S) PERFIL \"M\", LN=500MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 20.21 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003879 / MERIVOBOX (ZF4.50I2) FIJACION FRONTAL SUPERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.43 / 0.86 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003890 / MERIVOBOX (T60H4540) JUEGO PARA TOBM P/MERIVOBOX, L3, IZQ.+DER. / UNI / 1 / 16.98 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505002910 / TBX(T60B000H)SOPORTE DE ARBOL SICRONIZAC / UNI / 1 / 0.26 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505002908 / TBX(T60.1125W)BARRA ESTABILIZADOR P/CORTAR TIP-ON BLUMOTION / UNI / 1 / 4.07 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003880 / MERIVOBOX (ZR4.500RS.E) GUARDACUERPO LONGITUDINAL, INDIUM GREY, LN=500MM, D+I / UNI / 1 / 5.7 / Altura E / Basico / Guardacuerpo lateral / TIP-ON / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Basico / BOXCAP [Metalico] / TIP-ON / 2505003874 / MERIVOBOX (450.5001B) GUIAS, BLUMOTION+TOBM, LN=500MM, 40KG., IZQ.+DER. / UNI / 1 / 21.42 / Altura E / Basico / BOXCAP [Metalico] / TIP-ON / 2505003875 / MERIVOBOX (470M5002S) PERFIL \"M\", LN=500MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 20.21 / Altura E / Basico / BOXCAP [Metalico] / TIP-ON / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Basico / BOXCAP [Metalico] / TIP-ON / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura E / Basico / BOXCAP [Metalico] / TIP-ON / 2505003879 / MERIVOBOX (ZF4.50I2) FIJACION FRONTAL SUPERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.43 / 0.86 / Altura E / Basico / BOXCAP [Metalico] / TIP-ON / 2505003890 / MERIVOBOX (T60H4540) JUEGO PARA TOBM P/MERIVOBOX, L3, IZQ.+DER. / UNI / 1 / 16.98 / Altura E / Basico / BOXCAP [Metalico] / TIP-ON / 2505002910 / TBX(T60B000H)SOPORTE DE ARBOL SICRONIZAC / UNI / 1 / 0.26 / Altura E / Basico / BOXCAP [Metalico] / TIP-ON / 2505002908 / TBX(T60.1125W)BARRA ESTABILIZADOR P/CORTAR TIP-ON BLUMOTION / UNI / 1 / 4.07 / Altura E / Basico / BOXCAP [Metalico] / TIP-ON / 2505003881 / MERIVOBOX (ZL4.500S.E) BOXCAP ALTURA \"E\", LN=500MM, DER+IZQ, INDIUM GREY / UNI / 1 / 14.24 / Altura E / Basico / BOXCAP [Metalico] / TIP-ON / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003874 / MERIVOBOX (450.5001B) GUIAS, BLUMOTION+TOBM, LN=500MM, 40KG., IZQ.+DER. / UNI / 1 / 21.42 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003875 / MERIVOBOX (470M5002S) PERFIL \"M\", LN=500MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 20.21 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003878 / MERIVOBOX (ZF4.10I2) FIJACION FRONTAL INFERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.47 / 0.94 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003879 / MERIVOBOX (ZF4.50I2) FIJACION FRONTAL SUPERIOR, INSERTA, SIMETRICA / UNI / 2 / 0.43 / 0.86 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003890 / MERIVOBOX (T60H4540) JUEGO PARA TOBM P/MERIVOBOX, L3, IZQ.+DER. / UNI / 1 / 16.98 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505002910 / TBX(T60B000H)SOPORTE DE ARBOL SICRONIZAC / UNI / 1 / 0.26 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505002908 / TBX(T60.1125W)BARRA ESTABILIZADOR P/CORTAR TIP-ON BLUMOTION / UNI / 1 / 4.07 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003882 / MERIVOBOX (ZL4M00808) BOXCOVER, ALTURA \"E\", DELANTERO Y TRASERO, INDIUM GREY, I+ / UNI / 1 / 16.52 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003895 / VIDRIO LATERAL P/ CACEROLERO \"E\" MERIVOBOX C/BOXCOVER NL=500mm (41X9.5X0.8CM), P / PAR / 1 / 5.95 / Altura E / Basico / BOXCOVER [c/vidrio] / TIP-ON / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Interior / BOXCAP [Metalico] / Vidrio alto frontal / BLUMOTION / 2505003874 / MERIVOBOX (450.5001B) GUIAS, BLUMOTION+TOBM, LN=500MM, 40KG., IZQ.+DER. / UNI / 1 / 21.42 / Altura E / Interior / BOXCAP [Metalico] / Vidrio alto frontal / BLUMOTION / 2505003875 / MERIVOBOX (470M5002S) PERFIL \"M\", LN=500MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 20.21 / Altura E / Interior / BOXCAP [Metalico] / Vidrio alto frontal / BLUMOTION / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Interior / BOXCAP [Metalico] / Vidrio alto frontal / BLUMOTION / 2505003885 / MERIVOBOX (ZI4.4ES1) FIJACION FRONTAL P/CACEROLERO INT. C/ELEMENTO INSERCION, IN / UNI / 1 / 15.39 / Altura E / Interior / BOXCAP [Metalico] / Vidrio alto frontal / BLUMOTION / 2505003886 / MERIVOBOX (ZV4.1042NN) PIEZA FRONTAL P/CACEROLERO INTERIOR C/RANURA, INDIUM GREY / UNI / 1 / 16.7 / Altura E / Interior / BOXCAP [Metalico] / Vidrio alto frontal / BLUMOTION / 2505003896 / VIDRIO CLARO FRONTAL P/CACEROLERO \"E\" INT. MERIVOBOX MOD.1200mm(106.6X14.2X0.8CM / UNI / 1 / 11.05 / Altura E / Interior / BOXCAP [Metalico] / Vidrio alto frontal / BLUMOTION / 2505003881 / MERIVOBOX (ZL4.500S.E) BOXCAP ALTURA \"E\", LN=500MM, DER+IZQ, INDIUM GREY / UNI / 1 / 14.24 / Altura E / Interior / BOXCAP [Metalico] / Vidrio alto frontal / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003874 / MERIVOBOX (450.5001B) GUIAS, BLUMOTION+TOBM, LN=500MM, 40KG., IZQ.+DER. / UNI / 1 / 21.42 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003875 / MERIVOBOX (470M5002S) PERFIL \"M\", LN=500MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 20.21 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003885 / MERIVOBOX (ZI4.4ES1) FIJACION FRONTAL P/CACEROLERO INT. C/ELEMENTO INSERCION, IN / UNI / 1 / 15.39 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003886 / MERIVOBOX (ZV4.1042NN) PIEZA FRONTAL P/CACEROLERO INTERIOR C/RANURA, INDIUM GREY / UNI / 1 / 16.7 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003896 / VIDRIO CLARO FRONTAL P/CACEROLERO \"E\" INT. MERIVOBOX MOD.1200mm(106.6X14.2X0.8CM / UNI / 1 / 11.05 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003882 / MERIVOBOX (ZL4M00808) BOXCOVER, ALTURA \"E\", DELANTERO Y TRASERO, INDIUM GREY, I+ / UNI / 1 / 16.52 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003895 / VIDRIO LATERAL P/ CACEROLERO \"E\" MERIVOBOX C/BOXCOVER NL=500mm (41X9.5X0.8CM), P / PAR / 1 / 5.95 / Altura E / Interior / BOXCOVER [c/vidrio] / Vidrio alto frontal / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003874 / MERIVOBOX (450.5001B) GUIAS, BLUMOTION+TOBM, LN=500MM, 40KG., IZQ.+DER. / UNI / 1 / 21.42 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003875 / MERIVOBOX (470M5002S) PERFIL \"M\", LN=500MM; INDIUM GREY MATE, DER+IZQ / UNI / 1 / 20.21 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003877 / MERIVOBOX (ZB4E000S) ADAPTADOR TRASERA \"E\", INDIUM GREY, IZQ+DER / UNI / 1 / 2.21 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003884 / MERIVOBOX (ZI4.2ES1) FIJACION FRONTAL P/CACEROLERO INT., INDIUM GREY, IZQ+DER / UNI / 1 / 16.14 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003887 / MERIVOBOX (ZV4.1042M) PIEZA DELANTERA P/CAJON INTERIOR, INDIUM GREY, ANM=1200MM / UNI / 1 / 16.52 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003888 / MERIVOBOX (ZR4.1059U) GUARDACUERPO P/CAJON INT., ANM=1200MM, INDIUM GREY / UNI / 1 / 6 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003880 / MERIVOBOX (ZR4.500RS.E) GUARDACUERPO LONGITUDINAL, INDIUM GREY, LN=500MM, D+I / UNI / 1 / 5.7 / Altura E / Interior / Guardacuerpo lateral / Guardacuerpo frontal / BLUMOTION / 2505003856 / AVENTOS (ABD.1000A8W) TAPA P/AVENTOS+MERIVOBOX, BRANDING MADEVAL / UNI / 2 / 0.235 / 0.47",

    "60.86": "117.03846153846153",

    "66.80399999999999": "128.46923076923073",

    "71.37400000000001": "137.2576923076923",

    "9": "SUBDIVISIONES / NO APLICA / SUBDIVISIONES 45 / BOTELLERO 20",

    "97.41000000000003": "187.32692307692312",

    "BANDEJAS B": "BANDEJA 45",

    "BOTELLERO 30 Y 45": "18.27",

    "BOTELLERO MR 30-45-90 CM AMB": "2505003909 / AMBIA-LINE (ZC7B0200S) BOTELLERO P/MVBX ANCHO=200mm. INDIUM GREY / UNI / 1",

    "BOTELLERO T": "2505001756 / METABOX - soporte guardacuerpo doblre gris / UNI / 6 / 2058260 / ZRU.00Z0 / 1.7 / 10.2 / 2505000250 / Z4830B0I6 TINA PARA BOTELLAS / UNI / 1 / 4050440 / Z4830B0I6 / und / 44.36 / 85.3076923076923 / 2505001850 / LEGRABOX-SEPARADOR TRANSVERSAL 1080mm / UNI / 0.5 / B4250192 / ZC7B0200S / und / 7.74 / 3.87",

    "COD STOCK": "MED",

    "CONTENEDOR": "COD_ZICOM / MED / CANT",

    "CUBERTERO 90": "112.1",

    "CUBERTERO C": "2505001807 / CUBERTERO ALUMETALIC DE 450mm gris, PARA METABOX / UNI / 1 / AC-SM-GR-C-045 / 645KO / 18 / 34.61538461538461 / 2505000272 / ZSI.45VEI6 CUBERTERO INOX 450mm / UNI / 1 / 6715000 / ZSI.45VEI6 / jgo / 80.58 / 154.96153846153845 / 2505001454 / LEGRABOX-CUBERTERO 300mm / UNI / 1 / B4497947 / ZC7S500BS3 / und / 88.08 / 169.3846153846154",

    "CUBERTERO MR 45 CM AMB": "2505003901 / AMBIA-LINE (ZC7S500BS3) CUBIERTERO P/CAJON MVBX. LN=500 MM. ANCHO=300 MM. INDIUM / UNI / 1",

    "CUBERTERO MR 60 CM AMB": "2505003901 / AMBIA-LINE (ZC7S500BS3) CUBIERTERO P/CAJON MVBX. LN=500 MM. ANCHO=300 MM. INDIUM / UNI / 1",

    "CUBERTERO MR 90 CM AMB": "2505003901 / AMBIA-LINE (ZC7S500BS3) CUBIERTERO P/CAJON MVBX. LN=500 MM. ANCHO=300 MM. INDIUM / UNI / 2",

    "CUCHILLERO 60": "126.5576923076923 / 83.67999999999999",

    "CUCHILLERO 90": "107.69999999999999",

    "CUCHILLERO H": "2505000275 / ZSI.500FI3 CUBERTERO INOX 291*500mm / UNI / 1 / ZSI.500FI3 / 41.67 / 80.13461538461539 / 2505001462 / LEGRABOX-CUCHILLERO 300mm / UNI / 1 / B9809820 / ZC7M0200 / und / 30.3",

    "CUCHILLERO MR 45 CM AMB": "2505001462 / LEGRABOX-CUCHILLERO 300mm / UNI / 1",

    "CUCHILLERO MR 60 CM AMB": "2505001462 / LEGRABOX-CUCHILLERO 300mm / UNI / 1",

    "CUCHILLERO MR 90 CM AMB": "2505001462 / LEGRABOX-CUCHILLERO 300mm / UNI / 1",

    "DESPENSA 45": "2505003988 / MATRIX BOX SLIM A30 VARILLA RECT ANTRACITA 1100MM / UNI / 1 / 552.31.519",

    "DESPENSA 60": "2505003988 / MATRIX BOX SLIM A30 VARILLA RECT ANTRACITA 1100MM / UNI / 1 / 552.31.519 / 20.55",

    "DESPENSA 90": "2505003988 / MATRIX BOX SLIM A30 VARILLA RECT ANTRACITA 1100MM / UNI / 2 / 552.31.519 / 21.62",

    "DESPENSA D": "2505001756 / METABOX - soporte guardacuerpo doblre gris / UNI / 4 / 2058260 / ZRU.00Z0 / 1.7 / 6.8 / 2505002353 / ORG-ANTARO DIVISOR TRANSVERSAL P/CORTAR 1077mm GRIS Z40L1077A / UNI / 1 / 6127670 / Z40H1077A / und / 16.7 / 32.11538461538461 / 2505001846 / LEGRABOX-SEPARADOR TRANSVERSAL 1080mm / UNI / 1 / B3359148 / ZR7.1080U / und / 7.74",

    "DESPENZA MR 45 CM": "2505003888 / MERIVOBOX (ZR4.1059U) GUARDACUERPO P/CAJON INT. ANM=1200MM. INDIUM GREY / UNI / 1",

    "DESPENZA MR 45 CM VIDRIO": "2505003888 / MERIVOBOX (ZR4.1059U) GUARDACUERPO P/CAJON INT. ANM=1200MM. INDIUM GREY / UNI / 1",

    "DESPENZA MR 60 CM": "2505003888 / MERIVOBOX (ZR4.1059U) GUARDACUERPO P/CAJON INT. ANM=1200MM. INDIUM GREY / UNI / 1",

    "DESPENZA MR 60 CM VIDRIO": "2505003888 / MERIVOBOX (ZR4.1059U) GUARDACUERPO P/CAJON INT. ANM=1200MM. INDIUM GREY / UNI / 1",

    "DESPENZA MR 90 CM": "2505003888 / MERIVOBOX (ZR4.1059U) GUARDACUERPO P/CAJON INT. ANM=1200MM. INDIUM GREY / UNI / 2",

    "DESPENZA MR 90 CM VIDRIO": "2505003888 / MERIVOBOX (ZR4.1059U) GUARDACUERPO P/CAJON INT. ANM=1200MM. INDIUM GREY / UNI / 2",

    "DIVISONES": "2505001756 / METABOX - soporte guardacuerpo doblre gris / UNI / 12 / 2058260 / ZRU.00Z0 / 1.7 / 20.4",

    "DK-SI-SON-P35": "2505002515 / RIEL TIPON SIN BLUMOTION 35cmSVI / UNI / 1",

    "DK-SL-OR-HCXS-P5": "2505001449 / Perfil LGB pure izquierdo Altura M P500 / UNI / 1 / SL_PMI / SC / 2445577 / 770M5002S / 8.06",

    "ELTA": "CMP(4,L,1150)*1",

    "ESPECIERO 45": "46.31",

    "ESPECIERO E": "2505000257 / ZFZ.30GOI ESPECIERO ANCHO DE 300mm / UNI / 2 / 6484430 / ZFZ.30GOI / 17.9 / 35.8 / 68.84615384615384 / 2505000257 / ZFZ.30GOI ESPECIERO ANCHO DE 300mm / UNI / 2 / 6484430 / ZFZ.30GOI / und / 17.07 / 65.65384615384615 / 2505001460 / LEGRABOX-ESPECIERO 300MM / UNI / 1 / B8058240 / ZC7G0P0I / und / 46.31 / 89.0576923076923",

    "ESPECIERO MR 30 CM AMB": "2505001460 / LEGRABOX-ESPECIERO 300MM / UNI / 1",

    "ESPECIERO MR 45 CM AMB": "2505001460 / LEGRABOX-ESPECIERO 300MM / UNI / 1",

    "FOTO": "cod. ZICOM / Cod. PROVEEDOR / Cod. BLUM / Unidad / costo sin IVA / pvp / 0.55",

    "FREGADERO U": "(ver contenedor de gaveta)",

    "GAVETA C - H2 (TIP ON+BLUMOTION)": "2505001451 / Perfil LGB pure izquierdo, Altura C P500 / UNI / 1 / SL_PCI / SC / 2739732 / 770C5002S / 17.49",

    "GAVETA H1": "2505004878 / LAT CAJ MATRIX BOX SLIM A30 ANT 16/128/500M / UNI / 1 / 552.22.525 / 2505001892 / RIEL PARA CAJON TEN CON SLOWMOTION P-500mm / PAR / 1 / TEN_RI / SC / 58XEF00750X0000 / 11.97",

    "GAVETA H1 INT": "2505004874 / LAT CAJ MATRIX BOX SLIM A30 ANT 16/89/500MM / UNI / 1 / 552.21.515",

    "GAVETA H1F-P3": "GAVETA H1-P3 / DK-SM-GR-H1F-P3 / MET_CMM27 / SC / 7815336 / 320M2700C / 6 / 0 / GAVETA H1-P3 / DK-SM-BL-H1F-P3 / 2505001726 / JUEGO DE COSTADOS y GUIAS DE 270 mm ALTURA M / UNI / 1 / MET_CMM27 / SC / 7815336 / 320M2700C / 6",

    "GAVETA H1IN-P3": "GAVETA H1 INTERIOR-P3 / DK-SM-GR-H1I-P3 / MET_CMM27 / SC / 7815336 / 320M2700C / 6 / 0 / GAVETA H1 INTERIOR-P3 / DK-SM-BL-H1I-P3 / 2505001726 / JUEGO DE COSTADOS y GUIAS DE 270 mm ALTURA M / UNI / 1 / MET_CMM27 / SC / 7815336 / 320M2700C / 6",

    "GAVETA H2": "2505004878 / LAT CAJ MATRIX BOX SLIM A30 ANT 16/128/500M / UNI / 1 / 552.22.525 / 2505001892 / RIEL PARA CAJON TEN CON SLOWMOTION P-500mm / PAR / 1 / TEN_RI / SC / 58XEF00750X0000 / 11.97",

    "GAVETA H2 - CONDIMENTERO ESPECIERO": "DK-SM-GR-H2F-P5 / 2505002971 / METABOX GRIS L=500mm, M 86mm, juego costado metalico ext. parcial, 25 / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1 / DK-SM-BL-H2F-P5 / 2505001687 / JUEGO DE COSTADOS y GUIAS DE 500 mm ALTURA K / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1",

    "GAVETA H2- BASURERO Y CONDIMENTERO": "2505004878 / LAT CAJ MATRIX BOX SLIM A30 ANT 16/128/500M / UNI / 1 / 552.22.525 / 2505001892 / RIEL PARA CAJON TEN CON SLOWMOTION P-500mm / PAR / 1 / TEN_RI / SC / 58XEF00750X0000 / 11.97",

    "GAVETA H2 INT": "2505004878 / LAT CAJ MATRIX BOX SLIM A30 ANT 16/128/500M / UNI / 1 / 552.22.525",

    "GAVETA H2- INTERNO": "2505001892 / RIEL PARA CAJON TEN CON SLOWMOTION P-500mm / PAR / 1 / TEN_RI / SC / 58XEF00750X0000 / 11.97",

    "GAVETA H2CO-P5": "GAVETA H2 - CONDIMENTERO BOTELLERO / DK-SM-GR-H2FI-P5 - gaveta inferior condimentero / 2505002967 / METABOX GRIS L=500mm, K 118 mm , juego costados metalico, ext. parcia. / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1 / GAVETA H2 - CONDIMENTERO BOTELLERO / DK-SM-BL-H2FI-P5 - gaveta inferior condimentero / 2505001687 / JUEGO DE COSTADOS y GUIAS DE 500 mm ALTURA K / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1",

    "GAVETA H2FD-P5": "GAVETA H2 - FREGADERO BOTELLERO / DK-SM-GR-H2FI-P5 / 2505002967 / METABOX GRIS L=500mm, K 118 mm , juego costados metalico, ext. parcia. / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1 / GAVETA H2 - FREGADERO BOTELLERO / DK-SM-BL-H2FI-P5 / 2505001687 / JUEGO DE COSTADOS y GUIAS DE 500 mm ALTURA K / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1",

    "GAVETA H2F-P3": "GAVETA H2-P3 / DK-SM-GR-H2F-P3 / MET_CMM27 / SC / 7815336 / 320M2700C / 6 / 0 / GAVETA H2-P3 / DK-SM-BL-H2F-P3 / 2505001726 / JUEGO DE COSTADOS y GUIAS DE 270 mm ALTURA M / UNI / 1 / MET_CMM27 / SC / 7815336 / 320M2700C / 6",

    "GAVETA H2FU-P5": "GAVETA H2 - FREGADERO U / DK-SM-GR-H2FU-P5 / 2505002967 / METABOX GRIS L=500mm, K 118 mm , juego costados metalico, ext. parcia. / UNI / 2 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1 / 18.2 / GAVETA H2 - FREGADERO U / DK-SM-BL-H2FU-P5 / 2505001687 / JUEGO DE COSTADOS y GUIAS DE 500 mm ALTURA K / UNI / 2 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1 / 18.2",

    "GAVETA H2IN": "GAVETA H2 INTERNO DEPENSA / DK-SM-GR-H2I / 2505002967 / METABOX GRIS L=500mm, K 118 mm , juego costados metalico, ext. parcia. / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1 / GAVETA H2 INTERNO DEPENSA / DK-SM-BL-H2I / 2505001687 / JUEGO DE COSTADOS y GUIAS DE 500 mm ALTURA K / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1",

    "GAVETA INTERNA C - H2 (TIP ON+BLUMOTION)": "2505001451 / Perfil LGB pure izquierdo, Altura C P500 / UNI / 1 / SL_PCI / SC / 2739732 / 770C5002S / 17.49",

    "GAVETA INTERNA M - H1 (TIP ON+BLUMOTION)": "2505001449 / Perfil LGB pure izquierdo Altura M P500 / UNI / 1 / SL_PMI / SC / 2445577 / 770M5002S / 8.06",

    "GAVETA M - H1 (TIP ON + BLUMOTION)": "2505001449 / Perfil LGB pure izquierdo Altura M P500 / UNI / 1 / SL_PMI / SC / 2445577 / 770M5002S / 8.06",

    "IMAGEN": "APLICACION / COD. CONTENEDOR / COD. ZICOM / MED / Cant / TEOWIN / COLOR / Cod. Proveedor / Cod. Blum / subtotal / COSTO sin iva / PVP KD / COD. ZICOM / MED / CANT / Cod. Proveedor / subtotal / total sin iva / COD. CONTENEDOR / COD. ZICOM / MED / Cant / COD TW / Cod. Proveedor / Cod. Blum / subtotal / total sin iva / PVP KD / COD. CONTENEDOR / COD. ZICOM / MED / Cant / COD TW / Cod. Proveedor / Cod. Blum / subtotal / total sin iva / COD. ZICOM / Unidad / Cantidad / Cod. Proveedor / Cod. Blum / subtotal / COSTO sin iva / PVP sin iva / 0.52 / COD. CONTENEDOR / COD. ZICOM / MED / Cant / TEOWIN / COLOR / Cod. Proveedor / Cod. Blum / subtotal / total sin iva / COD. CONTENEDOR / COD. ZICOM / MED / Cant / TEOWIN / COLOR / Cod. Proveedor / subtotal / total sin iva",

    "INMOVILIZADOR ENTREPANO": "DK-SI-SON-P5 / 2505001712 / RIEL TIPON SIN BLUMOTION 50cmSVI / UNI / 1 / SI_RT / SC / 20.2 / REVISAR FORMULA 3D EN LA RIEL / DK-SI-SON-P45 / 2505000416 / RIEL TIPON SIN BLUMOTION 45cmSVI / UNI / 1 / DK-SI-SON-P35 / 2505002515 / RIEL TIPON SIN BLUMOTION 35cmSVI / UNI / 1 / DK-SI-SON-P3 / 2505000633 / RIEL TIPON SIN BLUMOTION 27cm SVI / UNI / 1 / SI_RT / SC / 16.81 / REVISAR FORMULA 3D EN LA RIEL",

    "MET_BM": "SC / 9177736 / Z70.0320 / 3.5 / 0",

    "MET_FFD": "SC / 1348903 / ZSF.1800 / 0.6 / 0",

    "MET_FFI": "SC / 1349033 / ZSF.1800 / 0.6 / 0",

    "MET_FFID": "SC / 3004110 / ZIF.3000.02 / 1.3 / 0",

    "MET_FFII": "SC / 3004030 / ZIF.3000.02 / 1.3 / 0",

    "MET_GC": "SC / 1810206 / ZRR.8000.01 / 3.9 / 0",

    "MET_TR": "SC / 1388356 / ZAA.3500.BL / 0.1 / 0 / SC / 1388276 / ZAA.3500.BL / 0.1 / 0",

    "OLLAS 120": "12.54",

    "OLLAS 90": "8.67",

    "OLLAS O": "2505001756 / METABOX - soporte guardacuerpo doblre gris / UNI / 2 / 2058260 / ZRU.00Z0 / 1 / 1.7 / 2505001756 / METABOX - soporte guardacuerpo doblre gris / UNI / 2 / 2058260 / ZRU.00Z0 / 1.7 / 3.4 / 2505002353 / ORG-ANTARO DIVISOR TRANSVERSAL P/CORTAR 1077mm GRIS Z40L1077A / UNI / 1 / 6127670 / Z40H1077A / und / 16.7 / 32.11538461538461 / 2505001846 / LEGRABOX-SEPARADOR TRANSVERSAL 1080mm / UNI / 0.5 / B3359148 / ZR7.1080U / und / 7.74 / 3.87",

    "OLLERO": "2505003988 / MATRIX BOX SLIM A30 VARILLA RECT ANTRACITA 1100MM / UNI / 1 / 552.31.519",

    "OLLERO MR": "2505003888 / MERIVOBOX (ZR4.1059U) GUARDACUERPO P/CAJON INT. ANM=1200MM. INDIUM GREY / UNI / 1",

    "OLLERO MR-VIDRIO": "2505003888 / MERIVOBOX (ZR4.1059U) GUARDACUERPO P/CAJON INT. ANM=1200MM. INDIUM GREY / UNI / 1",

    "ORGANIZADOR 90 SOLO APLICA PARA CAJON FREE": "56.45",

    "ORGANIZADOR MR 60 CM": "2505003904 / AMBIA-LINE (ZC7S500RS1) MARCO P/CACEROLERO MVBX. ANCHO=218MM. INDIUM G / UNI / 1",

    "ORGANIZADOR MR 90 CM": "2505003904 / AMBIA-LINE (ZC7S500RS1) MARCO P/CACEROLERO MVBX. ANCHO=218MM. INDIUM G / UNI / 2",

    "ORGANIZADORES Z": "2505001456 / LEGRABOX-CUBO DOBLE / UNI / 1 / B7649432 / ZC7F400RSP / und / 50.71",

    "PORTA PLATOS P": "2505001849 / PS ZTH.0350 SOPORTE DE PLATOS / UNI / 2 / 1366848 / ZC7T0350 / und / 45.11 / 173.5 / 2505001849 / LEGRABOX-PORTAPLATOS / UNI / 2 / B1366848 / ZC7T0350 / und / 45.11 / 90.22 / 173.5",

    "PROF": "Altura / Frente / Conf costado / Conf frontal / Movimiento / ZICOM / detpieza / unidad / Cant / Costo Uni / Cost Tt",

    "RIEL MOVENTO 350MM AL PISO": "2505003551 / MOVENTO (760H3500SU) GUIA AL PISO DER+IZQ. 350mm / UNI / 1",

    "RIEL MOVENTO 350MM NUEVA": "2505004365 / TANDEM (7560H3500T) GUIAS P/ TIP-ON. LN=350MM: 30KG : DER+IZQ / UNI / 1",

    "RIEL MOVENTO 450MM": "2505003019 / GUIAS MOVENTO C/BLUMOTION 450MM, 40KG, IZQ.+DER / UNI / 1",

    "RIEL MOVENTO 450MM AL PISO": "2505003804 / MOVENTO (760H4500SU) GUIA AL PISO DER+IZQ. 450mm / UNI / 1",

    "RIEL MOVENTO 500MM": "2505002903 / GUIAS MOVENTO C/BLUMOTION 500MM, 40KG, IZQ.+DER 760H5000S / UNI / 1",

    "RIEL MOVENTO ENTREPANOS 450MM": "2505003019 / GUIAS MOVENTO C/BLUMOTION 450MM, 40KG, IZQ.+DER / UNI / 1",

    "RIEL MOVENTO ENTREPANOS 500MM": "2505002903 / MOVENTO(760H5000S)GUIA DER+IZQ 500 mm 40KG. EXTENSION TOTAL / UNI / 1",

    "RIEL MOVENTO TIP ON ENTREPANOS 450MM": "2505003019 / GUIAS MOVENTO C/BLUMOTION 450MM, 40KG, IZQ.+DER / UNI / 1",

    "RIEL MOVENTO TIP ON ENTREPANOS 500MM": "2505002903 / MOVENTO(760H5000S)GUIA DER+IZQ 500 mm 40KG. EXTENSION TOTAL / UNI / 1",

    "RIEL MOVENTO TIP-ON 450MM": "2505003019 / GUIAS MOVENTO C/BLUMOTION 450MM, 40KG, IZQ.+DER / UNI / 1",

    "RIEL MOVENTO TIP-ON 500MM": "2505002903 / GUIAS MOVENTO C/BLUMOTION 500MM, 40KG, IZQ.+DER / UNI / 1",

    "ROLLO 60": "200.3076923076923",

    "ROLLO 90": "280.44230769230774",

    "ROLLOS 60": "98.49",

    "ROLLOS 90": "133.19",

    "ROLLOS MR 45 CM AMB": "2505001466 / LEGRABOX-PORTAROLLOS 300mm ALUMINIO + PAPEL FILM / UNI / 1",

    "ROLLOS MR 60 CM AMB": "2505001466 / LEGRABOX-PORTAROLLOS 300mm ALUMINIO + PAPEL FILM / UNI / 1",

    "ROLLOS MR 90 CM AMB": "2505001466 / LEGRABOX-PORTAROLLOS 300mm ALUMINIO + PAPEL FILM / UNI / 1",

    "ROLLOS R": "2505000275 / ZSI.500FI3 CUBERTERO INOX 291*500mm / UNI / 1 / 6702440 / ZSI.500FI2 / und / 28.54 / 54.88461538461538 / 2505001466 / LEGRABOX-PORTAROLLOS 300mm ALUMINIO + PAPEL FILM / jgo / 1 / B5952958 / ZC7C0000 / 74.47",

    "RSLH1 / RSLH14": "2505001735 / DK-SL-OR-H1F-P5 / 2505001449 / Perfil LGB pure izquierdo Altura M P500 / UNI / 1 / SL_PMI / SC / 2445577 / 770M5002S / 8.06",

    "RSLH1IN": "2505001737 / DK-SL-OR-H1I-P5 / 2505001449 / Perfil LGB pure izquierdo Altura M P500 / UNI / 1 / SL_PMI / SC / 2445577 / 770M5002S / 8.06",

    "RSLH1P3": "2505001735 / DK-SL-OR-H1F-P3 / 2505001770 / LEGRABOX JUEGO DE PERFILES IZQ + DER COLOR GRIS ORION 270 MM 770M2702S / UNI / 1 / SL_PM27 / SC / 8145106 / 770M2702S / 25 / 2505001735 / DK-SL-OR-H2F-P3 / 2505003594 / LEGRABOX (770C2702S) PERFIL PURE C, LN=270 MM, GRIS ORION, IZQ+DER / UNI / 1 / SL_PM27 / SC / 8145106 / 770M2702S / 25",

    "RSLH2 / RSLH4H2": "2505001736 / DK-SL-OR-H2F-P5 / 2505001451 / Perfil LGB pure izquierdo, Altura C P500 / UNI / 1 / SL_PCI / SC / 2739732 / 770C5002S / 17.49",

    "RSLH2FD": "DK-SL-OR-H2FI-P5 / 2505001451 / Perfil LGB pure izquierdo, Altura C P500 / UNI / 1 / SL_PCI / SC / 2739732 / 770C5002S / 17.49",

    "RSLH2FU": "DK-SL-OR-H2FU-P5 / 2505001451 / Perfil LGB pure izquierdo, Altura C P500 / UNI / 2 / SL_PCI / SC / 2739732 / 770C5002S / 17.49 / 34.98",

    "RSLH2IN": "2505001738 / DK-SL-OR-H2I-P5 / 2505001451 / Perfil LGB pure izquierdo, Altura C P500 mm / UNI / 1 / SL_PCI / SC / 2739732 / 770C5002S / 17.49",

    "RSLH2P3": "2505001735 / DK-SL-OR-H2F-P3 / 2505003594 / LEGRABOX (770C2702S) PERFIL PURE C, LN=270 MM, GRIS ORION, IZQ+DER / UNI / 1 / SL_PM27 / SC / 8145106 / 770M2702S / 25",

    "RSMH1": "GAVETA H1 / DK-SM-GR-H1F-P5 / 2505002967 / METABOX GRIS L=500mm, K 118 mm , juego costados metalico, ext. parcia. / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1 / 9.4 / GAVETA H1 / DK-SM-BL-H1F-P5 / 2505001687 / JUEGO DE COSTADOS y GUIAS DE 500 mm ALTURA K / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1 / 9.4",

    "RSMH14": "GAVETA HI hornos 140 / DK-SM-GR-H1I-P5 / 2505002971 / METABOX GRIS L=500mm, M 86mm, juego costado metalico ext. parcial, 25 / UNI / 1 / MET_CMM50 / SC / 7817546 / 320M5000C / 6.1 / 212 / GAVETA HI hornos 140 / DK-SM-BL-H1I-P5 / 2505001723 / JUEGO DE COSTADOS y GUIAS DE 500 mm ALTURA M / UNI / 1 / MET_CMM50 / SC / 7817546 / 320M5000C / 6.1",

    "RSMH1IN": "GAVETA HI INTERNO / DK-SM-GR-H1I-P5 / 2505002971 / METABOX GRIS L=500mm, M 86mm, juego costado metalico ext. parcial, 25 / UNI / 1 / MET_CMM50 / SC / 7817546 / 320M5000C / 6.1 / GAVETA HI INTERNO / DK-SM-BL-H1I-P5 / 2505001723 / JUEGO DE COSTADOS y GUIAS DE 500 mm ALTURA M / UNI / 1 / MET_CMM50 / SC / 7817546 / 320M5000C / 6.1",

    "RSMH2": "GAVETA H2 - OLLAS / DK-SM-GR-H2F-P5 / 2505002967 / METABOX GRIS L=500mm, K 118 mm , juego costados metalico, ext. parcia. / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1 / GAVETA H2 - OLLAS / DK-SM-BL-H2F-P5 / 2505001687 / JUEGO DE COSTADOS y GUIAS DE 500 mm ALTURA K / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1",

    "RSMH4H2": "GAVETA H2 -BASURERO / DK-SM-GR-H2FD-DT-P5 / 2505002967 / METABOX GRIS L=500mm, K 118 mm , juego costados metalico, ext. parcia. / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1 / GAVETA H2 -BASURERO / DK-SM-BL-H2FD-DT-P5 / 2505001687 / JUEGO DE COSTADOS y GUIAS DE 500 mm ALTURA K / UNI / 1 / MET_CMK50 / SC / 2885866 / 320K5000C / 9.1",

    "SOEF": "1+CMP(3,L,700)*1",

    "SUBDIVISION 60": "53.379999999999995",

    "SUBDIVISION 90": "77.4",

    "SUBDIVISION MR 45 CM AMB": "2505003903 / AMBIA-LINE (ZC7S500RS2) MARCO P/CAJON MVBX. LN=500MM. ANCHO=200MM. INDIUM GREY / UNI / 1",

    "SUBDIVISION MR 60 CM AMB": "2505003903 / AMBIA-LINE (ZC7S500RS2) MARCO P/CAJON MVBX. LN=500MM. ANCHO=200MM. INDIUM GREY / UNI / 1",

    "SUBDIVISION MR 90 CM AMB": "2505003903 / AMBIA-LINE (ZC7S500RS2) MARCO P/CAJON MVBX. LN=500MM. ANCHO=200MM. INDIUM GREY / UNI / 2",

    "SUBDIVISIONES": "2505001463 / LEGRABOX-SUBDIVISION SIMPLE DE 200mm / UNI / 1 / B4595319 / ZC7S500RS2 / und / 29.36",

    "SUBDIVISIONES 90": "149.1730769230769",

    "SUBDIVISIONES S": "2505000275 / ZSI.500FI3 SUBDIVISION INOX DE 291*500MM / UNI / 1 / ZSI.500FI3 / 41.67 / 80.13461538461539",

    "SUBTOTAL": "17 / 21.7 / 27.2 / 9.5 / 11.2 / 18 / 21.9 / 32.099999999999994 / 60.46153846153846 / 67.34615384615384 / 113.23076923076923 / 181.44230769230768 / 261.5769230769231 / 35.96153846153846",

    "TA1-2X6": "12",

    "TE5X105": "6",

    "TIPO": "Foto / cod. ZICOM / Unidad / Cod. PROVEEDOR / Cod. BLUM / costo sin IVA / costo total sin IVA / PVP sin IVA / MARGEN MC / 0.52",

    "TN1_1-4X6": "1+CMP(3,L,600)*1",

    "VACIO V": "(ver contenedor de gaveta)",



    // Claves agregadas desde COLECCIONES_MADEVAL.xlsx.

    "ABATIBLES": "Simple - Compas - Giratorio - Plegable / Simple, compas y giratorio en altos con puertas de malla. No hay abatibles plegables",

    "ACABADOS ESTRUCTURA METALICA LOFT": "Se usan las mismas lacas del portafolio, pero usan un \"Primer\" (Base para imprimacion, es decir que es el adhesivo para que la laca se adiera al metal), por lo tanto considerar que puede existir diferencia de tono y textura al ser aplicada en diferentes materiales. Los unicos acabados disponibles son: Laca Cobre TX, Laca Grafito TX, Laca Negro TX, Laca Dorado TX, Laca Cacao Gold MT, Laca Luna SB",

    "ACABADOS PERFILES MOZIONE": "Los colores vienen directamente del proveedor, no pertenecen al portafolio de acabados de madeval. Los colores de perfiles disponible son: Aluminio Natural, Aluminio Negro Mate, Aluminio Oro, Aluminio Antracita.",

    "ALTURAS ESTANDARIZADAS": "Todas las alturas estandar de madeval",

    "ANCHOS DISPONIBLES": "Todos los anchos estandares",

    "AREAS": "Cocina, Closets, Banos / Cocina, Banos / Cocinas, bares, livingrooms",

    "ARES DE USO RECOMENDADAS": "Cocinas closets y banos. Esta es la coleccion mas versatil, amigable y adaptable a diferentes espacios y areas / Cocinas y banos. / Cocinas.",

    "BANDEJAS EXTRAIBLES": "Sistema SI (Invisible) Movento",

    "CODIGO KD": "K+MADEVAL UNIC COLECCION",

    "COMPLEMENTOS": "Existen complementos especificos para henzo donde se resalta el perfil gola por los costados, hay laterales en \"L\" para modulos que van a la pared y el perfil gola va en forma de \"L\" hasta llegar a la pared. En cambio para islas hay laterales en \"U\" que hacen que el perfil gola rodee por completo la isla. / Existen complementos especificos para DUO donde se resalta el perfil gola por los costados, hay laterales en \"L\" para modulos que van a la pared y el perfil gola va en forma de \"L\" hasta llegar a la pared. En cambio para islas hay laterales en \"U\" que hacen que el perfil gola rodee por completo la isla.",

    "CONCEPTO DE DISENO Y CARACTERISTICAS DISTINTIVAS": "Frente basico :simple, plano, liso, llano / Frente con perfil gola horizontal tanto en modulos bajos como en modulos auxiliares / Frente con perfil gola horizontal sobre una altura H3. Y una parte superior al perfil gola de 14cm que puede ser de frente util (gaveta) o frente falso (espacio no utilizable). Existen 2 opciones de duo. Duo color (la parte superior al perfil gola va del mismo color del frente del modulo). Y Duo Solid (La parte superior al perfil gola es de acabado crudo para revestir con piedra). En el caso de modulos auxiliares el perfil gola va en sentido vertical y lleva la misma altura del modulo. / Coleccion con acabado estilo industrial. Con estructuras metalicas sin puertas con o sin respaldo. Tambien existen modulos bajos y altos con puerta de malla metalica. / Mas que una coleccion es un sistema constructuvo disenado para integrarse con la mayoria de nuestras lineas como: Neo, eleganza, henzo, duo, line, curcu, cuatro, shaker, aurora, loft.",

    "EJEMPLO DE CODIGO": "Modulo Bajo:",

    "ELECTRODOMESTICOS": "Amigable con la mayoria de electrodomesticos, ya sean panelables o normales. / Considerar el perfil gola, este reduce la altura para electrodomesticos en modulos bajos, puede limitar ciertos electrodomesticos que superen una altura de 817mm. Como por ejemplo lavadoras de platos panelables. / Considerar el perfil gola, este reduce la posibilidad de usar la gran mayoria de electrodomesticos y nos limita a muy pocas opciones. Realmente no se recomienda usar electrodomesticos bajos en esta coleccion. Unicamente se reocomienda usar planchas de cocina y extractores tipo downdraft como especial de electrodomestico. / No se puede usar electrodomesticos directamente en un modulo de estructura loft. Se requiere combinar con otra coleccion que si lo permita. Los unicos electrodomesticos en modulos loft son los canopios que pueden ir en una estructura para revestir con material decorativo o para revestirla en piedra.",

    "ESTRUCTURA CODIGO": "Estructura estandar de codigos",

    "FECHA DE ACTUALIZACION DE FICHA": "2022-06-26 00:00:00",

    "LIMITACIONES TECNICAS": "Modulos de 1 puerta, maximo 60cm, modulos de 2 puertas maximo 90cm, en casos muy puntuales se puede un maximo de 120cm, pero con un refuerzo adicional. Modulos de gavetas maximo 900cm. No se puede modificar profundidades ni alturas. Usar solo las medidas estandares que se encuentran en KD / Modulos de 1 puerta, maximo 60cm, modulos de 2 puertas maximo 90cm, en casos muy puntuales se puede un maximo de 120cm, pero con un refuerzo adicional. Modulos de gavetas maximo 900cm. No se puede modificar profundidades ni alturas. Para alturas usar unicamente las medidas estandares que se encuentran en KD / No se puede modificar medidas de ningun tipo de estructura metalica ni siquiera",

    "LUCES": "Modulos altos: opcion de luz led base (LBA). Para auxiliares y modulos altos Se tiene la opcion de luces internas: luz led lateral derecha (LTD). Luz led lateral izquierda (LTI) o luz led lateral doble (LLT). Algunos modulos altos tienen / En modulos sin puertas va luz spot en cada repisa. En modulos altos tambien hay opcion de luz led base",

    "MATERIALES": "Melaminas - Lacas - Enchapes - Soft Touch - Krono System - Tableros Especiales / Respaldos y repisas, y frentes pueden ser: Melaminas - Lacas - Enchapes - Soft Touch - Krono System - Tableros Especiales / Combinable con la mayoria de colecciones como",

    "MODIFICACIONES SIN SER ESPECIAL": "Se puede modificar anchos de modulos sin que sea especial, siempre y cuando no tenga accesorios internos, gavetas o accesorios con vidrio. Considerando siempre el maximo permitido. Se puede modificar profundidades, anchos y alturas de complementos. / Se puede modificar anchos de modulos sin que sea especial, siempre y cuando no tenga estructura metalica. No se puede modificar nada que lleve estructura metalica, ni anchos, ni alturas ni profundidades",

    "PROFUNDIDADES ESTANDARIZADAS": "Todas las profundidades estandar de madeval",

    "SISTEMAS DE GAVETAS": "Metabox - Slim - Merivobox - Legrabox / Merivobox - Legrabox. Al ser una coleccion premium, solo tiene los sistemas premium de madeval. / No",

    "SISTEMAS POCKET": "Modulos Excel",

    "TIPOS DE MODULOS": "Bajos, altos, suspendidos, auxiliares, altos sobre meson / Bajos, suspendidos, auxiliares. En esta coleccion no existe ningun tipo de modulos altos. / Bajos, suspendidos, auxiliares, altos (Altos unicamente para colocar encima de modulos auxiliares). / Bajos sin puerta (con y sin respaldo). Altos sin puerta (con y sin respaldo), Altos con puerta de malla metalica, Auxiliares sin puerta (con y sin respaldo). Bases loft (Patas metalicas altura 316mm que funcionan con modulos H3). Modulos altos sobre isla (Modulos metalicos suspendidos que se sujetan al tumbado). Accesorios sobre meson",

    "TIPOS DE PERFILES": "Perfil Tipo F: Un punto de fijacion al piso y 2 puntos en pared.",



    // Claves agregadas desde ACABADOS.docx.

    "FORMEX METAL LIQUIDO": "Tableros que mantienen las dos caras y el canto del mismo color",

    "MARCOS DE ALUMINIO": "Puertas estructuradas con perfiles de aluminio y vidrios de 4 mm de espesor",

    "MARCOS DE MADERA CON VIDRIO": "Puertas de melaminico o MDF (laca, termolaminado o enchape) con vidrio embutido",

    "ME": "Metal",

    "MET BR": "Metalizado Brillante",

    "MIRROR BRONZO": "Tablero de 1 cara que utiliza canto negro",

    "MM": "Metalizado Mate",

    "MT": "Mate",

    "NATURALES": "Roble Americano Canela, Seike Caramelo, Roble Americano Miel, Roble Obsidiana, Roble Humo",

    "NV": "Nativo",

    "PI": "Piedra",

    "PO": "Poro",

    "RANURADOS": "Tableros con una cara ranurada y otra plana, manteniendo el mismo color tanto en sus caras como en el canto",

    "RECONSTITUIDOS": "Roble Claro Natural, Nogal Mallado Natural, Roble Rustico, Roble Rameado Rustico",

    "SB": "Semibrillante",

    "SY": "Synchro",

    "SYROS": "Tablero de MDF con una lamina coextruida sobre un poliester base, formulada para reproducir el efecto de metales cepillados. Es suave al tacto y resistente a rayos UV, a la luz, a rayones y a cambios de temperatura. No permite repisas engrosadas y viene en espesor de 18 mm",

    "TE": "Textil",

    "WO": "Wood",
};

