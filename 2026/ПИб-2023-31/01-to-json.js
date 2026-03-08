const request = require('sync-request');
const cheerio = require("cheerio");
const fs = require('fs');

const getHtml = (url) => request('GET', url).getBody('utf8');

const getData = (html) => {
    const $ = cheerio.load(html);
    return $('#top20 > tbody > tr')
        .map((_, row) => {
            const tds = $(row).find('td');
            return {
                "rankCur": $(tds[0]).text().trim(),
                rankOld: $(tds[1]).text().trim(),
                language: $(tds[4]).text().trim(),
                ratings: $(tds[5]).text().trim(),
                changeRating: $(tds[6])?.text().trim() || ''
            }
        }).get();
}

const saveJSON = (results) => {
    const json = JSON.stringify(results, null, 2);
    fs.writeFileSync('./results.json', json, 'utf8');
}

const url = 'https://www.tiobe.com/tiobe-index/';
const html = getHtml(url);
const arrData = getData(html);
saveJSON(arrData);
