const express = require('express');
const router = express.Router();
const sqlite = require('sqlite3').verbose();

router.get('/', (req, res) => {
    let fileDB = './private/feeds.db'; // файл БД
    const db = new sqlite.Database(fileDB);
    let query = `SELECT name, feed FROM feeds ORDER BY id`;
    db.all(query, [], (err, feeds) => {
        if (err) console.log(err.message);
        model = { feeds };
        res.render('index.ejs', model);
    });
    db.close();
});

module.exports = router;
