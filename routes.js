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
  })
  .post(function(req, res) {
    var item = new Model(req.body);

    item.save();
    res.status(201).json(item);

  });

  router.use('/:id', function(req, res, next) {
    Model.findById(request.params.id, function(err, item) {
      if (err) {
        res.status(404).send(err).end();
        return;
      }
      req.item = item;
      delete req.body._id;
      next();
    });
  });
  router.route('/:id').get(function(request, response) {

    response.json(request.item);

  })
  .put(function(req, res) {

    var keys = Object.keys(req.item);
    var i = 0;
    var len = keys.length;
    for (; i < len; i++) {
      if (req.item.hasOwnProperty(keys[i])) {
        req.item[keys[i]] = req.body[keys[i]];
      }
    }

    req.items.save(function (err) {
      if (err) {
        res.status(500).send(error);
        return;
      }
      res.status(203).json(req.item);
    });

  })
  .patch(function(req, res) {

    var keys = Object.keys(req.item);
    var i = 0;
    var len = keys.length;
    for (; i < len; i++) {
      if (req.item.hasOwnProperty(keys[i])) {
        req.item[keys[i]] = req.body[keys[i]] || req.item[keys[i]];
      }
    }

    req.items.save(function (err) {
      if (err) {
        res.status(500).send(error);
        return;
      }
      res.status(203).json(req.item);
    });

  })
  .delete(function (req, res) {
    req.item.remove(function (err) {
      if (err) {
        res.status(500).send(error);
        return;
      }
      res.status(204);
    });

  });

  return router;
};



module.exports = routes;
