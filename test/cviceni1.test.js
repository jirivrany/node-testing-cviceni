'use strict';

var cviceni1 = require('../lib/cviceni1');

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('cviceni1', function () {

  describe('greet', function () {
    var logger;

    it('it should  greet the user and log it using logger', function () {
      logger = {
        log: sinon.spy()
      };

      var greetings = cviceni1.greet('James', logger);

      expect(logger.log).to.have.been.calledOnce;
      expect(logger.log).to.have.been.calledWith('Greeting: James');

      expect(greetings).to.equal('Hello James');

      logger.log.reset();
    });
  });

});
