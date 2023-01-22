const Product = require('../models/productModel');

module.exports = {

    getHomePage (req, res, next){
        res.render('shop/home.ejs', { page:'home' });
    },

    getAddProductPage(req, res, next){
        res.render('admin/add-product.ejs', {  page:'add-product' });
    },

    postaddProductPage(req, res, next){
        const product = new Product(req.body.name);
        product.save();
        res.redirect('/');
    },

    getProducts(req, res, next){
        Product.fetchAll(products=>{
            res.render('shop/products.ejs', { page:'products', products:[...products] });
        });
    },
    getPageNotFound(req, res, next){
        res.render('shop/404.ejs');
    },
    
    getCartPage(req, res, next){
        res.render('shop/cart.ejs', {page:'cart'});
    },

    getAdminProductsPage(req, res, next){
        res.render('admin/admin-products.ejs', {page:'admin-products'});
    }
}