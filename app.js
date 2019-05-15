var exp = require('express');
var app = exp();
var path = require('path');
var bodyParser = require('body-parser');
var cookie = require('cookie-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/urlshort');

mongoose.connection.on('connected', function(){
    console.log('Database connected successfully...');
});

mongoose.connection.on('error', function(err){
    console.log('Error...!!!! Unsuccessful connection...!!!', err);
});

//view engine setup
app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

module.exports = app;