/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/nwjs/nwjs.d.ts"/>
/// <reference path="../../typings/konva/konva.d.ts"/>
/// <reference path="../../typings/mega-retro/node.d.ts"/>

import ViewManager = require('./viewManager');

class Browser {

	gui: NW_GUI;
	viewManager: ViewManager;
	stage: Konva.Stage;

	constructor(debug: boolean = true) {
		
		// display console
		this.gui = global.window.nwDispatcher.requireNwGui();
		
		if (debug)
			this.gui.Window.get().showDevTools();

		// create stage
		this.stage = new Konva.Stage({
			container: 'process-canvas',
			width: 1280,
			height: 720
		});
		
		// instance new ViewManager
		this.viewManager = new ViewManager(this.stage);
	}
}

export = Browser;