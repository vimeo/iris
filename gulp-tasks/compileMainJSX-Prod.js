const gulp = require('gulp');
var argv = require('yargs').argv;
const rename = require('gulp-rename');
const template = require('gulp-template');
const config = require('../config.js');
const path = require('path');
const dirPath = path.resolve(__dirname, '../');
const fs = require('fs');

gulp.task('compileMainJSX-Prod', function () {
     if(argv.folderPath){
        let rootPath = config.paths.routingProjectFolder+ argv.folderPath;
        let destination = dirPath + '/docs/';
        let templateFile = dirPath + '/templates/_MainJSX.template';
        return gulp.src(templateFile)
        .pipe(template({'rootPath': rootPath}))
        .pipe(rename('main.jsx'))
        .pipe(gulp.dest(destination));
     } else {
       throw new Error('please supply a --folderPath value')
     }
      
});
