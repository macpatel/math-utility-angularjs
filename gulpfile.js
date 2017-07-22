'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglyfly');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

//list of folders to place js and css files
var folders = { 
	js : 'public/js',
	css : 'public/css'
};

//task for vendor css
gulp.task('vendor-css', function() {
  return gulp.src([
  		'node_modules/bootstrap/dist/css/bootstrap.min.css',
  	])
    .pipe(cleanCSS())
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest(folders.css));
});

//task for application css
gulp.task('app-css', function() {
  return gulp.src([
  		'styles/*.css',
  	])
    .pipe(cleanCSS())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest(folders.css));
});

//task for application css for dev env
gulp.task('app-css-dev', function() {
  return gulp.src([
  		'styles/*.css',
  	])
    // .pipe(cleanCSS())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest(folders.css));
});

//task for vendor js for prod
gulp.task('vendor-js', function() {
  return gulp.src([
  		'node_modules/angular/angular.min.js',
  		'node_modules/angular-route/angular-route.min.js',
  		'node_modules/angular-resource/angular-resource.min.js',
  		'node_modules/jquery/dist/jquery.min.js',
  		'node_modules/bootstrap/dist/js/bootstrap.min.js',
  	])
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(folders.js));
});

//task for application js for prod
gulp.task('app-js', function() {
  return gulp.src([
  		'scripts/*.js',
  		'scripts/services/*.js',
  		'scripts/components/*.js',
  	])
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(folders.js));
});

//task for application js for dev
gulp.task('app-js-dev', function() {
  return gulp.src([
  		'scripts/*.js',
  		'scripts/services/*.js',
  		'scripts/components/*.js',
  	])
    // .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(folders.js));
});

//task for production minify everything
gulp.task('prod', [
		'vendor-js',
		'vendor-css',
		'app-js',
		'app-css'
		]);

//task for devlopment
gulp.task('default', [
		'vendor-js',
		'vendor-css',
		'app-js-dev',
		'app-css-dev'
		]);
