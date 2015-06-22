var io = require('socket.io');
var events = require('events');
var SocketServer = (function () {
    function SocketServer(httpServer) {
        var _this = this;
        this.eventEmitter = new events.EventEmitter();
        this.io = io(httpServer);
        this.io.on('connection', function (socket) {
            _this.eventEmitter.emit('connection', socket);
            socket.on('addPlayer', function (dataPlayer) {
                _this.eventEmitter.emit('addPlayer', socket, dataPlayer);
            });
            socket.on('disconnect', function () {
                _this.eventEmitter.emit('disconnect', socket);
            });
        });
    }
    SocketServer.prototype.connection = function (callback) {
        this.eventEmitter.on('connection', function (socket) {
            callback(socket);
        });
    };
    SocketServer.prototype.disconnect = function (callback) {
        this.eventEmitter.on('disconnect', function (socket) {
            callback(socket);
        });
    };
    SocketServer.prototype.addPlayer = function (callback) {
        this.eventEmitter.on('addPlayer', function (socket, dataPlayer) {
            callback(socket, dataPlayer);
        });
    };
    return SocketServer;
})();
module.exports = SocketServer;
