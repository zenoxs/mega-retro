/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/nwjs/nwjs.d.ts"/>
/// <reference path="../../typings/konva/konva.d.ts"/>
/// <reference path="../../typings/mega-retro/node.d.ts"/>

import View = require('./view');

class Browser {

	gui: NW_GUI;
	win : IWindow;
	view: View;
	stage: Konva.Stage;

	constructor(debug: boolean = true) {
		
		console.log('Browser launch');
		
		
		this.gui = global.window.nwDispatcher.requireNwGui();
		this.win = this.gui.Window.get();
		
		// display console
		if (debug)
			this.gui.Window.get().showDevTools();
			
		this.win.width = 300;
		this.win.height = 300;

		// create stage
		this.stage = new Konva.Stage({
			container: 'process-canvas',
			width: 1920,
			height: 1080
		});
		
		// instance new ViewManager
		this.view = new View(this.stage);
	}
}

export = Browser;