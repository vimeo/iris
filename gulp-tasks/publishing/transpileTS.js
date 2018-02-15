const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('transpileTS', shell.task([
	'tsc'
]));
