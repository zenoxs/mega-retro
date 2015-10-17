/// <reference path="../../typings/konva/konva.d.ts"/>
/// <reference path="../../typings/mega-retro/node.d.ts"/>

import RoomView = require('./views/room');

class Views {

	stage: Konva.Stage;

	constructor(stage: Konva.Stage) {
		this.stage = stage;
	}

	room(room: RoomController) {
		return new RoomView(this.stage, room);
	}
}

export = Views;