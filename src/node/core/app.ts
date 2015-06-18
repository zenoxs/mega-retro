/// <reference path="../../../typings/mega-retro/browser.d.ts"/>

import http = require('http');
import os = require('os');
import Server = require('./server');
import RoomController = require('../Controllers/RoomController');

class App {
    
    server : Server;
    controller : any;
    
    constructor(client : Browser) {
        console.log('Launch app');
        
        this.server = new Server(()=>{
            this.controller = new RoomController(this.server, client);
            
        });
    }
}

exports.App = App;