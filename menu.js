/*
Main menu for game prototype build
5/8/2018
*/

var mainMenu = function(game){};
mainMenu.prototype = {
	preload: function(){
		
	},
	create: function(){
		//simple background for prototype
		game.stage.backgroundColor = "#4488AA";
		
		//Main menu text to indicate the state
		mainMenuText = game.add.text(game.world.centerX, game.world.centerY, 'Main Menu');
		mainMenuText.anchor.set(0.5, 0.5);
		
		//how to switch the state of the game text
		startText = game.add.text(game.world.centerX, 450, 'Press SPACE to start!');
		startText.anchor.set(0.5, 0.5);
		
		//change state with Space
		start = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		start.onDown.add(startGame, this);
	},
	update: function(){
		
	}
}

//function that changes the state
function startGame(){
	game.state.start('tutorialLevel');
}