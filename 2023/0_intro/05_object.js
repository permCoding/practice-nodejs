/*
    объекты
*/

let user_data = 
    {
        "login": "abc",
        "password": "qwerty"
    };

console.log(user_data);

console.log(JSON.stringify(user_data, [], 4));

console.log(JSON.stringify(user_data, ['login'], 4));

console.log(JSON.stringify(user_data, null, 4));
