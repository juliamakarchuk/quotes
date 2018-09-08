const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');

gulp.task('html', function(){
  return gulp.src('app/*.html')
  .pipe(htmlmin({
      collapseWhitespace: true,
  }))
  .pipe(gulp.dest('./dist'))
})
gulp.task('sass', function(){
    return gulp.src('app/sass/styles.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers:['last 5 versions'],
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
});
gulp.task('scripts', function(){
    return gulp.src('app/*.js')
    .pipe(gulp.dest('./dist'))
});

gulp.task('browser-sync', () => (
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    })
));

gulp.task('watch', function () {
    gulp.watch("app/sass/*.scss", ['sass']);
    gulp.watch('app/**/*.js', ['scripts']);
});
