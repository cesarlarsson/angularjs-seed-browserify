var gulp = require("gulp"),
browserify = require('browserify'),
buffer     = require('vinyl-buffer'),
source = require('vinyl-source-stream'),
rename     = require('gulp-rename'), //Rename a file
uglify = require('gulp-uglify'), //Uglify JS
bulkify = require('bulkify'), //require files in a folder(s)
//concatCss = require('gulp-concat-css'), //concat css files
//del = require('del'), //Delete files on a folder 

ngHtml2Js = require('browserify-ng-html2js'),
concat = require('gulp-concat'),
sourcemaps = require('gulp-sourcemaps'),
_ = require('underscore'),
//watch = require('gulp-watch'),


//plumber = require('gulp-plumber'),
notifier = require('node-notifier');

//map = require('map-stream');


//Angular main files
var appMainList=[];
/* appMainList.push("./gto.config.js");
appMainList.push("./gto.constants.js");
appMainList.push("./gto.controller.js");
appMainList.push("./gto.module.js"); */
var config = {
    js: {
        src: './app/app.js',       // Entry point
        outputDir: './app/',  // Directory to save bundle to
        outputDirLocal: './app/',   // Directory to save bundle to
        outputFile: 'bundle.js', // Name to use for bundle
        outputFileMin: 'bundle.min.js' // Name to use for bundle
    },


};

function bundleLocal(bundler) {
    
    // Add options to add to "base" bundler passed as parameter
    bundler
      .bundle() .on('error', function(err){
            notifier.notify({
            'title': 'Compile Error',
            'message': err.message
            });
        })                                              // Start bundle
      .pipe(source(config.js.src))                        // Entry point
      .pipe(buffer())               // Convert to gulp pipeline                                
      .pipe(sourcemaps.init())  
      .pipe(rename(config.js.outputFile))          // Rename output from 'main.js'

      .pipe(gulp.dest(config.js.outputDirLocal)) 
      .pipe(uglify({
           mangle: false, //very important without this some features will not work
            output: {
            max_line_len: 50000,
            }
       }))   
      .pipe(rename(config.js.outputFileMin)) 
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest(config.js.outputDirLocal))                                                   
}

gulp.task('bundle-local-main', function () {
    var bundler = 
		browserify(config.js.src)
		.transform(ngHtml2Js({
            extension: 'html', // optionally specify what file types to look for
            requireAngular: false // (default: false) optionally include `var angular = require('angular');` 
                            // Supported in Angular 1.3.14 and above if you bundle angular with browserify
        }))
        .transform("browserify-ngannotate");

    bundleLocal(bundler);
})
