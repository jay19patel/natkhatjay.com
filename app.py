from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')



@app.route('/project/<int:project_id>')
def project_detail(project_id):
    # Dummy data for the project
    project = {
        'id': project_id,
        'title': 'FastAPI Application with PostgreSQL',
        'description': 'Create a Python-based web development project using FastAPI as the server, PostgreSQL as the database, and deployed on Google Cloud.',
        'image': 'https://images.unsplash.com/photo-1653564142033-ab3532091515?fm=jpg&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'details': [
            'Build RESTful API with FastAPI',
            'Implement data validation using Pydantic',
            'Set up PostgreSQL database for data persistence',
            'Deploy the application on Google Cloud Platform',
            'Implement authentication and authorization',
            'Create comprehensive API documentation using Swagger UI'
        ],
        'technologies': [
            {'name': 'FastAPI', 'icon': 'fas fa-bolt'},
            {'name': 'PostgreSQL', 'icon': 'fas fa-database'},
            {'name': 'Python', 'icon': 'fab fa-python'},
            {'name': 'Google Cloud', 'icon': 'fab fa-google'},
            {'name': 'Docker', 'icon': 'fab fa-docker'},
            {'name': 'Git', 'icon': 'fab fa-git-alt'}
        ],
        'features': [
            {
                'title': 'High Performance',
                'description': 'FastAPI offers very high performance, on par with NodeJS and Go.',
                'icon': 'fas fa-tachometer-alt'
            },
            {
                'title': 'Easy to Use',
                'description': 'Designed to be easy to use and learn. Less time reading docs.',
                'icon': 'fas fa-user-friends'
            },
            {
                'title': 'Fast to Code',
                'description': 'Increase the speed to develop features by about 200% to 300%.',
                'icon': 'fas fa-code'
            }
        ],
        'links': [
            {
                'name': 'GitHub',
                'url': 'https://github.com/yourusername/project-repo',
                'icon': 'fab fa-github'
            },
            {
                'name': 'YouTube - NJ as Coder',
                'url': 'https://www.youtube.com/c/NJasCoder',
                'icon': 'fab fa-youtube'
            },
            {
                'name': 'YouTube - Natkhat Jay',
                'url': 'https://www.youtube.com/c/NatkhatJay',
                'icon': 'fab fa-youtube'
            }
        ]
    }
    return render_template('project_detail.html', project=project)

if __name__ == '__main__':
    app.run(debug=True)

