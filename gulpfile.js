'use strict';

var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

// Uglify JavaScript
gulp.task('uglify', function () {
    gulp.src('fit.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(''));
});

// Watch files for changes
gulp.task('watch', function () {
    gulp.watch('fit.js', ['uglify']);
});

// Prepare package
gulp.task('dist', ['uglify']);

// Default task
gulp.task('default', ['watch']);
