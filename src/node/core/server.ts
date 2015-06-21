/// <reference path="../../../typings/node/node.d.ts"/>
/// <reference path="../../../typings/socket.io/socket.io.d.ts"/>
/// <reference path="../../../typings/async/async.d.ts"/>
/// <reference path="../../../typings/mdns/mdns.d.ts"/>

import http = require('http');
import async = require('async');
import os = require('os');
import io = require('socket.io');
import events = require('events');
import url = require('url');
import mdns = require('mdns');

interface QueryObject{
    action: string;
}

class Server {
	ad: MDNS.Advertisement;
    port: number = 1337;
    httpServer: http.Server;
    address: string;
    eventEmitter: events.EventEmitter;
    
	constructor(callback: () => void) {
        
        // Waterfall for init componements server
        async.waterfall([
            (callback) => {
                
                // Init EventEmmiter inside the server
                this.eventEmitter = new events.EventEmitter();
                callback();
            },
            (callback) => {
                
                // Retrieve local network adress
                this._getIp((err, ip) => {
                    this.address = ip;
                    callback(err);
                });
            },
            (callback) => {
                
                // Create the http Server
                this._createHttpServer((err, httpServer) => {
                    this.httpServer = httpServer;
                    callback(err);
                });
            },
            (callback)=>{
                
                // Create the mdns advertissement
                this.ad = mdns.createAdvertisement(mdns.tcp('mega-retro'), 511,
                {txtRecord:{
                    name : 'test'
                } } );
                
                this.ad.start();
                
                callback();
            }
        ], (err, result) => {
                if (err) console.log(err);
                
                console.log('Server running at http://' + this.address + ':' + this.port);
                callback();
            });
    }

    public listenServer(callback: () => void): void {
        console.log('listen player');
        this.eventEmitter.on('connectPlayer', function(socket) {
            console.log(socket);
            callback();
        });
    }

    private _createHttpServer(callback: (err: any, httpServer: http.Server) => void): void {
    	
        // Create the httpServer
        var httpServer: http.Server = http.createServer((request, response) => {
            
            //response.writeHead(200, { 'Content-Type': 'application/json' });

            var url_parts: url.Url = url.parse(request.url, true);
            var query: any = url_parts.query;
            
            var result;
            
            if(query.hasOwnProperty('action')){
            
                var action = query.action;
            
                switch(action){
                    case 'scan' :
                        result = { data :{
                            address : this.address,
                            name : os.hostname(),
                            port : this.port
                        },
                        err : false};
                        break;
                    default:
                        result = { err : 'unknow action'};
                }
            }else{
                result = { err : 'no action found'};
            }
            
            // write header for all access cross origin
        	response.writeHead(
                200,
                "OK",
                {
                    "access-control-allow-origin": "*",
                    "content-type": "application/json",
                }
            );
            
            console.log(result);
            
            return response.end(JSON.stringify(result));
            
        }).listen(this.port, this.address, 511, () => {        
            callback(null, httpServer);
        });

        /*httpServer.on('request', (request, socket, head) => {
            var url_parts = url.parse(request.url, true);
            var query = url_parts.query;
            
            this.eventEmitter.emit('connectPlayer', socket);
        });*/
    }

    private _getIp(callback: (err: any, ipv4: string) => void): void {
        var network = os.networkInterfaces();
        var ipv4 = network.en0[1].address;

        callback(null, ipv4);
    }
}

export = Server;