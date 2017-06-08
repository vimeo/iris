const gulp = require('gulp');
const svgo = require('gulp-svgo');
const config = require('../config');

// Run SVGs through SVGo to optimize.
gulp.task('svgOptimize', function () {
    return gulp.src( config.paths.globalsSrc + 'src_files/svg/**/*.svg')
    .pipe(svgo(
            {
                plugins: [{
                removeTitle: true
                }]
    }))
    .pipe(gulp.dest( config.paths.globalsSrc+'svg/'));
});