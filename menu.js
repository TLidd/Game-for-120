/*
Main menu for game
5/8/2018
*/
var position = 3;
var mainMenu = function(game){};
mainMenu.prototype = {
	preload: function(){
		game.load.image('background', 'assets/img/background.png');
		game.load.image('pillar', 'assets/img/p1.png');
	},
	create: function(){
		//simple background for prototype
		position = 3;
		var background = game.add.sprite(400,250, 'background');
		background.anchor.set(0.5,0.5)
		game.camera.follow(background);
		
		let textStyle = {
			font: 'Charter',
			fontSize: 80,
			fill: '#AC1616',
			stroke: '#121212',
			strokeThickness: 6
		};
		
		var p1 = game.add.sprite(100, 180, 'pillar');
		p1.scale.setTo(1, 1.2);
		
		var p1 = game.add.sprite(620, 180, 'pillar');
		p1.scale.setTo(1, 1.2);
		
		//Main menu text to indicate the state
		mainMenuText = game.add.text(400, 150, 'Pyramid Schemer', textStyle);
		mainMenuText.anchor.set(0.5, 0.5);
		
		let textStyle2 = {
			font: 'Charter',
			fontSize: 40,
			fill: '#767676',
			stroke: '#121212',
			strokeThickness: 6
		};
		
		startText = game.add.text(400, 260, 'Start', textStyle2);
		startText.anchor.set(0.5, 0.5);
		
		w = game.add.text(230, 260, 'W');
		w.anchor.set(0.5, 0.5);
		w.font = 'Charter';
		w.fontSize = 30;
		
		underlineText = game.add.text(400, 268, '_____', textStyle2);
		underlineText.anchor.set(0.5, 0.5);
		
		levelSelectorText = game.add.text(400, 340, 'Level Select', textStyle2);
		levelSelectorText.anchor.set(0.5, 0.5);
		
		up = game.add.text(230, 310, '↑');
		up.anchor.set(0.5, 0.5);
		up.font = 'Charter';
		up.fontSize = 35;
		
		down = game.add.text(230, 370, '↑');
		down.anchor.set(0.5, 0.5);
		down.font = 'Charter';
		down.fontSize = 35;
		down.angle = 180;
		
		tutorialText = game.add.text(400, 420, 'Tutorial', textStyle2);
		tutorialText.anchor.set(0.5, 0.5);
		
		s = game.add.text(230, 420, 'S');
		s.anchor.set(0.5, 0.5);
		s.font = 'Charter';
		s.fontSize = 30;
		
		//how to switch the state of the game text
		underText = game.add.text(400, 444, '____________________');
		underText.fontSize = 80;
		underText.anchor.set(0.5, 0.5);
	
	},
	update: function(){
		let textStyle2 = {
			font: 'Charter',
			fontSize: 40,
			fill: '#767676',
			stroke: '#121212',
			strokeThickness: 6
		};

		if(game.input.keyboard.justPressed(Phaser.Keyboard.W) && position != 3){
			position++;
		}
		else if(game.input.keyboard.justPressed(Phaser.Keyboard.S) && position != 1){
			position--;
		}
			
		if(position == 3){
			underlineText.destroy();
			underlineText = game.add.text(400, 268, '_____', textStyle2);
		   underlineText.anchor.set(0.5, 0.5);
		}
		else if(position == 2){
			underlineText.destroy();
			underlineText = game.add.text(400, 348, '____________', textStyle2);
		   underlineText.anchor.set(0.5, 0.5);
		}
		else{
			underlineText.destroy();
			underlineText = game.add.text(400, 428, '________', textStyle2);
		   underlineText.anchor.set(0.5, 0.5);
		}
		//select with space or enter
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) || game.input.keyboard.justPressed(Phaser.Keyboard.ENTER)){
			if(position == 3){
				game.state.start('switch1');
			}
			else if(position == 2){
				game.state.start('LevelSelect');
			}
			else{
				game.state.start('tutorialLevel');
			}
		}
	}
}
