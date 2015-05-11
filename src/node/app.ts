/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/mega-retro/browser.d.ts"/>
///<reference path="server.ts"/>

import http = require('http');
import os = require('os');
import Server = require('./server');

class App {
    
    server : Server;

    constructor(client : Browser) {
        
        this.server = new Server();
    }
}

exports.App = App;