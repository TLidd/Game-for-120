/*
Level One state
5/12/2018
*/

var soundPlaying = false;
var holdingLadder;
var LevelOne = function(game){};
LevelOne.prototype = {
   preload: function(){
      //loading tilemap into tutorial level
      game.load.tilemap('level1', 'assets/levels/level1.json', null, Phaser.Tilemap.TILED_JSON);
      game.load.spritesheet('itemsHere', 'assets/img/items.png', 32, 32);
      
      //loading other assets
      game.load.image('door', 'assets/img/door.png');
      game.load.image('spike', 'assets/img/spike.png');
		game.load.spritesheet('player', 'assets/img/characterSprites.png', 32, 64);
      game.load.atlas('atlas','assets/img/spritesheet.png','assets/img/sprites.json');

      game.load.audio('music', 'assets/audio/Factory.ogg');
      game.load.audio('footsteps', 'assets/audio/Footsteps.ogg');    

      
   },
   create: function(){
      
      //creating the tilemap from json data
      map = game.add.tilemap('level1');
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
      //creating the spikeBlock group
      spikeBlock = game.add.group();
      spikeBlock.enableBody = true;
      //creating killSpike group
      killSpike = game.add.group();
      killSpike.enableBody = true;
      //creating the end goal Entrance
      Entrance = game.add.group();
      Entrance.enableBody = true;
      
      /*Below this comment is the code that changes within each different level,
      the code above stays the same besides the actual tilemap level */
      
      //Creating the ladders for the map
      var Ladder1 = new createLadder(game, 'atlas', 'ladder', 1230, 390, 0, 0, false);
      game.add.existing(Ladder1);
      Ladders.add(Ladder1);
      Ladder1.scale.setTo(1, 0.8);
      
      var Ladder2 = new createLadder(game, 'atlas', 'ladder', 1580, 800, -90, 300, true);
      game.add.existing(Ladder2);
      Ladders.add(Ladder2);
      Ladder2.scale.setTo(1, 1.2);
      
      var Ladder3 = new createLadder(game, 'atlas', 'ladder', 1650, 635, 0, 0, false);
      game.add.existing(Ladder3);
      Ladders.add(Ladder3);
      Ladder3.scale.setTo(1, 1.3);
      
      var Ladder4 = new createLadder(game, 'atlas', 'ladder', 1650, 440, 0, 0, false);
      game.add.existing(Ladder4);
      Ladders.add(Ladder4);
      Ladder4.scale.setTo(1, 1.3);
      
      var Ladder4 = new createLadder(game, 'atlas', 'ladder', 1320, 1252, 0, 0, false);
      game.add.existing(Ladder4);
      Ladders.add(Ladder4);
      
      var Ladder1 = new createLadder(game, 'atlas', 'ladder', 1102, 766, 0, 0, false);
      game.add.existing(Ladder1);
      Ladders.add(Ladder1);
      Ladder1.scale.setTo(1, 0.8);

      //Creating the boxes for the map
      var Box1 = new createBox(game, 'atlas', 'box', 330, 210);
      game.add.existing(Box1);
      Boxes.add(Box1);
      
      var Box2 = new createBox(game, 'atlas', 'box', 450, 240);
      game.add.existing(Box2);
      Boxes.add(Box2);
      
      var Box3 = new createBox(game, 'atlas', 'box', 600, 240);
      game.add.existing(Box3);
      Boxes.add(Box3);
      
      var Box4 = new createBox(game, 'atlas', 'box', 1650, 650);
      game.add.existing(Box4);
      Boxes.add(Box4);
      
      var Box5 = new createBox(game, 'atlas', 'box', 1504, 448);
      game.add.existing(Box5);
      Boxes.add(Box5);
      
      var Box5 = new createBox(game, 'atlas', 'box', 950, 600);
      game.add.existing(Box5);
      Boxes.add(Box5);
      
      var Box5 = new createBox(game, 'atlas', 'box', 1536, 1056);
      game.add.existing(Box5);
      Boxes.add(Box5);
      
      var Box5 = new createBox(game, 'atlas', 'box', 1586, 1056);
      game.add.existing(Box5);
      Boxes.add(Box5);
      
      var Box5 = new createBox(game, 'atlas', 'box', 1636, 1056);
      game.add.existing(Box5);
      Boxes.add(Box5);
      
      //adding beginningEntrance
      var beginningEntrance = game.add.sprite(96,64, 'door');
      
      //Adding the spikeBlocks
      var spike = spikeBlock.create(135, 132, 'spike');
      spike.body.moves = false;
      spikeBlock.add(spike);
      
      var spike = spikeBlock.create(167, 132, 'spike');
      spike.body.moves = false;
      spikeBlock.add(spike);
      
      //Kill spikes     
      var spike = killSpike.create(681, 419, 'spike');
      spike.body.moves = false;
      killSpike.add(spike);
      
      var spike = killSpike.create(713, 419, 'spike');
      spike.body.moves = false;
      killSpike.add(spike);
      
      var spike = killSpike.create(745, 419, 'spike');
      spike.body.moves = false;
      killSpike.add(spike);
      
      var xcoord = 841;
      var ycoord = 419;
      for(var i = 0; i < 13; i++){
         var spike = killSpike.create(xcoord, ycoord, 'spike');
         spike.body.moves = false;
         killSpike.add(spike);
         xcoord = xcoord + 32;
      }
      
      xcoord = 1161;
      ycoord = 819;
      for(var i = 0; i < 4; i++){
         var spike = killSpike.create(xcoord, ycoord, 'spike');
         spike.body.moves = false;
         spike.scale.setTo(1, 0.5);
         killSpike.add(spike);
         xcoord = xcoord + 32;
      }
      
      var spike = killSpike.create(1025, 1072, 'spike');
      spike.body.moves = false;
      killSpike.add(spike);
      spike.scale.setTo(1, 0.5);
      
      var spike = killSpike.create(1057, 1072, 'spike');
      spike.body.moves = false;
      killSpike.add(spike);
      spike.scale.setTo(1, 0.5);
      
      var spike = killSpike.create(1025, 1264, 'spike');
      spike.body.moves = false;
      killSpike.add(spike);
      spike.scale.setTo(1, 0.5);
      
      var spike = killSpike.create(1057, 1264, 'spike');
      spike.body.moves = false;
      killSpike.add(spike);
      spike.scale.setTo(1, 0.5);
      
      //x = door + 39, y = door + 68
      //spikes used for doorway detection because why not
      var col1 = Entrance.create(135, 996, 'spike');
      col1.body.moves = false;
      Entrance.add(col1);
      
      var col2 = Entrance.create(187, 996, 'spike');
      col2.body.moves = false;
      Entrance.add(col2);
            
      //add level goal that goes to next state     
      var levelGoal = game.add.sprite(96, 928, 'door');
      
      //adding player to the game via prefab
      player = new Player(game, 'player', 0, 250, 192);
      game.add.existing(player);
      
      //follow the player with the camera
      game.camera.follow(player);
      
      //bring these objects to top of game world
      game.world.bringToTop(spikeBlock);
      game.world.bringToTop(Boxes);
      
      //add music to game
      music = game.add.audio('music', true);
      music.volume = 0.1;
      music.play();

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
         game.state.start('lvlOne');
      }
      if(lose){
         player.footsteps.stop();
         music.stop();
         game.state.start('lvlOne');
      }     
      //to quit
      if(game.input.keyboard.justPressed(Phaser.Keyboard.Q)){
         player.footsteps.stop();
         music.stop();
         game.state.start('mainMenu');
      }
      
      if(game.input.keyboard.justPressed(Phaser.Keyboard.R)){
         player.footsteps.stop();
         music.stop();
         game.state.start('lvlOne');
      }
   }
}