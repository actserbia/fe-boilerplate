var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var plumber = require('gulp-plumber');
var coffee = require('gulp-coffee');
var notify = require("gulp-notify");
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');


livereload({ start: true })

gulp.src("./src/test.ext")
  .pipe(notify("Hello Gulp!"));

gulp.src('./resources/*.ext')
    .pipe(plumber())
    .pipe(coffee())
    .pipe(gulp.dest('./public'));

gulp.task('sass', function () {
    gulp.src('./resources/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass())
    .pipe(cssmin())
    .pipe(plumber.stop())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css/'))
    .pipe(livereload())
    .pipe(notify('Sass compiled'));
});

gulp.task('scripts', function() {
    return gulp.src('./resources/js/**/*.js')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./public/js/'))
    .pipe(livereload())
    .pipe(notify('Javascript compiled'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./resources/scss/**/*.scss', ['sass'])
    gulp.watch('./resources/js/**/*.js', ['scripts'])
});

gulp.task("default", ['watch']);
