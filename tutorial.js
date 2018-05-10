/*
Tutorial Level for game prototype build
5/8/2018
*/

var tutorial = function(game){};
tutorial.prototype = {
	preload: function(){
		//loading proto assets for the tutorial level of the game
		game.load.image('ground', 'assets/img/grounds.png');
		game.load.image('jumpPlatform', 'assets/img/platform.png');
		game.load.image('backstrip', 'assets/img/backstrip.png');
	},
	create: function(){
		//simple background color for proto tutorial
		game.stage.backgroundColor = "#D7C7A0";
		
		back1 = game.add.sprite(0, game.world.height - 163, 'backstrip');
		
		//adding the ground for the game proto
		ground = game.add.sprite(0, game.world.height - 35, 'ground');
		ground.scale.setTo(1.25,2);
		game.physics.arcade.enable(ground);
		
		platforms = game.add.group();
		platforms.enableBody = true;
		
		var platform1 = platforms.create(0, game.world.height - 163, 'jumpPlatform');
		platform1.body.immovable = true;
		platform1.body.setSize(128, 20);
		
		var platform2 = platforms.create(128, game.world.height - 163, 'jumpPlatform');
		platform2.body.immovable = true;
		platform2.body.setSize(127, 20);
		
		var platform3 = platforms.create(256, game.world.height - 291, 'jumpPlatform');
		platform3.body.immovable = true;
		platform3.body.setSize(128, 20);
		
		var platform4 = platforms.create(383, game.world.height - 291, 'jumpPlatform');
		platform4.body.immovable = true;
		platform4.body.setSize(128, 20);
	},
	update: function(){
		
	}
}
