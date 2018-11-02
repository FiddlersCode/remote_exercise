const PrcIndexParams = require('./prcIndexParams');

class getPRCIndexWithLoop extends PrcIndexParams {
    static setup() {
        return {
            filePath: '../../prc',
            methodName: 'getPRCIndexWithLoop',
            it: 'should return a user index',
        };
    }
}

module.exports = getPRCIndexWithLoop;
