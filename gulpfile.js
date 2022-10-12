const gulp = require('gulp'); 
const cssnano = require('gulp-cssnano'); 
const sass = require('gulp-sass')(require('sass')); 
const concat = require('gulp-concat'); 
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const { series } = require('gulp')
const { watch } = require('gulp');

gulp.task('sass', function(){    
    return gulp.src('app/*.scss')       
        .pipe(sass())
        .pipe(concat('global.css'))       
        .pipe(cssnano())       
        .pipe(gulp.dest('dist/css')); 
});

gulp.task('js', function(){
    return gulp.src('src/main.js')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/js'))
}); 

gulp.task('html', function(){
    return gulp.src('src/index.html')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/html'))
});

gulp.task('html', function(){
    return gulp.src('src/index.html')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/html'))
});

gulp.task('images', function() {
    gulp.src(['src/assets/images/*.jpg'])
      .pipe(sass())
      .pipe(cssnano())
      .pipe(gulp.dest('dist/assets/images'))
  });


// 1

function js(){
    watch('src/*.js', series(js)).on('change', function(path, stats) {
        console.log(`File ${path} was changed`);
    });
}

function html(){
    watch('src/*.html', series(html)).on('change', function(path, stats) {
        console.log(`File ${path} was changed`);
    });
}
    
function scss(){
    watch('src/assets/scss/*.scss', series(scss)).on('change', function(path, stats) {
    console.log(`File ${path} was changed`);
});
}

exports.watch = gulp.series(js, html, scss);

