from chroma_db_manager import ChromaDBManager
from mentor_mate import mentorMate

# Initialize the client (if not already initialized)
ChromaDBManager.initialize_client("vectorDb")


# Getting user input
print("I'm Your MentorMate, Ask me anything about biology!")
print("Type 'exit' to quit")

user_input = input("What do you want to know: ")


# Querying the vector database using the shared client and collection
db_manager = ChromaDBManager()
similarity_docs = db_manager.query_documents(user_input)
print(similarity_docs)

# Assuming you have a mentorMate class to handle responses
'''
mentor = mentorMate(user_input, similarity_docs)
response = mentor.get_response()

print("--------------------response-------------------")
print("MentorMate: ", response)
print("-----------------------------------------------")


'''

