const gulp = require('gulp');
const config = require('./config');
const del = require('del');

// Clear out build folders for fresh builds
gulp.task('cleanIrisDistFile', function () {
	del(config.paths.componentDist + '/**/*').then(paths => {
    console.log('Cleaned out Iris dist folder');
	});
});
