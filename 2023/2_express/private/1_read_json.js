let feeds = require('./feeds.json');
let strJSON = JSON.stringify(feeds, null, 4);
console.log(strJSON);

feeds.sort((a,b) => a.name>b.name? +1: -1);

for (let feed of feeds) {
    console.log(`${feed.name}`)
}