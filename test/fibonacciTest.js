const chai = require('chai');

const { expect } = chai;

const Fibonacci = require('../fibonacci');

describe('Fibonacci', () => {
    describe('get Fibonacci sequence', () => {
        it('gets the sequence of numbers', () => {
            const upperBound = 0;
            expect(Fibonacci.getFibonacciSequence(upperBound)).to.deep.eq([0]);
        });

        it('gets the sequence of numbers', () => {
            const upperBound = 1;
            expect(Fibonacci.getFibonacciSequence(upperBound)).to.deep.eq([0, 1, 1]);
        });

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
            const upperBound = 55;
            expect(Fibonacci.getFibonacciSequence(upperBound)).to.deep
                .eq([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
        });

        it('gets the sequence of numbers', () => {
            const upperBound = 1598;
            expect(Fibonacci.getFibonacciSequence(upperBound)).to.deep
                .eq([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597]);
        });

        it('gets the sequence of numbers up to 4 million', () => {
            const upperBound = 4000000;
            const actual = Fibonacci.getFibonacciSequence(upperBound);
            expect(actual.length).to.eq(34);
        });
    });

    describe('get Fibonacci sequence recursively', () => {
        let i;
        beforeEach(() => {
            i = 1;
        });
        it('gets the sequence of numbers recursively', () => {
            const upperBound = 1;

            expect(Fibonacci.getFibonacciSequenceRecursively(upperBound, [], i)).to.deep
                .eq([0, 1, 1]);
        });

        it('gets the sequence of numbers recursively', () => {
            const upperBound = 2;
            expect(Fibonacci.getFibonacciSequenceRecursively(upperBound, [], i)).to.deep
                .eq([0, 1, 1, 2]);
        });

        it('gets the sequence of numbers', () => {
            const upperBound = 5;
            expect(Fibonacci.getFibonacciSequence(upperBound, [], i)).to.deep
                .eq([0, 1, 1, 2, 3, 5]);
        });

        it('gets the sequence of numbers', () => {
            const upperBound = 1598;
            expect(Fibonacci.getFibonacciSequence(upperBound, [], i)).to.deep
                .eq([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597]);
        });

        it('gets the sequence of numbers up to 4 million', () => {
            const upperBound = 4000000;
            expect(Fibonacci.getFibonacciSequence(upperBound, [], i).length).to.deep.eq(34);
        });
    });

    describe('removes the even numbers from the Fibonacci sequence', () => {
        it('removes even numbers', () => {
            const sequence = [0, 1, 1, 2, 3];
            expect(Fibonacci.removeEvenNumbers(sequence)).to.deep
                .eq([1, 1, 3]);
        });
    });

    describe('adds numbers together', () => {
        it('adds numbers', () => {
            const upperBound = 5;
            expect(Fibonacci.addOddNumbers(upperBound)).to.deep
                .eq(10);
        });

        it('adds numbers', () => {
            const upperBound = 3;
            expect(Fibonacci.addOddNumbers(upperBound)).to.deep
                .eq(5);
        });

        it('adds numbers', () => {
            const upperBound = 4000000;
            expect(Fibonacci.addOddNumbers(upperBound)).to.deep
                .eq(4613732);
        });
    });
});
