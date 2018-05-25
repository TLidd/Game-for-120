/*
Tutorial Level for game prototype build
5/8/2018
*/
var holdingLadder;
var tutorial = function(game){};
tutorial.prototype = {
	preload: function(){
		//loading tilemap into tutorial level
		game.load.tilemap('tutorial', 'assets/img/tutorial.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.spritesheet('items', 'assets/img/items.png', 32, 32);
		
		//loading other assets
		game.load.image('goal', 'assets/img/goal.png');
		game.load.atlas('atlas','assets/img/spritesheet.png','assets/img/sprites.json');
		game.load.audio('music', 'assets/audio/Factory.ogg');		
		
	},
	create: function(){
		
		map = game.add.tilemap('tutorial');
		map.addTilesetImage('items', 'items');
		
		map.setCollisionBetween(248, 960);
		//map.setCollisionBetween(345, 393, true);
		//map.setCollisionBetween(133, 138, true);
		//map.setCollisionBetween(403, 405, true);
		
		//map.setCollisionByExclusion([]);
		
		//backgroundLayer = map.createLayer('Backdrop');
		//Tile3Layer = map.createLayer('Tile Layer 3');
		mapLayer = map.createLayer('Collision Layer');
		map.setCollisionBetween(248, 960);
		mapLayer.resizeWorld();
		//creating the box's that appear on the map
      Boxes = game.add.group();
	   Boxes.enableBody = true;
		Ladders = game.add.group();
		Ladders.enableBody = true;
		
		var Ladder1 = new createLadder(game, 'atlas', 'ladder', 450, game.world.height - 55);
		game.add.existing(Ladder1);
		Ladders.add(Ladder1);

	   var Box1 = new createBox(game, 'atlas', 'box', 700, game.world.height - 700);
		game.add.existing(Box1);
		Boxes.add(Box1);
		
		var Box2 = new createBox(game, 'atlas', 'box', 100, game.world.height - 250);
		game.add.existing(Box2);
		Boxes.add(Box2);
		game.world.bringToTop(Boxes);
		
		var Box3 = new createBox(game, 'atlas', 'box', 50, game.world.height - 250);
		game.add.existing(Box3);
		Boxes.add(Box3);
		
		var Box4 = new createBox(game, 'atlas', 'box', 150, game.world.height - 250);
		game.add.existing(Box4);
		Boxes.add(Box4);		
		
		//adding player to the game via prefab
		player = new Player(game, 'atlas', 'character', 650, game.world.height - 200);
		game.add.existing(player);
		player.scale.setTo(.05, .03);
		
		game.camera.follow(player);
		
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
		game.physics.arcade.collide(player, mapLayer);
		
		
		boxCollision = game.physics.arcade.collide(Boxes);
		var platformBoxCollision = game.physics.arcade.collide(Boxes, mapLayer);
		var platformLadderCollision = game.physics.arcade.collide(Ladders, mapLayer);
		//check if win cond met
		var win = game.physics.arcade.overlap(player, goals);
		if(win){
			game.state.start('lvlOne');
		}
		
	}
}


