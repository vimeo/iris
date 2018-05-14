const gulp = require('gulp');
const rename = require('gulp-rename');
const template = require('gulp-template');
const parseFlowDocsData = require('../build-tasks/parseFlowDocsData.js');
const parseTSDocsData = require('../build-tasks/parseTSDocsData.js');
// Build a list of the components for export from Iris.
gulp.task('compilePackageIndexJS', function () {
	const componentData = {
		flowComponents: parseFlowDocsData(),
		tsComponents: parseTSDocsData(),
	};

	// Uncomment below to Debug
	// console.log('Compiling Index JS file from:' , componentData);

	return gulp.src('./templates/_package-index.js.template')
	.pipe(template(componentData))
	.pipe(rename('index.js'))
	.pipe(gulp.dest('src'))
	.pipe(gulp.dest('dist'));
});
