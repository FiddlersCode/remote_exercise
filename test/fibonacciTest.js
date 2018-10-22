const chai = require('chai');

const { expect } = chai;

const Fibonacci = require('../fibonacci');

describe('Fibonacci', () => {
    describe('get Fibonacci sequence', () => {
        it('the sequence of numbers', () => {
            const upperBound = 5;
            expect(Fibonacci.getFibonacciSequence(upperBound)).to.deep.eq([1, 1, 2, 3, 5]);
        });
    });
});
