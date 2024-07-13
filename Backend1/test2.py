from chroma_db_manager import ChromaDBManager

collections = ChromaDBManager.list_collections()
print("Collections:", collections)