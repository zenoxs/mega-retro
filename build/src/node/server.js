/// <reference path="../../typings/node/node.d.ts"/>
var http = require('http');
var os = require('os');
var Server = (function () {
    function Server() {
        this.port = 1337;
        this.address = this.getIp();
        this.httpServer = this.createHttpServer();
        console.log('Server running at http://' + this.address + ':' + this.port);
    }
    Server.prototype.createHttpServer = function () {
        return http.createServer(function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello World\n');
        }).listen(this.port, this.address);
    };
    Server.prototype.getIp = function () {
        var network = os.networkInterfaces();
        var ipv4 = network.en1[1].address;
        return ipv4;
    };
    return Server;
})();
module.exports = Server;
