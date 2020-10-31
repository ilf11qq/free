const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
//const browserSync = require('browser-sync');
const concat = require('gulp-concat');


function style () {
    return gulp.src('css/scss/style.scss').
    pipe(sass()).pipe(cleanCSS()).
    pipe(gulp.dest('css'));
}
function concatJS () {
    return gulp.src('js/js/*')
    .pipe(concat('script.js')).pipe(gulp.dest('js/'));
}

exports.concatJS = concatJS;
exports.style = style;
