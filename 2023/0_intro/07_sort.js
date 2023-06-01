/*
    json - sort
*/

const sort_a = () => {
    return users.sort((a,b) => a.login>b.login? +1: -1);
}

const sort_b = (field) => {
    return users.sort((a,b) => a[field]>b[field]? +1: -1);
}

const sort_d = (field, direct=+1) => {
    return users.sort((a,b) => a[field]>b[field]? +1*direct: -1*direct);
}

let users = require('./users.json');

console.log(users);
console.log(sort_a());
console.log(sort_b('login'));
console.log(sort_d('login')); // по умолчанию asc
console.log(sort_d('login', -1)); // desc
console.log(sort_d('login').reverse()); // desc
