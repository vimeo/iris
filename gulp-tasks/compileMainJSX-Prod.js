const gulp = require('gulp');
const rename = require('gulp-rename');
const template = require('gulp-template');
const config = require('../config.js');
const path = require('path');
const getGitBranchName = require('git-branch-name');
const dirPath = path.resolve(__dirname, '../');
const fs = require('fs');




// Compile the list of component docs files to be included by styleguide.
// Reads 'patternList.js' to do this.
gulp.task('compileMainJSX-Prod', function () {


    getGitBranchName(dirPath, function(err, branchName) {

      let thisBranch = branchName;
      let rootPath = config.paths.routingProjectFolder+ thisBranch;
      let destination = dirPath + '/docs/';
      let templateFile = dirPath + '/templates/_MainJSX.template';
      return gulp.src(templateFile)
      .pipe(template({'rootPath': rootPath}))
      .pipe(rename('main.jsx'))
      .pipe(gulp.dest(destination));
    });



});
