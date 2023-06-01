/*
    pattern html
*/

const fs = require('fs');
 
let html = fs.readFileSync('./08_pattern.html', {encoding:'utf8'});

console.log(html);

let title = "Платформа Node.js";

let render = html.replace('{{title}}', title);

fs.writeFileSync('./08_render.html', render, {encoding:'utf8'});
