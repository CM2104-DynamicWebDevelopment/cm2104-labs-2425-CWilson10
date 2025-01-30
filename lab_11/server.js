var express = require('express');
var knockKnockJokes = require('knock-knock-jokes')
var randomJoke = knockKnockJokes();
var app = express();

app.get('/', function(req, res){
    res.send("Hello world! by express");
});

app.get('/test', function(req, res){
    res.send("This is route 2");
});

/*
app.get('/joke', function(req, res){
    res.send(randomJoke);
});
*/

app.listen('8080');