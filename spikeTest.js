const chai = require('chai');

const { expect } = chai;

const Prc = require('./prc');


class spikeTest {
    static test() {
        const sharedData = {
            i: 1,
            n: 7,
        };
        const scenarios = {
            scenario1: {
                userId: 1,
                numberPRCsUsed: 0,
                expected: 1,
            },

            scenario2: {
                userId: 1,
                numberPRCsUsed: 3,
                expected: 4,
            },

            scenario3: {
                userId: 2,
                numberPRCsUsed: 0,
                expected: 11,
            },

            scenario4: {
                userId: 2,
                numberPRCsUsed: 1,
                expected: 12,
            },
            scenario5: {
                userId: 3,
                numberPRCsUsed: 0,
                expected: 14,
            },

            scenario6: {
                userId: 3,
                numberPRCsUsed: 1,
                expected: 15,
            },

            scenario7: {
                userId: 4,
                numberPRCsUsed: 1,
                expected: 18,
            },

            scenario8: {
                userId: 4,
                numberPRCsUsed: 2,
                expected: 19,
            },
        };

        Object.entries(scenarios).forEach((scenario) => {
            const userId = scenario[1].userId;
            const numberPRCsUsed = scenario[1].numberPRCsUsed;
            const expected = scenario[1].expected;

            it('should return an admin index', () => {
                const actual = Prc.getPRCIndex(userId, numberPRCsUsed);
                expect(actual, `number of PRCs used: ${numberPRCsUsed}`)
                    .to.eq(expected);
            });
        });

        Object.entries(scenarios).forEach((scenario) => {
            const userId = scenario[1].userId;
            const numberPRCsUsed = scenario[1].numberPRCsUsed;
            const expected = scenario[1].expected;

            it('should return an admin index', () => {
                const actual = Prc.getPRCIndexRecursively(
                    userId, numberPRCsUsed, sharedData.i, sharedData.n,
                );
                expect(actual, `number of PRCs used: ${numberPRCsUsed}`)
                    .to.eq(expected);
            });
        });
    }
}

module.exports = spikeTest;
