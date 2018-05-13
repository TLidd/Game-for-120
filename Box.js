/*
Box prefab for game prototype build
5/12/2018
*/
function createBox(game, key, frame, xcoord, ycoord)
{
	Phaser.Sprite.call(this, game, xcoord, ycoord, key, frame);
	
	// Custom properties
	this.anchor.set(0.5, 0.5);
	this.x = xcoord;
	this.y = ycoord;
	
	// Enables physics
	game.physics.enable(this);
	//this.body.immovable = true;
	this.collideWorldBounds = true;
}

// Explicitly defines the prefab's prototype and constructor
createBox.prototype = Object.create(Phaser.Sprite.prototype);
createBox.prototype.constructor = createBox;

// Now to override Phaser.Sprite's update to allow for movement
createBox.prototype.update = function()
{
	var boxCollision = game.physics.arcade.collide(this, Boxes);
   var playerCollision = game.physics.arcade.collide(this, player);
	var platformCollision = game.physics.arcade.collide(this, platforms);
	//console.log(boxCollision);
	if(platformCollision){
		this.body.velocity.x = 0;
	}
	if(game.input.keyboard.justPressed(Phaser.Keyboard.F) && !hasBox && playerCollision){
		this.kill();
		hasBox = true;
	}
	if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && playerCollision){
		player.body.velocity.y = -200;
	}
}
