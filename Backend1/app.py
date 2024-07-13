from flask import Flask, render_template, request, jsonify
from mentor_mate import mentorMate
from chroma_retriver import ChromaRetrevier

pdf_retriver = ChromaRetrevier(db_path="vectorDb", collection_name="PDFCollection")
print(pdf_retriver.collection.count())

app = Flask(__name__)

# Route to render the index.html template
@app.route('/')
def index():
    return render_template('index.html')

# Route to handle form submissions
@app.route('/submit_message', methods=['POST'])
def submit_message():
    message = request.form['message']
    user_name = request.form['user_name']  # Retrieve username from form data
    print("User Message:", message)
    print("User Name:", user_name)
    # Process the message (e.g., interact with your chatbot backend)
    
    similarity_docs = pdf_retriver.query_documents(message)
 

    mentor = mentorMate(message, similarity_docs, str(user_name))

    bot_response = mentor.get_response()
    # Log bot_response value to console 
    print("Bot Response:", bot_response)
          
    return jsonify({'bot_response': bot_response})

if __name__ == '__main__':
    app.run(debug=True)