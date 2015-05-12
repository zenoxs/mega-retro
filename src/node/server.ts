/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/socket.io/socket.io.d.ts"/>
/// <reference path="../../typings/async/async.d.ts"/>

import http = require('http');
import async = require('async');
import os = require('os');
import io = require('socket.io');

class Server {
    
    port: number = 1337;
    httpServer : http.Server;
    address: string;

    constructor() {
        // waterfall for init componements server
        async.waterfall([
            (callback) => {
                // retrieve adress
                this.getIp((err, ip) => {
                    this.address = ip;
                    callback(err);
                });
            },
            (callback) => {
                 // create http server
                this.createHttpServer((err, httpServer) => {
                    this.httpServer = httpServer;
                    callback(err);
                });
            }
        ], (err, result) => {
           if(err) console.log(err);
           
            console.log('Server running at http://' + this.address + ':'+this.port);
        });
    }
    
    createHttpServer(callback : (err: any, httpServer:http.Server) => void): void {
        var httpServer : http.Server = http.createServer(function(req, res) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello World\n');
        }).listen(this.port, this.address, 511, function(){
            callback(null, httpServer)
        });
    }
    
    createSocketServer() : any {
        //var test = io(this.createHttpServer);
    }

    getIp(callback : (err: any, ipv4:string) => void): void {
        var network = os.networkInterfaces();
        var ipv4 = network.en1[1].address;

        callback(null, ipv4);
    }
}

export = Server;