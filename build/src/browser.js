(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Browser = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/nwjs/nwjs.d.ts"/>
/// <reference path="../../typings/konva/konva.d.ts"/>
/// <reference path="../../typings/mega-retro/node.d.ts"/>
var View = require('./view');
var Browser = (function () {
    function Browser(debug) {
        if (debug === void 0) { debug = true; }
        console.log('Browser launch');
        this.gui = global.window.nwDispatcher.requireNwGui();
        this.win = this.gui.Window.get();
        // display console
        if (debug)
            this.gui.Window.get().showDevTools();
        this.win.width = 300;
        this.win.height = 300;
        // create stage
        this.stage = new Konva.Stage({
            container: 'process-canvas',
            width: 1920,
            height: 1080
        });
        // instance new ViewManager
        this.view = new View(this.stage);
    }
    return Browser;
})();
module.exports = Browser;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./view":2}],2:[function(require,module,exports){
/// <reference path="../../typings/konva/konva.d.ts"/>
/// <reference path="../../typings/mega-retro/node.d.ts"/>
var RoomView = require('./views/room');
var Views = (function () {
    function Views(stage) {
        this.stage = stage;
    }
    Views.prototype.room = function (room) {
        return new RoomView(this.stage, room);
    };
    return Views;
})();
module.exports = Views;

},{"./views/room":3}],3:[function(require,module,exports){
/// <reference path="../../../typings/konva/konva.d.ts"/>
/// <reference path="../../../typings/mega-retro/node.d.ts"/>
var RoomView = (function () {
    function RoomView(stage, room) {
        this.room = room;
        this.stage = stage;
        var layer = new Konva.Layer();
        // add display table players
        layer.add(this._tablePlayers());
        // add display game list
        layer.add(this._gamesList());
        this.stage.add(layer);
    }
    RoomView.prototype._tablePlayers = function () {
        var playersGroup = new Konva.Group({
            x: 0,
            y: 0,
        });
        // Container
        var container = new Konva.Rect({
            x: 0,
            y: 0,
            width: this.stage.width() / 5,
            height: this.stage.height(),
            fill: '#f2f2f2',
            strokeWidth: 0
        });
        playersGroup.add(container);
        var simpleText = new Konva.Text({
            y: 15,
            text: 'Players',
            fontSize: 30,
            fontFamily: 'Calibri',
            fill: '#333333'
        });
        simpleText.x(container.width() / 2 - simpleText.width() / 2);
        playersGroup.add(simpleText);
        return playersGroup;
    };
    RoomView.prototype._gamesList = function () {
        var gamesGroup = new Konva.Group({
            x: this.stage.width(),
            y: 0,
        });
        var games = [
            {
                name: 'Pong'
            }
        ];
        return gamesGroup;
    };
    return RoomView;
})();
module.exports = RoomView;

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYnJvd3Nlci9tYWluLnRzIiwic3JjL2Jyb3dzZXIvdmlldy50cyIsInNyYy9icm93c2VyL3ZpZXdzL3Jvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUMsb0RBQW9EO0FBQ3JELG9EQUFvRDtBQUNwRCxzREFBc0Q7QUFDdEQsMERBQTBEO0FBRTFELElBQU8sSUFBSSxXQUFXLFFBQVEsQ0FBQyxDQUFDO0FBRWhDO0lBT0MsaUJBQVksS0FBcUI7UUFBckIscUJBQXFCLEdBQXJCLFlBQXFCO1FBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUc5QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFakMsa0JBQWtCO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNULElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFFdEIsZUFBZTtRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzVCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsS0FBSyxFQUFFLElBQUk7WUFDWCxNQUFNLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztRQUVILDJCQUEyQjtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxD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SUFBQTtBQUVELEFBQWtCLGlCQUFULFFBQVEsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCLvu78vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9ub2RlL25vZGUuZC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL253anMvbndqcy5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3Mva29udmEva29udmEuZC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL21lZ2EtcmV0cm8vbm9kZS5kLnRzXCIvPlxuXG5pbXBvcnQgVmlldyA9IHJlcXVpcmUoJy4vdmlldycpO1xuXG5jbGFzcyBCcm93c2VyIHtcblxuXHRndWk6IE5XX0dVSTtcblx0d2luIDogSVdpbmRvdztcblx0dmlldzogVmlldztcblx0c3RhZ2U6IEtvbnZhLlN0YWdlO1xuXG5cdGNvbnN0cnVjdG9yKGRlYnVnOiBib29sZWFuID0gdHJ1ZSkge1xuXHRcdFxuXHRcdGNvbnNvbGUubG9nKCdCcm93c2VyIGxhdW5jaCcpO1xuXHRcdFxuXHRcdFxuXHRcdHRoaXMuZ3VpID0gZ2xvYmFsLndpbmRvdy5ud0Rpc3BhdGNoZXIucmVxdWlyZU53R3VpKCk7XG5cdFx0dGhpcy53aW4gPSB0aGlzLmd1aS5XaW5kb3cuZ2V0KCk7XG5cdFx0XG5cdFx0Ly8gZGlzcGxheSBjb25zb2xlXG5cdFx0aWYgKGRlYnVnKVxuXHRcdFx0dGhpcy5ndWkuV2luZG93LmdldCgpLnNob3dEZXZUb29scygpO1xuXHRcdFx0XG5cdFx0dGhpcy53aW4ud2lkdGggPSAzMDA7XG5cdFx0dGhpcy53aW4uaGVpZ2h0ID0gMzAwO1xuXG5cdFx0Ly8gY3JlYXRlIHN0YWdlXG5cdFx0dGhpcy5zdGFnZSA9IG5ldyBLb252YS5TdGFnZSh7XG5cdFx0XHRjb250YWluZXI6ICdwcm9jZXNzLWNhbnZhcycsXG5cdFx0XHR3aWR0aDogMTkyMCxcblx0XHRcdGhlaWdodDogMTA4MFxuXHRcdH0pO1xuXHRcdFxuXHRcdC8vIGluc3RhbmNlIG5ldyBWaWV3TWFuYWdlclxuXHRcdHRoaXMudmlldyA9IG5ldyBWaWV3KHRoaXMuc3RhZ2UpO1xuXHR9XG59XG5cbmV4cG9ydCA9IEJyb3dzZXI7IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3Mva29udmEva29udmEuZC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL21lZ2EtcmV0cm8vbm9kZS5kLnRzXCIvPlxuXG5pbXBvcnQgUm9vbVZpZXcgPSByZXF1aXJlKCcuL3ZpZXdzL3Jvb20nKTtcblxuY2xhc3MgVmlld3Mge1xuXG5cdHN0YWdlOiBLb252YS5TdGFnZTtcblxuXHRjb25zdHJ1Y3RvcihzdGFnZTogS29udmEuU3RhZ2UpIHtcblx0XHR0aGlzLnN0YWdlID0gc3RhZ2U7XG5cdH1cblxuXHRyb29tKHJvb206IFJvb21Db250cm9sbGVyKSB7XG5cdFx0cmV0dXJuIG5ldyBSb29tVmlldyh0aGlzLnN0YWdlLCByb29tKTtcblx0fVxufVxuXG5leHBvcnQgPSBWaWV3czsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9rb252YS9rb252YS5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvbWVnYS1yZXRyby9ub2RlLmQudHNcIi8+XG5cbmNsYXNzIFJvb21WaWV3IHtcblx0c3RhZ2U6IEtvbnZhLlN0YWdlO1xuXHRyb29tOiBSb29tQ29udHJvbGxlcjtcblxuXHRjb25zdHJ1Y3RvcihzdGFnZTogS29udmEuU3RhZ2UsIHJvb20gOiBSb29tQ29udHJvbGxlcikge1xuXHRcdFxuXHRcdHRoaXMucm9vbSA9IHJvb207XG5cdFx0dGhpcy5zdGFnZSA9IHN0YWdlO1xuXG5cdFx0dmFyIGxheWVyID0gbmV3IEtvbnZhLkxheWVyKCk7XG5cdFx0XG5cdFx0Ly8gYWRkIGRpc3BsYXkgdGFibGUgcGxheWVyc1xuXHRcdGxheWVyLmFkZCh0aGlzLl90YWJsZVBsYXllcnMoKSk7XG5cdFx0XG5cdFx0Ly8gYWRkIGRpc3BsYXkgZ2FtZSBsaXN0XG5cdFx0bGF5ZXIuYWRkKHRoaXMuX2dhbWVzTGlzdCgpKTtcblxuXHRcdHRoaXMuc3RhZ2UuYWRkKGxheWVyKTtcblx0fVxuXG5cdHByaXZhdGUgX3RhYmxlUGxheWVycygpOiBLb252YS5Hcm91cCB7XG5cblx0XHR2YXIgcGxheWVyc0dyb3VwID0gbmV3IEtvbnZhLkdyb3VwKHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH0pO1xuXHRcdFxuXHRcdC8vIENvbnRhaW5lclxuXHRcdFxuXHRcdHZhciBjb250YWluZXIgPSBuZXcgS29udmEuUmVjdCh7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHRcdHdpZHRoOiB0aGlzLnN0YWdlLndpZHRoKCkgLyA1LFxuXHRcdFx0aGVpZ2h0OiB0aGlzLnN0YWdlLmhlaWdodCgpLFxuXHRcdFx0ZmlsbDogJyNmMmYyZjInLFxuXHRcdFx0c3Ryb2tlV2lkdGg6IDBcblx0XHR9KTtcblxuXHRcdHBsYXllcnNHcm91cC5hZGQoY29udGFpbmVyKTtcblxuXHRcdHZhciBzaW1wbGVUZXh0ID0gbmV3IEtvbnZhLlRleHQoe1xuXHRcdFx0eTogMTUsXG5cdFx0XHR0ZXh0OiAnUGxheWVycycsXG5cdFx0XHRmb250U2l6ZTogMzAsXG5cdFx0XHRmb250RmFtaWx5OiAnQ2FsaWJyaScsXG5cdFx0XHRmaWxsOiAnIzMzMzMzMydcblx0XHR9KTtcblxuXHRcdHNpbXBsZVRleHQueChjb250YWluZXIud2lkdGgoKSAvIDIgLSBzaW1wbGVUZXh0LndpZHRoKCkgLyAyKTtcblxuXHRcdHBsYXllcnNHcm91cC5hZGQoc2ltcGxlVGV4dCk7XG5cblx0XHRyZXR1cm4gcGxheWVyc0dyb3VwO1xuXHR9XG5cblx0cHJpdmF0ZSBfZ2FtZXNMaXN0KCk6IEtvbnZhLkdyb3VwIHtcblx0XHR2YXIgZ2FtZXNHcm91cCA9IG5ldyBLb252YS5Hcm91cCh7XG5cdFx0XHR4OiB0aGlzLnN0YWdlLndpZHRoKCksXG5cdFx0XHR5OiAwLFxuXHRcdH0pO1xuXHRcdFxuXHRcdFxuXHRcdHZhciBnYW1lcyA9IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZSA6ICdQb25nJ1xuXHRcdFx0fVxuXHRcdF07XG5cdFx0XG5cdFx0XG5cdFx0cmV0dXJuIGdhbWVzR3JvdXA7XG5cdH1cbn1cblxuZXhwb3J0ID0gUm9vbVZpZXc7Il19
