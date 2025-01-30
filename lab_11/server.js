var express = require('express');
var jokes = require('knock-knock-jokes')
var app = express();
var randomJoke = jokes();

app.get('/', function(req, res){
    res.send("Hello world! by express");
});

app.get('/test', function(req, res){
    res.send("This is route 2");
});

app.get('/joke', function(req, res){
    res.send(randomJoke);
});

app.get()

app.listen('8080');