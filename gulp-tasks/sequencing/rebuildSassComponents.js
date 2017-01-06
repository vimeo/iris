const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('rebuildSassComponents' , function(cb) {
	runSequence(
		'sassComponents',
		'webpackReact',
		'delayedReload',
		cb);
});
