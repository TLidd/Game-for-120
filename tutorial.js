/*
Tutorial Level for game prototype build
5/8/2018
*/

var hasBox = false;
var tutorial = function(game){};
tutorial.prototype = {
	preload: function(){
		//loading proto assets for the tutorial level of the game
		game.load.image('ground', 'assets/img/brickGround.png');
		game.load.image('jumpPlatform', 'assets/img/platform.png');
		game.load.image('p1', 'assets/img/p1.png');
		game.load.image('p2', 'assets/img/p2.png');
		game.load.image('p3', 'assets/img/p3.png');
		game.load.image('plat1', 'assets/img/plat1.png');
		game.load.image('plat2', 'assets/img/plat2.png');
		game.load.image('plat3', 'assets/img/plat3.png');
		game.load.image('goal', 'assets/img/goal.png');
		game.load.atlas('atlas','assets/img/spritesheet.png','assets/img/sprites.json');
		game.load.audio('music', 'assets/audio/Factory.ogg');
		
		
	},
	create: function(){
		//simple background color for proto tutorial
		game.stage.backgroundColor = "#D7C7A0";
		
		//creating a platforms group
		platforms = game.add.group();
		platforms.enableBody = true;
		
		//creating the pillars and platforms for basic tutorial
		var pil1 = game.add.sprite(15, game.world.height - 165, 'p1');
		pil1.scale.setTo(.5, .5);
		
		var pil2 = game.add.sprite(110, game.world.height - 165, 'p2');
		pil2.scale.setTo(.5, .5);
		
		var pil3 = game.add.sprite(200, game.world.height - 165, 'p1');
		pil3.scale.setTo(.5, .5);
		
		var platform1 = platforms.create(135, game.world.height - 193, 'plat2');
		platform1.scale.setTo(.5, .5);
		platform1.body.immovable = true;
		
		var platform1 = platforms.create(37, game.world.height - 193, 'plat1');
		platform1.scale.setTo(.5, .5);
		platform1.body.immovable = true;
		
		var platform1 = platforms.create(-61, game.world.height - 193, 'plat3');
		platform1.scale.setTo(.5, .5);
		platform1.body.immovable = true;
		
		var platform3 = platforms.create(306, game.world.height - 295, 'plat2');
		platform3.body.immovable = true;
		var pil3 = game.add.sprite(374, game.world.height - 255, 'p3');
		pil3.scale.setTo(.88, .88);
		
		var platform5 = platforms.create(502, game.world.height - 311, 'plat3');
		platform5.body.immovable = true;
		var pil3 = game.add.sprite(570, game.world.height - 255, 'p2');
		pil3.scale.setTo(.88, .88);
		
		var platform6 = platforms.create(764, game.world.height - 311, 'plat1');
		platform6.body.immovable = true;
		var pil3 = game.add.sprite(764, game.world.height - 255, 'p1');
		pil3.scale.setTo(.88, .88);
		
		var platform7 = platforms.create(270, game.world.height - 135, 'plat1');
		platform7.body.immovable = true;
		platform7.scale.setTo(.5, .5);
		
		//creating the box's that appear on the map
      Boxes = game.add.group();
		
		Box1 = new createBox(game, 'atlas', 'box', 700, game.world.height - 80);
		Box1.body.gravity.y = 300;
		game.add.existing(Box1);
		Boxes.add(Box1);
		
		Box2 = new createBox(game, 'atlas', 'box', 100, game.world.height - 220);
		Box2.body.gravity.y = 300;
		game.add.existing(Box2);
		Boxes.add(Box2);
		
		Box4 = new createBox(game, 'atlas', 'box', 150, game.world.height - 220);
		Box4.body.gravity.y = 300;
		game.add.existing(Box4);
		Boxes.add(Box4); 
				
	   //adding the ground for the game proto
		ground = platforms.create(0, game.world.height - 40, 'ground');
		ground.scale.setTo(1,1);
		ground.body.immovable = true;
		
		//adding player to the game via prefab
		player = new Player(game, 'atlas', 'player', 650, game.world.height - 100);
		game.add.existing(player);
		player.scale.setTo(.05, .03);
		player.body.gravity.y = 300;
		
		//add music to game
		music = game.add.audio('music');
		music.volume = 0.1;
		music.play();

		//add level goal that goes to next state
		goals = game.add.group();
		goals.enableBody = true;		
		var goalTutorial = goals.create(784, game.world.height - 380, 'goal');

	},
	update: function(){
		//check if win cond met
		var win = game.physics.arcade.overlap(player, goals);
		if(win){
			game.state.start('lvlOne');
		}
		//if player has box they may summon it
		if(game.input.keyboard.justPressed(Phaser.Keyboard.F) && hasBox){
		   Box = new createBox(game, 'atlas', 'box', player.x + 40, player.y -40);
			Boxes.add(Box);
			Box.body.gravity.y = 300;
		   game.add.existing(Box);
			hasBox = false;
		}
		
	}
}


