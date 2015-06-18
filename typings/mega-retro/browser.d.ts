/// <reference path="../../typings/konva/konva.d.ts"/>

declare class Browser{
	stage : Konva.Stage;
	viewManager : ViewManager;
	
	constructor();
}

declare class ViewManager{
	
	stage : Konva.Stage;
	
	room() : RoomView;
}

declare class RoomView{
	construct();
}

