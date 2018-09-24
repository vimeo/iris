const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('transpileJS', () =>
    gulp.src([
        'src/**/*.{jsx,js}',
        '!src/**/*-Docs.jsx'
        ])
        .pipe(babel({
            presets: [
              [
                "@babel/env",
                {
                  modules: false
                }
              ]
            ],
        }))
        .pipe(gulp.dest('dist'))
);
