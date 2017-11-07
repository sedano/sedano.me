var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var swPrecache = require('sw-precache');

gulp.task('sass', function () {
    gulp.src('assets/sass/main.scss')
        .pipe(sass({ includePaths: ['assets/sass'] }).on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('browser-sync', function () {
    browserSync.init(["assets/css/*.css", "*.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sw', function (callback) {
    swPrecache.write("service-worker.js", {
        staticFileGlobs: ['*.{js,html,css,png,jpg,gif,svg,ico,eot,ttf,woff,json,xml}', 'assets/{css,fonts,js}/**/*.*', 'images/**/*.{png,jpg}'],
        runtimeCaching: [{
            urlPattern: /^https:\/\/fonts\.gstatic\.com/,
            handler: 'cacheFirst'
        }]
    }, callback);
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("assets/sass/**/*.scss", ['sass']);
});