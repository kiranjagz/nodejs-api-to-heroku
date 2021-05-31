const supertest = require('supertest');
const server = require('../index');
const chai = require('chai');

chai.should();

const api = supertest.agent(server);

describe('Add method', () => {
    it('should connect to the Server and do addition', (done) => {
        api.post('/api/addition')
            .set('Connetion', 'keep alive')
            .set('Content-Type', 'application/json')
            .type('form')
            .send({
                firstNumber: 2,
                secondNumber: 3
            })
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.result.should.equal(5);
                done();
            });
    });
})

describe('Subtraction method', () => {
    it('should connect to the server and do subraction', (done) => {
        api.post('/api/subtraction')
            .send({
                firstNumber: 4,
                secondNumber: 1
            })
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.result.should.equal(3);
                done();
            });
    })
});