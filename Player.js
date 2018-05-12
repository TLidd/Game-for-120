//This is the Player.js file
function Player(game, key, frame, gravity)
{
	Phaser.Sprite.call(this, game, 100, 100, key, frame);
	
	// Custom properties
	this.anchor.set(0.5, 0.5);
	this.body.gravity.y = gravity;
	
	this.hasBox = false;
	
	// Enables physics
	game.physics.enable(this);
}

// Explicitly defines the prefab's prototype and constructor
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

// Now to override Phaser.Sprite's update to allow for movement
Player.prototype.update = function()
{
	//MIGHT PUT COLLISION IN OTHER FILE
	var hittingBox = game.physics.arcade.collide(this, box);
	// Move left and right with A and D
	if (game.input.keyboard.justPressed(Phaser.Keyboard.A))
	{
		this.body.velocity.x = -50;
	}

	if (game.input.keyboard.justPressed(Phaser.Keyboard.D))
	{
		this.body.velocity.x = 50;
	}
	
	// Jump with SPACEBAR
	if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR))
	{
		this.body.velocity.y = 50
	}
	
	// Pick up and place things with F
	if (game.input.keyboard.justPressed(Phaser.Keyboard.F) && hittingBox && !hasBox)
	{
		box.destroy();
		this.hasBox = true;
	}
	else if(game.input.keyboard.justPressed(Phaser.Keyboard.F) && hasBox)
	{
		game.sprite.create(this.x + 10, this.y + 10, 'box');
		this.hasBox = false;
	}
}