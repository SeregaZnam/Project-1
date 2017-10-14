var gulp 		  = require('gulp');
var concatCss 	  = require('gulp-concat-css');
var connect 	  = require('gulp-connect');
var replace 	  = require('gulp-html-replace');
var includer      = require('gulp-htmlincluder');
var livereload 	  = require('gulp-livereload');
var spritecreator = require('gulp.spritesmith');
var less 		  = require('gulp-less');

gulp.task('sprite', function(){
	var spriteData = gulp.src('dev/img/*.png')
						.pipe(spritecreator({
							imgName: 'sprite.png',
							cssName: 'sprite.css',
							algorithm: 'binary-tree'
						}));
	spriteData.img.pipe(gulp.dest('build/img/'));
	spriteData.css.pipe(gulp.dest('build/css/'));
});

gulp.task('less', function () {
  return gulp.src('dev/styles/home.less')
    .pipe(less())
    .pipe(gulp.dest('build/css/'))
    && gulp.src('dev/styles/about.less')
    .pipe(less())
    .pipe(gulp.dest('build/css/'))
    .pipe(connect.reload())
    && gulp.src('dev/styles/products.less')
    .pipe(less())
    .pipe(gulp.dest('build/css/'))
    .pipe(connect.reload())
    && gulp.src('dev/styles/blog.less')
    .pipe(less())
    .pipe(gulp.dest('build/css/'))
    .pipe(connect.reload())
    && gulp.src('dev/styles/blog-post.less')
    .pipe(less())
    .pipe(gulp.dest('build/css/'))
    .pipe(connect.reload())
    && gulp.src('dev/styles/contact.less')
    .pipe(less())
    .pipe(gulp.dest('build/css/'))
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

	gulp.watch(['dev/styles/**/*.less'], function(){
		gulp.start('less');
	});
	gulp.watch(['dev/**/*.html'], function(){
		gulp.start('html');
	});
});