/*global require, __dirname */
// Include gulp
var gulp = require('gulp');

/**
 * Include Our Plugins
 */
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var es = require('event-stream');
var angularFilesort = require('gulp-angular-filesort');
var stylus = require('gulp-stylus');
var ngHtml2Js = require("gulp-ng-html2js");
var gulpSequence = require('gulp-sequence');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
//var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
//var merge = require('merge-stream');
var rm = require('gulp-rm');
var gulpPlato = require('gulp-plato');
var plato = require('plato');
var del = require('del');
var Server = require('karma').Server;

/**
 * Lint Task
 */
gulp.task('lint', function () {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('transpile', function () {
    return gulp.src('src/**/*.js')
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest('transpiled_code'));
});

gulp.task('plato', function () {
    function cb () {

    }
    plato.inspect('transpiled_code/**/*.js', 'reports/code_quality', { title: 'WMSideMenu'}, cb);
});

gulp.task('cleanup:transpile', function () {
    del([
        'transpiled_code'
    ]);
});

gulp.task('gulpPlato', function () {
    return gulp.src('src/**/*.js')
        .pipe(gulpPlato('report', {
        jshint: {
            options: {
                strict: true
            }
        },
        complexity: {
            trycatch: true
        }
    }));
});

/**
 * Compile Our Sass
 */
gulp.task('sass:dev', function () {
    return gulp.src(['scss/**/*.scss', 'src/**/*.scss'])
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('css/'));
});

gulp.task('cleanup:sass', function () {
    return gulp.src('css/style.css', {
            read: false
        })
        .pipe(rm());
});

/**
 * Concatenate & Minify JS
 */
gulp.task('scripts', function () {
    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

/**
 * Inject the user defined js and css into the index.html page
 */
gulp.task('index:dev', function () {
    var cssFiles = gulp.src('css/**/*.css')
        .pipe(stylus())
        .pipe(gulp.dest('./'));

    return gulp.src('develop/index.html')
        .pipe(inject(gulp.src(bowerFiles()), {
            name: 'bower'
        }))
        .pipe(inject(es.merge(
            cssFiles,
            gulp.src('bower_components/font-awesome/css/font-awesome.css'),
            gulp.src('src/app.js', {
                read: false
            }),
            gulp.src('src/**/*.module.js', {
                read: true
            }),
            gulp.src('src/md-themes/**/!(*module).js', {
                read: true
            }),
            gulp.src('src/components/**/!(*module).js', {
                read: true
            })
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(angularFilesort())
        )))
        .pipe(gulp.dest('./'));
});

/**
 * Create $templateCache models from the partial views
 */
gulp.task('html2js', function () {
    gulp.src("src/components/**/partials/*.html")
        .pipe(minifyHTML({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: "AngularMaterialDesignTemplatePartials",
            prefix: ""
        }))
        .pipe(concat('partials.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest("src/components/partials"));
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/tests/karma.conf.js',
        singleRun: false,
        preprocessors: {
            '../pages/**/*.tpl.html': ['ng-html2js'],
            '../src/**/*.js': ['babel'],
            '../src/components/**/!(partials)/!(*tpl).js': ['coverage'],
            '../tests/unit/**/*.spec.js': ['babel']
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: '/Users/jacobtucker/Toolbox/Workspace/git/angular-material-design-template/',

            // ADDED THIS: the name of the Angular module to create
            moduleName: "my.templates"
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
        coverageReporter: {
            reporters: [
                {
                    type: 'html',
                    dir: '../reports/coverage/'
                },
                {
                    type: 'text-summary'
                }
            ]
        },
        reporters: ['progress', 'coverage']
    }, function () {
        done();
    }).start();
});

/**
 * Run test on change
 */
gulp.task('tdd', function (done) {
    new Server({
        configFile: __dirname + '/tests/karma.conf.js',
    }, function () {
        done();
    }).start();
});

gulp.task('watch:sass', function () {
    watch('scss/**/*.scss', batch(function (events, done) {
        gulp.start('generateCSS:dev', done);
    }));
});

gulp.task('watch:js', function () {
    watch('src/**/*.js', batch(function (events, done) {
        gulp.start('jsWatch', done);
    }));
});

gulp.task('watch:html', function () {
    watch('pages/**/*.tpl.html', batch(function (events, done) {
        gulp.start('html2js', done);
    }));
});

// Build for development task
gulp.task('generateReports', gulpSequence(['transpile'],['plato'],['cleanup:transpile']));
gulp.task('generateCSS:dev', gulpSequence(['cleanup:sass'], 'sass:dev'));
gulp.task('jsWatch', ['lint', 'index:dev', 'scripts']);
gulp.task('htmlWatch', ['html2js', 'index:dev']);
gulp.task('sassWatch', ['watch:sass']);
gulp.task('build:dev', ['html2js']);

// Default Task
gulp.task('default', ['lint', 'html2js', 'scripts', 'tdd', 'watch']);
