/*
Tutorial Level for game prototype build
5/8/2018
*/

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
		
		game.load.tilemap('MyTilemap', 'assets/img/firstMap.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.spritesheet('tiles', 'assets/img/terrain_atlas.png');
		
		
	},
	create: function(){
		//simple background color for proto tutorial
		game.stage.backgroundColor = "#D7C7A0";
		
		map = game.add.tilemap('MyTilemap');
		map.addTilesetImage('tiles', 'tiles');
		
		layer = map.createLayer('MyTerrain');
		layer.resizeWorld();
		layer.wrap = true;
		
		//adding player to the game via prefab
		//player = new Player(game, 'atlas', 'player', 650, game.world.height - 100);
		//game.add.existing(player);
		//player.scale.setTo(.05, .03);
		//player.body.gravity.y = 300;
		
		//add music to game
		//music = game.add.audio('music');
		//music.volume = 0.1;
		//music.play();

		//add level goal that goes to next state
		//goals = game.add.group();
		//goals.enableBody = true;		
		//var goalTutorial = goals.create(784, game.world.height - 380, 'goal');

	},
	update: function(){
		
		//boxCollision = game.physics.arcade.collide(Boxes);
		//var platformCollision = game.physics.arcade.collide(Boxes, platforms);
		
		//check if win cond met
		//var win = game.physics.arcade.overlap(player, goals);
		//if(win){
		//	game.state.start('lvlOne');
		//}

		//if player has box they may summon it
		
	}
}


