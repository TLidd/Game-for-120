/*
Main menu for game prototype build
5/8/2018
*/

var mainMenu = function(game){};
mainMenu.prototype = {
	preload: function(){
		
	},
	create: function(){
		game.stage.backgroundColor = "#4488AA";
		mainMenuText = game.add.text(game.world.centerX, game.world.centerY, 'Main Menu');
		mainMenuText.anchor.set(0.5, 0.5);
	},
	update: function(){
		
	}
}