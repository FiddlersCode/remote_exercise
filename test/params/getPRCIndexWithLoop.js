const PrcIndexParams = require('./prcIndexParams');

class getPRCIndexWithLoop extends PrcIndexParams {
    static setup() {
        return {
            codeFile: '../../prc',
            paramsFile: '../params/getPRCIndexWithLoop',
            methodName: 'getPRCIndexWithLoop',
            it: 'should return a user index',
        };
    }
}

module.exports = getPRCIndexWithLoop;
