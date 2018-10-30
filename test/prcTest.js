const chai = require('chai');

const { expect } = chai;

const Prc = require('../prc');
const spikeTest = require('../spikeTest');

describe('get PRC index', () => {
    spikeTest.test();

    describe('loop error handling', () => {
        it('throws an error if no remaining PRCs', () => {
            const adminUserId = 1;
            const numberPRCsUsed = 10;
            expect(() => Prc.getPRCIndex(adminUserId, numberPRCsUsed)).to.throw('No remaining PRCs.');
        });

        it('throws an error if no remaining PRCs', () => {
            const userId = 2;
            const numberPRCsUsed = 3;
            expect(() => Prc.getPRCIndex(userId, numberPRCsUsed)).to.throw('No remaining PRCs.');
        });
    });

    describe('recursive error handling', () => {
        let i;
        let n;
        beforeEach(() => {
            i = 1;
            n = 7;
        });
        it('throws an error if no remaining PRCs', () => {
            const adminUserId = 1;
            const numberPRCsUsed = 10;
            expect(() => Prc.getPRCIndexRecursively(adminUserId, numberPRCsUsed, i, n)).to.throw('No remaining PRCs.');
        });
        it('throws an error if no remaining PRCs', () => {
            const userId = 2;
            const numberPRCsUsed = 3;
            expect(() => Prc.getPRCIndexRecursively(userId, numberPRCsUsed, i, n)).to.throw('No remaining PRCs.');
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
