'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const rename = require('gulp-rename');

exports.less = function () {
    return gulp.src('./css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist'));
}

exports.style = function () {
    return gulp.src('./css/*.less')
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist'));
}

exports.stylemin = function () {
    return gulp.src('./css/*.less')
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./dist'));
}

exports.watch = function () {
    gulp.watch('./css/*.less', gulp.series('less', 'style', 'stylemin'));
}