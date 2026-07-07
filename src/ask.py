from rag_core import answer_question


def main() -> None:
    print("Agente listo. Escribe una pregunta o 'salir'.")
    while True:
        question = input("\nTu: ").strip()
        if question.lower() in {"salir", "exit", "quit"}:
            break
        if not question:
            continue
        print("\nAgente:")
        print(answer_question(question))


if __name__ == "__main__":
    main()
