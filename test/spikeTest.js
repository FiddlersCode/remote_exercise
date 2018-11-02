const chai = require('chai');

const { expect } = chai;

const Prc = require('../prc');
const getPRCIndexRecursively = require('./params/getPRCIndexRecursively');


class spikeTest {
    static test() {
        Object.entries(getPRCIndexRecursively.scenarios()).forEach((scenario) => {
            const userId = scenario[1].userId;
            const numberPRCsUsed = scenario[1].numberPRCsUsed;
            const expected = scenario[1].expected;
            const i = getPRCIndexRecursively.sharedData().i;
            const n = getPRCIndexRecursively.sharedData().n;

            it('should return an admin index', () => {
                const actual = Prc.getPRCIndexRecursively(
                    userId,
                    numberPRCsUsed,
                    i,
                    n,
                );
                expect(actual, `number of PRCs used: ${numberPRCsUsed}`)
                    .to.eq(expected);
            });


            it('should return a user index', () => {
                const actual = Prc.getPRCIndexRecursively(userId, numberPRCsUsed, i, n);
                expect(actual, `number of PRCs used: ${numberPRCsUsed}`)
                    .to.eq(expected);
            });
        });
    }
}

module.exports = spikeTest;
