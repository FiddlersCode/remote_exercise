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
    });

    describe('user index', () => {
        const userId = 2;
        it('returns a user index', () => {
            const numberPRCsUsed = 0;
            expect(Src.getPRCIndex(userId, numberPRCsUsed)).to.eq(11);
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
