/*global module */
// Karma configuration
// Generated on Tue Jan 19 2016 20:31:17 GMT-0600 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      '../bower_components/angular/angular.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '../bower_components/angular-animate/angular-animate.js',
      '../bower_components/angular-aria/angular-aria.js',
      '../bower_components/angular-material/angular-material.js',
      '../bower_components/angular-ui-router/release/angular-ui-router.js',
      '../src/**/*.module.js',
      '../src/**/*.js',
      '../pages/**/*.tpl.html',
      '../tests/unit/**/*.spec.js'
    ],

    // list of files to exclude
    exclude: [

    ],

    plugins: [
        'karma-mocha',
        'karma-sinon-chai',
        'karma-chrome-launcher',
        'karma-coverage',
        'karma-babel-preprocessor',
        'karma-ng-html2js-preprocessor'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'angular-material-design-template/pages/**/*.tpl.html': ['ng-html2js'],
        '../src/**/*.js': ['babel'],
        '../src/components/**/!(*app).js': ['coverage'],
        '../tests/unit/**/*.spec.js': ['babel']
    },

    babelPreprocessor: {
      options: {
          presets: ['es2015'],
          sourceMap: 'inline'
      },
      filename: function (file) {
          return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
          return file.originalPath;
      }
    },

    //how and where to output the coverage reporter
    coverageReporter: {
        reporters: [
            {
              type: 'html',
              dir: 'coverage/'
            },
            {
                type: 'text-summary'
            }
        ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['Chrome', 'Firefox', 'Safari', 'Opera', 'PhantomJS'],
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
