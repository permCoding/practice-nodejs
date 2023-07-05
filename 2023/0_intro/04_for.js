/*
    модули
*/

// const print_arr = require('./04_module').print_arr;
// const Pi = require('./04_module').Pi;
const { print_arr } = require('./04_module');

let arr = [123,22,12,55,7];

arr.forEach(print_arr);
