const gulp = require('gulp');
const shell = require('gulp-shell');

// Trigger Webpack to compile JSX and build CSS modules
gulp.task('webpackSVG', shell.task([
	'	webpack --config docs/apps/svgPage/webpack.config.js --display-error-details'
]));
