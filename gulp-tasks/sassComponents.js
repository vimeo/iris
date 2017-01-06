const gulp = require('gulp');
const sass = require('gulp-sass');
const config = require('./config');

// SASS compile individual component CSS files
gulp.task('sassComponents', function () {
	// Compile the sass and autoprefix the CSS
	return gulp.src(config.paths.componentSrc + '**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(config.paths.componentSrc));
});
