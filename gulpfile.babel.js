// Package Imports ---------------------------------------
const browserSync = require('browser-sync').create();
const del = require('del');
const gulp = require('gulp');
const historyApiFallback = require('connect-history-api-fallback');
const rename = require('gulp-rename');
const reload = browserSync.reload;
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const shell = require('gulp-shell');
const template = require('gulp-template');
const watch = require('gulp-watch');
const webpack = require('gulp-webpack');


// constants ----------------------------------------------
const COMPONENT_SRC = './src/components/';
const COMPONENT_DIST = './dist/';
const GLOBALS_SRC = './src/globals/';
const STYLEGUIDE_SRC = './styleguide/';
const STYLEGUIDE_DIST = './dist-styleguide/';


// Gulp Tasks ----------------------------------------------


gulp.task('cleanDistFiles', function () {
	del(['dist/**/*', 'dist-styleguide/**/*']).then(paths => {
    console.log('Cleaned out dist folders');
	});
});

gulp.task('compileComponentListJSX', function () {
	const STYLE_DATA = require(STYLEGUIDE_SRC + 'patternList.js');

	return gulp.src(STYLEGUIDE_SRC + '_component-jsx-export-list.template')
	.pipe(template(STYLE_DATA.default))
	.pipe(rename("ComponentJsxExportList.js"))
	.pipe(gulp.dest(STYLEGUIDE_SRC));
});

gulp.task('copyLibraryDist', function () {
	return gulp.src(['src/**/*'])
	.pipe(gulp.dest(COMPONENT_DIST));
});

gulp.task('copyGlobalCSS', function () {
	return gulp.src([GLOBALS_SRC + 'css/globals.css'])
	.pipe(gulp.dest(STYLEGUIDE_DIST + 'css/'));
});


gulp.task('copyStaticAssets', function () {
	return gulp.src([STYLEGUIDE_SRC + '*.{html,ico}', STYLEGUIDE_SRC + 'assets/**/*.js'])
	.pipe(gulp.dest(STYLEGUIDE_DIST));
});

gulp.task('reactDocGenBuild', shell.task([
	'react-docgen ./src/components --out ./data/componentAPI.json --pretty --exclude Docs.jsx'
]));

gulp.task('reactDocGenParse', shell.task([
	'node build-scripts/react-docgen-parser'
]));

gulp.task('delayedReload' , function() {
		setTimeout(function(){
			reload();
		}, 2000);
});

gulp.task('sassComponents', function () {
	// Compile the sass and autoprefix the CSS
	return gulp.src(COMPONENT_SRC + '**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(COMPONENT_SRC));
});

gulp.task('sassGlobals', function () {
	// Compile the sass and autoprefix the CSS
	return gulp.src( GLOBALS_SRC + 'sass/globals.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest( GLOBALS_SRC+'css/'));
});

gulp.task('sassStyleguide', function () {
	// Compile the sass and autoprefix the CSS
	return gulp.src(STYLEGUIDE_SRC+ 'assets/sass/styleguide.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(STYLEGUIDE_DIST+'css/'));
});


gulp.task('serve', function() {
		setTimeout(function(){
	    browserSync.init({
	        server: STYLEGUIDE_DIST,
	        middleware: [ historyApiFallback() ]
	    });
		}, 2000);

		// Set watching for reloads...
		gulp.watch([GLOBALS_SRC + '**/*.scss'], ['rebuildSassGlobals']);
		gulp.watch([COMPONENT_SRC + '**/*.scss'], ['rebuildSassComponents']);
		gulp.watch([COMPONENT_SRC + '/**/*.jsx', STYLEGUIDE_SRC + '/**/*.jsx'], ['rebuildJSX']);
		gulp.watch([STYLEGUIDE_DIST + '*'], ['delayedReload']);

});


gulp.task('webpackReact', function () {
	gulp.src(STYLEGUIDE_SRC +'main.jsx')
	.pipe(webpack( require('./webpack.config.js') ))
	.pipe(gulp.dest(STYLEGUIDE_DIST));
});

// Sequencing Tasks ----------------------------------------------

gulp.task('rebuildJSX' , function(cb) {
	runSequence(
		'reactDocGenBuild',
		'reactDocGenParse',
		'webpackReact',
		'delayedReload',
		cb);
});

gulp.task('rebuildSassComponents' , function(cb) {
	runSequence(
		'sassComponents',
		'webpackReact',
		'delayedReload',
		cb);
});

gulp.task('rebuildSassGlobals' , function(cb) {
	runSequence(
		'sassGlobals',
		'copyGlobalCSS',
		'webpackReact',
		'delayedReload',
		cb);
});

gulp.task('default', function(cb) {

	runSequence(
		'cleanDistFiles',
		'compileComponentListJSX',
		'reactDocGenBuild',
		'reactDocGenParse',
		['sassStyleguide', 'sassComponents','sassGlobals'],
		['copyStaticAssets', 'copyLibraryDist', 'copyGlobalCSS'],
		'webpackReact',
		'serve',
		cb);
});
