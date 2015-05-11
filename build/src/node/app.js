/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/mega-retro/browser.d.ts"/>
///<reference path="server.ts"/>
var Server = require('./server');
var App = (function () {
    function App(client) {
        this.server = new Server();
    }
    return App;
})();

exports.App = App;
