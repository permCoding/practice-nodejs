const sqlite = require('sqlite3').verbose();

let feeds = require('./feeds.json');

let query = `INSERT INTO feeds(name,feed) VALUES(?,?)`;

let fileDB = './private/feeds.db';
const db = new sqlite.Database(fileDB);

db.serialize(() => {
    let stmt = db.prepare(query);
    for (let feed of feeds) {
        stmt.run(feed.name, feed.feed);
    }
    stmt.finalize();
});

db.close();
