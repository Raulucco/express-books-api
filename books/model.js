'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema();

var model = new schema({
  title: {
    type: 'String'
  },
  author: {
    type: 'String'
  },
  gender: {
    type: 'String'
  },
  read: {
    type: 'Boolean',
    default: false
  },

});

module.exports = mongoose.model('Books', model);
