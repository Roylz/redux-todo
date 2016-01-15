'use strict';

import browserify from 'browserify';
import babelify from 'babelify';
import reactify from 'reactify';
import source from 'vinyl-source-stream';
import browserSync from 'browser-sync';
import notify	from 'gulp-notify';

const gulp = require('gulp');


//set up enviroment
gulp.task('browser-sync', ()=> {
	browserSync.init({
		server:{
			baseDir: "dist"
		},
		port: 8080,
		reloadOnRestart: true
	})

})

gulp.task('html', ()=>{
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'))
		//.pipe(notify({message:'html task complete'}))
		.pipe(browserSync.reload({stream: true}))
})

gulp.task('js', ()=>{
	browserify({
		debug: true,
		entries: ['src/index.js']
	})
		.transform("babelify", {presets: ["es2015", "react"]})
		.bundle()
		.on('error', function (err) {console.log('Browserify Error: ' + err.message)})
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({stream: true}))
		//.pipe(notify({message:'js task complete'}))


});

gulp.task('watch', () =>{
		gulp.watch('src/index.html', ['html']);
		gulp.watch('src/**/*.js', ['js'])
});

gulp.task('default', ['browser-sync', 'html', 'js', 'watch']);

