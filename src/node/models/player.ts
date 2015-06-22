/// <reference path="../../../typings/node/node.d.ts"/>

import http = require('http');
import os = require('os');

module Player {
   export interface DataPlayer {
      username: string;
   }

   export class Player {

      public id: string;
      public username: string;

      constructor(id : string, username : string) {
         this.id = id;
         this.username = username;
      }
   }
}



export = Player;