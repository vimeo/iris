// Package Imports ---------------------------------------
const browserSync = require('browser-sync').create();
const del = require('del');
const gulp = require('gulp');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');
const rename = require('gulp-rename');
const reload = browserSync.reload;
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const shell = require('gulp-shell');
const steadicam = require('steadicam');
const template = require('gulp-template');
const watch = require('gulp-watch');



// constants ----------------------------------------------
const COMPONENT_SRC = './src/components/';
const COMPONENT_DIST = './lib/';
const GLOBALS_SRC = './src/globals/';
const STYLEGUIDE_SRC = './node_modules/steadicam/';
const LOCAL_DOCS_SRC = './docs/';
const LOCAL_DATA = path.resolve(__dirname)+'/data/';
const REACT_COMPONENT_DATA = LOCAL_DATA +'componentAPI.json';
const STYLEGUIDE_DIST = './build-styleguide/';


// Gulp Tasks ----------------------------------------------

// Clear out build folders for fresh builds
gulp.task('cleanDistFiles', function () {
	del(['lib/**/*', 'build-styleguide/**/*']).then(paths => {
    console.log('Cleaned out dist folders');
	});
});

// Compile the list of component docs files to be included by styleguide.
// Reads 'docs/patternList.js' to do this.
gulp.task('compileComponentListJSX', function () {
	const STYLE_DATA = require(LOCAL_DOCS_SRC + 'patternList.js');

	return gulp.src(STYLEGUIDE_SRC + 'templates/_component-docs-jsx-export-list.template')
	.pipe(template(STYLE_DATA.default))
	.pipe(rename("ComponentDocsJsxExportList.jsx"))
	.pipe(gulp.dest(LOCAL_DATA));
});


// Build a list of the components for export from Iris.
gulp.task('compilePackageIndexJSX', function () {
	let patternData = require(LOCAL_DATA + 'componentAPITransformed.json');
	patternData = {"patterns": [patternData]};
	return gulp.src('./templates/_package-index.js.template')
	.pipe(template(patternData))
	.pipe(rename('index.js'))
	.pipe(gulp.dest('./'));
});

// Copy the static assets to the styleguide build
gulp.task('copyStaticAssets', function () {
	return gulp.src([STYLEGUIDE_SRC + '*.{html,ico}', STYLEGUIDE_SRC + 'assets/**/*.js'])
	.pipe(gulp.dest(STYLEGUIDE_DIST));
});

// run react-docgen against the iris components folder generate data/componentAPI.json
gulp.task('reactDocGenBuild', shell.task([
	'react-docgen ./src/components --out '+ REACT_COMPONENT_DATA + ' --pretty'
]));

// run a transformation on data/componentAPI.json to output more easily traversed data
gulp.task('reactDocGenParse' , function() {
	steadicam.reactDocGen(REACT_COMPONENT_DATA, LOCAL_DATA+'componentAPITransformed.json');
});


// put a slight delay on refreshing the browser to make sure everything has finished.
// sort of a hack...
// TODO: use promises or the like to monitor completion of other tasks..
gulp.task('delayedReload' , function() {
		setTimeout(function(){
			reload();
		}, 2000);
});

// SASS compile individual component CSS files
gulp.task('sassComponents', function () {
	// Compile the sass and autoprefix the CSS
	return gulp.src(COMPONENT_SRC + '**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(COMPONENT_SRC));
});

// SASS compile individual component CSS files
gulp.task('sassGlobals', function () {
	return gulp.src( GLOBALS_SRC + 'sass/globals.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest( GLOBALS_SRC+'css/'));
});

// SASS compile styleguide CSS files
gulp.task('sassStyleguide', function () {
	// Compile the sass and autoprefix the CSS
	return gulp.src(STYLEGUIDE_SRC+ 'assets/sass/styleguide.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(STYLEGUIDE_DIST+'css/'));
});

// Start up server with browserSync, start watching for changes
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
		gulp.watch([COMPONENT_SRC + '/**/*.jsx', LOCAL_DOCS_SRC + '/**/*.jsx'], ['rebuildJSX']);
		gulp.watch([STYLEGUIDE_DIST + '*'], ['delayedReload']);

});

// Trigger Webpack to compile JSX and build CSS modules
gulp.task('webpackReact', shell.task([
	'	webpack --display-error-details'
]));

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
		'copyStaticAssets',
		'compilePackageIndexJSX',
		'webpackReact',
		'serve',
		cb);
});
