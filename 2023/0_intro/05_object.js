/*
    объекты
*/

let user_data = 
    {
        "login": "abc",
        "password": "qwerty",
        "key": true
    };

console.log(user_data);

console.log(JSON.stringify(user_data, [], 4)); // возвращает строку

console.log(JSON.stringify(user_data, ['login'], 4));

console.log(JSON.stringify(user_data, null, 4));
