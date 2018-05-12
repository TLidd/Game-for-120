// This is the Player.js file
function Player(game, key, frame, gravity)
{
	Phaser.Sprite.call(this, game, 100, 100, key, frame);
	
	// Custom properties
	this.anchor.set(0.5, 0.5);
	this.body.gravity.y = gravity;
	
	// Enables physics
	game.physics.enable(this);
}

// Explicitly defines the prefab's prototype and constructor
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

// Now to override Phaser.Sprite's update to allow for movement
Player.prototype.update = function()
{
	// Move left and right with A and D
	if (game.input.keyboard.justPressed(Phaser.Keyboard.A))
	{
		this.body.velocity.x = -50;
	}
	
	if (game.input.keyboard.justPressed(Phaser.Keyboard.D))
	{
		this.body.velocity.x = 50;
	}
	
	// Jump with W
	if (game.input.keyboard.justPressed(Phaser.Keyboard.W))
	{
		this.body.velocity.y = 50
	}
	
	// Pick up and throw things with L
	if (game.input.keyboard.justPressed(Phaser.Keyboard.L))
	{
		
	}
}