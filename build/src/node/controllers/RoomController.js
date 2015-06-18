var SocketServer = require('../core/socketServer');
var RoomController = (function () {
    function RoomController(server, client) {
        this._server = server;
        this.socketServer = new SocketServer(this._server.httpServer);
        client.view.room(this);
    }
    return RoomController;
})();
module.exports = RoomController;
