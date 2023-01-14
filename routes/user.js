const express = require('express');

const route = express.Router();

route.get('/', (req, res, next)=>{
    res.render('home.ejs', {pageTitle: 'ShopHere.com', page:'home'});
});

module.exports = route;