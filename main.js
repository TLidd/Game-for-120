var game = new Phaser.Game(800, 400, Phaser.AUTO);

   function preload() {

   }

   function create() {

   }

   function update() {

   }

	game.state.add('mainMenu', mainMenu);
	game.state.add('tutorialLevel', tutorial);
	game.state.start('mainMenu');