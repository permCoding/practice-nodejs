/*
    модули
*/

// const p_elm = require('./04_module').print_elm;
// const Piiii = require('./04_module').Pi;

console.clear();

// console.log(Piiii);
let arr = [123,22,12,55,7];
// arr.forEach(p_elm);


const { print_elm } = require('./04_module');

arr.forEach(print_elm);
