const gulp = require('gulp');
const csscomb = require('gulp-csscomb');
const config = require('../config');
const runSequence = require('run-sequence');
 
gulp.task('cssCombComponents', function() {
  return gulp.src([
      config.paths.componentSrc + '**/*.scss',
      '!' + config.paths.componentSrc + 'Grid*/*.scss'
      ])
    .pipe(csscomb())
    .pipe(gulp.dest(config.paths.componentSrc));
});

gulp.task('cssCombGlobal', function() {
  return gulp.src([
      config.paths.globalsSrc + '**/*.scss',
      '!' + config.paths.globalsSrc + 'sass/fills/_libsass.scss',
       '!' + config.paths.globalsSrc + 'sass/utilities/*.scss'
      ])
    .pipe(csscomb())
    .pipe(gulp.dest(config.paths.globalsSrc));
});

gulp.task('cssComb' , function(cb) {
	runSequence(
       'cssCombGlobal',
       'cssCombComponents',
		cb);
});