const express = require('express');
const { rmSync } = require('fs');
const model = { 
    title: "Отзывы о продукции",
    feeds_info: []
}; // подключаем модель данных
const router = express.Router();

router.get('/', (req, res) => {
    model.feeds_info = [
        {
            userName: "Алексей",
            userFeed: "отзыв Алексея"
        },
        {
            userName: "Борис",
            userFeed: "отзыв Бориса"
        }
    ];
    res.render('feeds.ejs', model); // render view
});

router.get('/intro', (req, res) => {
    res.redirect('/intro');
})

module.exports = router;
