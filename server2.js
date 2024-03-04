// var http = require('http');
// var uc = require('upper-case');
import http from 'http';
// import  * as uc from 'upper-case';
import { upperCase } from 'upper-case';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(upperCase("Hello World!"));
    res.end();
}).listen(8080);