class getPRCIndex {
    static scenarios() {
        return {
            scenario1: {
                userId: 1,
                numberPRCsUsed: 0,
                expected: 1,
            },

            scenario2: {
                userId: 1,
                numberPRCsUsed: 3,
                expected: 4,
            },

            scenario3: {
                userId: 2,
                numberPRCsUsed: 0,
                expected: 11,
            },

            scenario4: {
                userId: 2,
                numberPRCsUsed: 1,
                expected: 12,
            },
            scenario5: {
                userId: 3,
                numberPRCsUsed: 0,
                expected: 14,
            },

            scenario6: {
                userId: 3,
                numberPRCsUsed: 1,
                expected: 15,
            },

            scenario7: {
                userId: 4,
                numberPRCsUsed: 1,
                expected: 18,
            },

            scenario8: {
                userId: 4,
                numberPRCsUsed: 2,
                expected: 19,
            },
        };
    }
}

module.exports = getPRCIndex;
