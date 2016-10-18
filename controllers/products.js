const express  = require('express');
const router   = express.Router();
const Beaver   = require("../models/")

router.get('/', (req,res) => {
    Beaver.all(function(result){
            res.redirect('/products')
        }
    )
})

router.get('/products/', (req,res) => {
    
        res.render('products.ejs')
    
})

router.get('/buy/:id', (req,res) => {
    Beaver.findOne(req, function(result) {
        res.render('buy.ejs', {beaver: result})
    })
})

router.get('/buy/confirmation', (req,res) => {
    Beaver.findOne(req, function(result) {
        res.render('confirmation.ejs')
    })
})

router.delete('/buy/confirmation/:id', (req,res) => {
    Beaver.findOneAndDelete({"_id":id }, (err,result) => {
        if (err) return res.send(err)
        res.render('products.ejs')
    
    })
})


module.exports = router

