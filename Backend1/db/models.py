from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class ChatInteraction(Base):
    __tablename__ = 'chat_interactions'

    id = Column(Integer, primary_key=True)
    user_name = Column(String(50), nullable=False)
    message_content = Column(Text, nullable=False)
    message_type = Column(String(10), nullable=False)  # 'human' or 'ai'
    timestamp = Column(DateTime, default=datetime.utcnow)
