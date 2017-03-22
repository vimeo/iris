const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build-Prod' , function(cb) {
	runSequence(
        'cleanStyleguideDistFile',
        ['compileComponentListJSX','compileEntryPoints-Prod'],
        'reactDocGenBuild',
        'reactDocGenParse',
        'compileColorVariables',
        ['sassStyleguide', 'sassComponents', 'sassGlobals'],
        'copyStaticAssets',
        'compilePackageIndexJSX',
        'webpackReact',
		cb);
});
