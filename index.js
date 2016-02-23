/**
 * Created by xuqing on 16/2/23.
 */
var gutil = require('gulp-util');
var through = require('through2');
var applySourceMap = require('vinyl-sourcemaps-apply');
var autoprefixer = require('autoprefixer');


module.exports = function(options){
    return through.obj(function(file, enc, cb){
        //主体实现
    });
};