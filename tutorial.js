/*
Tutorial Level for game prototype build
5/8/2018
*/

var tutorialLevel = function(game){};
tutorialLevel.prototype = {
	preload: function(){
		
	},
	create: function(){
		game.stage.backgroundColor = "#4488AA";
		mainMenuText = game.add.text(game.world.centerX, game.world.centerY, 'Tutorial');
		mainMenuText.anchor.set(0.5, 0.5);
		
	},
	update: function(){
		
	}
}
