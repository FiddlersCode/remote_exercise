class isUserAdmin {
    static scenarios() {
        return {
            scenario1: {
                userId: 1,
                expected: true,
            },
            scenario2: {
                userId: 2,
                expected: false,
            },
        };
    }
}

module.exports = isUserAdmin;
