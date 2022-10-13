const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const { series } = require('gulp')
const { watch } = require('gulp');

gulp.task('sass', function () {
    return gulp.src('app/*.scss')
        .pipe(sass())
        .pipe(concat('global.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
    return gulp.src('src/main.js')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('html', function () {
    return gulp.src('src/index.html')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/html'))
});

gulp.task('images', function () {
    gulp.src(['src/assets/images/*.jpg'])
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/assets/images'))
});

gulp.task('watch', function () {
    gulp.watch('src/*.js', gulp.series('js'));
    gulp.watch('src/assets/scss/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series(['watch']));



