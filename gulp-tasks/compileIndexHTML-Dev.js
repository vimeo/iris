const gulp = require('gulp');
const rename = require('gulp-rename');
const template = require('gulp-template');
const config = require('../config.js');
const path = require('path');
const dirPath = path.resolve(__dirname, '../');



// Compile the list of component docs files to be included by styleguide.
// Reads 'patternList.js' to do this.
gulp.task('compileIndexHTML-Dev', function () {
      let rootPath = '';
      let destination = dirPath + '/build-styleguide/';
      let templateFile = dirPath + '/templates/_indexHTML.template';

      return gulp.src(templateFile)
      .pipe(template({'rootPath': rootPath}))
      .pipe(rename('index.html'))
      .pipe(gulp.dest(destination));
});
