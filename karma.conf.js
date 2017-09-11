module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/**/*_test.js',
      'view*/**/*_test.js',
      './view1/template/view1.html'
    ],

    autoWatch: true,

    frameworks: ['browserify','jasmine'],
    preprocessors: {
      './view1/*_test.js': ['browserify'],
      './view1/template/view1.html': ['browserify']
    },
    browserify:{
      transform:[
        ['ng-html2js',{
        extension: 'html', 
        requireAngular: false 
      }]
      ]
    },
    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-browserify',
      'karma-junit-reporter',
    ],
    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};