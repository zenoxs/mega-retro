/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/mega-retro/browser.d.ts"/>

import http = require('http');
import os = require('os');
import Server = require('./server');
import Room = require('./room');

class App {
    
    server : Server;
    room : Room;
    
    constructor(client : Browser) {
        console.log('Launch app');
        
        this.server = new Server(()=>{
            this.room = new Room(this.server, client);
            
        });
    }
}

exports.App = App;