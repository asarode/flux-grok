var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    browserify('./public/scripts/main.js')
      .transform(babelify.configure({
        optional: ['es7.decorators']
      }))
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('dist/scripts'));
});

gulp.task('copy',function() {
    gulp.src('public/index.html')
      .pipe(gulp.dest('dist'));
    gulp.src('public/styles/*.*')
      .pipe(gulp.dest('dist/styles'));
    gulp.src('public/src/assets/**/*.*')
      .pipe(gulp.dest('dist/assets'));
});

gulp.task('default',['browserify', 'copy'], function() {
    return gulp.watch('public/src/**/*.*', ['browserify', 'copy'])
});