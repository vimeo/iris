const gulp = require('gulp');
const shell = require('gulp-shell');

// Trigger Webpack to compile JSX and build CSS modules
gulp.task('svgIllustrationsListBuild', shell.task([
	'node gulp-tasks/build-tasks/makeSVGIllustrationsList.js'
]));
