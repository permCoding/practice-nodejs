/*
    программа состоит из одного файла
    команды исполняются последовательно
    не зависит от выбора пользователя
*/

let x = 123
const check = x%2 != 0;
console.log(check);

let prefix = null; // коммент

if (check) {
    prefix = 'не'
}
else {
    prefix = ''
}

console.log(`${prefix}четное`)
console.log(x%2!=0? 'нечетное': 'четное')
