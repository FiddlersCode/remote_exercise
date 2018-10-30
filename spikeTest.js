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
                adminUserId: 1,
                numberPRCsUsed: 0,
                expected: 1,
            },

            scenario2: {
                adminUserId: 1,
                numberPRCsUsed: 3,
                expected: 4,
            },
        };

        Object.entries(scenarios).forEach((scenario) => {
            const adminUserId = scenario[1].adminUserId;
            const numberPRCsUsed = scenario[1].numberPRCsUsed;
            const expected = scenario[1].expected;

            it('should return an admin index', () => {
                const actual = Prc.getPRCIndexRecursively(
                    adminUserId, numberPRCsUsed, sharedData.i, sharedData.n,
                );
                expect(actual, `number of PRCs used: ${numberPRCsUsed}`)
                    .to.eq(expected);
            });
        });
    }
}

module.exports = spikeTest;
