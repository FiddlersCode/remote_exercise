const chai = require('chai');

const { expect } = chai;

const Prc = require('../prc');
const PrcIndexParams = require('./params/prcIndexParams');
const getPRCIndexRecursively = require('./params/getPRCIndexRecursively');
const isUserAdmin = require('./params/isUserAdmin');
const ErrorMessages = require('./params/errorMessages');


describe('get PRC index', () => {
    describe('get PRC index with loop', () => {
        describe('user indices', () => {
            Object.entries(PrcIndexParams.scenarios()).forEach((scenario) => {
                it('should return an admin index', () => {
                    const actual = Prc.getPRCIndex(scenario[1].userId, scenario[1].numberPRCsUsed);
                    expect(actual, `number of PRCs used: ${scenario[1].numberPRCsUsed}`)
                        .to.eq(scenario[1].expected);
                });
            });
        });

        describe('error handling', () => {
            Object.entries(PrcIndexParams.errorScenarios()).forEach((errorScenario) => {
                expect(() => Prc.getPRCIndex(
                    errorScenario[1].userId,
                    errorScenario[1].numberPRCsUsed,
                )).to.throw(ErrorMessages.errorMessages().noPrcError);
            });
        });
    });

    describe('get PRC index recursively', () => {
        describe('user indices', () => {
            Object.entries(getPRCIndexRecursively.scenarios()).forEach((scenario) => {
                it('should return a user index', () => {
                    const actual = Prc.getPRCIndexRecursively(
                        scenario[1].userId,
                        scenario[1].numberPRCsUsed,
                        getPRCIndexRecursively.sharedData().i,
                        getPRCIndexRecursively.sharedData().n,
                    );
                    expect(actual, `number of PRCs used: ${scenario[1].numberPRCsUsed}`)
                        .to.eq(scenario[1].expected);
                });
            });
        });

        describe('error handling', () => {
            Object.entries(getPRCIndexRecursively.errorScenarios()).forEach((errorScenario) => {
                it('throws an error if no remaining PRCs', () => {
                    expect(() => Prc.getPRCIndexRecursively(
                        errorScenario[1].userId,
                        errorScenario[1].numberPRCsUsed,
                        getPRCIndexRecursively.sharedData().i,
                        getPRCIndexRecursively.sharedData().n,
                    )).to.throw(ErrorMessages.errorMessages().noPrcError);
                });
            });
        });
    });

    describe('is user admin', () => {
        Object.entries(isUserAdmin.scenarios()).forEach((scenario) => {
            it('returns an admin index', () => {
                expect(Prc.isUserAdmin(scenario[1].userId)).to.eq(scenario[1].expected);
            });
        });
    });
});
