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
		
		var platform3 = platforms.create(256, game.world.height - 311, 'plat2');
		platform3.body.immovable = true;
		var pil3 = game.add.sprite(324, game.world.height - 255, 'p3');
		pil3.scale.setTo(.88, .88);
		
		var platform5 = platforms.create(452, game.world.height - 311, 'plat3');
		platform5.body.immovable = true;
		var pil3 = game.add.sprite(520, game.world.height - 255, 'p2');
		pil3.scale.setTo(.88, .88);
		
		var platform6 = platforms.create(764, game.world.height - 311, 'plat1');
		platform6.body.immovable = true;
		var pil3 = game.add.sprite(764, game.world.height - 255, 'p1');
		pil3.scale.setTo(.88, .88);
				
	   //adding the ground for the game proto
		ground = platforms.create(0, game.world.height - 40, 'ground');
		ground.scale.setTo(1,1);
		ground.body.immovable = true;
		game.physics.arcade.enable(ground);
		game.world.bringToTop(ground);

	},
	update: function(){
		
	}
}
