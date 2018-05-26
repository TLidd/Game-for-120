/*
Tutorial Level for game prototype build
5/8/2018
*/
var soundPlaying = false;
var holdingLadder;
var tutorial = function(game){};
tutorial.prototype = {
	preload: function(){
		//loading tilemap into tutorial level
		game.load.tilemap('tutorial', 'assets/img/tutorial.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.spritesheet('itemsHere', 'assets/img/items.png', 32, 32);
		
		//loading other assets
		game.load.image('goal', 'assets/img/goal.png');
		game.load.atlas('atlas','assets/img/spritesheet.png','assets/img/sprites.json');

		game.load.audio('music', 'assets/audio/Factory.ogg');
		game.load.audio('footsteps', 'assets/audio/Footsteps.ogg');		

		
	},
	create: function(){
		
		map = game.add.tilemap('tutorial');
		map.addTilesetImage('items', 'itemsHere');
		
		//map.setCollisionByExclusion([]);
		
		backgroundLayer = map.createLayer('Backdrop');
		Tile3Layer = map.createLayer('Tile Layer 3');
		mapLayer = map.createLayer('Collision Layer');
		mapLayer.resizeWorld();
		
		//collision of brickGround
		map.setCollisionBetween(248, 309, true, mapLayer);
		//collision of wall
		map.setCollisionBetween(341, 344, true, mapLayer);
		map.setCollisionBetween(372, 375, true, mapLayer);
		map.setCollisionBetween(403, 406, true, mapLayer);
		map.setCollisionBetween(434, 437, true, mapLayer);
		map.setCollisionBetween(465, 468, true, mapLayer);
		map.setCollisionBetween(496, 499, true, mapLayer);
		map.setCollisionBetween(527, 530, true, mapLayer);
		map.setCollisionBetween(558, 561, true, mapLayer);
		map.setCollisionBetween(589, 592, true, mapLayer);
		map.setCollisionBetween(620, 623, true, mapLayer);
		map.setCollisionBetween(651, 654, true, mapLayer);
		map.setCollisionBetween(682, 685, true, mapLayer);		
		//collision of cieling
		map.setCollisionBetween(345, 393, true, mapLayer);
		//collision of platforms
		map.setCollisionBetween(9, 15, true, mapLayer);
		map.setCollisionBetween(71, 77, true, mapLayer);
		map.setCollisionBetween(133, 139, true, mapLayer);

		
		//creating the box's that appear on the map
      Boxes = game.add.group();
	   Boxes.enableBody = true;
		Ladders = game.add.group();
		Ladders.enableBody = true;
		
		var Ladder1 = new createLadder(game, 'atlas', 'ladder', 200, game.world.height - 100);
		game.add.existing(Ladder1);
		Ladders.add(Ladder1);
		
		var Ladder2 = new createLadder(game, 'atlas', 'ladder', 175, 1312);
		game.add.existing(Ladder2);
		Ladder2.scale.setTo(1, 1);
		Ladder2.angle = 0;
		Ladders.add(Ladder2);

	   var Box1 = new createBox(game, 'atlas', 'box', 600, 1455);
		game.add.existing(Box1);
		Boxes.add(Box1);
		
		var Box2 = new createBox(game, 'atlas', 'box', 170, 1455);
		game.add.existing(Box2);
		Boxes.add(Box2);
		game.world.bringToTop(Boxes);
		
		var Box3 = new createBox(game, 'atlas', 'box', 220, 1455);
		game.add.existing(Box3);
		Boxes.add(Box3);
		
		//adding player to the game via prefab
		player = new Player(game, 'atlas', 'character', 1560, game.world.height - 100);
		game.add.existing(player);
		player.scale.setTo(.05, .03);
		
		game.camera.follow(player);
		
		//add music to game
		music = game.add.audio('music', true);
		music.volume = 0.1;
		music.play();

		//add level goal that goes to next state
		goals = game.add.group();
		goals.enableBody = true;		
		var goalTutorial = goals.create(784, game.world.height - 380, 'goal');

	},
	update: function(){		
		
		boxCollision = game.physics.arcade.collide(Boxes);
		var platformBoxCollision = game.physics.arcade.collide(Boxes, mapLayer);
		var platformLadderCollision = game.physics.arcade.collide(Ladders, mapLayer);
		//check if win cond met
		var win = game.physics.arcade.overlap(player, goals);
		if(win){
			game.state.start('lvlOne');
		}
		console.log(player.body.gravity.y);
	}
}


