const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('compileEntryPoints-Dev' , function(cb) {
	runSequence(
        'compileMainJSX-Dev',
        'compileIndexHTML-Dev',
		cb);
});
