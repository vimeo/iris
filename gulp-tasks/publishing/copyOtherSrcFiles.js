const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('copyOtherSrcFiles', function(cb) {
    runSequence(
        [
            'copyGlobalSrcFiles',
            'copySCSSFiles',
            'copySVGs',
            'copyIllustrations',
            'copyLegacySVGs',
        ],
        cb
    );
});

// Copy the static assets to the styleguide build
gulp.task('copyGlobalSrcFiles', function() {
    return gulp
        .src(['src/globals/**/*.{scss,json}', '!/src/globals/src_files/**/*'])
        .pipe(gulp.dest('dist/globals'));
});

gulp.task('copySCSSFiles', function() {
    return gulp.src(['src/**/*.scss']).pipe(gulp.dest('dist'));
});

gulp.task('copySVGs', function() {
    return gulp.src('src/icons/**/*.svg').pipe(gulp.dest('dist/icons'));
});

gulp.task('copyIllustrations', function() {
    return gulp
        .src('src/illustrations/**/*.svg')
        .pipe(gulp.dest('dist/illustrations'));
});

gulp.task('copyLegacySVGs', function() {
    return gulp
        .src('src/legacyIconsOptimized/**/*.svg')
        .pipe(gulp.dest('dist/legacyIcons'));
});
