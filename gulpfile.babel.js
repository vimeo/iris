// Package Imports ---------------------------------------
const config = require('./config');
const gulp = require('gulp');
var requireDir = require('require-dir');
const runSequence = require('run-sequence');


// Pulling in all tasks from the tasks folders in Iris and Steadicam
requireDir('./gulp-tasks', { recurse: true });
requireDir(config.paths.styleguideSrc + '/gulp-tasks', { recurse: true });


gulp.task('default', function(cb) {

	runSequence(
		'cleanStyleguideDistFile',
		'compileComponentListJSX',
		'reactDocGenBuild',
		'reactDocGenParse',
		['sassStyleguide', 'sassComponents','sassGlobals'],
		'copyStaticAssets',
		'compilePackageIndexJSX',
		'webpackReact',
		'serve',
		cb);
});
