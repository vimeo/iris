const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build-Prod' , function(cb) {
	runSequence(
        ['compileComponentListJSX','compileEntryPoints-Prod'],
        ['reactDocGenBuild', 'tsDocs'],
        'reactDocGenParse',
        'sassGlobals',
        'copyStaticAssets',
        'copyFavicon',
        'webpackReact',
        'compileHtaccess-Prod',
		cb);
});
