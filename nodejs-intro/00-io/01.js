/* это пример ввода данных в программу с клавиатуры 
 * необходимо установить библиотеку readline-sync
 * npm i readline-sync
 */

const rl = require('readline-sync');


console.log('Введите login?');
let userLogin = rl.question();

console.log('Введите password?');
let userPassword = rl.question('', {
    hideEchoBack: true // symbols as `*`
});

let password = "qwerty";
let message = password==userPassword? "разрешён": "запрещён";

console.log(`Пользователю ${userLogin} доступ к БД ${message}`);
