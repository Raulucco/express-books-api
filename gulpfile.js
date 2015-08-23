var gulp = require('gulp');
var nodemon = require('nodemon');
var gMocha = require('gulp-mocha');

gulp.task('nodemon', function() {
  var start = Date.now();
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      PORT: 8090
    },
    ignore: ['./node_modules/**']
  }).on('restart', function() {
    console.log('Restarted', Date.now() - start);
  });
});

gulp.task('test', function () {
  gulp.src(['./**/*.spec.js', '!node_modules/**'], {read: false}).pipe(gMocha({reporter: 'nyan'}));
});

gulp.task('default', ['nodemon']);
