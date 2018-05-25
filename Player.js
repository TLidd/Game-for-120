//This is the Player.js file
function Player(game, key, frame, xcoord, ycoord)
{
	Phaser.Sprite.call(this, game, xcoord, ycoord, key, frame);
	
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
	this.footsteps.volume = 0.1;
	// Enables physics
	game.physics.enable(this);
	//this.body.gravity.y = 1000;
	this.body.gravity.y = 300;
}

// Explicitly defines the prefab's prototype and constructor
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

// Now to override Phaser.Sprite's update to allow for movement
Player.prototype.update = function()
{
	//set vel to 0 when not moving
	this.body.velocity.x = 0;
	var hitPlatform = game.physics.arcade.collide(this, platforms);
	
	// Move left with A
	if (game.input.keyboard.isDown(Phaser.Keyboard.A))
	{
		this.body.velocity.x = -200;
		this.rightFace = false;
		this.leftFace = true;
		if(!tutorial.soundPlaying && hitPlatform){
			this.footsteps.play();
			tutorial.soundPlaying = true;
		}
	}
   //Move right with D
	if (game.input.keyboard.isDown(Phaser.Keyboard.D))
	{
		this.body.velocity.x = 200;
		this.leftFace = false;
		this.rightFace = true;
		if(!tutorial.soundPlaying && hitPlatform){
			this.footsteps.play();
			tutorial.soundPlaying = true;
		}
	}
	
	if(((!(game.input.keyboard.isDown(Phaser.Keyboard.D))) && (!game.input.keyboard.isDown(Phaser.Keyboard.A)) && tutorial.soundPlaying) 
		|| (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) || (this.body.velocity.y != 0)){
		this.footsteps.stop();
		tutorial.soundPlaying = false;
	}

	// Jump with SPACEBAR
	if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && hitPlatform && this.body.velocity.y == 0 && !holdingLadder)
	{
		this.body.velocity.y = -200;
	}

}