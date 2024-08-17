import bcrypt

class PasswordManager:
    def __init__(self):
        pass
    
    def hash_password(self, password: str) -> str:
        """
        Hash the password using bcrypt.
        
        :param password: The plain text password to hash.
        :return: The hashed password.
        """
        # Convert the password to bytes
        password_bytes = password.encode('utf-8')
        # Generate the hash
        hashed_password = bcrypt.hashpw(password_bytes, bcrypt.gensalt())
        # Convert bytes back to string for easier storage and comparison
        return hashed_password.decode('utf-8')
    
    def check_password(self, password: str, hashed_password: str) -> bool:
        """
        Check if the provided password matches the hashed password.
        
        :param password: The plain text password to check.
        :param hashed_password: The hashed password to compare against.
        :return: True if the password matches, False otherwise.
        """
        # Convert the password to bytes
        password_bytes = password.encode('utf-8')
        # Convert the hashed password to bytes
        hashed_password_bytes = hashed_password.encode('utf-8')
        # Check if the password matches the hashed password
        return bcrypt.checkpw(password_bytes, hashed_password_bytes)