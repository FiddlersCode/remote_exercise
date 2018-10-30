const chai = require('chai');

const { expect } = chai;

const Prc = require('../prc');

describe('get PRC index', () => {
    describe('get PRC index with loop', () => {
        describe('admin index', () => {
            const numbersPRCsUsed = { 0: 1, 3: 4 };
            const adminUserId = 1;

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

        describe('user indices', () => {
            describe('user id 2', () => {
                const userId = 2;
                it('returns a user index', () => {
                    const numberPRCsUsed = 0;
                    expect(Prc.getPRCIndex(userId, numberPRCsUsed)).to.eq(11);
                });

                it('returns a user index', () => {
                    const numberPRCsUsed = 1;
                    expect(Prc.getPRCIndex(userId, numberPRCsUsed)).to.eq(12);
                });

                it('throws an error if no remaining PRCs', () => {
                    const numberPRCsUsed = 3;
                    expect(() => Prc.getPRCIndex(userId, numberPRCsUsed)).to.throw('No remaining PRCs.');
                });
            });

            describe('user id 3', () => {
                const userId = 3;
                it('returns a user index', () => {
                    const numberPRCsUsed = 0;
                    expect(Prc.getPRCIndex(userId, numberPRCsUsed)).to.equal(14);
                });

                it('returns a user index', () => {
                    const numberPRCsUsed = 1;
                    expect(Prc.getPRCIndex(userId, numberPRCsUsed)).to.eq(15);
                });
            });

            describe('user id 4', () => {
                const userId = 4;
                it('returns a user index', () => {
                    const numberPRCsUsed = 1;
                    expect(Prc.getPRCIndex(userId, numberPRCsUsed)).to.equal(18);
                });

                it('returns a user index', () => {
                    const numberPRCsUsed = 2;
                    expect(Prc.getPRCIndex(userId, numberPRCsUsed)).to.eq(19);
                });
            });
        });
    });

    describe('get PRC index recursively', () => {
        let i;
        let n;
        beforeEach(() => {
            i = 1;
            n = 7;
        });
        describe('admin index recurisvely', () => {
            const adminUserId = 1;
            it('returns an admin index', () => {
                const numberPRCsUsed = 0;
                expect(Prc.getPRCIndexRecursively(adminUserId, numberPRCsUsed, i, n)).to.eq(1);
            });

            it('returns an admin index with 3 used PRCs', () => {
                const numberPRCsUsed = 3;
                expect(Prc.getPRCIndexRecursively(adminUserId, numberPRCsUsed, i, n)).to.eq(4);
            });

            it('throws an error if no remaining PRCs', () => {
                const numberPRCsUsed = 10;
                expect(() => Prc.getPRCIndexRecursively(adminUserId, numberPRCsUsed, i, n)).to.throw('No remaining PRCs.');
            });
        });
        describe('user id 2', () => {
            const userId = 2;
            it('returns a user index', () => {
                const numberPRCsUsed = 0;
                expect(Prc.getPRCIndexRecursively(userId, numberPRCsUsed, i, n)).to.eq(11);
            });

            it('returns a user index', () => {
                const numberPRCsUsed = 1;
                expect(Prc.getPRCIndexRecursively(userId, numberPRCsUsed, i, n)).to.eq(12);
            });

            it('throws an error if no remaining PRCs', () => {
                const numberPRCsUsed = 3;
                expect(() => Prc.getPRCIndexRecursively(userId, numberPRCsUsed, i, n)).to.throw('No remaining PRCs.');
            });
        });

        describe('user id 3', () => {
            const userId = 3;
            it('returns a user index', () => {
                const numberPRCsUsed = 0;
                expect(Prc.getPRCIndexRecursively(userId, numberPRCsUsed, i, n)).to.equal(14);
            });

            it('returns a user index', () => {
                const numberPRCsUsed = 1;
                expect(Prc.getPRCIndexRecursively(userId, numberPRCsUsed, i, n)).to.eq(15);
            });
        });

        describe('user id 4', () => {
            const userId = 4;
            it('returns a user index', () => {
                const numberPRCsUsed = 1;
                expect(Prc.getPRCIndexRecursively(userId, numberPRCsUsed, i, n)).to.equal(18);
            });

            it('returns a user index', () => {
                const numberPRCsUsed = 2;
                expect(Prc.getPRCIndexRecursively(userId, numberPRCsUsed, i, n)).to.eq(19);
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
