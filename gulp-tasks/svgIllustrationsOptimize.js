const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const config = require('../config');
const path = require('path');

gulp.task('svgIllustrationsOptimize', function () {
    return gulp.src('svg_src_files/illustrations/**/*.svg')
        .pipe(svgmin(file => {
            const prefix = path.basename(file.relative, path.extname(file.relative));
            return {
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
                    {
                        cleanupIDs: {
                            prefix: prefix + '-',
                            minify: true
                        }
                    }
                ]
            }
        }))
        .pipe(gulp.dest( 'src/illustrations/'));
});
