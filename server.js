var http = require('http');
var express = require('express');


/**********************************************
 * Configuration section
 **********************************************/
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

//Allow CORS policy
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 


/**********************************************
 * Web SErver functionality 
 **********************************************/



app.get('/', function(req, res){
    console.log("Req on root page");
    res.send("Hello world!");
}); 

app.get('/about', function(req,res){
    res.send("I'm Pavel Aragon");
});

app.listen(8080, function () {
    console.log("Server running at localhost:8080")
});

/**********************************************
 * Api functionality
 **********************************************/

var catalog = [];

app.get('/api/catalog', function(req,res){
    res.json(catalog);
})

app.post('/api/items', function(req,res){
    var item = req.body;
    item.id = catalog.length +1;
    catalog.push(item);

    res.json(item);
});