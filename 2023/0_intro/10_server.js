const http = require("http");
const fs = require("fs");

const make_response = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    let html = fs.readFileSync('./08_pattern.html', {encoding:'utf8'});
    if (req.url !== "/pattern") { // маршрутизация - http://localhost:3000/
        let title = "Платформа Node.js";
        html = html.replace('{{title}}', title);
    }; // если не паттерн, а нормальная страница, то заменяем
    res.end(html);
};

const server = http.createServer();
server.on("request", make_response);
server.listen(3000);
