var gulp = require('gulp');
var clean = require('gulp-clean');
 
gulp.task('distClean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});