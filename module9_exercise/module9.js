// Import http, url and fs modules
var http = require('http');
var url = require('url');
var fs = require('fs');


// Write a function that generates a small table 
// for a single one of your JSON objects 
function objectTable(obj){
	// generate an HTML table string 
	var tableString = "<table>"
	tableString += "<tr>"
	for (var key in obj) {
		tableString += "<th>" + key + "</th>";
	}
	tableString += "</tr>"

	tableString += "<tr>";
	for (var key in obj) {
		tableString += "<td>" + obj[key] + "</td>";
	}
	tableString += "</tr>";
	tableString += "<table>"


	// return it
	return tableString
}

// Write a function that generates a small unordered list
// of hyperlinks to each of your objects
function objectLinks(data){
	var length = data.length;
	
	var list = "<ul>";
	// loop through the object and create an <li> string
	// inside the <li> should be a hyperlink that points to:
	// http://localhost:8080/0, http://localhost:8080/1, etc. 
	// The number should correspond to the array index of the object
	for (var i = 0; i < length; i++) {
		list += "<li>";
		list += "<a href='http://localhost:8080/" + i + "'>" + "Item " + i + "</a>";
		list += "</li>";
	}
	list += "</ul>";
	return(list);
}

// Open the JSON file with the fs module
function readData(){
	// read the file. Then parse the JSON 
	//   and return the resulting object. This function does not have
	//	 to respond to http requests, this is only for reading the file
	var rawData = fs.readFileSync('data.json');
	var jsonData = JSON.parse(rawData);
	return jsonData;
}

// If the readData() function is correct, 
// this  should work
const data = readData();
// console.log(data); // <- just for testing
// console.log(data.length); // For testing


// The function that will be passed to the HTTP server
//	as a callback
function responseMethod(req, res){
	// get the URL from the request and parse it
	var urldata = url.parse(req.url, true);

	// if the 'pathname' is '/' display 
	//		call the objectList method and send it as a response
	if (urldata.pathname === '/') {
		res.write("<html>" + objectLinks(readData()) + "</html");
	} else {
		var path = urldata.pathname;
		const array =  readData();
		// console.log(path);
		path = path.slice(1);
		path = parseInt(path);
		// console.log(path);
		// console.log(array[path]);
		res.write("<html>" + objectTable(array[path]) + "</html>");
	}
	// otherwise (the request is for /0, /1, /2, etc
	//		use Javascript string slicing to get the just the number
	//		https://www.w3schools.com/jsref/jsref_slice_string.asp
	//		don't forget to convert the string to a number
	//		get that object from the data
	//		call the objectTable method and send it as a response
}

// create the http server, pass it 'responseMethod' as the callback
// listen on port 8080

var server = http.createServer(responseMethod);
server.listen(8080);
console.log("Listening on port 8080");
