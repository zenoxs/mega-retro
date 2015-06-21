/// <reference path="../../../typings/node/node.d.ts"/>
/// <reference path="../../../typings/socket.io/socket.io.d.ts"/>
/// <reference path="../../../typings/async/async.d.ts"/>

import http = require('http');
import io = require('socket.io');

class SocketServer {

	io: SocketIO.Server;
	socket : SocketIO.Socket;

	constructor(httpServer: http.Server) {
		this.io = io(httpServer);

		this.io.on('connection', function(socket) {
			console.log('connect player');

			socket.on('disconnect', function(socket) {
				console.log('disconnect player');
			});
		});
	}

    public connection(callback: () => void): void {

    }

	public disconnect(callback: () => void): void {

    }
}

export = SocketServer;