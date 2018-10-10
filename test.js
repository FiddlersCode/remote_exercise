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
});
