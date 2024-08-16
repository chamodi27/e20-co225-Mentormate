from db.database import get_session
from db.models import ChatInteraction

class ChatHistoryManager:
    def __init__(self, user_name):
        self.user_name = user_name
        self.session = get_session()

    def save_interaction(self, message_content, message_type):
        new_interaction = ChatInteraction(
            user_name=self.user_name,
            message_content=message_content,
            message_type=message_type
        )
        self.session.add(new_interaction)
        self.session.commit()

    def get_chat_thread(self):
        return self.session.query(ChatInteraction).filter_by(user_name=self.user_name).order_by(ChatInteraction.timestamp).all()

    def get_recent_interactions(self, limit=4):
        return self.session.query(ChatInteraction).filter_by(user_name=self.user_name).order_by(ChatInteraction.timestamp.desc()).limit(limit).all()

    def close(self):
        self.session.close()
