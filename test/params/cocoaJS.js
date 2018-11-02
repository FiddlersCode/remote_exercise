const chai = require('chai');

const { expect } = chai;
const PrcIndexParams = require('./prcIndexParams');

const testClass = require(PrcIndexParams.setup().filePath);

class CocoaJS {
    static runTests(scenarios, setup) {
        Object.entries(scenarios).forEach((scenario) => {
            it(setup.it, () => {
                const actual = testClass[setup.methodName](
                    scenario[1].userId,
                    scenario[1].numberPRCsUsed,
                );
                expect(actual, `number of PRCs used: ${scenario[1].numberPRCsUsed}`)
                    .to.eq(scenario[1].expected);
            });
        });
    }
}

module.exports = CocoaJS;
