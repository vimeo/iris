const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build-Prod' , function(cb) {
	runSequence(
        'cleanStyleguideDistFile',
        ['compileComponentListJSX','compileEntryPoints-Prod'],
        'reactDocGenBuild',
        'reactDocGenParse',
        'compileColorVariables',
        ['sassStyleguide', 'sassGlobals'],
        'copyStaticAssets',
        'compilePackageIndexJSX',
        'copyFavicon',
        'webpackReact',
        'compileHtaccess-Prod',
		cb);
});
