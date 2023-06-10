const sqlite = require('sqlite3').verbose();

let feeds = require('./feeds.json');
let nameUser = feeds[0].name;
let feedUser = feeds[0].feed;

let query = `INSERT INTO feeds(name,feed) VALUES(?,?)`;

let fileDB = './private/feeds.db'; // файл БД
const db = new sqlite.Database(fileDB);

db.run(query, [nameUser, feedUser], (err) => {
    if (err) console.log(err.message);
});

db.close();
