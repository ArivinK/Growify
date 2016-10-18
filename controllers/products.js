const express  = require('express');
const router   = express.Router();
const Product   = require("../models/")

router.get('/', (req,res) => {
    Product.all(function(result){
            res.redirect('/products')
        }
    )
})

router.get('/products/', (req,res) => {
    
        res.render('products.ejs')
    
})

router.get('/buy/:id', (req,res) => {
    Product.findOne(req, function(result) {
        res.render('buy.ejs', {beaver: result})
    })
})

router.get('/buy/confirmation', (req,res) => {
    Product.findOne(req, function(result) {
        res.render('confirmation.ejs')
    })
})

router.delete('/buy/confirmation/:id', (req,res) => {
    Product.findOneAndDelete({"_id":id }, (err,result) => {
        if (err) return res.send(err)
        res.render('products.ejs')
    
    })
})


module.exports = router

