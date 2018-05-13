/*
Level One state for game prototype build
5/12/2018
*/

var LevelOne = function(game){};
LevelOne.prototype = {
	preload: function(){
		
	},
	create: function(){
		//simple background for prototype
		game.stage.backgroundColor = "#4488AA";
		
		//Main menu text to indicate the state
		LevelOneText = game.add.text(game.world.centerX, game.world.centerY, 'LevelOne');
		LevelOneText.anchor.set(0.5, 0.5);
		
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