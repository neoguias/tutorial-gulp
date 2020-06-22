'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('tareas', function() {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer({
        Browserlst: [
            "> 1%",
            "ie >= 8",
            "edge >= 15",
            "ie_mob >= 10",
            "ff >= 45",
            "chrome >= 45",
            "safari >= 7",
            "opera >= 23",
            "ios >= 7",
            "android >= 4",
            "bb >= 10"
        ],
        cascade: false,
    }) ]))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'));
})

gulp.task('default', function() {
  gulp.watch('./src/sass/**/*.scss', gulp.series('tareas'));
});