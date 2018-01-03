const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('transpileJS', () =>
    gulp.src([
        'src/**/*.{jsx,js}',
        '!src/**/*-Docs.jsx'
        ])
        .pipe(babel({
            presets: [['env', {modules: false}]],
            plugins: ["transform-class-properties"],
        }))
        .pipe(gulp.dest('dist'))
);
