let Zoo = require("../lib/Zoo");
let sinon = require("sinon");
let mysql = require("promise-mysql");
let Promise = require('bluebird');
const assert = require('assert');

describe('Zoo', function() {
  it('should stubb 1 animal', function(done) {
    let bronx = new Zoo();
    
    let stub = sinon.stub(bronx.conn, 'query').callsFake(function(){
      // Could load a fixture and return it instead of my half ass attempt
      return Promise.resolve([{
        name: 'Zebra'
      }]);
    });

    let all = bronx.animals();

    all.then(animals => {
      assert.equal(animals.length, 1, 'Animals function should return one result');
      assert.equal(animals[0].name, 'Zebra');
    }).then(done);
  });
})