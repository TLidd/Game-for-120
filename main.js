/*
Main menu for game prototype build
5/8/2018
*/
var game = new Phaser.Game(800, 500, Phaser.AUTO);

   function preload() {

   }

   function create() {

   }

   function update() {

   }

	game.state.add('mainMenu', mainMenu);
	game.state.add('switch1', switch1);
	game.state.add('switch2', switch2);
	game.state.add('lvlOne', LevelOne);
	game.state.add('credits', credits);
	game.state.add('level2', level2);
	game.state.add('LevelSelect', LevelSelect);
	game.state.add('tutorialLevel', tutorial);
	game.state.start('mainMenu');