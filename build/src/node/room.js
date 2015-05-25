var Room = (function () {
    function Room(server) {
        this._server = server;
        this._server.listenServer(function () {
            console.log('connnnneeeeect');
        });
    }
    return Room;
})();
module.exports = Room;
