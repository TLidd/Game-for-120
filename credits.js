/*
Credits screen for game
5/30/2018
*/

var credits = function(game){};
credits.prototype = {
	preload: function(){
		game.load.audio('end', 'assets/audio/DoorClosed.wav');
	},
	create: function(){
		
		sound = game.add.audio('end', false);
		sound.volume = 0.1;
		sound.play();
		
		//background color
		game.stage.backgroundColor = '000000';
		
		let textStyle = {
			font: 'Charter',
			fontSize: 80,
			fill: '#808080',
			stroke: '#C0C0C0',
			strokeThickness: 6
		};
		
		levelText = game.add.text(game.world.centerX, game.world.centerY, 'LEVEL ONE', textStyle);
		levelText.anchor.set(0.5, 0.5);
      game.camera.follow(levelText);
		game.time.events.add(Phaser.Timer.SECOND * 5, startLevel, this);
	},
	update: function(){
		
	}
}

//function that changes the state
function startLevel(){
	game.state.start('lvlOne');
}