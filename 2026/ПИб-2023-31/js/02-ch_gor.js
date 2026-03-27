const request = require('sync-request');
const fs = require('fs');
const cheerio = require('cheerio');

const getHtml = () => { 
    const host = "https://www.chitai-gorod.ru/";
    
    let query = "Пушкин"; // запрос
    let queryEncoded = encodeURIComponent(query); // кодируем кириллицу для URL
    console.log(queryEncoded); // это для проверки
    const sortDirection = "priceDesc"; // направление сортировки
    let pageNum = 2; // номер страницы - для паджинации
    const params = `phrase=${queryEncoded}&sortPreset=${sortDirection}&page=${pageNum}`;
    const url = `${host}search?${params}`; // формируем URL с параметрами запроса
    // https://www.chitai-gorod.ru/search?phrase=Пушкин&sortPreset=priceDesc&page=1
    // https://www.chitai-gorod.ru/search?phrase=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD&sortPreset=priceDesc&page=1
    
    const headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'};
    return request('GET', url, { headers: headers }).getBody('utf8');
}

const getData = (html) => {
    const $ = cheerio.load(html);
    return $('.search-title__sub').text().trim();
    // return $('.search-title__sub').html();
    // <div class="search-title__sub">Нашли 2&nbsp;465 товаров и 164 других совпадения</div>
}

const html = getHtml();
// const html = getHtml().replace(/(\d+).(\d+)/gu, `$1$2`); // убираем &nbsp; между числами 2 465
// fs.writeFileSync('./index.html', html, 'utf8');
console.log(getData(html));

