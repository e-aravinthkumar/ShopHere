const express = require('express');
const { getAddProductPage, postaddProductPage, getAdminProductsPage } = require('../controllers/pageController');

route = express.Router();


route.get('/add-product', getAddProductPage );
route.post('/add-product', postaddProductPage );
route.get('/admin-products', getAdminProductsPage);

module.exports = route;