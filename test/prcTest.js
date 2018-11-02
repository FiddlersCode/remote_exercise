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
                const userId = scenario[1].userId;
                const numberPRCsUsed = scenario[1].numberPRCsUsed;
                const expected = scenario[1].expected;
                it('should return an admin index', () => {
                    const actual = Prc.getPRCIndex(userId, numberPRCsUsed);
                    expect(actual, `number of PRCs used: ${numberPRCsUsed}`)
                        .to.eq(expected);
                });
            });
        });

        describe('error handling', () => {
            Object.entries(PrcIndexParams.errorScenarios()).forEach((errorScenario) => {
                const userId = errorScenario[1].userId;
                const numberPRCsUsed = errorScenario[1].numberPRCsUsed;
                expect(() => Prc.getPRCIndex(
                    userId,
                    numberPRCsUsed,
                )).to.throw(ErrorMessages.errorMessages().noPrcError);
            });
        });
    });

    describe('get PRC index recursively', () => {
        let i;
        let n;
        beforeEach(() => {
            i = getPRCIndexRecursively.sharedData().i;
            n = getPRCIndexRecursively.sharedData().n;
        });

        describe('user indices', () => {
            Object.entries(PrcIndexParams.scenarios()).forEach((scenario) => {
                const userId = scenario[1].userId;
                const numberPRCsUsed = scenario[1].numberPRCsUsed;
                const expected = scenario[1].expected;

                it('should return a user index', () => {
                    const actual = Prc.getPRCIndexRecursively(userId, numberPRCsUsed, i, n);
                    expect(actual, `number of PRCs used: ${numberPRCsUsed}`)
                        .to.eq(expected);
                });
            });
        });

        describe('error handling', () => {
            Object.entries(PrcIndexParams.errorScenarios()).forEach((errorScenario) => {
                it('throws an error if no remaining PRCs', () => {
                    const userId = errorScenario[1].userId;
                    const numberPRCsUsed = errorScenario[1].numberPRCsUsed;
                    expect(() => Prc.getPRCIndexRecursively(
                        userId,
                        numberPRCsUsed,
                        i,
                        n,
                    )).to.throw(ErrorMessages.errorMessages().noPrcError);
                });
            });
        });
    });

    describe('is user admin', () => {
        Object.entries(isUserAdmin.scenarios()).forEach((scenario) => {
            it('returns an admin index', () => {
                const userId = scenario[1].userId;
                expect(Prc.isUserAdmin(userId)).to.eq(scenario[1].expected);
            });
        });
    });
});
