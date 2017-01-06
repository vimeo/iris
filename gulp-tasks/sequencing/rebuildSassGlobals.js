const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('rebuildSassGlobals' , function(cb) {
	runSequence(
		'sassGlobals',
		'webpackReact',
		'delayedReload',
		cb);
});
