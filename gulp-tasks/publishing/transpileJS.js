const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('transpileJS', () =>
    gulp.src([
        'dist/index.js',
        'src/**/*.{jsx,js}',
        '!src/**/*-Docs.{jsx}'
        ])
        .pipe(babel({
            presets: ['env'],
            plugins: ["transform-class-properties"],
        }))
        .pipe(gulp.dest('dist'))
);
