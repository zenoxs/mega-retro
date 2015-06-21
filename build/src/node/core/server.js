var http = require('http');
var async = require('async');
var os = require('os');
var events = require('events');
var mdns = require('mdns');
var SocketServer = require('./socketServer');
var Server = (function () {
    function Server(callback) {
        var _this = this;
        this.port = 1337;
        async.waterfall([
            function (callback) {
                _this.eventEmitter = new events.EventEmitter();
                callback();
            },
            function (callback) {
                _this._getIp(function (err, ip) {
                    _this.address = ip;
                    callback(err);
                });
            },
            function (callback) {
                _this._createHttpServer(function (err, httpServer) {
                    _this.httpServer = httpServer;
                    callback(err);
                });
            },
            function (callback) {
                _this._createSocketServer(function (err, socketServer) {
                    _this.socketServer = socketServer;
                    callback(err);
                });
            },
            function (callback) {
                _this.ad = mdns.createAdvertisement(mdns.tcp('mega-retro'), _this.port, { txtRecord: {
                    name: 'test'
                } });
                _this.ad.start();
                callback();
            }
        ], function (err, result) {
            if (err)
                console.log(err);
            console.log('Server running at http://' + _this.address + ':' + _this.port);
            callback();
        });
    }
    Server.prototype.listenServer = function (callback) {
        console.log('listen player');
        this.eventEmitter.on('connectPlayer', function (socket) {
            console.log(socket);
            callback();
        });
    };
    Server.prototype._createSocketServer = function (callback) {
        var socketServer = new SocketServer(this.httpServer);
        callback(null, socketServer);
    };
    Server.prototype._createHttpServer = function (callback) {
        var httpServer = http.createServer(function (request, response) {
            response.writeHead(200, "OK", {
                "access-control-allow-origin": "*",
                "content-type": "application/json",
            });
            return response.end();
        }).listen(this.port, this.address, this.port, function () {
            callback(null, httpServer);
        });
    };
    Server.prototype._getIp = function (callback) {
        var network = os.networkInterfaces();
        var ipv4;
        var err;
        if (network.hasOwnProperty('en0')) {
            ipv4 = network.en0[1].address;
        }
        else if (network.hasOwnProperty('en1')) {
            ipv4 = network.en1[1].address;
        }
        else {
            err = "No network card found, unable to create the server";
        }
        callback(err, ipv4);
    };
    return Server;
})();
module.exports = Server;
