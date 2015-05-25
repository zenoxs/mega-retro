(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Browser = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/nwjs/nwjs.d.ts"/>
/// <reference path="../../typings/konva/konva.d.ts"/>
var ViewManager = require('./viewManager');
var Browser = (function () {
    function Browser(debug) {
        if (debug === void 0) { debug = true; }
        this.gui = global.window.nwDispatcher.requireNwGui();
        if (debug)
            this.gui.Window.get().showDevTools();
        this.stage = new Konva.Stage({
            container: 'process-canvas',
            width: 1280,
            height: 720
        });
        this.viewManager = new ViewManager(this.stage);
        this.viewManager.loadRoom();
    }
    return Browser;
})();
module.exports = Browser;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./viewManager":2}],2:[function(require,module,exports){
/// <reference path="../../typings/konva/konva.d.ts"/>
var ViewManager = (function () {
    function ViewManager(stage) {
        this.stage = stage;
    }
    ViewManager.prototype.loadRoom = function () {
        var layer = new Konva.Layer();
        var circle = new Konva.Circle({
            x: this.stage.getWidth() / 2,
            y: this.stage.getHeight() / 2,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
        });
        layer.add(circle);
        this.stage.add(layer);
    };
    return ViewManager;
})();
module.exports = ViewManager;

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYnJvd3Nlci9tYWluLnRzIiwic3JjL2Jyb3dzZXIvdmlld01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUMsb0RBQW9EO0FBQ3JELG9EQUFvRDtBQUNwRCxzREFBc0Q7QUFFdEQsSUFBTyxXQUFXLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFFOUM7SUFNQyxpQkFBWSxLQUFxQjtRQUFyQixxQkFBcUIsR0FBckIsWUFBcUI7UUFFaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV0QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztZQUM1QixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLEtBQUssRUFBRSxJQUFJO1lBQ1gsTUFBTSxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRixjQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQUVELEFBQWlCLGlCQUFSLE9BQU8sQ0FBQzs7Ozs7QUM5QmpCLHNEQUFzRDtBQUV0RDtJQUlDLHFCQUFZLEtBQWtCO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzdCLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7WUFDNUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztZQUM3QixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxLQUFLO1lBQ1gsTUFBTSxFQUFFLE9BQU87WUFDZixXQUFXLEVBQUUsQ0FBQztTQUNkLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQUVELEFBQXFCLGlCQUFaLFdBQVcsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCLvu78vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9ub2RlL25vZGUuZC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL253anMvbndqcy5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3Mva29udmEva29udmEuZC50c1wiLz5cblxuaW1wb3J0IFZpZXdNYW5hZ2VyID0gcmVxdWlyZSgnLi92aWV3TWFuYWdlcicpO1xuXG5jbGFzcyBCcm93c2VyIHtcblxuXHRndWk6IE5XX0dVSTtcblx0dmlld01hbmFnZXI6IFZpZXdNYW5hZ2VyO1xuXHRzdGFnZTogS29udmEuU3RhZ2U7XG5cblx0Y29uc3RydWN0b3IoZGVidWc6IGJvb2xlYW4gPSB0cnVlKSB7XG5cblx0XHR0aGlzLmd1aSA9IGdsb2JhbC53aW5kb3cubndEaXNwYXRjaGVyLnJlcXVpcmVOd0d1aSgpO1xuXHRcdGlmIChkZWJ1Zylcblx0XHRcdHRoaXMuZ3VpLldpbmRvdy5nZXQoKS5zaG93RGV2VG9vbHMoKTtcblxuXHRcdHRoaXMuc3RhZ2UgPSBuZXcgS29udmEuU3RhZ2Uoe1xuXHRcdFx0Y29udGFpbmVyOiAncHJvY2Vzcy1jYW52YXMnLFxuXHRcdFx0d2lkdGg6IDEyODAsXG5cdFx0XHRoZWlnaHQ6IDcyMFxuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWV3TWFuYWdlciA9IG5ldyBWaWV3TWFuYWdlcih0aGlzLnN0YWdlKTtcblxuXHRcdHRoaXMudmlld01hbmFnZXIubG9hZFJvb20oKTtcblx0fVxufVxuXG5leHBvcnQgPSBCcm93c2VyOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2tvbnZhL2tvbnZhLmQudHNcIi8+XG5cbmNsYXNzIFZpZXdNYW5hZ2VyIHtcblxuXHRzdGFnZTogS29udmEuU3RhZ2U7XG5cblx0Y29uc3RydWN0b3Ioc3RhZ2U6IEtvbnZhLlN0YWdlKSB7XG5cdFx0dGhpcy5zdGFnZSA9IHN0YWdlO1xuXHR9XG5cblx0bG9hZFJvb20oKSB7XG5cdFx0dmFyIGxheWVyID0gbmV3IEtvbnZhLkxheWVyKCk7XG5cblx0XHR2YXIgY2lyY2xlID0gbmV3IEtvbnZhLkNpcmNsZSh7XG5cdFx0XHR4OiB0aGlzLnN0YWdlLmdldFdpZHRoKCkgLyAyLFxuXHRcdFx0eTogdGhpcy5zdGFnZS5nZXRIZWlnaHQoKSAvIDIsXG5cdFx0XHRyYWRpdXM6IDcwLFxuXHRcdFx0ZmlsbDogJ3JlZCcsXG5cdFx0XHRzdHJva2U6ICdibGFjaycsXG5cdFx0XHRzdHJva2VXaWR0aDogNFxuXHRcdH0pO1xuXG5cdFx0bGF5ZXIuYWRkKGNpcmNsZSk7XG5cblx0XHR0aGlzLnN0YWdlLmFkZChsYXllcik7XG5cdH1cbn1cblxuZXhwb3J0ID0gVmlld01hbmFnZXI7Il19
