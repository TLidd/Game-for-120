/*
Level Two state
5/30/2018
*/

var soundPlaying = false;
var holdingLadder;
var level2 = function(game){};
level2.prototype = {
	preload: function(){
		//loading tilemap into tutorial level
		game.load.tilemap('level2', 'assets/img/level2.json', null, Phaser.Tilemap.TILED_JSON);
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
		map = game.add.tilemap('level2');
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
		//creating killSpike group
		killSpike = game.add.group();
		killSpike.enableBody = true;
		//creating the end goal Entrance
		Entrance = game.add.group();
		Entrance.enableBody = true;
		
		/*Below this comment is the code that changes within each different level,
		the code above stays the same besides the actual tilemap level */
		
		//Creating the ladders for the map
      var Ladder1 = new createLadder(game, 'atlas', 'ladder', 1216, 1696, 90, 300, true);
		game.add.existing(Ladder1);
		Ladders.add(Ladder1);
		
		var Ladder2 = new createLadder(game, 'atlas', 'ladder', 704, 1450, 90, 300, true);
		game.add.existing(Ladder2);
		Ladders.add(Ladder2);
		Ladder2.scale.setTo(1, 1.2);
		
		var Ladder3 = new createLadder(game, 'atlas', 'ladder', 128, 1100, 0, 0, false);
		game.add.existing(Ladder3);
		Ladders.add(Ladder3);
		Ladder3.scale.setTo(1, 1);

		//Creating the boxes for the map
      var Box1 = new createBox(game, 'atlas', 'box', 250, 1696);
		game.add.existing(Box1);
		Boxes.add(Box1);
		
		var Box2 = new createBox(game, 'atlas', 'box', 1510, 1696);
		game.add.existing(Box2);
		Boxes.add(Box2);
		
		var Box3 = new createBox(game, 'atlas', 'box', 1570, 1696);
		game.add.existing(Box3);
		Boxes.add(Box3);
		
		var Box4 = new createBox(game, 'atlas', 'box', 192, 928);
		game.add.existing(Box4);
		Boxes.add(Box4);
		
		var Box5 = new createBox(game, 'atlas', 'box', 250, 928);
		game.add.existing(Box5);
		Boxes.add(Box5);		
		
		//kill spikes
		var xcoord = 425
		for(var i = 0; i < 4; i++){
		   var spike = killSpike.create(xcoord, 1699, 'spike');
		   spike.body.moves = false;
		   killSpike.add(spike);
			xcoord = xcoord + 32;
		}
		
		var spike = killSpike.create(329, 899, 'spike');
		spike.body.moves = false;
		killSpike.add(spike);
		
		var spike = killSpike.create(937, 1219, 'spike');
		spike.body.moves = false;
		killSpike.add(spike);
		
		var spike = killSpike.create(969, 1219, 'spike');
		spike.body.moves = false;
		killSpike.add(spike);
		
		//x = door + 39, y = door + 68
		//spikes used for doorway detection because why not
		var col1 = Entrance.create(1607, 1252, 'spike');
		col1.body.moves = false;
		Entrance.add(col1);
		
		var col2 = Entrance.create(1639, 1252, 'spike');
		col2.body.moves = false;
		Entrance.add(col2);
				
		//add level goal that goes to next state		
		var levelGoal = game.add.sprite(1568, 1184, 'door');
		
		//adding player to the game via prefab
		player = new Player(game, 'atlas', 'character', 120, 1696);
		game.add.existing(player);
		player.scale.setTo(.05, .03);
		
		//follow the player with the camera
		game.camera.follow(player);
		
		//bring these objects to top of game world
		game.world.bringToTop(Boxes);
		
		//add music to game
		music = game.add.audio('music', true);
		music.volume = 0.1;
		music.play();

	},
	update: function(){		
		
		//setting up collision checks
		game.physics.arcade.collide(Boxes);
		game.physics.arcade.collide(Boxes, mapLayer);
		game.physics.arcade.collide(Ladders, mapLayer);
		
		//check if win condition is met 
		var win = game.physics.arcade.overlap(player, Entrance);
		var lose = game.physics.arcade.collide(player, killSpike);
		if(win){
			player.footsteps.stop();
			music.stop();
			game.state.start('switch1');
		}
		if(lose){
			player.footsteps.stop();
			music.stop();
			game.state.start('level2');
		}		
		//to quit
		if(game.input.keyboard.justPressed(Phaser.Keyboard.Q)){
			player.footsteps.stop();
			music.stop();
			game.state.start('mainMenu');
		}
	}
}