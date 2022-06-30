const express = require('express');
const htmlParser = express.urlencoded({extended: false});
const model = { 
    title: "Отзывы о продукции"
}; // подключаем модель данных
const router = express.Router();

router.get('/', (req, res) => {
    res.render('new_feed.ejs', model); // render view
});

router.get('/intro', (req, res) => {
    res.redirect('/intro');
})

router.post('/', htmlParser, (req, res) => {
    let userName = req.body.userName; // находим по имени тега в шаблоне
    let userFeed = req.body.userFeed; // находим по имени тега в шаблоне
    let values = [userName, userFeed];
    console.log(values);
    res.redirect("/intro");
});

module.exports = router;
