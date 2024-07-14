from langchain_community.chat_message_histories import SQLChatMessageHistory

chat_message_history = SQLChatMessageHistory(
    session_id="test_session_id", connection="sqlite:///chatHistory.db")

chat_message_history.add_user_message("Hello")
chat_message_history.add_ai_message("Hi")

print(chat_message_history.messages)