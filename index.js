/**
 * Created by xuqing on 16/2/23.
 */
var gutil        = require('gulp-util');
var PluginError  = gutil.PluginError;
var through      = require('through2');
var path         = require('path');

const PLUGIN_NAME = 'gulp-select';

//function selectStream(file){
//    var stream = through();
//    stream.write(file);
//
//    return stream;
//}

function select(opts){
    return through.obj(function(file, enc, callback){
        if(file.isNull()){
            this.push(file);
            return callback();
        }

        if(file.isStream()){
            this.emit('error', new PluginError('PLUGIN_NAME', 'stream not supported'));
            return callback();
        }
        //  将满足条件的全部替换!
        var content = file.contents.toString('utf-8');

        content = content.replace(opts.reg, opts.repstring);
        //this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'uglify inline scripts error: ' ));
        file.contents = new Buffer(content);
        this.push(file);
        callback();
    })
}

module.exports = select;