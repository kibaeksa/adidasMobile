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
var nodeSass = require('node-sass');

// for parameter from CLI
var args = require('yargs').argv;
var sassInject = {
    path : '',
    source : ''
};

var handleSassInject  = function(_path){

    if (fs.existsSync(path.resolve(_path))) {
        try {
            var sassString = fs.readFileSync(path.resolve(_path),'utf8');
        } catch (e) {
            throw '유효한 경로가 아닙니다.';
        }

        sassInject.source = nodeSass.renderSync({
            data : sassString,
            outputStyle : 'compressed'
        });
        sassInject.source = sassInject.source.css.toString();
        sassInject.path = _path.replace(/(\W+|\w+)\.scss/,'');

        gulp.start('sass-inline:inject');
    }

};


gulp.task('server',function(){
    connect.server({
        port : 2001,
        root : './app/',
        livereload : true
    });
});

// gulp.task('sass-inline',function(){
//     gulp.src('./app/html/adidas/event/**/*.scss',{base : './'})
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
        .pipe(inject.after('<div id="container">','\n<style type="text/css">'+sassInject.source+'</style>'))
        .pipe(rename('index.html'))
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
    // gulp.watch('./app/html/adidas/event/**/*.scss',['sass-inline']);
    // gulp.watch('./app/html/adidas/event/**/*.html',['sass-inline']);
    gulp.watch('./app/html/adidas/event/**/*.scss').on('change',function(file){
        if(!file.path.match(/\\build\\?/)){
            handleSassInject(file.path);
        }
    });

    gulp.watch('./app/html/adidas/event/**/*.html').on('change',function(file){
        if(!file.path.match(/\\build\\?/)){
            handleSassInject(file.path.replace(/(\W+|\w+)\.html/,'index.scss'));
        }
    });


    gulp.watch('./app/js/adidas/common.js',['scriptsCommon']);
    gulp.watch('./app/js/modalPopup.js',['scripts']);

});


gulp.task('default',['server','watch','scripts','scriptsCommon']);
