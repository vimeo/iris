const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const config = require('../config');

gulp.task('svgIllustrationsOptimize', function () {
    return gulp.src('svg_src_files/illustrations/**/*.svg')
        .pipe(svgmin({
            plugins: [
                {
                    removeDimensions: true
                },
                {
                    removeTitle: true
                },
                {
                    removeViewBox: false
                },
            ]
        }))
        .pipe(gulp.dest( 'src/illustrations/'));
});