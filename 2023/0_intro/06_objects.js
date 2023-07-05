/*
    объекты
*/

let users = 
    [
        {
            "login": "abc",
            "password": "qwerty"
        },
        {
            "login": "admin",
            "password": "0000"
        },
        {
            "login": "user",
            "password": "user"
        }
    ];

console.log(users);

console.log(JSON.stringify(users, null, 4));
