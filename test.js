/**
 * Created by HP_PC on 2014/7/25.
 */
var fs=require('fs');
var colors = require('colors');
var stream=fs.createReadStream('te.txt');

var files=fs.readdirSync(process.cwd());
files.forEach(function(file){
    var i=0;
    if(/\.txt/.test(file)){
        fs.watchFile(process.cwd() + '/'+ file,function(){
            var mes='   '+(++i)+'  '+file + ' changed! ';
            console.log(mes.rainbow);
        });
    }
});
