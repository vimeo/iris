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
const template = require('gulp-template');
const watch = require('gulp-watch');
const vimeoStyleguide = require('vimeo-styleguide');


// constants ----------------------------------------------
const COMPONENT_SRC = './src/components/';
const COMPONENT_DIST = './dist/';
const GLOBALS_SRC = './src/globals/';
const STYLEGUIDE_SRC = './node_modules/vimeo-styleguide/';
const LOCAL_DOCS_SRC = './docs/';
const LOCAL_DATA = path.resolve(__dirname)+'/data/';
const REACT_COMPONENT_DATA = LOCAL_DATA +'componentAPI.json';
const STYLEGUIDE_DIST = './dist-styleguide/';


// Gulp Tasks ----------------------------------------------


gulp.task('cleanDistFiles', function () {
	del(['dist/**/*', 'dist-styleguide/**/*']).then(paths => {
    console.log('Cleaned out dist folders');
	});
});

gulp.task('compileComponentListJSX', function () {
	const STYLE_DATA = require(LOCAL_DOCS_SRC + 'patternList.js');

	return gulp.src(STYLEGUIDE_SRC + 'templates/_component-docs-jsx-export-list.template')
	.pipe(template(STYLE_DATA.default))
	.pipe(rename("ComponentDocsJsxExportList.js"))
	.pipe(gulp.dest(LOCAL_DOCS_SRC));
});

gulp.task('compilePackageIndexJSX', function () {
	let patternData = require(LOCAL_DATA + 'componentAPI.json');
	patternData = {"patterns": [patternData]};
	return gulp.src('./templates/_package-index.js.template')
	.pipe(template(patternData))
	.pipe(rename('index.js'))
	.pipe(gulp.dest('./'));
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
	'react-docgen ./src/components --out '+ REACT_COMPONENT_DATA + ' --pretty'
]));

gulp.task('reactDocGenParse' , function() {
	vimeoStyleguide.reactDocGen(REACT_COMPONENT_DATA, LOCAL_DATA+'componentAPITransformed.json');
});

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
		gulp.watch([COMPONENT_SRC + '/**/*.jsx', LOCAL_DOCS_SRC + '/**/*.jsx'], ['rebuildJSX']);
		gulp.watch([STYLEGUIDE_DIST + '*'], ['delayedReload']);

});

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
		['copyStaticAssets', 'copyGlobalCSS'],
		'compilePackageIndexJSX',
		'webpackReact',
		'serve',
		cb);
});
