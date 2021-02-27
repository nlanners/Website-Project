var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');    //DOUBLE CHECK WHETHER THIS IS NEEDED

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 1111);

app.get('/', function(req, res){
    var context = {};
    context.title = "Home Page";
    //document.getElementsByClassName('active').className=null;
    //document.getElementById('home').className='active';
    res.render('home', context);
});

app.get('/books', function(req, res){
    var context = {};
    context.title = "Books";
    //document.getElementsByClassName('active').className=null;
    //document.getElementById('books').className='active';
    res.render('books', context);
});

app.get('/board-games', function(req, res){
    var context = {};
    context.title = "Board Games";
    //document.getElementsByClassName('active').className=null;
    //document.getElementById('board-games').className='active';
    res.render('board-games', context);
});

app.get('/painting', function (req, res){
    var context = {};
    context.title = "Painting";
    //document.getElementsByClassName('active').className=null;
    //document.getElementById('painting').className='active';
    res.render('painting', context);
});

app.use(function(req, res){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});