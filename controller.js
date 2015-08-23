'use strict';

function Ctrl (model) {
  this.Model = model;
}

Ctrl.prototype.get = function (req, res) {
  var query = {};

  if (req.query.gender) {
    query.gender = req.query.gender;
  }

  Model.find(query, function(err, collection) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(collection);
    }
  });
  res.json(resJson);
};


Ctrl.prototype.post = function (req, res) {
  if (!req.body.title) {
    res.status(400);
    res.send('Title is required');
    return;
  }

  var item = new this.Model(req.body);

  item.save();
  res.status(201);
  res.json(item);
};

Ctrl.prototype.modelInstanceFactory = function(req, res, next) {
  this.Model.findById(request.params.id, function(err, item) {
    if (err) {
      res.status(404).send(err).end();
      return;
    }
    req.item = item;
    delete req.body._id;
    next();
  });
};

Ctrl.prototype.getById = function(req, res) {
  res.json(req.item);
};

Ctrl.prototype.put = function(req, res) {

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

};

Ctrl.prototype.patch = function(req, res) {

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

};

Ctrl.prototype.patch = function(req, res) {

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

};

Ctrl.prototype.delete = function (req, res) {
  req.item.remove(function (err) {
    if (err) {
      res.status(500).send(error);
      return;
    }
    res.status(204);
  });

};

module.exports = Ctrl;
