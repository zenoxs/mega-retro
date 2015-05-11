/// <reference path="../../typings/node/node.d.ts"/>
var gui = require('nw.gui');
var Browser = (function () {
    function Browser() {
        gui.Window.get().showDevTools();
    }
    return Browser;
})();
