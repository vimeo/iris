const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('copyOtherSrcFiles' , function(cb) {
	runSequence(
        ['copyGlobalSrcFiles',
        'copySCSSFiles',
        'copySVGs',
        'copyLegacySVGs',
        ],
		cb);
});

// Copy the static assets to the styleguide build
gulp.task('copyGlobalSrcFiles', function () {
    return gulp.src(
        [
            'src/globals/**/*.{scss,json}',
            '!/src/globals/src_files/**/*'
        ]
        )
    .pipe(gulp.dest('dist/globals'));
});

gulp.task('copySCSSFiles', function () {
    return gulp.src(
        [
            'src/components/**/*.scss','src/animations/**/*.scss',
            'src/utility_components/**/*.scss',
        ]
        )
    .pipe(gulp.dest('dist'));
});

gulp.task('copySVGs', function () {
    return gulp.src('src/globals/svg/**/*.svg')
    .pipe(gulp.dest('dist/icons'));
});

gulp.task('copyLegacySVGs', function () {
    return gulp.src('src/globals/legacy_svg/**/*.svg')
    .pipe(gulp.dest('dist/legacyIcons'));
});