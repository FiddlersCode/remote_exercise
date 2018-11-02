class getPRCIndexRecursively {
    static sharedData() {
        return {
            i: 1,
            n: 7,
        };
    }

    static scenarios() {
        return {
            scenario1: {
                adminUserId: 1,
                numberPRCsUsed: 0,
                expected: 1,
            },

            scenario2: {
                adminUserId: 1,
                numberPRCsUsed: 3,
                expected: 4,
            },
        };
    }
}

module.exports = getPRCIndexRecursively;
