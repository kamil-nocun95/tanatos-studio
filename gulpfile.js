'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
    return gulp
        .src('style.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            supports: true,
            flexbox: true,
            grid: true,
        }))
        .pipe(gulp.dest('.'))
    ;
});
