/// <reference path="../../typings/node/node.d.ts"/>


import http = require('http');
import os = require('os');
import Server = require('./server');


class Room {

    private _server: Server;

    constructor(server : Server) {
        this._server = server;
        
        this._server.listenServer(function(){
            console.log('connnnneeeeect');
        });
    }
}

export = Room;