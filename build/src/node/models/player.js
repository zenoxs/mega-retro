var Player;
(function (_Player) {
    var Player = (function () {
        function Player(id, username) {
            this.id = id;
            this.username = username;
        }
        return Player;
    })();
    _Player.Player = Player;
})(Player || (Player = {}));
module.exports = Player;
