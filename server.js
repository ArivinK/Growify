const express     = require('express');
const bodyParser  = require('body-parser')


const app         = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.use(express.static('public'))


//require all routes for beavers
const controllers  = require('./controllers/beavers')
app.use(controllers)


app.listen(3000, function() {
  	console.log('listening on 3000');
})