/// <reference path="../../../typings/mega-retro/browser.d.ts"/>

import http = require('http');
import os = require('os');
import Server = require('../core/server');
import SocketServer = require('../core/socketServer');

class RoomController {

    private _server: Server;
    public socketServer : SocketServer;

    constructor(server : Server, client : Browser) {
        
        this._server = server;
        this.socketServer = new SocketServer(this._server.httpServer);
	   
        /*this._server.listenServer(function(){
            console.log('connnnneeeeect');
        });*/
        client.view.room(this);
    }
}

export = RoomController;