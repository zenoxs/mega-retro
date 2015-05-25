var Server = require('./server');
var Room = require('./room');
var App = (function () {
    function App(client) {
        var _this = this;
        console.log('Launch app');
        this.server = new Server(function () {
            _this.room = new Room(_this.server);
        });
    }
    return App;
})();
exports.App = App;
