/// <reference path="../../typings/konva/konva.d.ts"/>
/// <reference path="../../typings/mega-retro/node.d.ts"/>

import RoomView = require('./views/room');

class ViewManager {

	stage: Konva.Stage;

	constructor(stage: Konva.Stage) {
		this.stage = stage;
	}

	room() {
		return new RoomView(this.stage);
	}
}

export = ViewManager;