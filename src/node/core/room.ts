/// <reference path="../../../typings/socket.io/socket.io.d.ts"/>

import Server = require('./server');

// Models
import Player = require('../models/player');

class Room {

	server: Server;
	players : Array<Player.Player> = [];

	constructor(server: Server) {

		this.server = server;

		this.server.socketServer.addPlayer((socket, dataPlayer: Player.DataPlayer) => {
            console.log('new player : ' + dataPlayer.username);
			//this._addPlayer();
        });

        this.server.socketServer.disconnect((socket) => {
            console.log('disconnect player : ' + socket.id);
        });
	}

	private _addPlayer(socket: SocketIO.Socket, dataPlayer: Player.DataPlayer) {
		var player = new Player.Player(socket.id, dataPlayer.username);
		this.players.push(player);
	}
	
	private _removePlayer(socket: SocketIO.Socket){
		this.players = this.players.filter((player) =>{
			if(player.id === socket.id)
				return false;
			else
				return true;
		});
	}
}

export = Room;