const express = require('express');
const router = express.Router();
const product = require("../models/connection");
const ObjectID = require('mongodb').ObjectID;

product.connect((err, result) => {
    if (err) {
        console.log(err);
    };
    console.log("Connected");
});


router.get('/', (req, res) => {
    res.redirect('/products');
})

router.get('/products/', (req, res) => {
    product.getAll('stock', (err, result) => {
        if (err) 
            console.log(err);
        res.render('products.ejs', {products: result});
    })
})

router.get('/buy/:id', (req, res) => {
    product.get('stock',ObjectID(req.params.id), (err, result) => {
        if (err) 
            console.log(err);
        res.render('buy.ejs', {products: result});
    })
})

router.get('/buy/confirmation/:id', (req, res) => {
    product.get('stock',ObjectID(req.params.id), (err, result) => {
        if (err) 
            console.log(err);
        res.render('confirmation.ejs', {products: result});
    })

})

//TODO : use PUT maybe (?)
router.post('/buy/confirmation/:id', (req, res) => {
    product.buy(ObjectID(req.params.id), (err, result) => {
        if (err) 
            console.log(err);
        console.log('deleted');
        res.redirect('/');
    })

})

module.exports = router;