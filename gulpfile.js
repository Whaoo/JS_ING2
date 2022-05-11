import {spawn} from 'node:child_process';
import gulp from 'gulp';
const {watch, series} = gulp;
let myProcess = null;
const watcher = async () => {
    watch(['./**/*.js'], series(stop, start));
};
gulp.task('js', function() {
    return gulp.src([
        source + '/js/libs/jquery.js',
        source + '/js/libs/touche.js',
        source + '/js/app.js'
    ])
        .pipe(concat())
        .pipe(uglify())
        .pipe(gulp.dest(dest + '/js/dist.js'));
});
const start = async () => {
    myProcess = spawn('node', ['PCA.js'], {stdio: 'inherit'});
};
const stop = async () => {
    if (myProcess) {
        await myProcess.kill();
        myProcess = null;
    }
};
const defaultRun = series(start, watcher);
export default defaultRun;
export {watcher, defaultRun};
