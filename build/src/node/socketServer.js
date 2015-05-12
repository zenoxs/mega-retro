/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/socket.io/socket.io.d.ts"/>
/// <reference path="../../typings/async/async.d.ts"/>
var io = require('socket.io');
var socketServer = (function () {
    function socketServer(httpServer) {
        this.io = io(httpServer);
        this.io.on('connection', function (socket) {
            socket.emit('news', { hello: 'world' });
            socket.on('disconnect', function () {
                console.log('user disconnected');
            });
        });
    }
    return socketServer;
})();
module.exports = socketServer;
