const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const imageMin = require('gulp-imagemin');
const imgCompress = require('imagemin-jpeg-recompress');
//const browserSync = require('browser-sync');
//const concat = require('gulp-concat');


function style () {
    return gulp.src('css/scss/style.scss').
    pipe(sass()).pipe(cleanCSS()).
    pipe(gulp.dest('css'));
}

function minBackgroundImg () {
    return gulp.src('media/img/background-images/*')
    .pipe(imageMin([
        imageMin.gifsicle(),
        imageMin.optipng(),
        imageMin.svgo()
      ]))
    .pipe(gulp.dest('media/background-images'))
};
function minContentImg () {
    return gulp.src('media/img/content-images/*')
    .pipe(imageMin([
        imageMin.gifsicle(),
        imageMin.optipng(),
        imageMin.svgo()
      ]))
    .pipe(gulp.dest('media/content-images'))
};
function minIMG () {
    minBackgroundImg();
    minContentImg();
}

exports.minIMG = minIMG;
exports.style = style;
