const { expect } = require('chai');
const subtractService = require('../services/subtract-service');

describe("subtract two positive numbers: 7 - 2", () => {
    it('should return 5', function() {
        var result = subtractService.subtract(7, 2);
        expect(result).to.equal(5);
    });
});