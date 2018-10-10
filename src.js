class Src {
    static getPRCIndex(userId, numberPRCsUsed) {
        if (Src.isUserAdmin(userId)) {
            return numberPRCsUsed + 1;
        }
        return userId + 9;
    }

    static isUserAdmin(userId) {
        return userId === 1;
    }
}
module.exports = Src;
