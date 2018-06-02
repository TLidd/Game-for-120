/*
switch to main menu
6/1/2018
*/

var switch5 = function(game){};
switch5.prototype = {
   preload: function(){
      
   },
   create: function(){     
      //background color
      game.stage.backgroundColor = '000000';
      
      let textStyle = {
         font: 'Charter',
         fontSize: 80,
         fill: '#85C1E9',
         stroke: '#C0C0C0',
         strokeThickness: 6
      };
      
      //text for the end game
      gameover = game.add.text(game.world.centerX, game.world.centerY, 'Game Over!', textStyle);
      gameover.anchor.set(0.5, 0.5);
      game.camera.follow(gameover);
      game.time.events.add(Phaser.Timer.SECOND * 5, gobackMain, this);
   },
   update: function(){
      
   }
}

//function that changes the state
function gobackMain(){
   game.state.start('mainMenu');
}