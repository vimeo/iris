const gulp = require('gulp');
const rename = require('gulp-rename');
const template = require('gulp-template');

gulp.task('compileComponentMap', function () {
    setTimeout(function(){
        const parseComponentPathData = require('../build-tasks/parseComponentPathData');
        const componentData = parseComponentPathData();

        return gulp.src('./templates/_componentMap.json.template')
            .pipe(template(componentData))
            .pipe(rename('componentMap.json'))
            .pipe(gulp.dest('dist'));
    }, 3000);
});
