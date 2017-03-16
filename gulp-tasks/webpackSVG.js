const gulp = require('gulp');
const shell = require('gulp-shell');

// Trigger Webpack to compile JSX and build CSS modules
gulp.task('webpackSVG', shell.task([
	'	webpack --config doc-assets/apps/svgPage/webpack.config.js --display-error-details'
]));
