const chai = require('chai');

const { expect } = chai;


class CocoaJS {
    static runTests(scenarios, setup, paramsFile) {
        paramsFile = require(paramsFile);
        const codeFile = require(paramsFile.setup().codeFile);

        Object.entries(scenarios).forEach((scenario) => {
            it(setup.it, () => {
                const params = [];
                Object.entries(scenario[1].params).forEach((scenarioParam) => {
                    params.push(scenarioParam[1]);
                });
                const actual = codeFile[setup.methodName](...params);
                expect(actual, `${scenario[1].message} ${scenario[1].params.numberPRCsUsed}`)
                    .to.eq(scenario[1].expected);
            });
        });
    }
}
module.exports = CocoaJS;
