/// <reference path="../../../typings/konva/konva.d.ts"/>
/// <reference path="../../../typings/mega-retro/node.d.ts"/>

class RoomView {
	stage: Konva.Stage;

	constructor(stage: Konva.Stage) {

		this.stage = stage;

		var layer = new Konva.Layer();
		
		// add display table players
		layer.add(this._tablePlayers());
		
		// add display game list
		layer.add(this._gamesList());

		this.stage.add(layer);
	}

	private _tablePlayers(): Konva.Group {

		var playersGroup = new Konva.Group({
			x: 0,
			y: 0,
		});
		
		// Container
		
		var container = new Konva.Rect({
			x: 0,
			y: 0,
			width: this.stage.width() / 5,
			height: this.stage.height(),
			fill: '#f2f2f2',
			strokeWidth: 0
		});

		playersGroup.add(container);

		var simpleText = new Konva.Text({
			y: 15,
			text: 'Players',
			fontSize: 30,
			fontFamily: 'Calibri',
			fill: '#333333'
		});

		simpleText.x(container.width() / 2 - simpleText.width() / 2);

		playersGroup.add(simpleText);

		return playersGroup;
	}

	private _gamesList(): Konva.Group {
		var gamesGroup = new Konva.Group({
			x: this.stage.width(),
			y: 0,
		});
		
		
		var games = [
			{
				name : 'Pong'
			}
		];
		
		
		return gamesGroup;
	}
}

export = RoomView;