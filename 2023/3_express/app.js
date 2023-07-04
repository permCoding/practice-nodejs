const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));

app.use("/", require('./routers/index.js'));
app.use("/feed", require('./routers/feed.js'));

let port = 3000;
app.listen(port, () => console.log(`http://localhost:${port}/`));
