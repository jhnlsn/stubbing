let Zoo = require("../lib/Zoo");
let sinon = require("sinon");
let mysql = require("promise-mysql");
let Promise = require('bluebird');

describe('Zoo', function() {
  it('should stubb', function(done) {


    let bronx = new Zoo();
    
    let stub = sinon.stub(bronx.conn, 'query').callsFake(function(){
      return Promise.resolve([{
        name: 'Zebra'
      }]);
    });

    bronx.animals();
    done();
  });
})