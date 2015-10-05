/**
 * Created by eak on 10/5/15.
 */
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    config = require('./config.js'),
    path = require('path');

port = process.env.PORT || 8080;

// model
var User = require('./app/models/user');

// connect db
mongoose.connect(config.database);

// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// configure app to handle CORS request
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

// log all request to console
app.use(morgan('dev'));

// ROUTE api
var apiRouter = require('./app/routes/api')(app, express);
app.use('/api', apiRouter);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(port);
console.log('Magic happen on port : ' + port);
