var gulp = require('gulp');
var nodemon = require('nodemon');

gulp.task('nodemon', function () {
    var start = Date.now();
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8090
        },
        ignore: ['./node_modules/**']
    }).on('restart', function () {
        console.log('Restarted', Date.now() - start);
    });
});

gulp.task('default', ['nodemon']);
