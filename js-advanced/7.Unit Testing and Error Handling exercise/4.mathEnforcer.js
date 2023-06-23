const { expect } = require('chai');
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe('mathEnforcer', () => {
    describe('addFive', () =>{
 
it('returns undefined if its not a number', () =>{
 expect(mathEnforcer.addFive('abc')).to.be.undefined;   
 })
 it('returns a number with 5 added to it', () =>{
    expect(mathEnforcer.addFive(2)).to.equal(7);   
    })
    it('test with negative number', () =>{
        expect(mathEnforcer.addFive(-2)).to.equal(3);   
        })
        it('test with floating-number', () =>{
            expect(mathEnforcer.addFive(2.3)).to.equal(7.3);   
            })
                    

    });

    describe('subtractTen', () =>{
    it('returns undefined if its not a number', () =>{
           expect(mathEnforcer.subtractTen('abc')).to.be.undefined;   
            })
            it('returns a number substracted by 10', () =>{
                expect(mathEnforcer.subtractTen(10)).to.equal(0);   
                 })
                 it('test with negative number', () =>{
                    expect(mathEnforcer.subtractTen(-2)).to.equal(-12);   
                    })
                    it('test with floating-number', () =>{
                        expect(mathEnforcer.subtractTen(2.3)).to.equal(-7.7);   
                        })

    });

    describe('sum', () =>{
        it('returns undefined if its one param a number', () =>{
            expect(mathEnforcer.sum('abc',1)).to.be.undefined;   
             })
             it('returns undefined if its one param a number', () =>{
                expect(mathEnforcer.sum(1,'2')).to.be.undefined;   
                 })
             it('returns sum of 2 numbers', () =>{
                 expect(mathEnforcer.sum(10,10)).to.equal(20);   
                  })
                  it('test with negative number', () =>{
                     expect(mathEnforcer.sum(-2,2)).to.equal(0);   
                     })
                     it('test with floating-number', () =>{
                         expect(mathEnforcer.sum(2.3,3.3)).to.equal(5.6);   
                         })
    });

});