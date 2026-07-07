from rag_core import build_index


if __name__ == "__main__":
    index = build_index()
    print(f"Base indexada. Fragmentos guardados: {len(index['chunks'])}")
