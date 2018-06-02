//This is the Player.js file
function Player(game, key, frame, xcoord, ycoord){
	Phaser.Sprite.call(this, game, xcoord, ycoord, key, frame);
	
	// Set player's size
	this.body.setSize(32, 64);
	
	// Custom properties
	this.anchor.set(0.5, 0.5);
	this.x = xcoord;
	this.y = ycoord;
	
	//checks to see which direction player is looking
	this.leftFace = false;
	this.rightFace = false;
	
	//check to see if player has item and ladder
	this.hasItem = false;
	
	//player footsteps sound
	this.footsteps = new Phaser.Sound(game, 'footsteps', 1, true);
	this.footsteps.volume = 0.03;
	
	// Player animations
	this.animations.add('playerMove', Phaser.Animation.generateFrameNames('player', 1, 6, '', 4), 30, true); 
	// Enables physics
	game.physics.enable(this);
	this.body.gravity.y = 400;
	// this.body.gravity.y = 300;
	this.body.collideWorldBounds = true;
}

// Explicitly defines the prefab's prototype and constructor
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

// Now to override Phaser.Sprite's update to allow for movement
Player.prototype.update = function(){
	//set vel to 0 when not moving
	this.body.gravity.y = 400;
	this.body.velocity.x = 0;
	var hitPlatform = game.physics.arcade.collide(this, mapLayer);
	
	// Move left with A
	if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
		this.scale.x *= -1;
		this.body.velocity.x = -200;
		this.rightFace = false;
		this.leftFace = true;

		if(!soundPlaying && hitPlatform){
			this.footsteps.play();
			soundPlaying = true;
		}
	}
   //Move right with D
	if (game.input.keyboard.isDown(Phaser.Keyboard.D)){
		this.scale.x *= 1;
		this.body.velocity.x = 200;
		this.leftFace = false;
		this.rightFace = true;

		if(!soundPlaying && hitPlatform){
			this.footsteps.play();
			soundPlaying = true;
		}
	}
	
	if(((!(game.input.keyboard.isDown(Phaser.Keyboard.D))) && (!game.input.keyboard.isDown(Phaser.Keyboard.A)) && soundPlaying) 
		|| (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) || (this.body.velocity.y != 0)){
		this.footsteps.stop();
		soundPlaying = false;
	}

	// Jump with SPACEBAR
	if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && hitPlatform && this.body.velocity.y == 0 && !holdingLadder){
		this.body.velocity.y = -200;
	}

}