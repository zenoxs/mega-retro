/// <reference path="../../typings/konva/konva.d.ts"/>
/// <reference path="./node.d.ts"/>

declare class Browser{
	stage : Konva.Stage;
	view : View;
	
	constructor();
}

declare class View{
	
	stage : Konva.Stage;
	room(room : RoomController) : RoomView;
}

declare class RoomView{
	constructor(stage: Konva.Stage, room : RoomController);
}

