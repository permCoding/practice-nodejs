/* оформление серверной программы
 * после запуска результаты смотреть в браузере
 * по адресу localhost:3000
 * для остановки в терминале нажмите Ctrl+C
 */

const http = require("http");

const make_response = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"} );
    // https://nodejs.org/api/http.html#responsewriteheadstatuscode-statusmessage-headers    
    console.log("request");
    res.write('<meta charset="utf-8" /><br>');
    res.write('<div style="text-align: center;">');
    res.write('<h3>The server is running</h3>');
    res.write('<h2>Сервер запущен</h2>');
    res.write('<img src="./comp.jpg">'); // так не может возвращать файлы
    res.write('</div>');
    res.end(); // завершает ответ и передёт управление браузеру
};

const server = http.createServer();

server.on("request", make_response); // на событие запроса сделай ответ

const hostname = 'localhost', port = 3000;
server.listen(port, hostname, 
    () => console.log(`http://${hostname}:${port}/`)
); // включили прослушивание
