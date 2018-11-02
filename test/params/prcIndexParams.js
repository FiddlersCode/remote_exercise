class PrcIndexParams {
    static scenarios() {
        return {
            scenario1: {
                params: {
                    userId: 1,
                    numberPRCsUsed: 0,
                    i: 1,
                    n: 7,
                },
                message: 'number of PRCs used',
                expected: 1,
            },

            scenario2: {
                params: {
                    userId: 1,
                    numberPRCsUsed: 3,
                    i: 1,
                    n: 7,
                },
                message: 'number of PRCs used',
                expected: 4,
            },

            scenario3: {
                params: {
                    userId: 2,
                    numberPRCsUsed: 0,
                    i: 1,
                    n: 7,
                },
                message: 'number of PRCs used',
                expected: 11,
            },

            scenario4: {
                params: {
                    userId: 2,
                    numberPRCsUsed: 1,
                    i: 1,
                    n: 7,
                },
                message: 'number of PRCs used',
                expected: 12,
            },


            scenario5: {
                params: {
                    userId: 3,
                    numberPRCsUsed: 0,
                    i: 1,
                    n: 7,
                },
                message: 'number of PRCs used',
                expected: 14,
            },

            scenario6: {
                params: {
                    userId: 3,
                    numberPRCsUsed: 1,
                    i: 1,
                    n: 7,
                },
                message: 'number of PRCs used',
                expected: 15,
            },
        };
    }

    static errorScenarios() {
        return {
            scenario1: {
                userId: 1,
                numberPRCsUsed: 10,
            },
            scenario2: {
                userId: 2,
                numberPRCsUsed: 3,
            },
        };
    }
}

module.exports = PrcIndexParams;
