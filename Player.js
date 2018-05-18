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

	// Enables physics
	game.physics.enable(this);
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
	}
   //Move right with D
	if (game.input.keyboard.isDown(Phaser.Keyboard.D))
	{
		this.body.velocity.x = 200;
		this.leftFace = false;
		this.rightFace = true;
	}

	// Jump with SPACEBAR
	if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && hitPlatform && this.body.velocity.y == 0)
	{
		this.body.velocity.y = -200;
	}

}