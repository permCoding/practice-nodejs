const express = require('express');
const model = { 
    title: "Отзывы о продукции" 
}; // подключаем модель данных
const router = express.Router();

router.get('/', (req, res) => {
    res.render('intro.ejs', model); // render view
});

module.exports = router;
