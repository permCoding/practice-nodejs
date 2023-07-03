from flask import Flask  # pip install Flask

app = Flask(__name__)

@app.route('/')
def index():
    return '<h3>Index</h3>'

@app.route('/about')
def about():
    return '<h3>About</h3>'

if __name__ == '__main__':
    app.run(debug=True)
