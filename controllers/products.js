const express = require('express');
const router = express.Router();
const Product = require("../models/connection");
const ObjectID = require('mongodb').ObjectID;

// router.get('/', (req,res) => {
//     Product.all(function(result){
//             res.redirect('/products')
//         }
//     )
// })
Product.connect();

router.get('/', (req, res) => {
    res.redirect('/products')
})

router.get('/products/', (req, res) => {
    Product.getAll("stock", function(result) {
        res.render('products.ejs', {
            products: result
        })
    })
})

router.get('/buy/:id', (req, res) => {
    Product.get("stock", ObjectID(req.params.id), function(result) {
        res.render('buy.ejs', {
            products: result
        })
    })
})

router.get('/buy/confirmation/:id', (req, res) => {
    Product.buy(ObjectID(req.params.id), function(result) {
        res.render('confirmation.ejs', {products: result})
    })
})

// router.delete('/buy/confirmation/:id', (req, res) => {
//     Product.findOneAndDelete({
//         "_id": id
//     }, (err, result) => {
//         if (err) return res.send(err)
//         res.render('products.ejs')

//     })
// })

module.exports = router