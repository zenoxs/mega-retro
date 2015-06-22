/// <reference path="../../../typings/node/node.d.ts"/>
/// <reference path="../../../typings/socket.io/socket.io.d.ts"/>
/// <reference path="../../../typings/async/async.d.ts"/>

import http = require('http');
import io = require('socket.io');
import events = require('events');
import Player = require('../models/player');

class SocketServer {
	
	io: SocketIO.Server;
	socket: SocketIO.Socket;
	eventEmitter: events.EventEmitter;

	constructor(httpServer: http.Server) {

		this.eventEmitter = new events.EventEmitter();

		this.io = io(httpServer);

		this.io.on('connection', (socket) => {
			this.eventEmitter.emit('connection', socket);
			
			socket.on('addPlayer', (dataPlayer : Player.DataPlayer) => {
				this.eventEmitter.emit('addPlayer', socket, dataPlayer);
			});

			socket.on('disconnect', () => {
				this.eventEmitter.emit('disconnect', socket);
			});
		});
	}

    public connection(callback: (socket: SocketIO.Socket) => void): void {
		this.eventEmitter.on('connection', (socket) =>{
            callback(socket);
        });
    }

	public disconnect(callback: (socket: SocketIO.Socket) => void): void {
		this.eventEmitter.on('disconnect', (socket) =>{
            callback(socket);
        });
    }

	public addPlayer(callback: (socket: SocketIO.Socket, dataPlayer : Player.DataPlayer) => void): void {
		this.eventEmitter.on('addPlayer', (socket: SocketIO.Socket, dataPlayer : Player.DataPlayer) =>{
            callback(socket, dataPlayer);
        });
    }
}

export = SocketServer;