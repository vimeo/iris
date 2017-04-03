const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('precommit' , function(cb) {
	runSequence(
        'esLint',
        'cssComb',
        'cleanStyleguideDistFile',
        'svgProcessing',
        'build',
		cb);
});
