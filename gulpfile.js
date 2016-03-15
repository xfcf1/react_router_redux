var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');
var del = require('del');
var inject = require('gulp-inject');
//var gulpSequence = require('gulp-sequence');

gulp.task('clean', function() {
    del.sync([path.join('./dist/**')]);
});
gulp.task('copy', function() {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('dist'))
    gulp.src('./src/@(images|css)/**')
        .pipe(gulp.dest('dist'))
    gulp.src('./src/js/**')
        .pipe(gulp.dest('dist/js'))
});
gulp.task('injectSource', function () {
    var target = gulp.src('./dist/index.html');
    var sources = gulp.src('./dist/**/*.js', {read: false});

    target.pipe(inject(sources, {relative:true}))
        .pipe(gulp.dest('./dist'));
});
gulp.task('zip', function() {
    gulp.src('./dist/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
    //gulp.src('./dist/**/*.css')
    //    .pipe(concat('style.css'))
    //    .pipe(gulp.dest('dist/styles'))
    gulp.src('./dist/**/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist'))
});
gulp.task('package', function() {
    gulp.src('./dist/**')
        .pipe(zip('app.zip'))
        .pipe(gulp.dest('dist'));
});