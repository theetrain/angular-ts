var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('less', function() {
   return gulp.src('_less*.less')
      .pipe(watch('_less/*.less'))
      .pipe(less())
      .pipe(gulp.dest('css/'))
      .pipe(livereload());
});

gulp.task('default', ['less']);