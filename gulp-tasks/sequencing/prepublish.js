const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('prepublish' , function(cb) {
	runSequence(
        'distClean',
        'esLint',
        'svgOptimize',
		'svgListBuild',
        'svgExportBuild',
        ['reactDocGenBuild', 'tsDocs'],
        'reactDocGenParse',
        'compilePackageIndexJS',
        'transpileTS',
        [ 
            'transpileJS',
            'copyOtherSrcFiles'
        ], 
		cb);
});
