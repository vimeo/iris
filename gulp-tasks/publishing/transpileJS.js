const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('transpileJS', () =>
    gulp.src([
        'src/components/**/*.{jsx,js}',
        '!dist/**/*-Docs.{jsx}'
        ])
        .pipe(babel({
            presets: ['env'],
            plugins: ["transform-class-properties"],
        }))
        .pipe(gulp.dest('dist'))
);
