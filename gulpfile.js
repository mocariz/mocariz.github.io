var gulp 		= require('gulp');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var env       	= require('minimist')(process.argv.slice(2));
var concat      = require('gulp-concat');
var uglify		= require('gulp-uglify');
var stylus      = require('gulp-stylus');
var prefixer    = require('autoprefixer-stylus');
var jeet        = require('jeet');
var koutoSwiss  = require('kouto-swiss');
var rupture     = require('rupture');
var imagemin    = require('gulp-imagemin');
var cp 			= require('child_process');

var jekyll 		= process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

var paths = {
  styles: {
    src: 'src/styl/**/*.styl',
    dest: '_site/assets/css/',
    destsecond: 'assets/css/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: '_site/assets/js/',
    destsecond: 'assets/js/'
  },
  images: {
	src: 'src/img/**/*.{jpg,png,gif}',
    dest: '_site/assets/img/',
    destsecond: 'assets/img/'
  }
};

/**
 * Build Jekyll
 */
function jekyllBuild() {
  return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
}

/**
 * Stylus task
 */
function style() {
	return gulp.src('src/styl/main.styl')
	.pipe(plumber())
	.pipe(stylus({
		use:[koutoSwiss(), prefixer(), jeet(), rupture()],
		compress: true
	}))
	.pipe(gulp.dest(paths.styles.dest))
	.pipe(gulp.dest(paths.styles.destsecond))
	.pipe(browserSync.reload({stream:true}));
}

/**
 * Javascript Task
 */
function js() {
	return gulp.src((env.p) ? 'src/js/**/*.js' : ['src/js/**/*.js', '!src/js/analytics.js'])
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(gulp.dest(paths.scripts.destsecond))
		.pipe(browserSync.reload({stream:true}));
}

/**
 * Imagemin Task
 */
function imagemin() {
	return gulp.src(paths.images.src)
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
		.pipe(gulp.dest(paths.images.dest))
		.pipe(gulp.dest(paths.images.destsecond))
		.pipe(browserSync.reload({stream:true}));
};

/**
 * Launch the Server
 */
function browserSyncServe(done) {
  browserSync.init({
    server: {
      baseDir: "_site"
    }
  })
  done();
}

/**
 * Reload browser
 */
function browserSyncReload(done) {
  browserSync.reload();
  done();
}

/**
 * Watch stylus files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
function watch() {
  gulp.watch(paths.styles.src, style)
  gulp.watch(paths.images.src, imagemin);
  gulp.watch(paths.scripts.src, js)
  gulp.watch(
    [
    '*.html',
    '_layouts/*.html',
    '_pages/*',
    '_posts/*',
    '_data/*',
    '_includes/*'
  ],
  gulp.series(jekyllBuild, browserSyncReload));
}

/**
 * Default task, running just `gulp` will compile the stylus,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.parallel(jekyllBuild, browserSyncServe, watch))