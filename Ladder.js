/*
Ladder prefab for game prototype build
5/22/2018
*/
function createLadder(game, key, frame, xcoord, ycoord, angle, gravity, canHold){
	Phaser.Sprite.call(this, game, xcoord, ycoord, key, frame);
	
	// Custom properties
	this.scale.setTo(1,1.7);
	this.anchor.set(0.5, 1);
	this.x = xcoord;
	this.y = ycoord;
	
	// Enables physics
	game.physics.enable(this);
	this.collideWorldBounds = true;
	this.body.drag.setTo(1500, 0);
	this.angle = angle;
	this.body.gravity.y = gravity;
	
	this.hasLadder = false;
	//determines whether player can pickup ladder
	this.pickup = canHold;
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
	if(this.pickup && !player.hasItem && !skip2 && game.input.keyboard.justPressed(Phaser.Keyboard.O) && !this.hasLadder && playerOverlap){
		this.hasLadder = true;
		skip = true;
		player.hasItem = true;
		this.angle = 0;
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

	if(playerOverlap && !this.hasLadder && this.angle == 0){
	   if(playerOverlap && game.input.keyboard.isDown(Phaser.Keyboard.W)){
		   player.body.gravity.y = 0;
		   player.body.velocity.y = -100;
	   }
	   else if(playerOverlap && game.input.keyboard.isDown(Phaser.Keyboard.S)){
		   player.body.velocity.y = 100;
		   player.body.gravity.y = 0;
	   }
		else{
		   player.body.velocity.y = 0;
			player.body.gravity.y = 0;
		}
	}
	else if(!playerOverlap){
		player.body.gravity.y = 400;
	}
		
}