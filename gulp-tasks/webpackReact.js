const gulp = require('gulp');
const shell = require('gulp-shell');

// Trigger Webpack to compile JSX and build CSS modules
gulp.task('webpackReact', shell.task([
	'	webpack --display-error-details'
]));
