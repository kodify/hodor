var http = require('http');
var express = require('express');
var app = express();
var GPIOCtrl = require('./GPIOcontroller.js');

app.get('/unlock/', function(req, res) { 
  GPIOCtrl.unlockRelay(function () {
    res.send('OK');
  });
});

app.listen(3000); 

console.log('App Server running at port 3000');
