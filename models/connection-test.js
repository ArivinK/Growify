// copy-paste this route inside products.js to test, one function at a time, comment the others 
//test
router.get('/test', (req, res) => {
    product.disconnect((err, result)=>{
        if(err) 
            res.send("error")
        res.send("disconnected " )
    })

    product.isConnected((err, result)=>{
        if(err) 
            res.send("error")
        res.send("still connected " )
    })

    var objToSend = {
        "seller_id": "42",
        "quantity": "1",
        "price": "6"
    }

    product.saveToDb('stock',objToSend,(err, result)=>{
        if(err) 
            res.send("error")
        res.send("saveToDb " )
    })

    var productId = "580788a3c2bd62429576de3f"
    product.get('stock',ObjectID(productId),(err, result)=>{
        if(err) 
            res.send("error")
        res.send(result);
    })
    
    product.getAll('stock',(err, result)=>{
        if(err) 
            res.send("error")
        res.send(result);
    })
    
    var productId = "580788a3c2bd62429576de3f"
    product.buy(ObjectID(productId),(err, result)=>{
        if(err) 
            res.send("error")
        res.send(result);
    })
})