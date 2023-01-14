const express = require('express');

const route = express.Router();

route.get('/add_product', (req, res, next)=>{
    res.render('add_product.ejs', {pageTitle: 'add Products - ShopHere', page:'add_product'});
});
route.post('/add_product', (req, res, next)=>{
    res.redirect('/');
})
module.exports = route;