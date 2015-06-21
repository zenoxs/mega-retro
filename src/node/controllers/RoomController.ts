/// <reference path="../../../typings/mega-retro/browser.d.ts"/>

import http = require('http');
import os = require('os');
import Server = require('../core/server');
import SocketServer = require('../core/socketServer');
import Controller = require('../core/controller');

class RoomController extends Controller{

    constructor(server : Server, client : Browser) {
        super(server, client);
    }
    
    public index(): void{
        this.client.view.room(this);
    }
}

export = RoomController;