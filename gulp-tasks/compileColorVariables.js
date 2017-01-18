const gulp = require('gulp');
const rename = require('gulp-rename');
const template = require('gulp-template');
const config = require('../config');

// Build a list of the components for export from Iris.
gulp.task('compileColorVariables', function () {

	let colorData = require('../src/globals/settings/colors.json');
	colorData = {"colors": [colorData]};
  console.log(colorData)
	return gulp.src('./templates/_color-sass-vars.template')
	.pipe(template(colorData))
	.pipe(rename('colors.json'))
	.pipe(gulp.dest('../src/globals/sass/settings/_colors.scss'));
});
