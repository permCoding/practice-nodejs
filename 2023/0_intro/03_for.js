/*
    функции
    анонимные функции
*/

function print_arr_a(elm) {
    console.log(elm, elm%2!=0?`нечетное`:`четное`)
}

const print_arr_b = (elm) => console.log(elm, elm%2!=0?`нечетное`:`четное`);


let arr = [123,22,12,55,7];

arr.forEach((elm) => console.log(elm, elm%2!=0?`нечетное`:`четное`));

arr.forEach(print_arr_a);

arr.forEach(print_arr_b);
