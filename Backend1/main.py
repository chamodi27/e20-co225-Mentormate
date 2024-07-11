
from mentor_mate import mentorMate
from chroma_retriver import ChromaRetrevier

pdf_retriver = ChromaRetrevier(db_path="Backend1/vectorDb",collection_name="PDFCollection")




while True:
    # getting user input
    print("I'm Your MentorMate, Ask me anything about biology!")
    print("Type 'exit' to quit")

    user_input = input("what you want to know: ")

    if user_input == 'exit':
        break  

    # queriny the vector database using same chroma client from the vectordb_update.py script
    similarity_docs = pdf_retriver.query_documents(user_input)

    mentor = mentorMate(user_input, similarity_docs)
    response = mentor.get_response()
    print("--------------------response-------------------")
    print("MentorMate: ", response)
    print("-----------------------------------------------")








