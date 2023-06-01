const express = require('express');
const router = express.Router();
const sqlite = require('sqlite3').verbose();
const htmlParser = express.urlencoded({extended: false});

router.get('/', (req, res, next) => {
    res.render('feed.ejs', {}); // render view
});

router.post('/', htmlParser, (req, res) => {
    let nameUser = req.body.nameUser; // находим по имени тега в шаблоне
    let feedUser = req.body.feedUser; // находим по имени тега в шаблоне
    console.log(nameUser, feedUser); // просто для контроля

    let fileDB = './private/feeds.db'; // файл БД
    const db = new sqlite.Database(fileDB);
    let query = `INSERT INTO feeds(name,feed) VALUES(?,?)`;
    db.run(query, [nameUser, feedUser], (err) => {
        if (err) console.log(err.message);
        res.redirect("/");
    });
    db.close();
});

module.exports = router;
