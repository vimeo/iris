const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('svgProcessing' , function(cb) {
	runSequence(
		'svgOptimize',
		'svgListBuild',
		'svgExportBuild',
        'svgDocs',
		cb);
});
