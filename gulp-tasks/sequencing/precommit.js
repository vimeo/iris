const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('precommit' , function(cb) {
	runSequence(
        'esLint',
        'cleanStyleguideDistFile',
        'svgProcessing',
        'build',
		cb);
});
