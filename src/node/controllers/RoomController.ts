/// <reference path="../../../typings/node/node.d.ts"/>
/// <reference path="../../../typings/mega-retro/browser.d.ts"/>

declare module observed {

}

import http = require('http');
import os = require('os');
import events = require('events');

var observed = require('observed');

import Server = require('../core/server');
import SocketServer = require('../core/socketServer');
import Controller = require('../core/controller');
import Room = require('../core/room');

class RoomController extends Controller {

    room: Room;
    eeRoom: events.EventEmitter;
    object;

    constructor(server: Server, client: Browser, room: Room) {
        super(server, client);

        this.room = room;
    }

    public index(): void {



        this.client.view.room(this);
    }
}

export = RoomController;