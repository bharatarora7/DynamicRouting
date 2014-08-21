module.exports = zoneserver;

function zoneserver (){
if (!(this instanceof zoneserver)) return new zoneserver;
    global.handle = {};
    
return this;
}

zoneserver.prototype = 
{
  addRoute: function(route, fn){
//check whether route is a string or not
//fn is the function attached with the handler

	if (typeof(route) !== "string")
// add more validations if required like route formats, etc...
		throw new Error("route is not a string");
  global.handle[route] = fn;
  //return this.handle;
}
}

//function to validate the verbs and routes 
zoneserver.prototype.validate = function()
{  

}
zoneserver.prototype.start = function()
{  

 var app = require("./app");

// // Router is function route(handle, pathname, response, postData) 
// //handle[pathname](response, postData);
 var router = require("./router");

app.start(router.route, global.handle);


}

