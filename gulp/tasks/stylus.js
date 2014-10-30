var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');

gulp.task('stylus', function () {
  gulp.src('./src/stylesheets/*.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest('./build'));
});
