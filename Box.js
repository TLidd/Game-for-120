/*
Box prefab for game prototype build
5/12/2018
*/
function createBox(game, key, frame, xcoord, ycoord){
   Phaser.Sprite.call(this, game, xcoord, ycoord, key, frame);
   
   // Custom properties
   this.scale.setTo(1.1,1.1);
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
   this.deadBox = false;

}

// Explicitly defines the prefab's prototype and constructor
createBox.prototype = Object.create(Phaser.Sprite.prototype);
createBox.prototype.constructor = createBox;

// Now to override Phaser.Sprite's update to allow for movement
createBox.prototype.update = function(){
   //define variables for checking picking up and placing conditions
   var haveBox = false;
   var skip = false;
   var skip2 = false;
   var skip3 = false;
   var distancex = player.x - this.x;
   var distancey = Math.abs(player.y - this.y);
   var playerCollision = game.physics.arcade.collide(this, player);
   
   //to pickup the box
   if(!this.deadBox && !player.hasItem && !skip2 && !haveBox && game.input.keyboard.justPressed(Phaser.Keyboard.O) && !this.hasBox && (Math.abs(distancex < 40)) && 
   ((distancex < 0 && distancex > -55 && player.rightFace) || distancex > 0 && distancex < 55 && player.leftFace) && (distancey < 16)){
      this.hasBox = true;
      haveBox = true;
      skip = true;
      player.hasItem = true;
   }
   
   //if player isn't placing box this frame don't skip picking up next frame
   skip2 = false;
   
   //if player picked up box place box in arms
   if(this.hasBox){
      this.y = player.y - 10;
      this.body.gravity.y = 0;
      if(player.body.velocity.x > 0){
         this.x = player.x + 45;
      }
      else if(player.body.velocity.x < 0){
         this.x = player.x - 45;
      }
   }
   
   //place box if player presses button
   if(!skip && this.hasBox && game.input.keyboard.justPressed(Phaser.Keyboard.P)){
      this.body.gravity.y = 300;
      this.hasBox = false;
      haveBox = false;
      skip2 = true;
      player.hasItem = false;
   }
   
   //Throws the box in the direction the player is facing
   if(player.hasItem && this.hasBox && game.input.keyboard.justPressed(Phaser.Keyboard.L)){
      this.body.gravity.y = 300;
      if(player.rightFace){
         this.body.velocity.x = 900;
      }
      else{
         this.body.velocity.x = -900;
      }
      skip2 = true;
      player.hasItem = false;
      this.hasBox = false;
      haveBox = false;
   }

   //jumping available to player if on box

   if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && playerCollision){
      player.body.velocity.y = -200;
      skip3 = true;
   }

   if(playerCollision && this.deadBox && !skip3){
      player.body.velocity.y = -1;
   }
   
   var boxSpike = game.physics.arcade.collide(this, killSpike);
   if(boxSpike && !this.hasBox){
      this.body.moves = false;
      this.deadBox = true;
   }
}
