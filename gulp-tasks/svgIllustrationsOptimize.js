const gulp = require('gulp');
const svgo = require('gulp-svgo');
const config = require('../config');

// Run SVGs through SVGo to optimize.
gulp.task('svgIllustrationsOptimize', function () {
    return gulp.src('svg_src_files/illustrations/**/*.svg')
    .pipe(svgo(
            {
                plugins: [{
                removeTitle: true,
                }]
    }))
    .pipe(gulp.dest( 'src/illustrations/'));
});