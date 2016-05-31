require('dotenv').config({path : '.env'});
var path = require('path');
var express = require('express');
var stormpath = require('express-stormpath');


var app = express();

app.use(express.static(__dirname + '/public'));
app.use(stormpath.init(app, {
	web: {
    	spa: {
      		enabled: true,
      		view: path.join(__dirname, 'public', 'index.html')
    	},
      postLogoutHandler: function (account, req, res, next) {
        console.log(req);
        console.log(account);
        res.redirect(302, '/login').end();
      }
  	}
}));


app.get('/api/ping/', function(req, res){
	res.send('Welcome to the unauthentication portion of the app. Anyone can access this.')
});

app.get('/api/ping/secured', stormpath.loginRequired, function(req, res){
	res.send('Welcome to the authenticated portion of the app. Only authenticated users can see this.');
});

app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.on('stormpath.ready', function () {
  app.listen(3000);
});