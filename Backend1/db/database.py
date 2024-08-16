from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .models import Base

# Setup the MySQL connection
engine = create_engine('mysql+pymysql://root:@localhost/mentormate')

# Create tables if they don't exist
Base.metadata.create_all(engine)

# Create a configured "Session" class
Session = sessionmaker(bind=engine)

# A function to get a new session
def get_session():
    return Session()
