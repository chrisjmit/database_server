var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = chai.expect();
var should = chai.should();

chai.use(chaiHttp);

describe('Run a server', function(){

  it("finds the server running on localhost:4000", function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });

  it("stores a key passed in url to memory", function(done) {
    chai.request(server)
      .post('/')
      .send({'name': 'Chris'})
      .end(function(err, res){
        res.body.SUCCESS.name.should.equal('Chris');
        done();
      });
  });

  it("returns the key value stored", function(done) {
    chai.request(server)
    .get('/names?name=Chris')
    .end(function(err, res) {
    res.body.SUCCESS.name.should.equal("Chris");
    });
  });

});
