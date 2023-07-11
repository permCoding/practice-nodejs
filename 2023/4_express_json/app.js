const express = require('express'); // так подключаем внешнюю библиотеку
const routers = require('./routers.js'); // так подключаем методы из своей библиотеки

const app = express(); // объект приложения
app.set('view engine', 'hbs'); // шаблонизатор html-страницы
app.use(express.static('public')); // файлы этой папки будут видны браузеру
app.use(express.urlencoded({extended:true})); // чтобы парсить параметры http-строки запроса
app.use(express.json()); // чтобы видеть тело страницы как json-объект и брать значения объектов DOM`а

app.post('/feed', routers.feed_post); // со страницы отзыва сделать запись в БД
app.get('/feed', routers.feed_get); // перейти на страницу отзыва

app.get('/', routers.index_get); // перейти на главную, этот путь ставить последним

app.listen(3000, () => console.log(`http://localhost:${3000}/`)); // цикл прослушки событий
