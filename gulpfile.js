// Gulp.js configuration

const
  // modules
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  htmlclean = require('gulp-htmlclean'),
  postcss = require('gulp-postcss'),
  assets = require('postcss-assets'),
  autoprefixer = require('autoprefixer'),
  mqpacker = require('css-mqpacker'),
  cssnano = require('cssnano'),
  purgecss = require('@fullhuman/postcss-purgecss'),

  // development mode?
  // devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  src = './src/',
  build = './build/'
  ;

  // image processing
function images() {

    const out = build + 'images/';
  
    return gulp.src(src + 'images/**/*')
      .pipe(newer(out))
      .pipe(imagemin({ optimizationLevel: 5 }))
      .pipe(gulp.dest(out));
  
  };
  exports.images = images;

  // HTML processing
function html() {
    const out = build;
  
    return gulp.src(src + '**/*.html')
      .pipe(newer(out))
      .pipe(htmlclean())
      .pipe(gulp.dest(out));
  }
  exports.html = gulp.series(images, html);

// FALTA JAVASCRIPT
// CSS processing
function css() {
  const out = build;

  return gulp.src(src + '**/*.css')
    .pipe(postcss([
      assets({ loadPaths: ['images/'] }),
      autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
      purgecss({content: [src + '**/*.html']}),
      mqpacker,
      cssnano
    ]))
    .pipe(gulp.dest(out));

}
exports.css = gulp.series(images, css);

// Run all tasks
exports.build = gulp.parallel(exports.html, exports.css);