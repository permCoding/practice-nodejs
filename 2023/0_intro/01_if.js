/*
    программа состоит из одного файла
    команды исполняются последовательно
    не зависит от выбора пользователя
*/

let x = 123
const check = x%2 != 0
console.log(check) // Console.WriteLine(check)

let prefix = null // коммент (в Python -> None)

if (check) {
    prefix = 'не'
}
else {
    prefix = ''
}
// обратный апостроф - `` Ёё      ''  ""
console.log(`${x} - ${prefix}четное`) // print(f"{prefix}четное")
var y = x%2 != 0? 'нечетное': 'четное'
console.log(y)
