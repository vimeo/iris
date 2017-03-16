const gulp = require('gulp');
const config = require('../config');
const path = require('path');
const buildPath = path.resolve('./docs');
const svgHTMLPath = path.resolve('./doc-assets/apps/svgPage/svgPage.html');

// Copy the static assets to the styleguide build
gulp.task('svgHtmlCopy', function () {
	return gulp.src(svgHTMLPath)
	.pipe(gulp.dest(buildPath));
});
