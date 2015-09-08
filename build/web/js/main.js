// We create our only state, called 'mainState'
var mainState = {
// We define the 3 default Phaser functions
    preload: function() {
        game.load.image('selector','assets/icon-selector.png')
// This function will be executed at the beginning
// That's where we load the game's assets
    },
    create: function() {
        game.stage.backgroundColor = '#3498db';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.cursor = game.input.keyboard.createCursorKeys();
        this.player = game.add.sprite( game.world.centerX,game.world.centerY, 'selector');
        game.physics.arcade.enable(this.player);
       // this.player.body.gravity.y = 500;


// This function is called after the preload function
// Here we set up the game, display sprites, etc.
    },
    update: function() {
       this.movePlayer();
// This function is called 60 times per second
// It contains the game's logic
    },
    movePlayer: function() {
// If the left arrow key is pressed
        if (this.cursor.left.isDown) {
// Move the player to the left
            this.player.body.velocity.x = -200;
        }
// If the right arrow key is pressed
        else if (this.cursor.right.isDown) {
// Move the player to the right
            this.player.body.velocity.x = 200;
        }
// If neither the right or left arrow key is pressed
        else {
// Stop the player
            this.player.body.velocity.x = 0;
        }
// If the up arrow key is pressed and the player is touching the ground
        if (this.cursor.up.isDown && this.player.body.touching.down) {
// Move the player upward (jump)
            this.player.body.velocity.y = -320;
        }
    },
// And here we will later add some of our own functions
};
var game = new Phaser.Game(20, 20, Phaser.AUTO, 'gameDiv');

game.state.add('main', mainState);

game.state.start('main');
