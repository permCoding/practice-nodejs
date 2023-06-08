const http = require('http');
const fs = require('fs');

const get_pathname = (req) => {
    let baseURL =  req.protocol + '://' + req.headers.host + '/';
    let reqUrl = new URL(req.url, baseURL);
    return reqUrl.pathname;
}

const get_rows = (filename) => {
    let feeds = require(filename);
    let rows = '';
    for (let feed of feeds) {
        rows += '<tr>';
        rows += `<td class="name"> ${feed.name} </td>`;
        rows += `<td class="feed"> ${feed.feed} </td>`;
        rows += '</tr>';
    }
    return rows;
}

const get_css = (res) => {
    res.writeHead(200, {'Content-Type': 'text/css'});
    let css = fs.readFileSync('./style.css');
    res.end(css);
}

const get_html = (req, res) => {
    const method = req.method;
    const pathname = get_pathname(req);

    if (method === 'POST') {
        // тут нужно брать данные из полей ввода
        // как-то парсить html body
        // найти там нужные поля и добавить новую запись в БД
        res.writeHead(302, {'Location': '/'});
        res.end();
    }
    if (method === 'GET') {
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        switch (pathname) {
            case '/':
                html = fs.readFileSync('index.html', {encoding:'utf8'});
                let rows = get_rows('./feeds.json');
                html = html.replace('{{rows}}', rows);
                break;
            case '/feed':
                html = fs.readFileSync('feed.html', {encoding:'utf8'});
                break;
            default:
                html = fs.readFileSync('error.html', {encoding:'utf8'});
        }
        res.end(html);    
    }
}

const make_response = (req, res) => { // req = request, res = response
    switch (req.url) {
        case '/style.css': 
            get_css(res); 
            break;
        default: 
            get_html(req, res);
    }
};

const server = http.createServer();
server.on("request", make_response);
server.listen(3000, 'localhost');


/*
if(method === 'GET' && pathname === '/posts' && !search_params.has('id')) {
    console/log('GET request to /posts');
}
else if(method === 'GET' && pathname === '/posts' && search_params.has('id')) {
    console/log('GET request to /posts?id=123');
}
else if(method === 'POST' && pathname === '/posts') {
    console.log('POST request to /posts');
}
*/
