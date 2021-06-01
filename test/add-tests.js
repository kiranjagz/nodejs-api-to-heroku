const chai = require('chai');
const addService = require('./../services/add-service');

chai.should();

describe("add two positive numbers: 2 + 2", () => {
    it('should return 4', function() {
        var result = addService.add(2, 2);
        result.should.equal(4);
    });
});