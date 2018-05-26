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
		game.load.spritesheet('itemsHere', 'assets/img/items.png', 32, 32);
		
		//loading other assets
		game.load.image('goal', 'assets/img/goal.png');
		game.load.atlas('atlas','assets/img/spritesheet.png','assets/img/sprites.json');
		game.load.audio('music', 'assets/audio/Factory.ogg');		
		
	},
	create: function(){
		
		map = game.add.tilemap('tutorial');
		map.addTilesetImage('items', 'itemsHere');
		
		//map.setCollisionByExclusion([]);
		
		backgroundLayer = map.createLayer('Backdrop');
		//Tile3Layer = map.createLayer('Tile Layer 3');
		mapLayer = map.createLayer('Collision Layer');
		mapLayer.resizeWorld();
		
		//collision of brickGround
		map.setCollisionBetween(248, 309, true, mapLayer);
		//collision of wall
		map.setCollisionBetween(341, 343, true, mapLayer);
		map.setCollisionBetween(372, 374, true, mapLayer);
		map.setCollisionBetween(403, 405, true, mapLayer);
		map.setCollisionBetween(434, 436, true, mapLayer);
		map.setCollisionBetween(465, 467, true, mapLayer);
		map.setCollisionBetween(496, 498, true, mapLayer);
		map.setCollisionBetween(527, 529, true, mapLayer);
		map.setCollisionBetween(558, 560, true, mapLayer);
		map.setCollisionBetween(589, 591, true, mapLayer);
		map.setCollisionBetween(620, 622, true, mapLayer);
		map.setCollisionBetween(651, 653, true, mapLayer);
		map.setCollisionBetween(682, 684, true, mapLayer);		
		//collision of cieling
		map.setCollisionBetween(345, 393, true, mapLayer);
		//collision of platforms
		map.setCollisionBetween(9, 14, true, mapLayer);
		map.setCollisionBetween(71, 76, true, mapLayer);
		map.setCollisionBetween(133, 138, true, mapLayer);
		
		
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


