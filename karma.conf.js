// Karma configuration
// Generated on Sun Oct 25 2015 12:32:31 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','browserify'],      
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-mocha-reporter',
      'karma-browserify',
      'karma-coverage'
    ],


    // list of files / patterns to load in the browser
    files: [
      './app/bower_components/angular/angular.js',
      './app/bower_components/angular-route/angular-route.js',
      './app/bower_components/angular-mocks/angular-mocks.js',
      './app/app.js',
      './app/view1/template/*.html',
      './app/view1/view1.js',
      './app/view2/view2.js',
      './app/view2/view2_test.js',
      './app/view1/view1_test.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './app/app.js':['browserify'],
      './app/view1/view1.js':['browserify','coverage'],

    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],

    coverageReporter: {
        type: 'html',
        dir:'converage/'

    },
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    browserify:{
              debug: true,
              extensions: ['.js'],
              transform: [
                  ['browserify-ng-html2js', {
                      extension: 'html', // optionally specify what file types to look for
                      requireAngular: false // (default: false) optionally include `var angular = require('angular');`
                      // Supported in Angular 1.3.14 and above if you bundle angular with browserify
                  }]
              ]
           },
      

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS'],
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  });
};
