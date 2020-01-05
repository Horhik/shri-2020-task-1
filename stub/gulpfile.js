
 
let {series, parallel, src, dest, watch} = require('gulp');
let sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
// gulp.task('sass', function () {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });
 
console.log(sass)
function css(){
    return src('./sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./build/'))
}
function watchSass() {
 watch('./**/*.scss', series(css))
}
exports.css = css
exports.watch = watchSass
exports.default = parallel(watchSass)
