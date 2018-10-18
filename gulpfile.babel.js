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
        'storybook',
        'gh-pages',
        cb
    );
});

const shell = require('gulp-shell');

gulp.task('storybook', shell.task([
	'yarn build-storybook'
]));


gulp.task('gh-pages', function(cb){
  // allows us to get the command-line params (folderPath)
  var argv = require('yargs').argv;
  const git = require('gulp-git');
  // get the git url
  git.exec({args: 'remote show -n origin'}, function(err, stdout){
    if (err) throw err;
    // should return something like "  Fetch URL: git@github.vimeows.com:Vimeo/iris.git..."
    var git_remote = stdout.match(/Fetch URL:\s([A-Za-z0-9@.:/]+?)\n/)[1];
    console.log('got git remote: ' + git_remote);
    // clone the repo into a separate clone
    git.clone(git_remote, {args: '.gh-pages'}, function(err){
      if (err) throw err;
      // checkout the gh-pages branch
      git.checkout('gh-pages', {cwd: '.gh-pages'}, function(err){
        if (err) throw err;
        // recursively copy the artifacts into the new clone
        console.log('copying build-styleguide to .gh-pages');
        gulp.src('build-styleguide/**/*')
          .pipe(gulp.dest('.gh-pages/' + argv.folderPath + '/'))
          .on('end', function(err){
            if (err) throw err;
            // check if there were changes to the clone
            console.log('checking if .gh-pages has changes to commit');
            git.status({cwd: '.gh-pages', args: '--porcelain ' + argv.folderPath }, function(err, stdout1){
              if (err) throw err;
              if (stdout1.trim().length > 0 ){
                // run git-add if there are changes
                console.log('adding and commiting .gh-pages changes');
                git.exec({cwd: '.gh-pages', args: 'add ' + argv.folderPath}, function(err){
                  if (err) throw err;
                  // commit any changes
                  git.exec({cwd: '.gh-pages', args: 'commit -m "updated ' + argv.folderPath + '"'}, function(err){
                    if (err) throw err;
                    // push the changes up
                    console.log('pushing .gh-pages changes');
                    git.push('origin', 'gh-pages', {cwd: '.gh-pages'}, function(err){
                      if (err) throw err;
                      // return control to Gulp
                      cb();
                    });
                  });
                });
              } else {
                console.log('saw no changes in git status: ' + stdout1);
                cb();
              }
            });
          });
      });
    });
  });
});
