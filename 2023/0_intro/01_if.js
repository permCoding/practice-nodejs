/*
    программа состоит из одного файла
    команды исполняются последовательно
    не зависит от выбора пользователя
*/

let x = 123

// C#
// static
// Console.WriteLine();

console.log(x%2!=0)

let prefix = null; // 
if (x%2!=0) {
    prefix = 'не'
}
else {
    prefix = ''
}
console.log(`${prefix}четное`)

console.log(x%2!=0? 'нечетное': 'четное')
