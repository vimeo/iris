const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build-Prod' , function(cb) {
	runSequence(
        ['reactDocGenBuild', 'tsDocs'],
        'reactDocGenParse',
        ['compileComponentListJSX','compileEntryPoints-Prod'],
        'sassGlobals',
        'copyStaticAssets',
        'copyFavicon',
        'webpackReact',
        'compileHtaccess-Prod',
		cb);
});
