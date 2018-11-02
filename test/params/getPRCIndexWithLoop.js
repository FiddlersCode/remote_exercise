const chai = require('chai');

const { expect } = chai;
const PrcIndexParams = require('./prcIndexParams');
const Prc = require('../../prc');

class getPRCIndexWithLoop extends PrcIndexParams {
    static runTests(scenarios, setup) {
        Object.entries(scenarios).forEach((scenario) => {
            it(setup.it, () => {
                const actual = Prc.getPRCIndexWithLoop(
                    scenario[1].userId,
                    scenario[1].numberPRCsUsed,
                );
                expect(actual, `number of PRCs used: ${scenario[1].numberPRCsUsed}`)
                    .to.eq(scenario[1].expected);
            });
        });
    }
}

module.exports = getPRCIndexWithLoop;
