const sqlite = require('sqlite3').verbose();

let query_delete = `DELETE FROM feeds`;

let fileDB = './private/feeds.db'; // файл БД
const db = new sqlite.Database(fileDB);

db.run(query_delete, [], (err) => {
    if (err) console.log(err.message);
});

db.close();
