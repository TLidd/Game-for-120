/*
Main menu for game prototype build
5/8/2018
*/
var game = new Phaser.Game(900, 500, Phaser.AUTO);

   function preload() {

   }

   function create() {

   }

   function update() {

   }

	game.state.add('mainMenu', mainMenu);
	game.state.add('lvlOne', LevelOne);
	game.state.add('tutorialLevel', tutorial);
	game.state.start('mainMenu');