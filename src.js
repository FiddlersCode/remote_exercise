class Src {
    static getPRCIndex(userId, numberPRCsUsed) {
        if (Src.isUserAdmin(userId)) {
            return numberPRCsUsed + 1;
        }

        const n = 9;
        return userId + numberPRCsUsed + n;
    }

    static isUserAdmin(userId) {
        return userId === 1;
    }
}
module.exports = Src;
