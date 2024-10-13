
from db.models import User, ChatThread, Message , Unit , Question
from db.database import get_session
from datetime import datetime

def get_user_threads(user_email):
    """
    Retrieve all chat threads associated with a user's email.
    
    :param user_email: The email of the user whose threads are being fetched.
    :return: A list of dictionaries representing the threads.
    """
    session = get_session()
    try:
        user = session.query(User).filter_by(email=user_email).first()
        if not user:
            return []

        threads = session.query(ChatThread).filter_by(user_id=user.id).all()

        return [
            {
                'id': thread.id,
                'title': f"Chat created at {thread.created_at}" if thread.thread_title is None else thread.thread_title,
                'created_at': thread.created_at
            } for thread in threads
        ]
    finally:
        session.close()

def get_thread_messages(thread_id, user_email):
    """
    Retrieve all messages for a specific thread, ensuring the user owns the thread.
    
    :param thread_id: The ID of the thread whose messages are being fetched.
    :param user_email: The email of the user who owns the thread.
    :return: A list of dictionaries representing the messages.
    """
    session = get_session()
    try:
        user = session.query(User).filter_by(email=user_email).first()
        if not user:
            return []

        # Ensure the thread belongs to the user
        thread = session.query(ChatThread).filter_by(id=thread_id, user_id=user.id).first()
        if not thread:
            return []

        messages = session.query(Message).filter_by(thread_id=thread.id).all()
        return [
            {
                'id': message.id,
                'content': message.message_content,
                'type': message.message_type,
                'timestamp': message.timestamp
            } for message in messages
        ]
    finally:
        session.close()

def update_unit(unit_name, unit_description=None):
    """
    Update or create a Unit in the database.
    
    :param unit_name: The name of the unit to update or create.
    :param unit_description: An optional description for the unit.
    """
    session = get_session()
    try:
        # Check if the unit already exists
        unit = session.query(Unit).filter_by(unit_name=unit_name).first()
        
        if unit:
            # Update existing unit
            if unit_description is not None:
                unit.unit_description = unit_description
                session.commit()
                print(f"Updated unit: {unit_name}")
            else:
                print(f"No changes made to unit: {unit_name}")
        else:
            # Create new unit
            new_unit = Unit(unit_name=unit_name, unit_description=unit_description)
            session.add(new_unit)
            session.commit()
            print(f"Created new unit: {unit_name}")
    except Exception as e:
        session.rollback()  # Roll back the session in case of an error
        print(f"Error occurred: {e}")
    finally:
        session.close()


def update_question(unit_name, question_text, difficulty_level=None):
    """
    Update or create a question in the database.
    
    :param unit_name: The name of the unit the question belongs to.
    :param question_text: The text of the question.
    :param difficulty_level: Optional difficulty level for the question.
    """
    session = get_session()
    try:
        # Find the corresponding unit
        unit = session.query(Unit).filter_by(unit_name=unit_name).first()
        if not unit:
            print(f"Unit '{unit_name}' not found.")
            return
        
        # Check if the question already exists in that unit
        question = session.query(Question).filter_by(unit_id=unit.id, question_text=question_text).first()
        
        if question:
            # Update existing question
            if difficulty_level:
                question.difficulty_level = difficulty_level
            question.updated_at = datetime.utcnow()
            session.commit()
            print(f"Updated question: '{question_text}' in unit: '{unit_name}'")
        else:
            # Create new question
            new_question = Question(
                unit_id=unit.id,
                question_text=question_text,
                difficulty_level=difficulty_level,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            )
            session.add(new_question)
            session.commit()
            print(f"Created new question: '{question_text}' in unit: '{unit_name}'")
    
    except Exception as e:
        session.rollback()  # Rollback in case of an error
        print(f"Error occurred: {e}")
    
    finally:
        session.close()