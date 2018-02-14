const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build' , function(cb) {
	runSequence(
        ['compileComponentListJSX','compileEntryPoints-Dev'],
        ['reactDocGenBuild', 'tsDocs'],
        'reactDocGenParse',
        'compileColorVariables',
        'sassGlobals',
        'copyStaticAssets',
        'copyFavicon',
        'webpackReact',
		cb);
});
