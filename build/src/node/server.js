/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/socket.io/socket.io.d.ts"/>
/// <reference path="../../typings/async/async.d.ts"/>
var http = require('http');
var async = require('async');
var os = require('os');
var Server = (function () {
    function Server() {
        var _this = this;
        this.port = 1337;
        // waterfall for init componements server
        async.waterfall([
            function (callback) {
                // retrieve adress
                _this.getIp(function (err, ip) {
                    _this.address = ip;
                    callback(err);
                });
            },
            function (callback) {
                // create http server
                _this.createHttpServer(function (err, httpServer) {
                    _this.httpServer = httpServer;
                    callback(err);
                });
            }
        ], function (err, result) {
            if (err)
                console.log(err);
            console.log('Server running at http://' + _this.address + ':' + _this.port);
        });
    }
    Server.prototype.createHttpServer = function (callback) {
        var httpServer = http.createServer(function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello World\n');
        }).listen(this.port, this.address, 511, function () {
            callback(null, httpServer);
        });
    };
    Server.prototype.createSocketServer = function () {
        //var test = io(this.createHttpServer);
    };
    Server.prototype.getIp = function (callback) {
        var network = os.networkInterfaces();
        var ipv4 = network.en1[1].address;
        callback(null, ipv4);
    };
    return Server;
})();
module.exports = Server;
