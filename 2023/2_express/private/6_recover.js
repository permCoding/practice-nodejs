const sqlite = require('sqlite3').verbose();

let feeds = require('./feeds.json'); // откуда брать данные
let fileDB = './private/feeds.db'; // куда записывать

let query_delete = `DELETE FROM feeds`;
let query_insert = `INSERT INTO feeds(name,feed) VALUES(?,?)`;
let query_select = `SELECT COUNT(name) as count FROM feeds`;

const db = new sqlite.Database(fileDB);

db.serialize(() => {
    db.run(query_delete, []);

    let stmt = db.prepare(query_insert);
    for (let feed of feeds) {
        stmt.run(feed.name, feed.feed);
    }
    stmt.finalize();

    db.all(query_select, [], (err, count) => {
        if (err) console.log(err.message);
        console.log(`Всего записей: ${count[0].count}`);
    });
});

db.close();
