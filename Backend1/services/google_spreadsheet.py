import gspread
from google.oauth2.service_account import Credentials

def get_google_spreadsheet(spreadsheet_id, credentials_path):
    scope = ["https://www.googleapis.com/auth/spreadsheets.readonly"]  # Read-only access

    # Path to the service account key file
    SERVICE_ACCOUNT_FILE = credentials_path

    try:
        # Create credentials using the service account file and defined scope
        credentials = Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=scope)

        # Authenticate with Google Sheets API
        client = gspread.authorize(credentials)

        # Open the spreadsheet by its ID
        spreadsheet = client.open_by_key(spreadsheet_id)

        return spreadsheet  

    except gspread.SpreadsheetNotFound:
        print(f"Spreadsheet with ID {spreadsheet_id} not found.")
    except gspread.AuthError:
        print("Authentication error. Check your service account credentials.")
    except Exception as e:
        print(f"An error occurred: {e}")




