const PrcIndexParams = require('./prcIndexParams');

class getPRCIndexRecursively extends PrcIndexParams {
    static sharedData() {
        return {
            i: 1,
            n: 7,
        };
    }
}

module.exports = getPRCIndexRecursively;
