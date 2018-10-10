class Src {
    static getPRCIndex(userId, numberPRCsUsed) {
        if (this.isUserAdmin(userId)) {
            return numberPRCsUsed + 1;
        }

        let n = 7;
        let i;
        for (i = 1; i < userId; i += 1) {
            n += 2;
        }
        return userId + numberPRCsUsed + n;
    }

    static isUserAdmin(userId) {
        return userId === 1;
    }
}
module.exports = Src;
