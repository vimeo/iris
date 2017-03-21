const gulp = require('gulp');
const rename = require('gulp-rename');
const config = require('../config');


// Copy the static assets to the styleguide build
gulp.task('copyProdHtaccess', function () {
    return gulp.src('./htaccess-example.txt')
    .pipe(rename('.htaccess'))
    .pipe(gulp.dest(config.paths.styleguideDist));
});
