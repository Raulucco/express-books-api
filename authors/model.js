'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema();

var model = new schema({
  name: {
    type: 'String'
  },
  gender: {
    type: 'String'
  }

});

module.exports = mongoose.model('Author', model);
