from flask import Flask, render_template  # pip install Jinja2

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('index.html', title='about')

if __name__ == '__main__':
    app.run(debug=True)
