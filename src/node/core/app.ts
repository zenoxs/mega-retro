/// <reference path="../../../typings/mega-retro/browser.d.ts"/>

import http = require('http');
import os = require('os');
import Server = require('./server');
import Room = require('./room');

// Controllers
import RoomController = require('../controllers/roomController');


class App {
    server: Server;
    room: Room;
    client: Browser;
    controller: any;

    constructor(client: Browser) {
        
        //console.log('salut');

        this.client = client;
        
        // Construct Server
        this.server = new Server(() => {
            
            // Create the room
            this.room = new Room(this.server);
            
            // Call Room Controller
            this.controller = new RoomController(this.server, this.client, this.room);
            this.controller.index();
        });
    }
}

exports.App = App;