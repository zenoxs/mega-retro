/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/socket.io/socket.io.d.ts"/>
/// <reference path="../../typings/async/async.d.ts"/>

import http = require('http');
import io = require('socket.io');

class socketServer {

	io: SocketIO.Server;

	constructor(httpServer: http.Server) {
		this.io = io(httpServer);

		this.io.on('connection', function(socket) {

			socket.emit('news', { hello: 'world' });

			socket.on('disconnect', function() {
				console.log('user disconnected');
			});
		});
	}
}

export = socketServer;