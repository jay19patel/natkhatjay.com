from flask import Flask, render_template, request, flash,redirect
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os
import json
# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')

def load_data():
    with open('data.json', 'r') as file:
        return json.load(file)

@app.route('/')
def home():
    data = load_data()
    return render_template('index.html', data=data)



@app.route('/project/<string:project_id>')
def project_detail(project_id):
    data = load_data()
    project = next((item for item in data.get("projects") if item["id"] == project_id), None)
    return render_template('project_detail.html', project=project)


if __name__ == '__main__':
    app.run(debug=True)

