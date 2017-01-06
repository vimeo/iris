const path = require('path');
const LOCAL_PATH = path.resolve(__dirname)
<<<<<<< HEAD:config.js
const LOCAL_DATA = LOCAL_PATH+ '/data/';
const COMPONENT_DATA = LOCAL_DATA +'componentAPI.json';
=======
const LOCAL_DATA = LOCAL_PATH + '/../data/';
const COMPONENT_DATA = LOCAL_DATA + 'componentAPI.json';
>>>>>>> setup js file for json to sass token conversion:gulp-tasks/config.js


module.exports = {
	paths: {
		project: './',
		componentData : COMPONENT_DATA,
		componentDist : './lib/',
		componentSrc : './src/components/',
		globalsSrc : './src/globals/',
		localDocsSrc : LOCAL_PATH + '/docs/',
		localData : LOCAL_DATA,
		styleguideDist : './build-styleguide/',
		styleguideSrc : './node_modules/steadicam/'
	}
};
