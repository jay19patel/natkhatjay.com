from flask import Flask, render_template, request, flash,redirect
import os
import json


app = Flask(__name__)
app.secret_key = "Falana-Dhekna"
PASSWORD = "Falana-Dhekna"
def load_data():
    with open('data.json', 'r') as file:
        return json.load(file)

@app.route('/')
def home():
    data = load_data()
    return render_template('index.html', data=data)

@app.route('/admin', methods=['GET', 'POST'])
def admin():
    message = None
    if request.method == 'POST':
        json_input = request.form.get('json_input')
        password = request.form.get('password')
        
        # Validate the password
        if password == PASSWORD:
            try:
                import json
                json_data = json.loads(json_input)
                message = "JSON submitted successfully!"
            except json.JSONDecodeError:
                message = "Invalid JSON format. Please check your input."
        else:
            message = "Incorrect password. Please try again."

    return render_template('admin.html', message=message)

@app.route('/project/<string:project_id>')
def project_detail(project_id):
    data = load_data()
    project = next((item for item in data.get("projects") if item["id"] == project_id), None)
    return render_template('project_detail.html', project=project)


if __name__ == '__main__':
    app.run(debug=True)

