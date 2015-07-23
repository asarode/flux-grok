var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
// var watchify = require('watchify');
var browserSync = require('browser-sync');
// var gutil = require('gulp-utils')

// var bundler = watchify(browserify('./public/scripts/main.js', watchify.args));
// bundler.transform(babelify);
// bundler.on('update', bundle);

// function bundle() {
//     gutil.log('Compiling scripts');

//     return bundler.bundle()
//         .on('error', function(err) {
//             gutil.log(err.message);
//             browserSync.notify('Error building scripts!');
//             this.emit('end');
//         })
//         .pipe(source('bundle.js'))
//         .pipe(gulp.dest('./dist/scripts'))
//         .pipe()browserSync.reload
// }

gulp.task('browserify', function() {
    browserify('./public/scripts/main.js')
      .transform(babelify.configure({
        optional: ['es7.decorators']
      }))
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('dist/scripts'))
      .pipe(browserSync.reload({ stream: true, once: true }));
});

gulp.task('copy',function() {
    gulp.src('public/index.html')
      .pipe(gulp.dest('dist'));
    gulp.src('public/styles/*.*')
      .pipe(gulp.dest('dist/styles'));
    gulp.src('public/src/assets/**/*.*')
      .pipe(gulp.dest('dist/assets'));
});

gulp.task('browserSync', function() {
    browserSync({
        server: './dist'
    });
});

gulp.task('watch', function() {
    gulp.watch('./public/scripts/**/*.*', ['browserify']);
    gulp.watch('./public/index.html', ['copy']);
});

gulp.task('default',['watch', 'browserify', 'copy', 'browserSync']);