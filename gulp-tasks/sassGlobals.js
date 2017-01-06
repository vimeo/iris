const gulp = require('gulp');
const sass = require('gulp-sass');
const config = require('./config');

// SASS compile individual component CSS files
gulp.task('sassGlobals', function () {
	return gulp.src( config.paths.globalsSrc + 'sass/globals.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest( config.paths.globalsSrc+'css/'));
});
