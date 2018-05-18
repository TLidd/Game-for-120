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
	//define variables for checking picking up and placing conditions
	var haveBox = false;
	var skip = false;
	var skip2;
   var playerCollision = game.physics.arcade.collide(this, player);
	var distancex = player.x - this.x;
	var distancey = Math.abs(player.y - this.y);
	
	//to pickup the boxd
	if(!skip2 && !haveBox && game.input.keyboard.justPressed(Phaser.Keyboard.F) && !this.hasBox && (Math.abs(distancex < 40)) && 
	((distancex < 0 && distancex > -50 && player.rightFace) || distancex > 0 && distancex < 50 && player.leftFace) && (distancey < 16)){
		this.hasBox = true;
		haveBox = true;
		skip = true;
	}
	
	//if player isn't placing box this frame don't skip picking up next frame
	skip2 = false;
	
	//if player picked up box place box in arms
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
	
	//place box if player presses button
	if(!skip && this.hasBox && game.input.keyboard.justPressed(Phaser.Keyboard.F)){
		this.body.gravity.y = 300;
		this.hasBox = false;
		haveBox = false;
		skip2 = true;
	}
	console.log(player.body.velocity.y)
	//jumping available to player if on box
	if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && playerCollision && Math.round(player.body.velocity.y) == 5){
		player.body.velocity.y = -200;
	}
	
}
