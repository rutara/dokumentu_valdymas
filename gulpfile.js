/**
 * -----------------------------------------------------------------------------
 * IMPORTS & CONFIGURATION
 */


const sourcemaps = require("gulp-sourcemaps");

const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

/**
 * -----------------------------------------------------------------------------
 * TASKS
 */


const DIST_FOLDER = "./dist";

const CSS_FILES = "./src/scss/*.scss";
 
/**
 * -----------------------------------------------------------------------------
 * TASKS
 */ 
gulp.task('hello', function() {
    console.log('Hello Zell');
  });

// -- CSS

gulp.task("css", () => {
    const processors = [autoprefixer, cssnano];

    return gulp
        .src(CSS_FILES)
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss(processors))
        .pipe(
            sourcemaps.write(".", {
                sourceRoot: "/src/scss/"
            })
        )
        .pipe(gulp.dest(DIST_FOLDER));
});

gulp.task("css:watch", () => {
    gulp.start("css");
    gulp.watch(CSS_FILES, ["css"]);
    
});