from flask import Flask, render_template  # pip install Jinja2

app = Flask(__name__)

items = [
    { 'title': 'Главная', 'url': '/' } , 
    { 'title': 'Меню', 'url': '/menu' } ,
    { 'title': 'О продукте', 'url': '/about' } , 
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('index.html', title='about')

@app.route('/menu')
def menu():
    return render_template('menu.html', title='menu', items=items)

if __name__ == '__main__':
    app.run(debug=True)
