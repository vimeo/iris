const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('svgDocs' , function(cb) {
	runSequence(
        'webpackSVG',
        'svgHtmlCopy',
		cb);
});
