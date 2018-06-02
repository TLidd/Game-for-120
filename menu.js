/*
Main menu for game
5/8/2018
*/
var position = 3;
var mainMenu = function(game){};
mainMenu.prototype = {
   preload: function(){
      game.load.image('background', 'assets/img/background.png');
      game.load.image('pillar', 'assets/img/p1.png');
      game.load.audio('switch', 'assets/audio/zipclick.ogg');
   },
   create: function(){
      //simple background for prototype
      position = 4;
      var background = game.add.sprite(400,250, 'background');
      background.anchor.set(0.5,0.5)
      game.camera.follow(background);
      
      this.click = game.add.audio('switch', false);
      this.click.volume = 0.5;
      
      let textStyle = {
         font: 'Charter',
         fontSize: 80,
         fill: '#AC1616',
         stroke: '#121212',
         strokeThickness: 6
      };
      
      var p1 = game.add.sprite(100, 180, 'pillar');
      p1.scale.setTo(1, 1.2);
      
      var p1 = game.add.sprite(620, 180, 'pillar');
      p1.scale.setTo(1, 1.2);
      
      //Main menu text to indicate the state
      mainMenuText = game.add.text(400, 150, 'Pyramid Schemer', textStyle);
      mainMenuText.anchor.set(0.5, 0.5);
      
      let textStyle2 = {
         font: 'Charter',
         fontSize: 30,
         fill: '#767676',
         stroke: '#121212',
         strokeThickness: 6
      };
      
      //main menu text
      startText = game.add.text(400, 230, 'Start', textStyle2);
      startText.anchor.set(0.5, 0.5);
      
      w = game.add.text(230, 260, 'W');
      w.anchor.set(0.5, 0.5);
      w.font = 'Charter';
      w.fontSize = 30;
      
      underlineText = game.add.text(400, 238, '_____', textStyle2);
      underlineText.anchor.set(0.5, 0.5);
      
      levelSelectorText = game.add.text(400, 300, 'Level Select', textStyle2);
      levelSelectorText.anchor.set(0.5, 0.5);
      
      up = game.add.text(230, 310, '↑');
      up.anchor.set(0.5, 0.5);
      up.font = 'Charter';
      up.fontSize = 35;
      
      down = game.add.text(230, 370, '↑');
      down.anchor.set(0.5, 0.5);
      down.font = 'Charter';
      down.fontSize = 35;
      down.angle = 180;
      
      tutorialText = game.add.text(400, 370, 'Tutorial', textStyle2);
      tutorialText.anchor.set(0.5, 0.5);
      
      s = game.add.text(230, 420, 'S');
      s.anchor.set(0.5, 0.5);
      s.font = 'Charter';
      s.fontSize = 30;
      
      tutorialText = game.add.text(400, 440, 'Credits', textStyle2);
      tutorialText.anchor.set(0.5, 0.5);
      
      //how to switch the state of the game text
      underText = game.add.text(400, 444, '____________________');
      underText.fontSize = 80;
      underText.anchor.set(0.5, 0.5);
   
   },
   update: function(){
      let textStyle2 = {
         font: 'Charter',
         fontSize: 30,
         fill: '#767676',
         stroke: '#121212',
         strokeThickness: 6
      };

      if(game.input.keyboard.justPressed(Phaser.Keyboard.W) && position != 4){
         this.click.play();
         position++;
      }
      else if(game.input.keyboard.justPressed(Phaser.Keyboard.S) && position != 1){
         this.click.play();
         position--;
      }
         
      if(position == 4){
         underlineText.destroy();
         underlineText = game.add.text(400, 238, '_____', textStyle2);
         underlineText.anchor.set(0.5, 0.5);
      }
      else if(position == 3){
         underlineText.destroy();
         underlineText = game.add.text(400, 308, '____________', textStyle2);
         underlineText.anchor.set(0.5, 0.5);
      }
      else if(position == 2){
         underlineText.destroy();
         underlineText = game.add.text(400, 378, '________', textStyle2);
         underlineText.anchor.set(0.5, 0.5);
      }
      else{
         underlineText.destroy();
         underlineText = game.add.text(400, 448, '_______', textStyle2);
         underlineText.anchor.set(0.5, 0.5);
      }
      //select with space or enter
      if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) || game.input.keyboard.justPressed(Phaser.Keyboard.ENTER)){
         if(position == 4){
            game.state.start('switch2');
         }
         else if(position == 3){
            game.state.start('LevelSelect');
         }
         else if(position == 2){
            game.state.start('tutorialLevel');
         }
         else{
            game.state.start('credits');
         }
      }
   }
}
