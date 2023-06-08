/* пример оформления программы по вводу данных из файла
 * и выводу данных в файл
 * показан функциональный стиль оформления кода
 * показано использование регулярных выражений
 */

const fs = require('fs');

let content = fs.readFileSync(__filename, 'utf-8');

console.log(content);

let lines = content
    // .split(/\n|\r|\r\n/)
    .split('\n')
    .reverse()
    .join('\n');

fs.writeFileSync('damp.txt', lines);
