var express = require('express');
var knockKnockJokes = require('knock-knock-jokes')
var app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))


app.get('/', function(req, res){
    res.send("Hello world! by express");
});

app.get('/test', function(req, res){
    res.send("This is route 2");
});

app.get('/joke', function(req, res){
    var randomJoke = knockKnockJokes();
    res.send(randomJoke);
});

app.get('/add', function(req, res){
        var x = parseInt(req.query.x);
        var y = parseInt(req.query.y);
    res.send("X + Y="+(x+y));
});

app.get('/calc', function(req, res){
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    var operator = req.query.operator;

    switch(operator) {
        case "add":
            res.send("X + Y="+(x+y));
            break;
        case "sub":
            res.send("X - Y="+(x-y));
            break;
        case "mul":
            res.send("X * Y="+(x*y));
            break;
        case "div":
            res.send("X / Y="+(x/y));
        default:
            res.send("Enter real operator");
    }
});

app.get('/getform', function(req, res){
    var name = req.query.name;
    var quest = req.query.quest
    res.send("Hi "+name+" I am sure you will "+quest);
});

app.post('/postform', function(req, res){
    var name = req.body.name;
    var quest = req.body.quest;
     res.send("Hi "+name+" I am sure you will "+quest) ;
});

app.get("/user/:userID/books/:bookid", function(req, res){
    var userID = req.params.userID;
    var bookID = req.params.bookID; 
});
    

app.listen('8080');