import pytest
from unittest.mock import patch, MagicMock
from Backend1.mentor_mate import mentorMate as mentorMate

def test_mentor_mate_initialization():
    user_input = "What is life?"
    similarity_doc = ["Some relevant content from PDF"]
    user_name = "test_user"

    mentor = mentorMate(user_input, similarity_doc, user_name)
    
    assert mentor.user_input == user_input
    assert mentor.similarity_doc == similarity_doc
    assert mentor.user_name == user_name