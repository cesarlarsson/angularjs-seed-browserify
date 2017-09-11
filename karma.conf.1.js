//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/**/*.js',
      'view*/**/*.js',
      'view1/**/*.html'
    ],


    autoWatch: true,

    frameworks: ['browserify','jasmine'],

    preprocessors: {
      'view*/**/*.html': ['html2js-browserify'],
      'view1/**/*.js': [ 'browserify' ],
    },

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-browserify',
      'karma-ng-html2js-preprocessor'
    ],

    

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
