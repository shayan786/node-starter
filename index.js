'use strict';

//////////////////////////////
// Requires
//////////////////////////////
var express = require('express'),
    cfenv = require('cfenv'),
    path = require('path'),
    nunjucks = require('nunjucks');

//////////////////////////////
// App Variables
//////////////////////////////
var app = express(),
    appEnv = cfenv.getAppEnv();

nunjucks.configure('src/views', {
  autoescape: true,
  express: app
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index.html', {title: 'Node Starter'});
});

//////////////////////////////
// Start the server
//////////////////////////////
app.listen(appEnv.port, function () {
  console.log('Server starting on ' + appEnv.url);
});
