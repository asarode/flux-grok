var gulp = require('gulp')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var browserSync = require('browser-sync')

gulp.task('browserify', function() {
    browserify('./public/scripts/main.js')
      .transform(babelify.configure({
        optional: ['es7.decorators']
      }))
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('dist/scripts'))
      .pipe(browserSync.reload({ stream: true, once: true }))
})

gulp.task('styles', function() {
  gulp.src('public/styles/**/*.*')
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.reload({ stream: true, once: true }))
})

gulp.task('html', function() {
  gulp.src('public/index.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({ stream: true, once: true }))
})

gulp.task('browserSync', function() {
    browserSync({
        server: './dist'
    })
})

gulp.task('watch', function() {
    gulp.watch('./public/scripts/**/*.*', ['browserify'])
    gulp.watch('./public/styles/*.*', ['styles'])
    gulp.watch('./public/index.html', ['hmtl'])
})

gulp.task('default', ['watch', 'browserify', 'styles', 'html', 'browserSync'])





