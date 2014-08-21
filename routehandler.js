module.exports = routehandler;

function routehandler() {
    if (!(this instanceof routehandler)) return new routehandler;
    this.routes = {};
    return this;
}



//loading the routes from the configuration file placed inside the Routes folder->routes.txt
routehandler.prototype = {
    load: function () {
        var fs = require('fs'),
            path = require('path');
        var filepath = __dirname + "\\Routes\\routes.txt";
        //fs.readdir(folder, function (err, files) { // '/' denotes the root folder
        //  if (err) throw err;
        fs.readFile(filepath, function (err, data) {
            if (err) throw err;
            
            var array = data.toString().split("\n");
            array.clean("");
            
            return array;
    //for(i in array) {
    //    console.log(array[i]);
    //}
        });   
    }
}

