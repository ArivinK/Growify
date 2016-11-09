const express     = require('express');
const bodyParser  = require('body-parser');
const app         = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
// app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));
// app.use("/styles",express.static(__dirname + "/styles"));

//require all routes for products
const controllers  = require('./controllers/products');
app.use(controllers);



module.exports = app.listen(3000, function() {
  	console.log('listening on 3000');
});

