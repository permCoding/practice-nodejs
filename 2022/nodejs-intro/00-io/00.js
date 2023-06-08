/* это пример ввода данных в программу 
 * через аргументы командной строки запуска программы 
 */

let array = process.argv;

console.log(array.length);

array.forEach((element, index) => 
    console.log(`${index+1}\t${element}`)
);

try {
    let sum = array
        .slice(2,)
        .map(elm => parseInt(elm))
        .reduce((acc,elm) => acc+elm, 0);
    console.log(`sum = ${sum}`);
} catch (error) {
    console.log('error data');
}

// для запуска программы в терминале наберите после 
// названия файла программы параметры через пробел:
// node 00 1 2 3 4 5