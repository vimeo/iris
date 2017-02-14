const gulp = require('gulp');
const config = require('../config');
const path = require('path');
const buildPath = path.resolve('./build-styleguide');
const svgHTMLPath = path.resolve('./docs/apps/svgPage/svgPage.html');

// Copy the static assets to the styleguide build
gulp.task('svgHtmlCopy', function () {
	return gulp.src(svgHTMLPath)
	.pipe(gulp.dest(buildPath));
});
