varhttp = require('http');

http.createServer(function (req, res) {
    console.log("server started")
    console.log(req.url);
    if (req.url === "/home") {
        res.writeHead(200);
        res.end(`<html><body><h1>Home Page</h1></body></html>`);
    } elseif (req.url === "/employee") {
        res.writeHead(200);
        res.end(`<html><body><h1>Employee Details Page</h1></body></html>`);
    } elseif (req.url === "/department"){
        res.writeHead(200);
        res.end(`<html><body><h1>Department Details Page</h1></body></html>`);
    } else {
        res.writeHead(200);
        res.end(`<html><body><h1>Redirect page</h1></body></html>`);
    }
}).listen(5000);
