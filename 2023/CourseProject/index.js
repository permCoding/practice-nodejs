// прежде всего нужно установить две библиотеки
// npm i express
// npm i hbs

const express = require('express'); // подключаем внешнюю библиотеку
const routers = require('./routers.js'); // подключаем методы из своей библиотеки

const app = express(); // создаём объект приложения
app.set('view engine', 'hbs'); // подключаем шаблонизатор html-страницы
app.use(express.static('public')); // файлы этой папки будут видны браузеру

app.get('/', routers.get); // маршрутизатор

app.listen(3000, () => 
    console.log(`http://localhost:${3000}/`)
); // цикл прослушки событий
