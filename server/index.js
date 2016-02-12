var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
var app = express();
app.models = require('./models/index');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));


app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();

});

app.use('/hello', function(rea,res,next){
  res.send('Hello World');
  next();
});

var routes = require('./routes');

_.each(routes, function(controller, route){
   app.use(route, controller(app, route));
});
// DB
mongoose.connect('mongodb://localhost/meanApp');
mongoose.connection.once('open', function(){
  app.models = require('./models/index');
  console.log('Listening on port 3000...');
  app.listen(3000);
});

