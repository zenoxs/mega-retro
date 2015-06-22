/// <reference path="../../../typings/mega-retro/browser.d.ts"/>

import http = require('http');
import os = require('os');
import Server = require('../core/server');
import SocketServer = require('../core/socketServer');
import Controller = require('../core/controller');
import Room = require('../core/room');

class RoomController extends Controller {
    
    room : Room;

    constructor(server: Server, client: Browser, room : Room) {
        super(server, client);
        
        this.room = room;
    }

    public index(): void {

        this.client.view.room(this);
    }
}

export = RoomController;