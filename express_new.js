var express=require('express');
var session=require('cookie-session');
var bodyParser = require('body-parser');
var leboncoin = require('leboncoin_new');
var lacentrale = require('lacentrale_new');
var urlencodedParser = bodyParser.urlencoded({extended:true});


var app = express();

app.use(session({
  secret:'scraper'
}),express.static(__dirname + '/public'))


//routes

.get('/',leboncoin.initScrap)
.get('/adrianmotherfucker',function(req,res){
  req.render('adrian.ejs')
})
.post('/scrapleboncoin',urlencodedParser,leboncoin.postAndScrap)

.get('/scraplacentrale',lacentrale.scrapLacentrale)

.get('/scraplacentrale/:url',lacentrale.scrapLacentralePack)


//end routes
.listen(8080);
