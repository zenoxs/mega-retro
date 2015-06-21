var io = require('socket.io');
var SocketServer = (function () {
    function SocketServer(httpServer) {
        this.io = io(httpServer);
        this.io.on('connection', function (socket) {
            console.log('connect player');
            socket.on('disconnect', function (socket) {
                console.log('disconnect player');
            });
        });
    }
    SocketServer.prototype.connection = function (callback) {
    };
    SocketServer.prototype.disconnect = function (callback) {
    };
    return SocketServer;
})();
module.exports = SocketServer;
