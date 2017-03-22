const gulp = require('gulp');
var argv = require('yargs').argv;
const rename = require('gulp-rename');
const template = require('gulp-template');
const config = require('../config.js');
const path = require('path');
const dirPath = path.resolve(__dirname, '../');


gulp.task('compileIndexHTML-Prod', function () {


    if(argv.folderPath){
      let rootPath = config.paths.routingBase + config.paths.routingProjectFolder+ argv.folderPath + '/';
      let destination = dirPath + '/build-styleguide/';
      let templateFile = dirPath + '/templates/_indexHTML.template';

      return gulp.src(templateFile)
      .pipe(template({'rootPath': rootPath}))
      .pipe(rename('index.html'))
      .pipe(gulp.dest(destination));
    }else {
      throw new Error('please supply a --folderPath value')
    };

});
