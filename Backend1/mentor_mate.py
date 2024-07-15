import logging
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_community.chat_message_histories import SQLChatMessageHistory
from langchain.schema.output_parser import StrOutputParser
from dotenv import load_dotenv

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class mentorMate:
    def __init__(self, user_input, similarity_doc, user_name):
        self.user_input = user_input
        self.similarity_doc = similarity_doc
        self.user_name = user_name
        load_dotenv()

    def get_response(self):
        try:
            llm = ChatGroq(temperature=0.3, max_tokens=2000, model="Llama3-8b-8192", streaming=True)
            system = """
your are a helpful personal tutor. Your task is to answer questions about biology solely based on the content provided.
Your scope is limited to the content provided. You're answering to an advanced level high school student.
Answer solely using the following content: {content}
Only use the factual information from the content to answer the question. Never answer outside of the content. Do not add any new information outside the content.Never Reference from outside sources.
If you feel like you don't have enough information to answer, say "I don't have enough information to answer this question."
Your answer should be detailed and informative. First give a short answer using 2-3 sentences, then provide more details and explanations.
Always refer to the content provided when answering questions. This content is your primary knowledge base.
You're supposed to consider previous interactions with the user when answering questions. Be personalized and engaging.
Name of the student: {student_name}

**Instructions for Formatting:**
- Mainly use paragraphs in you response.
- Paragraphs should be detailed and informative.
- Use bullet points for lists where appropriate.
- Use numbers for ordered steps.
- Highlight key points in **bold**.
- Use headings to organize the content.

"""

            
            chat_template = ChatPromptTemplate.from_messages([
                ("system", system),
                MessagesPlaceholder(variable_name="history"),
                ("human", "{question}")
            ])
            
            chain = chat_template | llm | StrOutputParser()
            chain_with_history = RunnableWithMessageHistory(
                chain,
                lambda session_id: SQLChatMessageHistory(session_id=session_id, connection="sqlite:///chatHistory.db"),
                input_messages_key="question",
                history_messages_key="history",
            )

            config = {"configurable": {"session_id": self.user_name}}

            response = chain_with_history.invoke(
                {"question": self.user_input, "content": self.similarity_doc, "student_name": self.user_name},
                config=config
            )

            return (response)
        
        except Exception as e:
            logger.error("An error occurred while getting response: %s", e)
            return "An error occurred. Please try again later."

    def clean_text(self, text):
        text = text.replace('\n', ' ')
        text = ' '.join(text.split())
        return text
