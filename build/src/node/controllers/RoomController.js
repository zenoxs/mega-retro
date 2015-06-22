var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Controller = require('../core/controller');
var RoomController = (function (_super) {
    __extends(RoomController, _super);
    function RoomController(server, client, room) {
        _super.call(this, server, client);
        this.room = room;
    }
    RoomController.prototype.index = function () {
        this.client.view.room(this);
    };
    return RoomController;
})(Controller);
module.exports = RoomController;
