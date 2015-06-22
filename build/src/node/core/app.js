var Server = require('./server');
var Room = require('./room');
var RoomController = require('../controllers/roomController');
var App = (function () {
    function App(client) {
        var _this = this;
        this.client = client;
        this.server = new Server(function () {
            _this.room = new Room(_this.server);
            _this.controller = new RoomController(_this.server, _this.client, _this.room);
            _this.controller.index();
        });
    }
    return App;
})();
exports.App = App;
