/// <reference path="../../typings/node/node.d.ts"/>

var gui = require('nw.gui');

class Browser{
	
	constructor(){
		gui.Window.get().showDevTools();
	}
}
