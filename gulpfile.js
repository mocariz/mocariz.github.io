var env       	= require('minimist')(process.argv.slice(2)),
	gulp        = require('gulp'),
	plumber     = require('gulp-plumber'),
	browserSync = require('browser-sync').create(),
	stylus      = require('gulp-stylus'),
	uglify      = require('gulp-uglify'),
	concat      = require('gulp-concat'),
	jeet        = require('jeet'),
	rupture     = require('rupture'),
	koutoSwiss  = require('kouto-swiss'),
	prefixer    = require('autoprefixer-stylus'),
	imagemin    = require('gulp-imagemin'),
	cp          = require('child_process');

var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};
var jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'jekyll';

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', (done) => {
	browserSync.notify(messages.jekyllBuild);
	return cp.spawn(jekyllCommand, ['build'], {stdio: 'inherit'})
		.on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
const jekyllRebuild = gulp.series('jekyll-build', () => 
	browserSync.reload()
);

/**
 * Wait for jekyll-build, then launch the Server
 */
const browser_sync = () => (
	browserSync.init({
		server: {
			baseDir: '_site'
		}
	})
);

/**
 * Stylus task
 */
const css = () => {
	return gulp.src('src/styl/main.styl')
		.pipe(plumber())
		.pipe(stylus({
			use:[koutoSwiss(), prefixer(), jeet(), rupture()],
			compress: true
		}))
		.pipe(gulp.dest('_site/assets/css/'))
		.pipe(gulp.dest('assets/css/'))
		.pipe(browserSync.reload({stream:true}));
};

/**
 * Javascript Task
 */
const js = () => {
	return gulp.src((env.p) ? 'src/js/**/*.js' : ['src/js/**/*.js', '!src/js/analytics.js'])
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('_site/assets/js/'))
		.pipe(gulp.dest('assets/js/'))
		.pipe(browserSync.reload({stream:true}));
};

/**
 * Imagemin Task
 */
const images = () => {
	return gulp.src('src/img/**/*.{jpg,png,gif}')
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
		.pipe(gulp.dest('assets/img/'));
};

/**
 * Watch stylus files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
const watch = () => {
	browserSync.init({
		server: {
			baseDir: '_site'
		}
	});

	gulp.watch('src/styl/**/*.styl',  css);
	gulp.watch('src/js/**/*.js',  js);
	gulp.watch('src/img/**/*.{jpg,png,gif}',  images);
	gulp.watch('**/*.html', jekyllRebuild);
};

/**
 * Default task, running just `gulp` will compile the stylus,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default',  gulp.series(js, css, 'jekyll-build', watch));
