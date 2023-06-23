const {expect} = require('chai');
const {sum} =  require('./myModule');

describe('Test Suite', () => {
    it('works with positive integers', () => {
      expect(sum(3,5)).to.equal(8,'did not work with 3 and 5')
    })
    it('works wih floating point numbers', () => {
       expect(sum(3.14,3.55)).to.equal(6.69,'did not work with 3.14 and 2.55')
    })
});