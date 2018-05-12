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
		game.load.image('backstrip', 'assets/img/backstrip.png');
		game.load.image('p1', 'assets/img/p1.png');
		game.load.image('p2', 'assets/img/p2.png');
		game.load.image('p3', 'assets/img/p3.png');
		game.load.image('plat1', 'assets/img/plat1.png');
		game.load.image('plat2', 'assets/img/plat2.png');
		game.load.image('plat3', 'assets/img/plat3.png');
		
	},
	create: function(){
		//simple background color for proto tutorial
		game.stage.backgroundColor = "#D7C7A0";
		
		//backstrip for the proto
		back1 = game.add.sprite(0, game.world.height - 163, 'backstrip');
		
		//creating a platforms group
		platforms = game.add.group();
		platforms.enableBody = true;
		
		//creating the platforms for the player to interact
		var platform1 = platforms.create(0, game.world.height - 163, 'jumpPlatform');
		platform1.body.immovable = true;
		platform1.body.setSize(126, 5, 0, 0);
		
		var platform2 = platforms.create(127, game.world.height - 166, 'jumpPlatform');
		platform2.body.immovable = true;
		platform2.body.setSize(126, 5, 0, 0);
		
		var platform3 = platforms.create(256, game.world.height - 291, 'jumpPlatform');
		platform3.body.immovable = true;
		platform3.body.setSize(126, 5, 0, 0);
		
		var platform4 = platforms.create(383, game.world.height - 291, 'jumpPlatform');
		platform4.body.immovable = true;
		platform4.body.setSize(126, 5, 0, 0);
		
		var platform5 = platforms.create(510, game.world.height - 291, 'jumpPlatform');
		platform5.body.immovable = true;
		platform5.body.setSize(126, 5, 0, 0);
		
		var platform6 = platforms.create(764, game.world.height - 291, 'jumpPlatform');
		platform6.body.immovable = true;
		platform6.body.setSize(126, 5, 0, 0);
		
		var platform7 = platforms.create(891, game.world.height - 291, 'jumpPlatform');
		platform7.body.immovable = true;
		platform7.body.setSize(126, 5, 0, 0);
				
	   //adding the ground for the game proto
		ground = platforms.create(0, game.world.height - 40, 'ground');
		ground.scale.setTo(1,1);
		ground.body.immovable = true;
		game.physics.arcade.enable(ground);

	},
	update: function(){
		
	}
}
