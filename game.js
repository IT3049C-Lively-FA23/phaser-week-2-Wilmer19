// Create our only scene called mainScene, in the game.js file
class mainScene {
    // The three methods currently empty
  
    preload() {
      // This method is called once at the beginning
      // It will load all the assets, like sprites and sounds 
      // Parameters: name of the sprite, path of the image
        this.load.image('player', 'assets/player.png'); 
        this.load.image('coin', 'assets/coin.png');
    }
    create() {
      // This method is called once, just after preload()
      // It will initialize our scene, like the positions of the sprites
      // Parameters: x position, y position, name of the sprite
        this.player = this.physics.add.sprite(100, 100, 'player');
        this.coin = this.physics.add.sprite(300, 300, 'coin');

      // Store the score in a variable, initialized at 0
        this.score = 0;

      // The style of the text 
      // A lot of options are available, these are the most important ones
        let style = { font: '20px Arial', fill: '#fff' };

      // Display the score in the top left corner
      // Parameters: x position, y position, text, style
        this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);

        this.arrow = this.input.keyboard.createCursorKeys();
    }
    update() {
      // This method is called 60 times per second after create() 
      // It will handle all the game's logic, like movements
    }
  }

  new Phaser.Game({
    width: 700, // Width of the game in pixels
    height: 400, // Height of the game in pixels
    backgroundColor: '#3498db', // The background color (blue)
    scene: mainScene, // The name of the scene we created
    physics: { default: 'arcade' }, // The physics engine to use
    parent: 'game', // Create the game inside the <div id="game"> 
  });