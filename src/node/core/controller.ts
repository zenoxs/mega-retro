import Server = require('../core/server');
import SocketServer = require('../core/socketServer');

class Controller {
	
	protected server: Server;
	protected client : Browser;
	
	constructor(server : Server, client : Browser) {
		this.server = server;
		this.client = client;
	}
}

export = Controller;