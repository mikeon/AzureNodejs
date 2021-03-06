var http = require('http');
var os = require('os');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    // response.end("Hello World from App Service");
    response.end('Hello 2 from ' + process.env.Lesson + ' server: ' + os.hostname() + " with OS: " + os.platform());
});

var port = process.env.PORT || 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
