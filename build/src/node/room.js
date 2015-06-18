var SocketServer = require('./socketServer');
var Room = (function () {
    function Room(server, client) {
        this._server = server;
        this.socketServer = new SocketServer(this._server.httpServer);
        client.viewManager.room();
    }
    return Room;
})();
module.exports = Room;
