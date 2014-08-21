

// Helper method for cleaning the array for empty elements
Array.prototype.clean = function (cleanValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === cleanValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

var fs = require('fs'),
    path = require('path');

// Read all the files from the  Controllers folder

//var requesthandler = require("./Controllers/requestHandler");


var apiZoneServer = require('./zoneserver');
var zoneServer = new apiZoneServer();
var res = [];

// Keeping all the route files inside the Controllers directory
var controllerPath = __dirname + "\\Controllers";



// Reading routes from configuration file

LoadModules(controllerPath);    

function LoadModules(pathFile) {
    fs.lstat(pathFile, function (err, stat) {
        if (stat.isDirectory()) {
            // we have a directory: do a tree walk
            fs.readdir(pathFile, function (err, files) {
                var f, l = files.length;
                for (var i = 0; i < l; i++) {
                    f = path.join(pathFile, files[i]);
                    LoadModules(f);
                }
            });
        } else {
            // we have a file: load it
            var pathRoute = "";
            var requireFile = require(pathFile);
            
            for (var m in requireFile) {
                pathRoute = String(m);
                if (typeof requireFile[m] === 'function') {
                    zoneServer.addRoute("/" + pathRoute  , requireFile[m]);
                }
                // res.push(m);
            }
            //var apiRouteHandler = require('./routehandler');
           // routeHandler = new apiRouteHandler();
            zoneServer.start();
    
        }
    });
}


//var filepath = __dirname + "\\Routes\\routes.txt";
////fs.readdir(folder, function (err, files) { // '/' denotes the root folder
////  if (err) throw err;
//fs.readFile(filepath, function (err, data) {
//    if (err) throw err;   
//    var array = data.toString().split("\n");
//    array.clean("");
//    for (i in array) {
//        if (array[i].length > 1) {
//            var routeArgs = array[i].split(",");
//            // get the handler name 
//            var handlerName = routeArgs[2];
//            //if (handlerName === "function") { 
//            //zoneServer.addRoute("/getProfile" , eval(handlerName));
//            //var fn = window[handlerName]; 
            
//           zoneServer.addRoute("/getProfile" , requesthandler.getProfile);
//            global.handle;
//            //var x = eval(handlerName);
            
//           // zoneServer.addRoute("/getProfile" , x);
//        //}
//        //if (handlerName in global && typeof handlerName === "function") {
//        //    global[handlerName]();

//        //}
//        }
//    }


 



//zoneServer.addRoute("/getProfile" , handler1);
//zoneServer.addRoute("/start",handler2);

//zoneServer.start();