/* это пример оформления объекта функции 
 * возвращаеме значение тоже объект
 */

const quest = require('readline-sync').question;

const getUser = () => {
    console.log('Введите login?');
    let userLogin = quest();
    
    console.log('Введите password?');
    let userPassword = quest('', {
        hideEchoBack: true // symbols as `*`
    });
    return {login: userLogin, password: userPassword};
}

let password = "qwerty";
let userData = getUser();  // получили объект
let message = password==userData.password? "разрешён": "запрещён";

console.log(`Пользователю ${userData.login} доступ к БД ${message}`);
