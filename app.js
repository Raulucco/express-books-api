'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bookRouter = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Book = require('./books/model');
var db = mongoose.connect('mongodb://localhost/booksAPI');

app.use(bodyParser.encoded({extended: true}));
app.use(bodyParser.json());

bookRouter.route('/books').get(function (request, response) {
  var query = {};

  if (request.query.gender) {
    query.gender = request.query.gender;
  }

  Book.find(query, function (err, books) {
    if (err) {
      console.log(err);
      response.status(500).send(err);
    } else {
      response.json(books);
    }
  });
  response.json(resJson);
});


bookRouter.route('/books/:bookId').get(function (request, response) {
  Book.find(request.params.bookId, function (err, books) {
    if (err) {
      console.log(err);
      response.status(500).send(err);
    } else {
      response.json(books);
    }
  });
  response.json(resJson);

}).post(function (req, res) {
  var book = new Book(req.body);

  book.save();
  res.status(201).json(book);

});


app.use('/api', bookRouter);

app.get('/', function(req, res){
  res.send('You hit my API');
});

app.listen(port, function(){
  console.log('Node litesning on port ' + port);
});
