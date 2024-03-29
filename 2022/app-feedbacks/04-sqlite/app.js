const express = require('express');
const path = require('path');

const app = express(); // создаём объект приложения
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); // подключаем шаблонизатор

const r_intro = require('./routes/r_intro.js');
const r_feeds = require('./routes/r_feeds.js');
const r_new_feed = require('./routes/r_new_feed.js');

app.use(['/intro','/'], r_intro);
app.use('/feeds', r_feeds);
app.use('/new_feed', r_new_feed);

app.listen(3000, "localhost", () => console.log(`to stop: Ctrl+C`));
