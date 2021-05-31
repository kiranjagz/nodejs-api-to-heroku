const { expect } = require('chai');
const addService = require('./../services/add-service');

describe("add two positive numbers: 2 + 2", () => {
    it('should return 4', function() {
        var result = addService.add(2, 2);
        expect(result).to.equal(4);
    });
});