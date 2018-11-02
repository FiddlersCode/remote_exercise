const PrcIndexParams = require('./prcIndexParams');

class getPRCIndexWithLoop extends PrcIndexParams {
    static setup() {
        return {
            codeFile: '../prc',
            paramsFile: '../test/params/getPRCIndexWithLoop',
            methodName: 'getPRCIndexWithLoop',
            it: 'should return a user index',
        };
    }
}

module.exports = getPRCIndexWithLoop;
