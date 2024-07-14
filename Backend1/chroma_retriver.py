import chromadb


class ChromaRetrevier:
    def __init__(self,db_path,collection_name):
        self.collection_name = collection_name
        self.ret_client = chromadb.PersistentClient(db_path)
        

        self.collection = self.ret_client.get_collection(self.collection_name)


    def query_documents(self, query_texts, n_results=4):
    
        if not self.collection:
            raise ValueError("Collection is not set up. Call setup_collection() first.")
        
        results = self.collection.query(
            query_texts=query_texts,
            n_results=n_results
        )
        
        return results['documents']


        

