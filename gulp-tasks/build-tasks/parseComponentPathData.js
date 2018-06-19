module.exports = function () {
    const parseFlowDocsData = require('./parseFlowDocsData.js');
    const parseTSDocsData = require('./parseTsDocsData.js');
    const pathExceptions = require('../../docs/pathExceptions.json');

    return {
        flowComponents: parseFlowDocsData(),
        tsComponents: parseTSDocsData(),
        pathExceptions: pathExceptions,
    };
};
