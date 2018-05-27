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
		game.load.image('door', 'assets/img/door.png');
		game.load.image('spike', 'assets/img/spike.png');
		game.load.atlas('atlas','assets/img/spritesheet.png','assets/img/sprites.json');

		game.load.audio('music', 'assets/audio/Factory.ogg');
		game.load.audio('footsteps', 'assets/audio/Footsteps.ogg');		

		
	},
	create: function(){
		
		//creating the tilemap from json data
		map = game.add.tilemap('tutorial');
		map.addTilesetImage('items', 'itemsHere');
		
		//Creating the layers from tilemap
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

		
		//creating the box group
      Boxes = game.add.group();
	   Boxes.enableBody = true;
		//creating the ladder group
		Ladders = game.add.group();
		Ladders.enableBody = true;
		//creating the spikeBlock group
		spikeBlock = game.add.group();
		spikeBlock.enableBody = true;
		//creating the end goal Entrance
		Entrance = game.add.group();
		Entrance.enableBody = true;
		
		/*Below this comment is the code that changes within each different level,
		the code above stays the same besides the actual tilemap level */
		
		movementUp = game.add.text(1500, 1625, 'SPACE');
		movementUp.fontSize = 20;
		movementUp.anchor.setTo(0.5,0.5);
		movementUp2 = game.add.text(1495, 1630, '↑');
		movementUp2.fontSize = 20;
		movementLR = game.add.text(1454, 1648, 'A ←  → D');
		movementLR.fontSize = 20;
		pickup = game.add.text(1150, 1618, 'O to pick up \n box/ladder');
		pickup.fontSize = 20;
		drop = pickup = game.add.text(983, 1618, ' P to place\nbox/ladder');
		drop.fontSize = 20;
		drop = pickup = game.add.text(830, 1618, 'L to throw \n     box');
		drop.fontSize = 20;
		movementLadderUp = pickup = game.add.text(505, 1638, 'W up ladder');
		movementLadderUp.fontSize = 20;
		movementLadderDown = game.add.text(320, 1638, 'S down ladder');
		movementLadderDown.fontSize = 20;
		
		//Creating the ladders for the map
		var Ladder1 = new createLadder(game, 'atlas', 'ladder', 400, game.world.height - 100);
		game.add.existing(Ladder1);
		Ladders.add(Ladder1);
		Ladder1.angle = -90;
		
		var Ladder2 = new createLadder(game, 'atlas', 'ladder', 176, 1312);
		game.add.existing(Ladder2);
		Ladder2.scale.setTo(1, 1);
		Ladder2.angle = 0;
		Ladders.add(Ladder2);

		//Creating the boxes for the map
	   var Box1 = new createBox(game, 'atlas', 'box', 950, 1700);
		game.add.existing(Box1);
		Boxes.add(Box1);
		
		var Box2 = new createBox(game, 'atlas', 'box', 190, 1455);
		game.add.existing(Box2);
		Boxes.add(Box2);
		
		//adding beginningEntrance
		var beginningEntrance = game.add.sprite(1568,1568, 'door');
		
		//Adding the spikeBlocks
      var spike = spikeBlock.create(1607, 1634, 'spike');
		spike.body.moves = false;
		spikeBlock.add(spike);
		
		var spike2 = spikeBlock.create(1639, 1634, 'spike');
		spike2.body.moves = false;
		spikeBlock.add(spike2);
		
		//x = door + 39, y = door + 68
		//spikes used for doorway detection because why not
		var col1 = Entrance.create(1607, 1154, 'spike');
		col1.body.moves = false;
		Entrance.add(col1);
		
		var col2 = Entrance.create(1639, 1154, 'spike');
		col2.body.moves = false;
		Entrance.add(col2);
				
		//add level goal that goes to next state		
		var levelGoal = game.add.sprite(1568, 1088, 'door');
		
		//adding player to the game via prefab
		player = new Player(game, 'atlas', 'character', 1560, game.world.height - 100);
		game.add.existing(player);
		player.scale.setTo(.05, .03);
		
		//follow the player with the camera
		game.camera.follow(player);
		
		//bring these objects to top of game world
		game.world.bringToTop(spikeBlock);
		game.world.bringToTop(Boxes);
		
		//add music to game
		music = game.add.audio('music', true);
		music.volume = 0.1;
		music.play();

	},
	update: function(){		
		
		//setting up collision checks
		var boxCollision = game.physics.arcade.collide(Boxes);
		var platformBoxCollision = game.physics.arcade.collide(Boxes, mapLayer);
		var platformLadderCollision = game.physics.arcade.collide(Ladders, mapLayer);
		game.physics.arcade.collide(player, spikeBlock);
		
		//check if win condition is met met
		var win = game.physics.arcade.overlap(player, Entrance);
		
		if(win){
			player.footsteps.stop();
			music.stop();
			game.state.start('lvlOne');
		}
	}
}


