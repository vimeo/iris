const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('svgProcessing' , function(cb) {
	runSequence(
		'svgOptimize',
		'svgIllustrationsOptimize',
		'svgListBuild',
		'svgIllustrationsListBuild',
		'svgExportBuild',
		'svgIllustrationExportBuild',
        'svgDocs',
		cb);
});
