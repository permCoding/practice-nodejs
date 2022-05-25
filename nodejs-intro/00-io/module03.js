/* это пример оформления модуля
 * из модуля наружу экспортируется объект module.exports
 * снаружи будут видны только те функции и переменные
 * которые упомянуты в этом объекте
 * ещё показан иной способ импорта отдельных функций
 */

const { question } = require('readline-sync');

const getUser = () => {
    console.log('Введите login?');
    let userLogin = question();
    
    console.log('Введите password?');
    let userPassword = question('', {
        hideEchoBack: true // symbols as `*`
    });
    return {login: userLogin, password: userPassword};
}

module.exports = {
    getUser
}
