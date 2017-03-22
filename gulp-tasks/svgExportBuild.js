const gulp = require('gulp');
const rename = require('gulp-rename');
const template = require('gulp-template');
const config = require('../config');

// Build a list of the components for export from Iris.
gulp.task('svgExportBuild', function () {
    let svgData = require(config.paths.localData + 'svgList.json');
	let svgs = {"svgs": [svgData]};
	return gulp.src('./templates/_svg-exports.js.template')
	.pipe(template(svgs))
	.pipe(rename('docs/apps/svgPage/svgExportList.js'))
	.pipe(gulp.dest('./'));
});
