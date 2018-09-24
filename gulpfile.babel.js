/* eslint-env node*/

// Package Imports ---------------------------------------
const config = require('./config');
const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();
const historyApiFallback = require('connect-history-api-fallback');
const reload = browserSync.reload;


// incuded here to make browserSync instance available to all functions
// const browserSync = require('browser-sync').create();
// const reload = browserSync.reload;

// constants ----------------------------------------------
const COMPONENT_SRC = config.paths.componentSrc;
const GLOBALS_SRC = config.paths.globalsSrc;
const LOCAL_DOCS_SRC = config.paths.localDocsSrc;
const STYLEGUIDE_DIST = config.paths.styleguideDist;
// Pulling in all tasks from the tasks folders in Iris and Steadicam
requireDir('./gulp-tasks', { recurse: true });
requireDir(config.paths.styleguideSrc + '/gulp-tasks', { recurse: true });

// Start up server with browserSync, start watching for changes
gulp.task('serve', function() {
    setTimeout(function() {
        browserSync.init({
            server: STYLEGUIDE_DIST,
            browser: "google chrome",
            middleware: [historyApiFallback()],
        });
    }, 2000);

    gulp.task('delayedReload', function() {
        setTimeout(function() {
            reload();
        }, 2000);
    });


// Set watching for reloads...
    gulp.watch([GLOBALS_SRC + '**/*.scss'], ['rebuildSassGlobals']);
    gulp.watch([
        COMPONENT_SRC + '**/*.scss',
    ], ['rebuildSassComponents']);
    gulp.watch([
        COMPONENT_SRC + '/**/*.jsx',
        COMPONENT_SRC + '/**/*.js',
        COMPONENT_SRC + '/**/*.tsx',
        COMPONENT_SRC + '/**/*.ts',
        LOCAL_DOCS_SRC + '/**/*.jsx'], ['rebuildJSX']);
    gulp.watch([STYLEGUIDE_DIST + '*'], ['delayedReload']);

});


gulp.task('default', function(cb) {
    runSequence(
        'build',
        'serve',
        cb
    );
});

gulp.task('svg', function(cb) {
    runSequence(
        'build',
        'svgProcessing',
        'serve',
        cb
    );
});

gulp.task('deploy', function(cb) {
    runSequence(
        'cleanStyleguideDistFile',
        'build-Prod',
        'svgProcessing',
        cb
    );
});
