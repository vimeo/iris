const gulp = require('gulp');
const config = require('../config');

gulp.task('copyFavicon', function () {
	return gulp.src('favicon.ico')
	.pipe(gulp.dest(config.paths.styleguideDist));
});
