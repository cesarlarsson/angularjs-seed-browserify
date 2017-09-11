//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'view1/**/*_test.js',
      'view1/**/*.html'
    ],


    autoWatch: true,

    frameworks: ['browserify','jasmine'],


    browserify: {
      files: [
         'view1/**/*_test.js',
         'view1/**/*.js',
      ],
      debug: true,
      transform:  ['ng-html2js', {extension: 'html', requireAngular: false}]
    },
 
    preprocessors: {
      'view1/**/*.js': ['browserify'],
      'view*/**/*.html':    ['ng-html2js'],
    },
    ngHtml2JsPreprocessor: {
      moduleName: 'karma.templates'
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
