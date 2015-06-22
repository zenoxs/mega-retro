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
import SocketServer = require('./socketServer');

interface QueryObject{
    action: string;
}

class Server {
	ad: MDNS.Advertisement;
    port: number = 1337;
    httpServer: http.Server;
    socketServer : SocketServer;
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
            (callback) => {
                
                // Create the socketServer
                this._createSocketServer((err, socketServer) => {
                    this.socketServer = socketServer;
                    callback(err);
                });
            },
            (callback)=>{
                
                // Create the mdns advertissement
                this.ad = mdns.createAdvertisement(mdns.tcp('mega-retro'), this.port,
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

    private _createSocketServer(callback:(err: any, socketServer : SocketServer ) => void): void{
        var socketServer = new SocketServer(this.httpServer);
        callback(null, socketServer);
    }

    private _createHttpServer(callback: (err: any, httpServer: http.Server) => void): void {
    	
        // Create the httpServer
        var httpServer: http.Server = http.createServer((request, response) => {
           
            // write header for all access cross origin
        	response.writeHead(
                200,
                "OK",
                {
                    "access-control-allow-origin": "*",
                    "content-type": "application/json",
                }
            );
            
            return response.end();
            
        }).listen(this.port, this.address, this.port, () => {        
            callback(null, httpServer);
        });
    }

    private _getIp(callback: (err: any, ipv4: string) => void): void {
        
        var network = os.networkInterfaces();
        var ipv4 : any;
        var err : any;
        
        if(network.hasOwnProperty('en0')){
             ipv4 = network.en0[1].address;
        }else if(network.hasOwnProperty('en1')){
            ipv4 = network.en1[1].address;
        }else{
            err = "No network card found, unable to create the server";
        }

        callback(err, ipv4);
    }
}

export = Server;