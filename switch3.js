/*
switch to level 3
5/31/2018
*/

var switch3 = function(game){};
switch3.prototype = {
   preload: function(){
      game.load.audio('end', 'assets/audio/Annulet of absorption.wav');
   },
   create: function(){
      
      sound = game.add.audio('end', false);
      sound.volume = 0.1;
      sound.play();
      
      //background color
      game.stage.backgroundColor = '000000';
      
      //text style for the text
      let textStyle = {
         font: 'Charter',
         fontSize: 80,
         fill: '#808080',
         stroke: '#C0C0C0',
         strokeThickness: 6
      };
      
      //text for the level
      levelText = game.add.text(game.world.centerX, game.world.centerY, 'LEVEL TWO', textStyle);
      levelText.anchor.set(0.5, 0.5);
      game.camera.follow(levelText);
      game.time.events.add(Phaser.Timer.SECOND * 5, startLevel3, this);
   },
   update: function(){
      
   }
}

//function that changes the state
function startLevel3(){
   game.state.start('level3');
}