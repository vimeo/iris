const gulp = require('gulp');
const rename = require('gulp-rename');
const template = require('gulp-template');

// Build a list of the components for export from Iris.
gulp.task('compilePackageIndexJS', function () {
	setTimeout(function(){
		const parseComponentPathData = require('../build-tasks/parseComponentPathData');
		const componentData = parseComponentPathData();

		// Uncomment below to Debug
		// console.log('Compiling Index JS file from:' , componentData);

		return gulp.src('./templates/_package-index.js.template')
			.pipe(template(componentData))
			.pipe(rename('index.js'))
			.pipe(gulp.dest('src'))
			.pipe(gulp.dest('dist'));

	}, 3000);
});
