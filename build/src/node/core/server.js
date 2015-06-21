var http = require('http');
var async = require('async');
var os = require('os');
var events = require('events');
var url = require('url');
var mdns = require('mdns');
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
    Server.prototype._createHttpServer = function (callback) {
        var _this = this;
        var httpServer = http.createServer(function (request, response) {
            var url_parts = url.parse(request.url, true);
            var query = url_parts.query;
            var result;
            if (query.hasOwnProperty('action')) {
                var action = query.action;
                switch (action) {
                    case 'scan':
                        result = { data: {
                            address: _this.address,
                            name: os.hostname(),
                            port: _this.port
                        }, err: false };
                        break;
                    default:
                        result = { err: 'unknow action' };
                }
            }
            else {
                result = { err: 'no action found' };
            }
            response.writeHead(200, "OK", {
                "access-control-allow-origin": "*",
                "content-type": "application/json",
            });
            console.log(result);
            return response.end(JSON.stringify(result));
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
            alert('No network card found, unable to create the server.');
            err = "No network card found, unable to create the server";
        }
        callback(err, ipv4);
    };
    return Server;
})();
module.exports = Server;
