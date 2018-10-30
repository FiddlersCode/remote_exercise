const chai = require('chai');

const { expect } = chai;

const Prc = require('../prc');

describe('get PRC index', () => {
    describe('get PRC index with loop', () => {
        describe('admin index', () => {
            const adminUserId = 1;
            it('returns an admin index', () => {
                const numberPRCsUsed = 0;
                expect(Prc.getPRCIndex(adminUserId, numberPRCsUsed)).to.eq(1);
            });

            it('returns an admin index with 3 used PRCs', () => {
                const numberPRCsUsed = 3;
                expect(Prc.getPRCIndex(adminUserId, numberPRCsUsed)).to.eq(4);
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
        describe('user id 2', () => {
            const userId = 2;
            it('returns a user index', () => {
                const numberPRCsUsed = 0;
                expect(Prc.getPRCIndexRecursively(userId, numberPRCsUsed, 1, 7)).to.eq(11);
            });

            it('returns a user index', () => {
                const numberPRCsUsed = 1;
                expect(Prc.getPRCIndexRecursively(userId, numberPRCsUsed, 1, 7)).to.eq(12);
            });

            it('throws an error if no remaining PRCs', () => {
                const numberPRCsUsed = 3;
                expect(() => Prc.getPRCIndexRecursively(userId, numberPRCsUsed, 1)).to.throw('No remaining PRCs.');
            });
        });

        describe('user id 3', () => {
            const userId = 3;
            it('returns a user index', () => {
                const numberPRCsUsed = 0;
                expect(Prc.getPRCIndexRecursively(userId, numberPRCsUsed, 1, 7)).to.equal(14);
            });

            it('returns a user index', () => {
                const numberPRCsUsed = 1;
                expect(Prc.getPRCIndexRecursively(userId, numberPRCsUsed, 1, 7)).to.eq(15);
            });
        });

        describe('user id 4', () => {
            const userId = 4;
            it('returns a user index', () => {
                const numberPRCsUsed = 1;
                expect(Prc.getPRCIndexRecursively(userId, numberPRCsUsed, 1, 7)).to.equal(18);
            });

            it('returns a user index', () => {
                const numberPRCsUsed = 2;
                expect(Prc.getPRCIndexRecursively(userId, numberPRCsUsed, 1, 7)).to.eq(19);
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
