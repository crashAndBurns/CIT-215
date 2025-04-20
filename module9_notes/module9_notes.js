// 5 line web server
// Import http library/Module
// You can create your own modules too
// USe exports to make it available
var http = require('http');
var url = require('url');
var fs = require('fs');

// Instatntiate the http server object
// pass it the response function
var server = http.createServer(responseFunction);

// Listen for someone connecting to the port
// call the http server listen() method using a port number
// default port number is 80. Https is port 443.
server.listen(8080); // must be greater than 1024 unless you're root admin.
console.log("Listening on port 8080");

// Http response code 200 means success
// http response codes 400 are errors
// response function always sends back the same thing
// for any resquest.
// res.write sends raw text.
function responseFunction(request, response) {
    // for the project
    // parse the url
    // get the query
    // if the query is  /
    //  write "<ul> to the browser"
    //  loop through json data
    //  crete a hyperlink of the form:
    //  /0, /1, /2. /3
    //  <li><a href="/0">Item 0</a></li>
    //  at end of the loop write </ul>
    
    
    
    // var url = request.url;
    var filedata = fs.readFileSync('test.html');
    var urldata = url.parse(request.url, true);
    console.log(urldata.query);

    response.writeHead(200, {'Content-Type': 'text/html'});
    // Will not interpret this as html unless you tell it to
    // response.write("<h1>This is being written first</h1>");
    // response.write("<h4>" + urldata + "<h4>");
    // response.end('<h1>Hello CIT215!<h1>');

    response.end(filedata);
}

