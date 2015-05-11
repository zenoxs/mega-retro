/// <reference path="../../typings/node/node.d.ts"/>

import http = require('http');
import os = require('os');

class Server {

    address: string;
    port: number = 1337;
    httpServer : http.Server;

    constructor() {
        this.address = this.getIp();
        this.httpServer = this.createHttpServer();
        
        console.log('Server running at http://' + this.address + ':'+this.port);
    }
    
    createHttpServer() : http.Server{
        return http.createServer(function(req, res) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello World\n');
        }).listen(this.port, this.address);
    }

    getIp(): string {
        var network = os.networkInterfaces();
        var ipv4 = network.en1[1].address;

        return ipv4;
    }
}

export = Server;