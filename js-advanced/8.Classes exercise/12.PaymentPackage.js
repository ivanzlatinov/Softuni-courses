class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}


const PaymentPackage = require('./T12PaymentPackage');
const { expect } = require('chai');

describe('Tests for PaymentPackage Class', () => {

    describe('Tests for the Name', () => {

        it('constructor', () => {
            let instance = new PaymentPackage('Name', 100);

            assert.equal(instance._name, 'Name', '1');
            assert.equal(instance._value, 100, '3');
            assert.equal(instance._VAT, 20, '4');
            assert.equal(instance._active, true, '5');
        });

        it('Should throw errow when the new Name is a number', () => {
            expect(() => new PaymentPackage(123, 123)).to.throw('Name must be a non-empty string');
        });

        it('Should throw errow when the new Name is an array', () => {
            expect(() => new PaymentPackage(['abc'], 123)).to.throw('Name must be a non-empty string');
        });

        it('Should throw errow when the new Name is empty', () => {
            expect(() => new PaymentPackage('', 123)).to.throw('Name must be a non-empty string');
        });

        it('Should return the new Name if the input is good', () => {
            expect(() => new PaymentPackage('abc', 123)).not.to.throw('Name must be a non-empty string');
        });
    });

    describe('Tests for the Value', () => {

        it('Should throw errow when the new Value is a string', () => {
            expect(() => new PaymentPackage('abc', 'abc')).to.throw('Value must be a non-negative number');
        });

        it('Should throw errow when the new Value is an array', () => {
            expect(() => new PaymentPackage('abc', [123])).to.throw('Value must be a non-negative number');
        });

        it('Should throw errow when the new Value is negative', () => {
            expect(() => new PaymentPackage('abc', -123)).to.throw('Value must be a non-negative number');
        });

        it('Should return the new Value if the input is good', () => {
            expect(() => new PaymentPackage('abc', 123)).not.to.throw('Value must be a non-negative number');
        });

        it('Set value to null', () => {
            let instance = new PaymentPackage('Name', 100);
            assert.doesNotThrow(() => { instance.value = 0 })
        });
    });

    describe('Tests for the VAT', () => {

        it('Should throw errow when the new VAT is a string', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = 'abc').to.throw('VAT must be a non-negative number');
        });

        it('Should throw errow when the new VAT is an array', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = [123]).to.throw('VAT must be a non-negative number');
        });

        it('Should throw errow when the new VAT is negative', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = -123).to.throw('VAT must be a non-negative number');
        });

        it('Should return the new VAT if the input is good', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = 123).not.to.throw('VAT must be a non-negative number');
        });
    });

    describe('Tests for the Active', () => {

        it('Should throw errow when the new Active is a string', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = 'abc').to.throw('Active status must be a boolean');
        });

        it('Should throw errow when the new Active is an array', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = [123]).to.throw('Active status must be a boolean');
        });

        it('Should throw errow when the new Active is negative', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = -123).to.throw('Active status must be a boolean');
        });

        it('Should return the new Active if the input is good', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = true).not.to.throw('Active status must be a boolean');
        });
    });

    describe('Tests for toString Method', () => {

        it('Should return a string as all the input is correct - 1', () => {
            let flagClass = new PaymentPackage('abc', 123);
            let output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });

        it('Should return a string as all the input is correct - 2', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.VAT = 30;
            let output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });

        it('Should return a string as all the input is correct - 3', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.active = false;
            let output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });

        it('Should return a string as all the input is correct - 4', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.VAT = 30;
            flagClass.active = false;
            let output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
    });
});