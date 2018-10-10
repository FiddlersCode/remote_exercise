const chai = require('chai');

const { expect } = chai;

const Src = require('./src');

describe('get PRC index', () => {
    describe('admin index', () => {
        const adminUserId = 1;
        it('returns an admin index', () => {
            const numberPRCsUsed = 0;
            expect(Src.getPRCIndex(adminUserId, numberPRCsUsed)).to.eq(1);
        });

        it('returns an admin index with 3 used PRCs', () => {
            const numberPRCsUsed = 3;
            expect(Src.getPRCIndex(adminUserId, numberPRCsUsed)).to.eq(4);
        });

        it('throws an error if no remaining PRCs', () => {
            const numberPRCsUsed = 10;
            expect(() => Src.getPRCIndex(adminUserId, numberPRCsUsed)).to.throw('No remaining PRCs.');
        });
    });

    describe('user index', () => {
        describe('user id 2', () => {
            const userId = 2;
            it('returns a user index', () => {
                const numberPRCsUsed = 0;
                expect(Src.getPRCIndex(userId, numberPRCsUsed)).to.eq(11);
            });

            it('returns a user index', () => {
                const numberPRCsUsed = 1;
                expect(Src.getPRCIndex(userId, numberPRCsUsed)).to.eq(12);
            });

            it('throws an error if no remaining PRCs', () => {
                const numberPRCsUsed = 3;
                expect(() => Src.getPRCIndex(userId, numberPRCsUsed)).to.throw('No remaining PRCs.');
            });
        });

        describe('user id 3', () => {
            const userId = 3;
            it('returns a user index', () => {
                const numberPRCsUsed = 0;
                expect(Src.getPRCIndex(userId, numberPRCsUsed)).to.equal(14);
            });

            it('returns a user index', () => {
                const numberPRCsUsed = 1;
                expect(Src.getPRCIndex(userId, numberPRCsUsed)).to.eq(15);
            });
        });

        describe('user id 4', () => {
            const userId = 4;
            it('returns a user index', () => {
                const numberPRCsUsed = 1;
                expect(Src.getPRCIndex(userId, numberPRCsUsed)).to.equal(18);
            });

            it('returns a user index', () => {
                const numberPRCsUsed = 2;
                expect(Src.getPRCIndex(userId, numberPRCsUsed)).to.eq(19);
            });
        });
    });

    describe('is user admin', () => {
        it('returns an admin index', () => {
            const userId = 1;
            expect(Src.isUserAdmin(userId)).to.eq(true);
        });

        it('returns an user index', () => {
            const userId = 2;
            expect(Src.isUserAdmin(userId)).to.eq(false);
        });
    });
});
