var Player = require('../models/player');
var Room = (function () {
    function Room(server) {
        this.players = [];
        this.server = server;
        this.server.socketServer.addPlayer(function (socket, dataPlayer) {
            console.log('new player : ' + dataPlayer.username);
        });
        this.server.socketServer.disconnect(function (socket) {
            console.log('disconnect player : ' + socket.id);
        });
    }
    Room.prototype._addPlayer = function (socket, dataPlayer) {
        var player = new Player.Player(socket.id, dataPlayer.username);
        this.players.push(player);
    };
    Room.prototype._removePlayer = function (socket) {
        this.players = this.players.filter(function (player) {
            if (player.id === socket.id)
                return false;
            else
                return true;
        });
    };
    return Room;
})();
module.exports = Room;
