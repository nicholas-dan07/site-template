const gulp = require ('gulp')
// const gulpRename = require('gulp-rename')
// const gulpMustache = require ('gulp-mustache')
// const sass = require('sass')('gulp-sass')
// const cleanCss = require ('gulp-clean-css')
// const minify = require ('gulp-minify')

// tasks
gulp.task ('build:images', function() {
    return gulp
    .src('./assets/images/**/*.*')
    .pipe(gulp.dest('./build/images'))

})