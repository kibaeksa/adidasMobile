// for gulp
var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var inject = require('gulp-inject-string');
var notify = require('gulp-notify');
var path = require('path');
var fs = require('fs');

// for parameter from CLI
var args = require('yargs').argv;
var sassInject = {
    path : '',
    source : ''
};


gulp.task('server',function(){
    connect.server({
        port : 2001,
        root : './app/',
        livereload : true
    });
});

gulp.task('sass-inline',function(){
    gulp.src('./app/html/adidas/event/**/*.scss',{base : './'})
        .pipe(sass({ outputStyle : 'compressed'}).on('error',sass.logError))
        .pipe(gulp.dest(function(file){
            sassInject.path = path.join(path.dirname(file.path) , '');
            return './';
        }))
        .pipe(notify(function(){
            gulp.start('sass-inline:inject');
        }));
});

// gulp.task('sass-inline2',function(){
//     gulp.src('./app/html/adidas/event/**/**/*.scss',{base : './'})
//         .pipe(sass({ outputStyle : 'compressed'}).on('error',sass.logError))
//         .pipe(gulp.dest(function(file){
//             sassInject.path = path.join(path.dirname(file.path) , '');
//             return './';
//         }))
//         .pipe(notify(function(){
//             gulp.start('sass-inline:inject');
//         }));
// });

gulp.task('sass-inline:inject',function(){
    gulp.src(path.join(sassInject.path,'*.html'))
        .pipe(inject.after('<!-- Inject css from index.sass -->','\n<style type="text/css">'+fs.readFileSync(path.join(sassInject.path,'index.css'), 'utf8')+'</style>'))
        .pipe(gulp.dest(path.join(sassInject.path , 'build')))
        .pipe(connect.reload());
});



// gulp.task('bbl',function(){
//     return gulp.src(staticPath + '/js/adidas/es6/common.js')
//         .pipe(babel({
//             presets : ['es2015'],
//             comments : false
//         }))
//         // .pipe(uglify())
//         .pipe(gulp.dest(staticPath + '/js/adidas/es_new/'));
// });


gulp.task('scripts',function(){
    return gulp.src([
        './app/js/owl.carousel.js',
        './app/js/swipe.js',
        './app/js/modalPopup.js'
    ]).
        pipe(concat('adidas.ui.js')).
        pipe(gulp.dest('./app/js/adidas/dest/')).
        pipe(rename('adidas.ui.min.js')).
        pipe(uglify()).
        pipe(gulp.dest('./app/js/adidas/dest/'));
});

gulp.task('scriptsCommon',function(){
    return gulp.src('./app/js/adidas/common.js').
        pipe(concat('uicommon.min.js')).
        pipe(uglify()).
        pipe(gulp.dest('./app/js/adidas/dest/'));
});


gulp.task('watch',function(){
    gulp.watch('./app/html/adidas/event/**/*.scss',['sass-inline']);
    gulp.watch('./app/html/adidas/event/**/*.html',['sass-inline']);
    // gulp.watch('./app/html/adidas/event/**/**/*.scss',['sass-inline2']);
    // gulp.watch('./app/html/adidas/event/**/**/*.html',['sass-inline2']);
    gulp.watch('./app/js/adidas/common.js',['scriptsCommon']);
    gulp.watch('./app/js/modalPopup.js',['scripts']);

});


gulp.task('default',['server','watch','scripts','scriptsCommon']);
