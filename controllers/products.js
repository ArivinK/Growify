const express = require('express');
const router = express.Router();
const product = require("../models/connection");
const ObjectID = require('mongodb').ObjectID;

// router.get('/', (req,res) => {
//     product.all(function(result){
//             res.redirect('/products')
//         }
//     )
// })

product.connect((err, result) => {
    if (err) {
        console.log(err)
    };
    console.log("Connected");
});


router.get('/', (req, res) => {
    res.redirect('/products')
})

router.get('/products/', (req, res) => {
    product.getAll('stock', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.render('products.ejs', {
            products: result
        });
    })
})


router.get('/buy/:id', (req, res) => {
    product.get("stock", ObjectID(req.params.id), function(result) {
        res.render('buy.ejs', {
            products: result
        })
    })
})

router.get('/buy/confirmation/:id', (req, res) => {
    product.get(ObjectID(req.params.id), (err, result) => {
        if (err) {
            res.send("error")
        };
        res.render('confirmation.ejs', {
            products: result
        });
    });
    product.buy(ObjectID(req.params.id), (err, result) => {
        if (err) return res.send(err);
        res.render('products.ejs');

    };
})

module.exports = router