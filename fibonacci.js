class Fibonacci {
    static getFibonacciSequence(upperBound) {
        const sequence = [0, 1];
        let i = 1;

        while (sequence.slice(-1) <= upperBound) {
            const n = sequence[i] + sequence[i - 1];
            sequence.push(n);
            i += 1;
        }

        sequence.splice(-1);
        return sequence;
    }


    static getFibonacciSequenceRecursively(upperBound, sequence, i) {
        if (upperBound === 0) {
            sequence.push(0);
            return sequence;
        }

        if (sequence.length === 0) {
            sequence.push(0, 1);
        }

        const penultimate = sequence[i];
        const antepenultimate = sequence[i - 1];
        const n = penultimate + antepenultimate;
        sequence.push(n);

        if (sequence.slice(-1) < upperBound) {
            this.getFibonacciSequenceRecursively(upperBound, sequence, i + 1);
        }

        if (sequence.slice(-1) > upperBound) {
            sequence.splice(-1);
        }

        return sequence;
    }

    static removeEvenNumbers(sequence) {
        return sequence.filter(value => value % 2 !== 0);
    }

    static add(a, b) {
        return a + b;
    }

    static addOddNumbers(upperBound) {
        const sequence = Fibonacci.getFibonacciSequence(upperBound);
        const oddNumbers = Fibonacci.removeEvenNumbers(sequence);
        return oddNumbers.reduce(Fibonacci.add);
    }
}
module.exports = Fibonacci;
