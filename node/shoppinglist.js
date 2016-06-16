//Main JS file of our shoppinglist app

var express = require('express'); 	//Import our express module

var app = express(); 				//create our app object that holds our routes

app.listen(3000, function(err){		//Start listening on port 3000
	console.log('shoppinglist listening on http://localhost:3000');
		});

app.use('/',express.static('../app'));	//Serve our static HTML files //periods go up one directory //where you have to navigate to to get the index.html file
//reads "App mounted at route"

app.get('/list', function(req, res) {
		res.json(['Cat Food', 'Toothpaste', 'Bananas']);
});

app.get('/heyo', function(req,res) {	
	res.json('Hotel, Motel, Holiday Inn.');
});