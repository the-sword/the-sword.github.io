/* Refrences:
1. http://notes.iissnan.com/2016/publishing-github-pages-with-travis-ci
2. https://github.com/chrisjlee/hexo-theme-zurb-foundation/blob/e82f45a82bbaaee063bcb1298cd9793575afb142/gulpfile.js
3. https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
4. https://hexo.io/api/
5. https://github.com/iissnan/theme-next-docs/blob/master/.travis.yml
*/


var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin');
//JS压缩
gulp.task('uglify', function() {
    return gulp.src('././public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('././public/js/'));
});
//public-fancybox-js压缩
gulp.task('fancybox:js', function() {
    return gulp.src('././public/fancybox/jquery.fancybox.js')
        .pipe(uglify())
        .pipe(gulp.dest('././public/fancybox/'));
});
//public-fancybox-css压缩
gulp.task('fancybox:css', function() {
    return gulp.src('././public/fancybox/jquery.fancybox.css')
        .pipe(cssmin())
        .pipe(gulp.dest('././public/fancybox/'));
});
//CSS压缩
gulp.task('cssmin', function() {
    return gulp.src('././public/css/style.css')
        .pipe(cssmin())
        .pipe(gulp.dest('././public/css/'));
});
//图片压缩
gulp.task('images', function() {
    gulp.src('././public/img/*.*')
        .pipe(imagemin({
            progressive: false
        }))
        .pipe(gulp.dest('././public/img/'));
});
gulp.task('build', ['uglify', 'cssmin', 'images', 'fancybox:js', 'fancybox:css']);