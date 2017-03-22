const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('compileEntryPoints-Prod' , function(cb) {
	runSequence(
        'compileMainJSX-Prod',
        'compileIndexHTML-Prod',
		cb);
});
