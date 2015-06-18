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
        // display console
        this.gui = global.window.nwDispatcher.requireNwGui();
        if (debug)
            this.gui.Window.get().showDevTools();
        // create stage
        this.stage = new Konva.Stage({
            container: 'process-canvas',
            width: 1280,
            height: 720
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYnJvd3Nlci9tYWluLnRzIiwic3JjL2Jyb3dzZXIvdmlldy50cyIsInNyYy9icm93c2VyL3ZpZXdzL3Jvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUMsb0RBQW9EO0FBQ3JELG9EQUFvRDtBQUNwRCxzREFBc0Q7QUFDdEQsMERBQTBEO0FBRTFELElBQU8sSUFBSSxXQUFXLFFBQVEsQ0FBQyxDQUFDO0FBRWhDO0lBTUMsaUJBQVksS0FBcUI7UUFBckIscUJBQXFCLEdBQXJCLFlBQXFCO1FBRWhDLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXJELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNULElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXRDLGVBQWU7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztZQUM1QixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLEtBQUssRUFBRSxJQUFJO1lBQ1gsTUFBTSxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUM7UUFFSCwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNGLGNBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBRUQsQUFBaUIsaUJBQVIsT0FBTyxDQUFDOzs7OztBQ2pDakIsc0RBQXNEO0FBQ3RELDBEQUEwRDtBQUUxRCxJQUFPLFFBQVEsV0FBVyxjQUFjLENBQUMsQ0FBQztBQUUxQztJQUlDLGVBQVksS0FBa0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELG9CQUFJLEdBQUosVUFBSyxJQUFVO1FBQ2QsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNGLFlBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQUVELEFBQWUsaUJBQU4sS0FBSyxDQUFDOzs7QUNsQmYseURBQXlEO0FBQ3pELDZEQUE2RDtBQUU3RDtJQUlDLGtCQUFZLEtBQWtCLEVBQUUsSUFBVztRQUUxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU5Qiw0QkFBNEI7UUFDNUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUVoQyx3QkFBd0I7UUFDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU8sZ0NBQWEsR0FBckI7UUFFQyxJQUFJLFlBQVksR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDbEMsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUVILFlBQVk7UUFFWixJQUFJLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDOUIsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztZQUNKLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQzNCLElBQUksRUFBRSxTQUFTO1lBQ2YsV0FBVyxFQUFFLENBQUM7U0FDZCxDQUFDLENBQUM7UUFFSCxZQUFZLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVCLElBQUksVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQztZQUMvQixDQUFDLEVBQUUsRUFBRTtZQUNMLElBQUksRUFBRSxTQUFTO1lBQ2YsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsU0FBUztZQUNyQixJQUFJLEVBQUUsU0FBUztTQUNmLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFN0QsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU3QixNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3JCLENBQUM7SUFFTyw2QkFBVSxHQUFsQjtRQUNDLElBQUksVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNoQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDckIsQ0FBQyxFQUFFLENBQUM7U0FDSixDQUFDLENBQUM7UUFHSCxJQUFJLEtBQUssR0FBRztZQUNYO2dCQUNDLElBQUksRUFBRyxNQUFNO2FBQ2I7U0FDRCxDQUFDO1FBR0YsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNuQixDQUFDO0lBQ0YsZUFBQztBQUFELENBdkVBLEFBdUVDLElBQUE7QUFFRCxBQUFrQixpQkFBVCxRQUFRLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwi77u/Ly8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3Mvbm9kZS9ub2RlLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9ud2pzL253anMuZC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2tvbnZhL2tvbnZhLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9tZWdhLXJldHJvL25vZGUuZC50c1wiLz5cblxuaW1wb3J0IFZpZXcgPSByZXF1aXJlKCcuL3ZpZXcnKTtcblxuY2xhc3MgQnJvd3NlciB7XG5cblx0Z3VpOiBOV19HVUk7XG5cdHZpZXc6IFZpZXc7XG5cdHN0YWdlOiBLb252YS5TdGFnZTtcblxuXHRjb25zdHJ1Y3RvcihkZWJ1ZzogYm9vbGVhbiA9IHRydWUpIHtcblx0XHRcblx0XHQvLyBkaXNwbGF5IGNvbnNvbGVcblx0XHR0aGlzLmd1aSA9IGdsb2JhbC53aW5kb3cubndEaXNwYXRjaGVyLnJlcXVpcmVOd0d1aSgpO1xuXHRcdFxuXHRcdGlmIChkZWJ1Zylcblx0XHRcdHRoaXMuZ3VpLldpbmRvdy5nZXQoKS5zaG93RGV2VG9vbHMoKTtcblxuXHRcdC8vIGNyZWF0ZSBzdGFnZVxuXHRcdHRoaXMuc3RhZ2UgPSBuZXcgS29udmEuU3RhZ2Uoe1xuXHRcdFx0Y29udGFpbmVyOiAncHJvY2Vzcy1jYW52YXMnLFxuXHRcdFx0d2lkdGg6IDEyODAsXG5cdFx0XHRoZWlnaHQ6IDcyMFxuXHRcdH0pO1xuXHRcdFxuXHRcdC8vIGluc3RhbmNlIG5ldyBWaWV3TWFuYWdlclxuXHRcdHRoaXMudmlldyA9IG5ldyBWaWV3KHRoaXMuc3RhZ2UpO1xuXHR9XG59XG5cbmV4cG9ydCA9IEJyb3dzZXI7IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3Mva29udmEva29udmEuZC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL21lZ2EtcmV0cm8vbm9kZS5kLnRzXCIvPlxuXG5pbXBvcnQgUm9vbVZpZXcgPSByZXF1aXJlKCcuL3ZpZXdzL3Jvb20nKTtcblxuY2xhc3MgVmlld3Mge1xuXG5cdHN0YWdlOiBLb252YS5TdGFnZTtcblxuXHRjb25zdHJ1Y3RvcihzdGFnZTogS29udmEuU3RhZ2UpIHtcblx0XHR0aGlzLnN0YWdlID0gc3RhZ2U7XG5cdH1cblxuXHRyb29tKHJvb206IFJvb20pIHtcblx0XHRyZXR1cm4gbmV3IFJvb21WaWV3KHRoaXMuc3RhZ2UsIHJvb20pO1xuXHR9XG59XG5cbmV4cG9ydCA9IFZpZXdzOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2tvbnZhL2tvbnZhLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9tZWdhLXJldHJvL25vZGUuZC50c1wiLz5cblxuY2xhc3MgUm9vbVZpZXcge1xuXHRzdGFnZTogS29udmEuU3RhZ2U7XG5cdHJvb206IFJvb207XG5cblx0Y29uc3RydWN0b3Ioc3RhZ2U6IEtvbnZhLlN0YWdlLCByb29tIDogUm9vbSkge1xuXHRcdFxuXHRcdHRoaXMucm9vbSA9IHJvb207XG5cdFx0dGhpcy5zdGFnZSA9IHN0YWdlO1xuXG5cdFx0dmFyIGxheWVyID0gbmV3IEtvbnZhLkxheWVyKCk7XG5cdFx0XG5cdFx0Ly8gYWRkIGRpc3BsYXkgdGFibGUgcGxheWVyc1xuXHRcdGxheWVyLmFkZCh0aGlzLl90YWJsZVBsYXllcnMoKSk7XG5cdFx0XG5cdFx0Ly8gYWRkIGRpc3BsYXkgZ2FtZSBsaXN0XG5cdFx0bGF5ZXIuYWRkKHRoaXMuX2dhbWVzTGlzdCgpKTtcblxuXHRcdHRoaXMuc3RhZ2UuYWRkKGxheWVyKTtcblx0fVxuXG5cdHByaXZhdGUgX3RhYmxlUGxheWVycygpOiBLb252YS5Hcm91cCB7XG5cblx0XHR2YXIgcGxheWVyc0dyb3VwID0gbmV3IEtvbnZhLkdyb3VwKHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH0pO1xuXHRcdFxuXHRcdC8vIENvbnRhaW5lclxuXHRcdFxuXHRcdHZhciBjb250YWluZXIgPSBuZXcgS29udmEuUmVjdCh7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHRcdHdpZHRoOiB0aGlzLnN0YWdlLndpZHRoKCkgLyA1LFxuXHRcdFx0aGVpZ2h0OiB0aGlzLnN0YWdlLmhlaWdodCgpLFxuXHRcdFx0ZmlsbDogJyNmMmYyZjInLFxuXHRcdFx0c3Ryb2tlV2lkdGg6IDBcblx0XHR9KTtcblxuXHRcdHBsYXllcnNHcm91cC5hZGQoY29udGFpbmVyKTtcblxuXHRcdHZhciBzaW1wbGVUZXh0ID0gbmV3IEtvbnZhLlRleHQoe1xuXHRcdFx0eTogMTUsXG5cdFx0XHR0ZXh0OiAnUGxheWVycycsXG5cdFx0XHRmb250U2l6ZTogMzAsXG5cdFx0XHRmb250RmFtaWx5OiAnQ2FsaWJyaScsXG5cdFx0XHRmaWxsOiAnIzMzMzMzMydcblx0XHR9KTtcblxuXHRcdHNpbXBsZVRleHQueChjb250YWluZXIud2lkdGgoKSAvIDIgLSBzaW1wbGVUZXh0LndpZHRoKCkgLyAyKTtcblxuXHRcdHBsYXllcnNHcm91cC5hZGQoc2ltcGxlVGV4dCk7XG5cblx0XHRyZXR1cm4gcGxheWVyc0dyb3VwO1xuXHR9XG5cblx0cHJpdmF0ZSBfZ2FtZXNMaXN0KCk6IEtvbnZhLkdyb3VwIHtcblx0XHR2YXIgZ2FtZXNHcm91cCA9IG5ldyBLb252YS5Hcm91cCh7XG5cdFx0XHR4OiB0aGlzLnN0YWdlLndpZHRoKCksXG5cdFx0XHR5OiAwLFxuXHRcdH0pO1xuXHRcdFxuXHRcdFxuXHRcdHZhciBnYW1lcyA9IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZSA6ICdQb25nJ1xuXHRcdFx0fVxuXHRcdF07XG5cdFx0XG5cdFx0XG5cdFx0cmV0dXJuIGdhbWVzR3JvdXA7XG5cdH1cbn1cblxuZXhwb3J0ID0gUm9vbVZpZXc7Il19
