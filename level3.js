/*
Level Two state
5/31/2018
*/

var soundPlaying = false;
var holdingLadder;
var level3 = function(game){};
level3.prototype = {


      //adding in audio
      game.load.audio('music', 'assets/audio/Factory.ogg');
      game.load.audio('footsteps', 'assets/audio/Footsteps.ogg');    

      
   },
   create: function(){
      
      //creating the tilemap from json data
      map = game.add.tilemap('level3');
      map.addTilesetImage('items', 'itemsHere');
      
      //Creating the layers from tilemap
      backgroundLayer = map.createLayer('Backdrop');
      Tile3Layer = map.createLayer('Tile Layer 3');
      mapLayer = map.createLayer('Collision Layer');
      mapLayer.resizeWorld();
      
      //collision of brickGround
      map.setCollisionBetween(248, 309, true, mapLayer);
      //collision of wall
      map.setCollisionBetween(341, 344, true, mapLayer);
      map.setCollisionBetween(372, 375, true, mapLayer);
      map.setCollisionBetween(403, 406, true, mapLayer);
      map.setCollisionBetween(434, 437, true, mapLayer);
      map.setCollisionBetween(465, 468, true, mapLayer);
      map.setCollisionBetween(496, 499, true, mapLayer);
      map.setCollisionBetween(527, 530, true, mapLayer);
      map.setCollisionBetween(558, 561, true, mapLayer);
      map.setCollisionBetween(589, 592, true, mapLayer);
      map.setCollisionBetween(620, 623, true, mapLayer);
      map.setCollisionBetween(651, 654, true, mapLayer);
      map.setCollisionBetween(682, 685, true, mapLayer);    
      //collision of cieling
      map.setCollisionBetween(345, 393, true, mapLayer);
      //collision of platforms
      map.setCollisionBetween(9, 15, true, mapLayer);
      map.setCollisionBetween(71, 77, true, mapLayer);
      map.setCollisionBetween(133, 139, true, mapLayer);

      
      //creating the box group
      Boxes = game.add.group();
      Boxes.enableBody = true;
      //creating the ladder group
      Ladders = game.add.group();
      Ladders.enableBody = true;
      //creating killSpike group
      killSpike = game.add.group();
      killSpike.enableBody = true;
      //creating the end goal Entrance
      Entrance = game.add.group();
      Entrance.enableBody = true;
      //creating the spikeBlock group
      spikeBlock = game.add.group();
      spikeBlock.enableBody = true;
      
      /*Below this comment is the code that changes within each different level,
      the code above stays the same besides the actual tilemap level */
      
      //Creating the ladders for the map
      var Ladder1 = new createLadder(game, 'atlas', 'ladder', 1492, 660, 0, 300, false);
      game.add.existing(Ladder1);
      Ladders.add(Ladder1);
      Ladder1.scale.setTo(1, 2);
      
      var Ladder2 = new createLadder(game, 'atlas', 'ladder', 148, 660, 0, 300, false);
      game.add.existing(Ladder2);
      Ladders.add(Ladder2);
      Ladder2.scale.setTo(1, 2);

      //Creating the boxes for the map
      var Box1 = new createBox(game, 'atlas', 'box', 1670, 899);


   },
   update: function(){     
      
      //setting up collision checks
      game.physics.arcade.collide(Boxes);
      game.physics.arcade.collide(Boxes, mapLayer);
      game.physics.arcade.collide(Ladders, mapLayer);
      game.physics.arcade.collide(player, spikeBlock);
      game.physics.arcade.collide(Boxes, spikeBlock);
      
      //check if win condition is met 
      var win = game.physics.arcade.overlap(player, Entrance);
      var lose = game.physics.arcade.collide(player, killSpike);
      if(win){
         player.footsteps.stop();
         music.stop();
         game.state.start('switch1');
      }
      if(lose){
         player.footsteps.stop();
         music.stop();
         game.state.start('level3');
      }     
      //to quit
      if(game.input.keyboard.justPressed(Phaser.Keyboard.Q)){
         player.footsteps.stop();
         music.stop();
         game.state.start('mainMenu');
      }
      //to restart
      if(game.input.keyboard.justPressed(Phaser.Keyboard.R)){
         player.footsteps.stop();
         music.stop();
         game.state.start('level3');
      }
   }
}