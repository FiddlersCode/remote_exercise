class Fibonacci {
    static getFibonacciSequence(upperBound) {
        const sequence = [0, 1];
        let i = 1;

        while (sequence.slice(-1) < upperBound) {
            const n = sequence[i] + sequence[i - 1];
            sequence.push(n);
            i += 1;
        }
        return sequence;
    }
}
module.exports = Fibonacci;
