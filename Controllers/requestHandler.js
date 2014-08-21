//RequestHandler
var querystring = require("querystring");

// Start handler
function start(request,response, postData) {
console.log("Request handler 'start' was called.");
var body = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
'</head>'+
'<body>'+
'<form action="/getProfile" method="post">'+
'<textarea name="text" rows="20" cols="60"></textarea>'+
'<input type="submit" value="Submit text" />'+
'</form>'+
'</body>'+
'</html>';
response.writeHead(200, {"Content-Type": "text/html"});
response.write(body);
response.end();
}


// Upload Handler
function upload(request,response, postData) {
console.log("Request handler 'upload' was called.");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("You've sent the text: "+
querystring.parse(postData).text);
response.end();
}

//GetProfile Handler
function getProfile(request,response, postData) {
   
//get the querystring
//response.write("Requested method is " );
//response.write(request.method);
var str = request.url.split('?')[1];
var qObj = querystring.parse(str);
console.log('querystring sent is : ' + str);
console.log('querystring Object is : ' + qObj.name);
console.log("Request handler 'getProfile' was called.");

response.writeHead(200, {"Content-Type": "text/plain"});

response.write("Verb passed is"+  request.method);
console.log ("Post Data is " + postData);
    
//if strning is undefined means no query string
if (str == undefined )
    response.write("No Query String Found");
else if(postData.length < 1)
	response.write('you have sent the querystring = ' + str );
else if (postData.length > 0 )
response.write("You've sent the text: "+ querystring.parse(postData).text);

response.end();
}

exports.start = start;
exports.getProfile = getProfile;
exports.upload = upload;