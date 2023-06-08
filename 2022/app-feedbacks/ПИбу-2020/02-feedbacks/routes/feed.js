const express = require('express');
const sqlite = require('sqlite3').verbose();
const htmlParser = express.urlencoded({extended: false});
const { md_feed } = require('../models/model-feed'); // подключаем модель данных
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('feed.ejs', md_feed); // render view
});

router.post('/', htmlParser, (req, res) => {
    let fileDB = './private/feeds.db'; // файл БД
    let nameUser = req.body.name; // находим по имени тега в шаблоне
    let feedUser = req.body.feed; // находим по имени тега в шаблоне
    const db = new sqlite.Database(fileDB);
    let query = `INSERT INTO feeds(name,feed) VALUES(?,?)`;
    db.run(query, [nameUser, feedUser], (err) => {
        if (err) console.log(err.message);
        res.redirect("/");
        db.close();
    });
});

module.exports = router;
