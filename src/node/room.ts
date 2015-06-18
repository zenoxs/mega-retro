/// <reference path="../../typings/node/node.d.ts"/>


import http = require('http');
import os = require('os');
import Server = require('./server');
import SocketServer = require('./socketServer');


class Room {

    private _server: Server;
    public socketServer : SocketServer;

    constructor(server : Server, client : Browser) {
        
        this._server = server;
        this.socketServer = new SocketServer(this._server.httpServer);
	   
        /*this._server.listenServer(function(){
            console.log('connnnneeeeect');
        });*/
        client.viewManager.room();
    }
}

export = Room;