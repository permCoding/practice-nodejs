const http = require("http");

const make_response = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"} );
    let html = require('fs').readFileSync('./08_pattern.html', {encoding:'utf8'});
    if (req.url !== "/pattern") {
        let title = "Платформа Node.js";
        html = html.replace('{{title}}', title);
    };
    res.end(html);
};

const server = http.createServer();
server.on("request", make_response);
server.listen(3000);
