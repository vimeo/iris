/* eslint-env node*/
const path = require('path');
const LOCAL_PATH = path.resolve(__dirname);
const LOCAL_DATA = LOCAL_PATH + '/data/';
const COMPONENT_DATA = LOCAL_DATA + 'componentAPI.json';


module.exports = {
    paths: {
        project: './',
        componentData: COMPONENT_DATA,
        componentSrc: './src/components/',
        globalsSrc: './src/globals/',
        localDocsSrc: LOCAL_PATH + '/doc-assets/',
        localData: LOCAL_DATA,
        styleguideDist: './docs/',
        styleguideSrc: './node_modules/steadicam/',
    },
};
