/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/nwjs/nwjs.d.ts"/>
/// <reference path="../../typings/konva/konva.d.ts"/>

import ViewManager = require('./viewManager');

class Browser {

	gui: NW_GUI;
	viewManager: ViewManager;
	stage: Konva.Stage;

	constructor(debug: boolean = true) {

		this.gui = global.window.nwDispatcher.requireNwGui();
		if (debug)
			this.gui.Window.get().showDevTools();

		this.stage = new Konva.Stage({
			container: 'process-canvas',
			width: 1280,
			height: 720
		});

		this.viewManager = new ViewManager(this.stage);

		this.viewManager.loadRoom();
	}
}

export = Browser;