const express = require('express')
const app = express()

app.get('/', (req, res) => {
    let feeds = require('./feeds.json')
    res.status(200).json(feeds)
})

app.get('/sorted', (req, res) => {
    let feeds = require('./feeds.json')
    feeds.sort((a,b) => a.name>b.name? +1: -1)
    res.status(200).json(feeds)
})

app.listen(3000, () => console.log(`http://localhost:${3000}/`));
