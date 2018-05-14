const gulp = require('gulp');
const rename = require('gulp-rename');
const template = require('gulp-template');
const parseTSDocsData = require('../build-tasks/parseTSDocsData.js');
// Build a list of the components for export from Iris.
gulp.task('compileTypingIndexJS', function () {
	const componentData = {
		tsComponents: parseTSDocsData(),
	};

	// Uncomment below to Debug
	// console.log('Compiling TypeJS file from:' , componentData);

	return gulp.src('./templates/_typing-index.js.template')
	.pipe(template(componentData))
	.pipe(rename('ts_types_index.ts'))
	.pipe(gulp.dest('src'));
});
