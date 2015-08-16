'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Book = require('./books/model');
var routerFactory = require('./books/routes');
var bodyParser = require('body-parser');
var db = mongoose.connect('mongodb://localhost/booksAPI');

app.use(bodyParser.encoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api/books', routerFactory(Book));
app.use('/api/author', routerFactory(Author));

app.get('/', function(req, res) {
  res.send('You hit my API');
});

app.listen(port, function() {
  console.log('Node litesning on port ' + port);
});
