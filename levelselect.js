/*
Level Select for game 
5/30/2018
*/
var LevelSelect = function(game){};
LevelSelect.prototype = {
	preload: function(){
		game.load.image('background', 'assets/img/background.png');
		game.load.audio('switch', 'assets/audio/zipclick.ogg');
	},
	create: function(){
		var background = game.add.sprite(400,250, 'background');
		background.anchor.set(0.5,0.5)
		game.camera.follow(background);
		
		this.click = game.add.audio('switch', false);
		this.click.volume = 0.5;
		
		let textStyle = {
			font: 'Charter',
			fontSize: 40,
			fill: '#767676',
			stroke: '#121212',
			strokeThickness: 6
		};
		
		//level selector
		level1 = game.add.text(400, 150, '1', textStyle);
		level1.anchor.set(0.5, 0.5);
		
		level2 = game.add.text(400, 350, '2', textStyle);
		level2.anchor.set(0.5, 0.5);
		
		underlineText = game.add.text(400, 158, '_', textStyle);
		underlineText.anchor.set(0.5, 0.5);
		
		position = 1;
	},
	update: function(){
		let textStyle = {
			font: 'Charter',
			fontSize: 40,
			fill: '#767676',
			stroke: '#121212',
			strokeThickness: 6
		};

		//position of the underline set with w and s
		if(game.input.keyboard.justPressed(Phaser.Keyboard.W) && position != 1){
			this.click.play();
			position--;
		}
		else if(game.input.keyboard.justPressed(Phaser.Keyboard.S) && position != 2){
			this.click.play();
			position++;
		}
			
		if(position == 1){
			underlineText.destroy();
			underlineText = game.add.text(400, 158, '_', textStyle);
		   underlineText.anchor.set(0.5, 0.5);
		}
		else{
			underlineText.destroy();
			underlineText = game.add.text(400, 358, '_', textStyle);
		   underlineText.anchor.set(0.5, 0.5);
		}
		
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) || game.input.keyboard.justPressed(Phaser.Keyboard.ENTER)){
			if(position == 1){
				game.state.start('switch2');
			}
			else{
				game.state.start('switch3');
			}
		}
		
		if(game.input.keyboard.justPressed(Phaser.Keyboard.Q)){
			game.state.start('mainMenu');
		}
	}
}