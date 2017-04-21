const gulp = require('gulp');
const config = require('../config');

gulp.task('copyFavicon', function () {
	return gulp.src('favicon.png')
	.pipe(gulp.dest(config.paths.styleguideDist));
});
