var gulp 		  = require('gulp');
var concatCss 	  = require('gulp-concat-css');
var connect 	  = require('gulp-connect');
var replace 	  = require('gulp-html-replace');
var includer      = require('gulp-htmlincluder');
var livereload 	  = require('gulp-livereload');
var spritecreator = require('gulp.spritesmith');
var less 		  = require('gulp-less');
 
gulp.task('less', function () {
  return gulp.src('dev/styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('server', function(){
	connect.server({
		root : 'build',
		livereload: true
	});
});

gulp.task('html', function(){
	gulp.src('dev/**/*.html')
		.pipe(includer())
		.pipe(replace({
			css: 'css/style.css'
		}))
		.pipe(gulp.dest('build/'))
		.pipe(connect.reload());
});

gulp.task('default', function(){
	gulp.start('html','less', 'server');

	gulp.watch(['dev/styles/*.less'], function(){
		gulp.start('less');
	});
	gulp.watch(['dev/**/*.html'], function(){
		gulp.start('html');
	});
});