'use strict';

var express = require('express');
var router = express.Router();


var routes = function(Model) {

  router.route('/').get(function(request, response) {
    var query = {};

    if (request.query.gender) {
      query.gender = request.query.gender;
    }

    Model.find(query, function(err, collection) {
      if (err) {
        response.status(500).send(err);
      } else {
        response.json(collection);
      }
    });
    response.json(resJson);
  });


  router.route('/:id').get(function(request, response) {
    Model.find(request.params.id, function(err, collection) {
      if (err) {
        response.status(500).send(err);
      } else {
        response.json(collection);
      }
    });
    response.json(resJson);

  }).post(function(req, res) {
    var obj = new Model(req.body);

    obj.save();
    res.status(201).json(obj);

  });

  return router;
};

module.exports = routes;
