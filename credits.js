/*
Credits screen for game
5/30/2018
*/

var credits = function(game){};
credits.prototype = {
   preload: function(){
      game.load.image('background', 'assets/img/background.png');
   },
   create: function(){
      
      var background = game.add.sprite(400,250, 'background');
      background.anchor.set(0.5,0.5)
      game.camera.follow(background);
      
      //textstyle for the text
      let textStyle = {
         font: 'Charter',
         fontSize: 40,
         fill: '#000000',
         stroke: '#000000',
         strokeThickness: 2
      };
      
      //creators of game
      makersText = game.add.text(400, 200, 'Created By: Tyler Liddicoat', textStyle);
      makersText.anchor.set(0.5, 0.5);
      makers2Text = game.add.text(535, 250, 'Dylan De La Cerda', textStyle);
      makers2Text.anchor.set(0.5, 0.5);
      makers3Text = game.add.text(480, 300, 'Casey Selzer', textStyle);
      makers3Text.anchor.set(0.5, 0.5);
      
      //events to change the creds
      game.time.events.add(Phaser.Timer.SECOND * 3, nextText, this); 
      game.time.events.add(Phaser.Timer.SECOND * 6, nextText2, this);   
      game.time.events.add(Phaser.Timer.SECOND * 9, nextText3, this);
      game.time.events.add(Phaser.Timer.SECOND * 12, endCredits, this);    
   },
   update: function(){
      //to quit
      if(game.input.keyboard.justPressed(Phaser.Keyboard.Q)){
         game.state.start('mainMenu');
      }
   }
}

function nextText(){
   makersText.kill();
   makers2Text.kill();
   makers3Text.kill();
   
   let textStyle = {
         font: 'Charter',
         fontSize: 40,
         fill: '#000000',
         stroke: '#000000',
         strokeThickness: 2
   };
   
   boxText = game.add.text(400, 225, 'Crate/Box created by Bluerobin2', textStyle);
   boxText.anchor.set(0.5, 0.5);
   boxText2 = game.add.text(400, 275, 'https://opengameart.org/content/small-crate', textStyle);
   boxText2.anchor.set(0.5,0.5);
}

function nextText2(){
   boxText.kill();
   boxText2.kill();
   
   let textStyle = {
         font: 'Charter',
         fontSize: 30,
         fill: '#000000',
         stroke: '#000000',
         strokeThickness: 2
   };
   
   soundText = game.add.text(400, 125, 'Footsteps sound created by Little Robot Sound Factory', textStyle);
   soundText.anchor.set(0.5, 0.5);
   soundText2 = game.add.text(400, 175, 'www.littlerobotsoundfactory.com', textStyle);
   soundText2.anchor.set(0.5,0.5);
   soundText3 = game.add.text(400, 325, 'Factory.ogg created by yd used for level music', textStyle); 
   soundText3.anchor.set(0.5,0.5);
   soundText4 = game.add.text(400, 375, 'https://opengameart.org/content/factory-ambiance', textStyle); 
   soundText4.anchor.set(0.5,0.5);
}

function nextText3(){
   soundText.kill();
   soundText2.kill();
   soundText3.kill();
   soundText4.kill();
   
   let textStyle = {
         font: 'Charter',
         fontSize: 30,
         fill: '#000000',
         stroke: '#000000',
         strokeThickness: 2
   };
   
   soundText = game.add.text(400, 125, 'Annulet of absorption (unchanged) created by CosmicD', textStyle);
   soundText.anchor.set(0.5, 0.5);
   soundText2 = game.add.text(400, 175, 'https://freesound.org/people/CosmicD/sounds/133008/', textStyle);
   soundText2.anchor.set(0.5,0.5);
   soundText3 = game.add.text(400, 325, 'zipclick.ogg created by dawith', textStyle); 
   soundText3.anchor.set(0.5,0.5);
   soundText4 = game.add.text(400, 375, 'https://opengameart.org/content/zippo-click-sound', textStyle); 
   soundText4.anchor.set(0.5,0.5);
}

function endCredits(){
   game.state.start('mainMenu');
}