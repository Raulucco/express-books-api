'use strict';

var express = require('express');
var router = express.Router();


var routes = function(ctrl) {

  router.route('/')
  .get(ctrl.get)
  .post(ctrl.post);

  router.use('/:id', ctrl.modelInstanceFactory);
  router.route('/:id').get(ctrl.getById)
  .put(ctrl.put)
  .patch(ctrl.patch)
  .delete(ctrl.delete);

  return router;
};



module.exports = routes;
