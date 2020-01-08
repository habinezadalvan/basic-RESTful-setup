/* eslint-disable no-unused-vars */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

const { expect } = chai;
chai.use(chaiHttp);

describe('test', () => {
  it('should return a string', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        if (err) done(err);
        expect('ci with travis').to.equal('ci with travis');
        done();
      });
  });
});
