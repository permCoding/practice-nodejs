// этот файл создаёт БД с таблицей feeds

const sqlite = require('sqlite3');

let fileDB = './private/feeds.db'; // файл БД
const db = new sqlite.Database(fileDB);

let query_create = `
    CREATE TABLE IF NOT EXISTS feeds(
        id INTEGER UNIQUE,
        name TEXT,
        feed TEXT,
        PRIMARY KEY (id AUTOINCREMENT)
    );`

db.run(query_create, [], (err) => {
    if (err) { console.log(err.message); }
    else { console.log('Connected.'); }
});

db.close();
