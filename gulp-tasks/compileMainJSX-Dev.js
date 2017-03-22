const gulp = require('gulp');
const rename = require('gulp-rename');
const template = require('gulp-template');
const config = require('../config.js');
const path = require('path');
const dirPath = path.resolve(__dirname, '../');


gulp.task('compileMainJSX-Dev', function () {
      let destination = dirPath + '/docs/';
      let templateFile = dirPath + '/templates/_MainJSX.template';

      return gulp.src(templateFile)
      .pipe(template({'rootPath': ''}))
      .pipe(rename('main.jsx'))
      .pipe(gulp.dest(destination));
});
