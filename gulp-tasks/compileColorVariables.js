const gulp = require('gulp');
const rename = require('gulp-rename');
const template = require('gulp-template');
const config = require('../config');
const colorData = require('../src/globals/settings/colors.json');
const colorDataBlob = {"colors": [colorData]};

// Build a list of the components for export from Iris.
gulp.task('compileColorVariables', function () {
    return gulp.src('./templates/_color-sass-vars.template')
    .pipe(template(colorDataBlob))
    .pipe(rename('_colors.scss'))
    .pipe(gulp.dest(config.paths.globalsSrc +'/sass/settings/'));
});
