const chai = require('chai');

const { expect } = chai;

const Prc = require('../prc');
const getPRCIndexRecursively = require('./params/getPRCIndexRecursively');


describe('get PRC index', () => {
    describe('get PRC index with loop', () => {
        describe('admin index with loop', () => {
            const adminUserId = 1;
            const numbersPRCsUsed = { 0: 1, 3: 4 };


            Object.entries(numbersPRCsUsed).forEach((entry) => {
                const numberPRCsUsed = parseInt(entry[0], 10);
                const expected = parseInt(entry[1], 10);
                it('should return an admin index', () => {
                    const actual = Prc.getPRCIndex(adminUserId, numberPRCsUsed);
                    expect(actual, `number of PRCs used: ${numberPRCsUsed}`)
                        .to.eq(expected);
                });
            });

            it('throws an error if no remaining PRCs', () => {
                const numberPRCsUsed = 10;
                expect(() => Prc.getPRCIndex(adminUserId, numberPRCsUsed)).to.throw('No remaining PRCs.');
            });
        });

        describe('user indices with loop', () => {
            describe('user id 2', () => {
                const userId = 2;
                const numbersPRCsUsed = { 0: 11, 1: 12 };

                Object.entries(numbersPRCsUsed).forEach((entry) => {
                    const numberPRCsUsed = parseInt(entry[0], 10);
                    const expected = parseInt(entry[1], 10);
                    it('should return a user index', () => {
                        const actual = Prc.getPRCIndex(userId, numberPRCsUsed);
                        expect(actual, `number of PRCs used: ${numberPRCsUsed}`)
                            .to.eq(expected);
                    });
                });

                it('throws an error if no remaining PRCs', () => {
                    const numberPRCsUsed = 3;
                    expect(() => Prc.getPRCIndex(userId, numberPRCsUsed)).to.throw('No remaining PRCs.');
                });
            });

            describe('user id 3', () => {
                const userId = 3;
                const numbersPRCsUsed = { 0: 14, 1: 15 };

                Object.entries(numbersPRCsUsed).forEach((entry) => {
                    const numberPRCsUsed = parseInt(entry[0], 10);
                    const expected = parseInt(entry[1], 10);
                    it('should return a user index', () => {
                        const actual = Prc.getPRCIndex(userId, numberPRCsUsed);
                        expect(actual, `number of PRCs used: ${numberPRCsUsed}`)
                            .to.eq(expected);
                    });
                });
            });

            describe('user id 4', () => {
                const userId = 4;
                const numbersPRCsUsed = { 1: 18, 2: 19 };

                Object.entries(numbersPRCsUsed).forEach((entry) => {
                    const numberPRCsUsed = parseInt(entry[0], 10);
                    const expected = parseInt(entry[1], 10);
                    it('should return a user index', () => {
                        const actual = Prc.getPRCIndex(userId, numberPRCsUsed);
                        expect(actual, `number of PRCs used: ${numberPRCsUsed}`)
                            .to.eq(expected);
                    });
                });
            });
        });
    });

    describe('get PRC index recursively', () => {
        describe('user indices', () => {
            Object.entries(getPRCIndexRecursively.scenarios()).forEach((scenario) => {
                const userId = scenario[1].userId;
                const numberPRCsUsed = scenario[1].numberPRCsUsed;
                const expected = scenario[1].expected;
                const i = getPRCIndexRecursively.sharedData().i;
                const n = getPRCIndexRecursively.sharedData().n;

                it('should return a user index', () => {
                    const actual = Prc.getPRCIndexRecursively(userId, numberPRCsUsed, i, n);
                    expect(actual, `number of PRCs used: ${numberPRCsUsed}`)
                        .to.eq(expected);
                });
            });
        });

        describe('error handling', () => {
            let i;
            let n;
            beforeEach(() => {
                i = 1;
                n = 7;
            });

            const adminUserId = 1;
            it('throws an error if no remaining PRCs', () => {
                const numberPRCsUsed = 10;
                expect(() => Prc.getPRCIndexRecursively(adminUserId, numberPRCsUsed, i, n)).to.throw('No remaining PRCs.');
            });

            const userId = 2;
            it('throws an error if no remaining PRCs', () => {
                const numberPRCsUsed = 3;
                expect(() => Prc.getPRCIndexRecursively(userId, numberPRCsUsed, i, n)).to.throw('No remaining PRCs.');
            });
        });
    });

    describe('is user admin', () => {
        it('returns an admin index', () => {
            const userId = 1;
            expect(Prc.isUserAdmin(userId)).to.eq(true);
        });

        it('returns an user index', () => {
            const userId = 2;
            expect(Prc.isUserAdmin(userId)).to.eq(false);
        });
    });
});
