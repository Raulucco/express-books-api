'use strict';

var sinon = require('sinon');
var should = require('should');
var BookCtrl = require('./controller');

describe('Books Controller', function () {
  describe('Create book', function () {
    it('should not create a book without title', function () {
      var Book = function () { return {save: new Function()};};
      var req = {
        body: {
          author: 'John'
        }
      };
      var res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: new Function()
      };
      var controller = new BookCtrl(Book);
      controller.post(req, res);

      res.status.calledWith(400).should.equal(true, 'Bad request ' + res.status.args[0][0]);
      res.send.calledWith('Title is required').should.equal(true);
    });
  });
});
