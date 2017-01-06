const path = require('path');
const LOCAL_PATH = path.resolve(__dirname)
const LOCAL_DATA = LOCAL_PATH+ '/../data/';
const COMPONENT_DATA = LOCAL_DATA +'componentAPI.json';


module.exports = {
	paths: {
		project: './',
		componentData : COMPONENT_DATA,
		componentDist : './lib/',
		componentSrc : './src/components/',
		globalsSrc : './src/globals/',
		localDocsSrc : LOCAL_PATH + '/../docs/',
		localData : LOCAL_DATA,
		styleguideDist : './build-styleguide/',
		styleguideSrc : './node_modules/steadicam/'
	}
};
