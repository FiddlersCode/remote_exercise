const chai = require('chai');

const { expect } = chai;

const Fibonacci = require('../fibonacci');

describe('Fibonacci', () => {
    describe('get Fibonacci sequence', () => {
        it('gets the sequence of numbers', () => {
            const upperBound = 5;
            expect(Fibonacci.getFibonacciSequence(upperBound)).to.deep.eq([0, 1, 1, 2, 3, 5]);
        });

        it('gets the sequence of numbers', () => {
            const upperBound = 50;
            expect(Fibonacci.getFibonacciSequence(upperBound))
                .to.deep.eq([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
        });

        it('gets the sequence of numbers', () => {
            const upperBound = 50;
            expect(Fibonacci.getFibonacciSequence(upperBound)).to.deep
                .eq([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
        });

        it('gets the sequence of numbers', () => {
            const upperBound = 55;
            expect(Fibonacci.getFibonacciSequence(upperBound)).to.deep
                .eq([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
        });

        it('gets the sequence of numbers', () => {
            const upperBound = 1598;
            expect(Fibonacci.getFibonacciSequence(upperBound)).to.deep
                .eq([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597]);
        });
    });
});
