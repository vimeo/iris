const gulp = require('gulp');
var argv = require('yargs').argv;
const rename = require('gulp-rename');
const template = require('gulp-template');
const config = require('../config.js');
const path = require('path');
const dirPath = path.resolve(__dirname, '../');
const fs = require('fs');




// Compile the list of component docs files to be included by styleguide.
// Reads 'patternList.js' to do this.
gulp.task('compileHtaccess-Prod', function () {
     if(argv.folderPath){
        let rootPath = config.paths.routingBase + config.paths.routingProjectFolder+ argv.folderPath + '/';
        let templateFile = dirPath + '/templates/_htaccess.template';
        return gulp.src(templateFile)
        .pipe(template({'rootPath': rootPath}))
         .pipe(rename('.htaccess'))
        .pipe(gulp.dest(config.paths.styleguideDist));
     } else {
       throw new Error('please supply a --folderPath value')
     }
      
});
