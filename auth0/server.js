require('dotenv').config({path : '.env'});
var express = require('express');
var jwt = require('express-jwt');

var app = express();

app.use(express.static(__dirname + '/public'));

var authenticate = jwt({
  secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
  audience: process.env.AUTH0_CLIENT_ID
});

app.get('/api/ping/', function(req, res){
	res.send('Welcome to the unauthentication portion of the app. Anyone can access this.')
});

app.get('/api/ping/secured', authenticate, function(req, res){
	res.send('Welcome to the authenticated portion of the app. Only authenticated users can see this.');
});

app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);