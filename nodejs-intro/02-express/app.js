const http = require('http');
const fs = require('fs');
const path = require('path');

const get_path = (page) => path.join(__dirname, 'views', `${page}.html`);

const server = http.createServer();

server.on("request", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    let page_path = ''; // адрес html-страницы
    console.log(req.url);
    switch (req.url) { // роутинг по страницам сайта
        case '/':
        case '/start':
        case '/home':
        case '/index.html':
            page_path = get_path('index');
            res.statusCode = 200;
            break;
        case '/about':
            res.statusCode = 301; // делаем переадресацию
            res.setHeader('Location', '/contacts');
            res.end();
            break;
        case '/contacts':
            page_path = get_path('contacts');
            res.statusCode = 200;
            break;
        default:
            page_path = get_path('error');
            res.statusCode = 404;
            break;
    }

    fs.readFile(page_path, (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, (error) => {
    error? console.error(error): console.log(`http://localhost:3000`);
});