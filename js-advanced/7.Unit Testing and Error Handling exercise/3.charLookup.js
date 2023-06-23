const { expect } = require('chai');

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
;

describe('charLookup tests', () =>{

it('returns undefined if first param is number', () => {
expect(lookupChar(1,1)).to.be.undefined;
});

it('returns undefined if first param is arr', () => {
    expect(lookupChar([],1)).to.be.undefined;
    });

    it('returns undefined if first param is an object', () => {
        expect(lookupChar({},1)).to.be.undefined;
        });

it('returns undefined if second param is a string', () => {
    expect(lookupChar('1','1')).to.be.undefined
});
it('returns undefined if second param is an array', () => {
    expect(lookupChar('1',[])).to.be.undefined
});
it('returns undefined if second param is an object', () => {
    expect(lookupChar('1',{})).to.be.undefined
});

it('returns incorrect index if the index is bigger than string.length', () => {
    expect(lookupChar('12',3)).to.equal('Incorrect index');
});
it('returns incorrect index if the index is equal than string.length', () => {
    expect(lookupChar('12',2)).to.equal('Incorrect index');
});

it('returns the specified character if all requirments are met', () => {
    expect(lookupChar('12', 1)).to.equal('2')
});

it('returns undefined if the number is floating-point number', () => {
    expect(lookupChar('12', 1.2)).to.be.undefined;
});
it('returns incorrect index if the index is negative number', () => {
    expect(lookupChar('12', -2 )).to.equal('Incorrect index');
});

});