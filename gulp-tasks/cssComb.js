const gulp = require('gulp');
const csscomb = require('gulp-csscomb');
const config = require('../config');
const runSequence = require('run-sequence');
 
gulp.task('cssCombComponents', function() {
  return gulp.src([
      config.paths.componentSrc + '**/*.scss',
      '!' + config.paths.componentSrc + 'Grid*/*.scss',
      '!' + config.paths.componentSrc + 'Modal/Modal.scss',
      '!' + config.paths.globalsSrc + 'sass/**/*.scss',
      '!' + config.paths.componentSrc + 'Breadcrumb/Breadcrumb.scss',
      ])
    .pipe(csscomb())
    .pipe(gulp.dest(config.paths.componentSrc));
});

gulp.task('cssComb' , function(cb) {
	runSequence(
       'cssCombComponents',
		cb);
});
