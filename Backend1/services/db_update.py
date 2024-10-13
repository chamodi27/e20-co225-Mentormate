
from db_services import update_unit  # Assuming you have the function from before
from google_spreadsheet import get_google_spreadsheet  # Assuming you have this function to access Google Sheets

def populate_units_from_spreadsheet(spreadsheet_id, credentials_path):
    """
    Populate the Unit table in the database using data from the 'units' sheet in a Google Spreadsheet.
    
    :param spreadsheet_id: The Google Spreadsheet ID.
    :param credentials_path: Path to the Google Service Account credentials file.
    """
    try:
        # Step 1: Access the Google Spreadsheet
        spreadsheet = get_google_spreadsheet(spreadsheet_id, credentials_path)
        
        # Step 2: Access the 'units' sheet
        sheet = spreadsheet.worksheet('units')

        # Step 3: Retrieve all values from the sheet
        range = 'A2:B'  # Columns A and B without headers
        units_data = sheet.get(range)

        # Step 4: Iterate through the rows and update the database
        for row in units_data:
            unit_name = row[0].strip()  # First column: Unit Name
            unit_description = row[1].strip() if len(row) > 1 and row[1].strip else None  # if the description is emtpy, set it to None
            
            # Step 5: Check if the row is not empty (skip empty rows)
            if not unit_name:
                continue

            # Step 6: Update or create the unit in the database
            update_unit(unit_name, unit_description)

        print("Database updated successfully with unit data from spreadsheet.")

    except Exception as e:
        print(f"Error occurred while populating the database: {e}")

def populate_questions_from_spreadsheet(spreadsheet_id, credentials_path):
    """
    Populate the Question table in the database using data from the 'questions' sheet in a Google Spreadsheet.
    
    :param spreadsheet_id: The Google Spreadsheet ID.
    :param credentials_path: Path to the Google Service Account credentials file.
    """
    try:
        # Step 1: Access the Google Spreadsheet
        spreadsheet = get_google_spreadsheet(spreadsheet_id, credentials_path)
        
        # Step 2: Access the 'questions' sheet
        sheet = spreadsheet.worksheet('sheet1')

        # Step 3: Retrieve all values from the sheet
        range = 'A2:B'  # Columns A and B without headers
        questions_data = sheet.get(range)

        # Step 4: Iterate through the rows and update the database
        for row in questions_data:
            unit_name = row[0].strip()  # First column: Unit Name
            question_text = row[1].strip()  # Second column: Question Text

            # Step 5: Check if the row is not empty (skip empty rows)
            if not unit_name or not question_text:
                continue

            # Step 6: Update or create the question in the database
            update_question(unit_name, question_text)

        print("Database updated successfully with question data from spreadsheet.")

    except Exception as e:
        print(f"Error occurred while populating the database: {e}")


if __name__ == "__main__":
    spreadsheet_id = "1kwHVw2V32SvgUWGn398YekCjHyfk4vUF4fouTV-j5-M"
    credentials_path = "../mentormate-googlecloud.json"

