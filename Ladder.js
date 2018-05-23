/*
Ladder prefab for game prototype build
5/22/2018
*/
function createLadder(game, key, frame, xcoord, ycoord){
	Phaser.Sprite.call(this, game, xcoord, ycoord, key, frame);
	
	// Custom properties
	this.anchor.set(0.5, 1);
	this.x = xcoord;
	this.y = ycoord;
	
	// Enables physics
	game.physics.enable(this);
	this.collideWorldBounds = true;
	this.body.drag.setTo(1500, 0);
		
	this.hasLadder = false;
}

// Explicitly defines the prefab's prototype and constructor
createLadder.prototype = Object.create(Phaser.Sprite.prototype);
createLadder.prototype.constructor = createLadder;

// Now to override Phaser.Sprite's update to allow for movement
createLadder.prototype.update = function(){
	//define variables for checking picking up and placing conditions
   holdingLadder = false;
	var skip = false;
	var skip2;
   var playerOverlap = game.physics.arcade.overlap(this, player);

	//to pickup the ladder
	if(!player.hasItem && !skip2 && game.input.keyboard.justPressed(Phaser.Keyboard.O) && !this.hasLadder && playerOverlap){
		this.hasLadder = true;
		skip = true;
		player.hasItem = true;
	}
	//if player isn't placing ladder this frame don't skip picking up next frame
	skip2 = false;
	
	//if player picked up ladder place ladder in arms
	if(this.hasLadder){
		this.y = player.y + 25;
		this.body.gravity.y = 0;
		if(player.body.velocity.x > 0){
		   this.x = player.x + 35;
		}
		else if(player.body.velocity.x < 0){
			this.x = player.x - 35;
		}
		holdingLadder = true;
	}
	
	//place ladder if player presses button
	if(player.hasItem && !skip && this.hasLadder && game.input.keyboard.justPressed(Phaser.Keyboard.P)){
		this.body.gravity.y = 300;
		this.hasLadder = false;
		skip2 = true;
		player.hasItem = false;
	}
		
}