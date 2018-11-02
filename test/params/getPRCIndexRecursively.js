const PrcIndexParams = require('./prcIndexParams');

class getPRCIndexRecursively extends PrcIndexParams {
    static setup() {
        return {
            codeFile: '../prc',
            paramsFile: '../test/params/getPRCIndexRecursively',
            methodName: 'getPRCIndexRecursively',
            it: 'should return a user index',
        };
    }

    static data() {
        return {
            i: 1,
            n: 7,
        };
    }
}

module.exports = getPRCIndexRecursively;
