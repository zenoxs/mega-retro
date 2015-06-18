(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Browser = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/nwjs/nwjs.d.ts"/>
/// <reference path="../../typings/konva/konva.d.ts"/>
/// <reference path="../../typings/mega-retro/node.d.ts"/>
var ViewManager = require('./viewManager');
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
        this.viewManager = new ViewManager(this.stage);
    }
    return Browser;
})();
module.exports = Browser;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./viewManager":2}],2:[function(require,module,exports){
/// <reference path="../../typings/konva/konva.d.ts"/>
/// <reference path="../../typings/mega-retro/node.d.ts"/>
var RoomView = require('./views/room');
var ViewManager = (function () {
    function ViewManager(stage) {
        this.stage = stage;
    }
    ViewManager.prototype.room = function () {
        return new RoomView(this.stage);
    };
    return ViewManager;
})();
module.exports = ViewManager;

},{"./views/room":3}],3:[function(require,module,exports){
/// <reference path="../../../typings/konva/konva.d.ts"/>
/// <reference path="../../../typings/mega-retro/node.d.ts"/>
var RoomView = (function () {
    function RoomView(stage) {
        this.stage = stage;
        var layer = new Konva.Layer();
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
        layer.add(playersGroup);
        this.stage.add(layer);
    }
    return RoomView;
})();
module.exports = RoomView;

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYnJvd3Nlci9tYWluLnRzIiwic3JjL2Jyb3dzZXIvdmlld01hbmFnZXIudHMiLCJzcmMvYnJvd3Nlci92aWV3cy9yb29tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FDLG9EQUFvRDtBQUNyRCxvREFBb0Q7QUFDcEQsc0RBQXNEO0FBQ3RELDBEQUEwRDtBQUUxRCxJQUFPLFdBQVcsV0FBVyxlQUFlLENBQUMsQ0FBQztBQUU5QztJQU1DLGlCQUFZLEtBQXFCO1FBQXJCLHFCQUFxQixHQUFyQixZQUFxQjtRQUVoQyxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVyRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV0QyxlQUFlO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDNUIsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxHQUFHO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRixjQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQUVELEFBQWlCLGlCQUFSLE9BQU8sQ0FBQzs7Ozs7QUNqQ2pCLHNEQUFzRDtBQUN0RCwwREFBMEQ7QUFFMUQsSUFBTyxRQUFRLFdBQVcsY0FBYyxDQUFDLENBQUM7QUFFMUM7SUFJQyxxQkFBWSxLQUFrQjtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsMEJBQUksR0FBSjtRQUNDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFFRCxBQUFxQixpQkFBWixXQUFXLENBQUM7OztBQ2xCckIseURBQXlEO0FBQ3pELDZEQUE2RDtBQUU3RDtJQUdDLGtCQUFZLEtBQWtCO1FBRTdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTlCLElBQUksWUFBWSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNsQyxDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsWUFBWTtRQUVaLElBQUksU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQztZQUM5QixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1lBQ0osS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztZQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDM0IsSUFBSSxFQUFFLFNBQVM7WUFDZixXQUFXLEVBQUUsQ0FBQztTQUNkLENBQUMsQ0FBQztRQUVILFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQy9CLENBQUMsRUFBRSxFQUFFO1lBQ0wsSUFBSSxFQUFFLFNBQVM7WUFDZixRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLElBQUksRUFBRSxTQUFTO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU3RCxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTdCLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQTFDQSxBQTBDQyxJQUFBO0FBRUQsQUFBa0IsaUJBQVQsUUFBUSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIu+7vy8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL25vZGUvbm9kZS5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3Mvbndqcy9ud2pzLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9rb252YS9rb252YS5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvbWVnYS1yZXRyby9ub2RlLmQudHNcIi8+XG5cbmltcG9ydCBWaWV3TWFuYWdlciA9IHJlcXVpcmUoJy4vdmlld01hbmFnZXInKTtcblxuY2xhc3MgQnJvd3NlciB7XG5cblx0Z3VpOiBOV19HVUk7XG5cdHZpZXdNYW5hZ2VyOiBWaWV3TWFuYWdlcjtcblx0c3RhZ2U6IEtvbnZhLlN0YWdlO1xuXG5cdGNvbnN0cnVjdG9yKGRlYnVnOiBib29sZWFuID0gdHJ1ZSkge1xuXHRcdFxuXHRcdC8vIGRpc3BsYXkgY29uc29sZVxuXHRcdHRoaXMuZ3VpID0gZ2xvYmFsLndpbmRvdy5ud0Rpc3BhdGNoZXIucmVxdWlyZU53R3VpKCk7XG5cdFx0XG5cdFx0aWYgKGRlYnVnKVxuXHRcdFx0dGhpcy5ndWkuV2luZG93LmdldCgpLnNob3dEZXZUb29scygpO1xuXG5cdFx0Ly8gY3JlYXRlIHN0YWdlXG5cdFx0dGhpcy5zdGFnZSA9IG5ldyBLb252YS5TdGFnZSh7XG5cdFx0XHRjb250YWluZXI6ICdwcm9jZXNzLWNhbnZhcycsXG5cdFx0XHR3aWR0aDogMTI4MCxcblx0XHRcdGhlaWdodDogNzIwXG5cdFx0fSk7XG5cdFx0XG5cdFx0Ly8gaW5zdGFuY2UgbmV3IFZpZXdNYW5hZ2VyXG5cdFx0dGhpcy52aWV3TWFuYWdlciA9IG5ldyBWaWV3TWFuYWdlcih0aGlzLnN0YWdlKTtcblx0fVxufVxuXG5leHBvcnQgPSBCcm93c2VyOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2tvbnZhL2tvbnZhLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9tZWdhLXJldHJvL25vZGUuZC50c1wiLz5cblxuaW1wb3J0IFJvb21WaWV3ID0gcmVxdWlyZSgnLi92aWV3cy9yb29tJyk7XG5cbmNsYXNzIFZpZXdNYW5hZ2VyIHtcblxuXHRzdGFnZTogS29udmEuU3RhZ2U7XG5cblx0Y29uc3RydWN0b3Ioc3RhZ2U6IEtvbnZhLlN0YWdlKSB7XG5cdFx0dGhpcy5zdGFnZSA9IHN0YWdlO1xuXHR9XG5cblx0cm9vbSgpIHtcblx0XHRyZXR1cm4gbmV3IFJvb21WaWV3KHRoaXMuc3RhZ2UpO1xuXHR9XG59XG5cbmV4cG9ydCA9IFZpZXdNYW5hZ2VyOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2tvbnZhL2tvbnZhLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9tZWdhLXJldHJvL25vZGUuZC50c1wiLz5cblxuY2xhc3MgUm9vbVZpZXcge1xuXHRzdGFnZTogS29udmEuU3RhZ2U7XG5cblx0Y29uc3RydWN0b3Ioc3RhZ2U6IEtvbnZhLlN0YWdlKSB7XG5cdFx0XG5cdFx0dGhpcy5zdGFnZSA9IHN0YWdlO1xuXHRcdFxuXHRcdHZhciBsYXllciA9IG5ldyBLb252YS5MYXllcigpO1xuXG5cdFx0dmFyIHBsYXllcnNHcm91cCA9IG5ldyBLb252YS5Hcm91cCh7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9KTtcblx0XHRcblx0XHQvLyBDb250YWluZXJcblx0XHRcblx0XHR2YXIgY29udGFpbmVyID0gbmV3IEtvbnZhLlJlY3Qoe1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0XHR3aWR0aDogdGhpcy5zdGFnZS53aWR0aCgpIC8gNSxcblx0XHRcdGhlaWdodDogdGhpcy5zdGFnZS5oZWlnaHQoKSxcblx0XHRcdGZpbGw6ICcjZjJmMmYyJyxcblx0XHRcdHN0cm9rZVdpZHRoOiAwXG5cdFx0fSk7XG5cblx0XHRwbGF5ZXJzR3JvdXAuYWRkKGNvbnRhaW5lcik7XG5cblx0XHR2YXIgc2ltcGxlVGV4dCA9IG5ldyBLb252YS5UZXh0KHtcblx0XHRcdHk6IDE1LFxuXHRcdFx0dGV4dDogJ1BsYXllcnMnLFxuXHRcdFx0Zm9udFNpemU6IDMwLFxuXHRcdFx0Zm9udEZhbWlseTogJ0NhbGlicmknLFxuXHRcdFx0ZmlsbDogJyMzMzMzMzMnXG5cdFx0fSk7XG5cblx0XHRzaW1wbGVUZXh0LngoY29udGFpbmVyLndpZHRoKCkgLyAyIC0gc2ltcGxlVGV4dC53aWR0aCgpIC8gMik7XG5cblx0XHRwbGF5ZXJzR3JvdXAuYWRkKHNpbXBsZVRleHQpO1xuXG5cdFx0bGF5ZXIuYWRkKHBsYXllcnNHcm91cCk7XG5cdFx0dGhpcy5zdGFnZS5hZGQobGF5ZXIpO1xuXHR9XG59XG5cbmV4cG9ydCA9IFJvb21WaWV3OyJdfQ==
