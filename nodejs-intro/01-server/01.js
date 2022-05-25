const http = require("http");

let titles = ['Сервер запущен', 'The server is running'];

let html = '\
    <div style="text-align: center;">\
        <br><h1><%title%></h1>\
    </div>';

const make_response = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"} );
    let url = req.url;
    let check = (url === "/en") || (url === "/")? 1: 0;
    // let check = Number((url === "/en") || (url === "/"));
    // let urls = ["/en", "/"];
    // let check = Number(urls.includes(url));
    let content = html.replace('<%title%>', titles[check]);
    res.end(content);
};

const server = http.createServer();
server.on("request", make_response);
server.listen(3000);
