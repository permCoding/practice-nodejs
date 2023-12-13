const fs = require('fs');

const get = (req, res) => {
    let abiturs = require('./private/abiturs.json'); // получить массив объектов из файла
    
    // в курсовом проекте следует получать файл из url-адреса:
    // https://pcoding.ru/json/abiturs.json
    // Задание: вывести список абитуриентов, 
    // отсортировав их по трём критериям: 
    //  - по Городу - по возрастанию, 
    //  - по Рейтингу - по убыванию
    //  - по Имени - по возрастанию

    // как загружать json из сети и как сортировать по нескольким параметрам
    // можно найти в нашей Лекции тут: https://github.com/permCoding/se-23/tree/main/part_1/lections/lect07-requests
    // или можете использовать любые подходящие методы, библиотеки...
    
    res.render('index.hbs', { abiturs });
}

module.exports = {
    get
}
