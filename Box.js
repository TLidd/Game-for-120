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
	this.body.gravity.y = 300;
	this.body.velocity.x = 0;
	this.body.drag.setTo(1500, 0);
	
	
	this.hasBox = false;
}

// Explicitly defines the prefab's prototype and constructor
createBox.prototype = Object.create(Phaser.Sprite.prototype);
createBox.prototype.constructor = createBox;

// Now to override Phaser.Sprite's update to allow for movement
createBox.prototype.update = function()
{
	var haveBox = false;
	var skip = false;
   var playerCollision = game.physics.arcade.collide(this, player);
	var distance = Math.abs(player.x - this.x);
	
	if(!haveBox && game.input.keyboard.justPressed(Phaser.Keyboard.F) && !this.hasBox && playerCollision){
		this.hasBox = true;
		haveBox = true;
		skip = true;
	}
	if(this.hasBox){
		this.y = player.y - 10;
		this.body.gravity.y = 0;
		if(player.body.velocity.x > 0){
		   this.x = player.x + 35;
		}
		else if(player.body.velocity.x < 0){
			this.x = player.x - 35;
		}
	}
	if(!skip && this.hasBox && game.input.keyboard.justPressed(Phaser.Keyboard.F)){
		this.body.gravity.y = 300;
		this.hasBox = false;
		haveBox = false;
	}
	if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && playerCollision){
		player.body.velocity.y = -200;
	}
}
