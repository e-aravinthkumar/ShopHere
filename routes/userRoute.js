const express = require('express');
const { getProducts, getHomePage, getCartPage } = require('../controllers/pageController');

route = express.Router();


route.get('/products', getProducts );
route.get('/cart', getCartPage);
route.get('/', getHomePage);


module.exports = route;