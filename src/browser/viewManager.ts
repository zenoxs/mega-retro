/// <reference path="../../typings/konva/konva.d.ts"/>

class ViewManager {

	stage: Konva.Stage;

	constructor(stage: Konva.Stage) {
		this.stage = stage;
	}

	loadRoom() {
		var layer = new Konva.Layer();

		var circle = new Konva.Circle({
			x: this.stage.getWidth() / 2,
			y: this.stage.getHeight() / 2,
			radius: 70,
			fill: 'red',
			stroke: 'black',
			strokeWidth: 4
		});

		layer.add(circle);

		this.stage.add(layer);
	}
}

export = ViewManager;