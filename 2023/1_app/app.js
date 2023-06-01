const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use("/", require('./routers/index.js'));
app.use("/feed", require('./routers/feed.js'));

app.listen(3000, () => console.log(`http://localhost:${3000}/`));
