import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/server';

const should = chai.should(); // eslint-disable-line

chai.use(chaiHttp);

describe('/GET sqrt', () => {
  it('should sqrt on /api/sqrt-root', (done) => {
    chai.request(server)
        .get('/api/sqrt-root')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('sqrtRoot');
          res.body.sqrtRoot.should.be.a('number');
          done();
        });
  });
});
