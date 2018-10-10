class Src {
    static getPRCIndex(userId, numberPRCsUsed) {
        const adminUserMaxPRCs = 10;
        const normalUserMaxPRCs = 3;

        if (numberPRCsUsed >= adminUserMaxPRCs) {
            throw new Error('No remaining PRCs.');
        }

        if (this.isUserAdmin(userId)) {
            return numberPRCsUsed + 1;
        }

        if (numberPRCsUsed >= normalUserMaxPRCs) {
            throw new Error('No remaining PRCs.');
        }
        let n = 7;
        for (let i = 1; i < userId; i += 1) {
            n += 2;
        }
        return userId + numberPRCsUsed + n;
    }

    static isUserAdmin(userId) {
        return userId === 1;
    }
}
module.exports = Src;
