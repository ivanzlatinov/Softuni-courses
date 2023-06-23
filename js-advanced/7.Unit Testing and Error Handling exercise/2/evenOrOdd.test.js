const { expect } = require('chai');
const { isOddOrEven } = require('./evenOrOdd');

describe('odd or even', () => {
it('should return undefined if its number',() => {
    expect(isOddOrEven(2)).to.be.undefined;
})

it('should return undefined if array',() => {
expect(isOddOrEven([])).to.be.undefined;
});
it('should return undefined if object',() => {
expect(isOddOrEven({})).to.be.undefined;
});
it('should return odd if string is odd',() => {
expect(isOddOrEven('abc')).to.equal('odd')
});
it('should return even if string is even',() => {
expect(isOddOrEven('abcd')).to.equal('even');
});
it('should return even if string is even',() => {
expect(isOddOrEven('abcd','cdbad','12345')).to.equal('even');
});
});
