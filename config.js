/* eslint-env node*/
const path = require('path');
const DOCS_SERVER_ROOT = 'http://docs.vimeows.com';
const DOCS_PROJECT_SUFFIX = '/vimeo/iris/';
const LOCAL_PATH = path.resolve(__dirname);
const LOCAL_DATA = LOCAL_PATH + '/data/';
const COMPONENT_DATA = LOCAL_DATA + 'componentAPI.json';


module.exports = {
    paths: {
        project: './',
        animationsSrc: './src/animations/',
        componentData: COMPONENT_DATA,
        componentSrc: './src/',
        globalsSrc: './src/globals/',
        localDocsSrc: LOCAL_PATH + '/docs/',
        localData: LOCAL_DATA,
        routingBase: DOCS_SERVER_ROOT,
        routingProjectFolder: DOCS_PROJECT_SUFFIX,
        styleguideDist: './build-styleguide/',
        styleguideSrc: './node_modules/steadicam/',
    },
};
