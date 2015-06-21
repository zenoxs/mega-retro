var Server = require('./server');
var RoomController = require('../controllers/roomController');
var App = (function () {
    function App(client) {
        var _this = this;
        console.log('Launch app');
        this.server = new Server(function () {
            _this.controller = new RoomController(_this.server, client);
            _this.controller.index();
        });
    }
    return App;
})();
exports.App = App;
