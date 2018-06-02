//This is the Player.js file
function Player(game, key, frame, xcoord, ycoord){

}

// Explicitly defines the prefab's prototype and constructor
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

// Now to override Phaser.Sprite's update to allow for movement
Player.prototype.update = function(){


   // Jump with SPACEBAR
   if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && hitPlatform && this.body.velocity.y == 0 && !holdingLadder){
      this.body.velocity.y = -200;
   }

}