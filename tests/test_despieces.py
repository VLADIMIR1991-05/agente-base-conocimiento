import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src"))

from rag_core import contextual_question
from verificar_knowledge import answer_verificar_question


class DespieceRulesTest(unittest.TestCase):
    def answer(self, question: str) -> str:
        result = answer_verificar_question(question)
        self.assertIsNotNone(result)
        return result["answer"]

    def test_despiece_keyword_with_c_shows_piece_table(self):
        result = answer_verificar_question("Dame el despiece de SB90")
        self.assertIsNotNone(result)
        self.assertTrue(result["is_piece_breakdown"])
        self.assertIn("| Base | 1 | 863 x 530 mm | 18 mm", result["answer"])
        self.assertIn("| Ajuste superior | 2 | 863 x 60 mm | 18 mm", result["answer"])

    def test_structure_thickness_recalculates_widths(self):
        answer_15 = self.answer("despiece de A79H5 en 15mm")
        answer_18 = self.answer("despieza A79H5 en 18")

        self.assertIn("| Base | 1 | 759 x 320 mm | 15 mm", answer_15)
        self.assertIn("| Techo | 1 | 759 x 320 mm | 15 mm", answer_15)
        self.assertIn("| Base | 1 | 753 x 320 mm | 18 mm", answer_18)
        self.assertIn("| Techo | 1 | 753 x 320 mm | 18 mm", answer_18)
        self.assertNotIn("| Base | 1 | 759 x 320 mm | 18 mm", answer_18)

    def test_followup_keeps_last_module_code(self):
        first_answer = self.answer("Despieza un A79H5")
        history = [{"question": "Despieza un A79H5", "answer": first_answer}]

        self.assertEqual(contextual_question("en 18", history), "Dame el despiece de A79H5 en 18 mm")
        self.assertEqual(contextual_question("el mismo en 18", history), "Dame el despiece de A79H5 en 18 mm")
        self.assertNotIn("PROFUNDIDAD", contextual_question("en 18", history))

    def test_new_color_question_does_not_inherit_despiece_context(self):
        first_answer = self.answer("Dame el despiece de B60D")
        history = [{"question": "Dame el despiece de B60D", "answer": first_answer}]

        self.assertEqual(contextual_question("dame el color panela", history), "dame el color panela")
        self.assertEqual(contextual_question("muestrame color panela", history), "muestrame color panela")

    def test_base_module_tpm_replaces_upper_adjustments(self):
        answer = self.answer("despieza B60TPM")
        self.assertIn("| TPM | 1 | 563 x 528 mm | 18 mm", answer)
        self.assertNotIn("| Ajuste superior |", answer)

    def test_h9r_is_not_read_as_nine_shelves(self):
        answer = self.answer("despieza X45DH9R")
        self.assertNotIn("| Repisa movil | 9 |", answer)


if __name__ == "__main__":
    unittest.main()
