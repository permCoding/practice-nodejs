const sqlite = require('sqlite3').verbose();

let id = 9;
let query_delete = `DELETE FROM feeds WHERE id=?`;

let fileDB = './private/feeds.db'; // файл БД
const db = new sqlite.Database(fileDB);

db.run(query_delete, [id], (err) => {
    if (err) console.log(err.message);
});

db.close();
