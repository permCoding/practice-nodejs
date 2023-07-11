const fs = require('fs');

const index_get = (req, res) => {
    let feeds = require('./private/feeds.json'); // получить массив объектов из файла
    res.render('index.hbs', { feeds });
}

const feed_get = (req, res) => {
    res.render('feed.hbs', { }); // render view
}

const feed_post = (req, res) => {
    let feeds = require('./private/feeds.json'); // прочитать данные
    
    let last_id = feeds[feeds.length-1].id; // последний id в массиве
    let new_record = { // формируем объект нового отзыва
        'id': last_id+1,
        'name': req.body.nameUser, // находим по имени тега в шаблоне
        'feed': req.body.feedUser // находим по имени тега в шаблоне
    }
    feeds.push(new_record); // добавить в конец массива
    let json_in_str = JSON.stringify(feeds, null, 4); // перевести в строку
    fs.writeFileSync("./private/feeds.json", json_in_str, 'utf-8'); // записать в файл

    res.redirect('/'); // после записи редирект на главную страницу
}

module.exports = {
    index_get,
    feed_get,
    feed_post
}
