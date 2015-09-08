// We create our only state, called 'mainState'
var mainState = {
// We define the 3 default Phaser functions
    preload: function() {
        game.load.image('selector','assets/power.png');
        game.load.image('blade','assets/blade.png');
        game.load.image('tower','assets/pole_turbine.png');
        game.load.image('range_bar_empty','assets/range_bar_empty.png');
        game.load.image('range_bar_filled','assets/range_bar_filled.png');
        game.load.image('sele_button_green','assets/sele_button_green.png');
        game.load.image('sele_button_red','assets/sele_button_red.png');
        game.load.image('sele_button_blue','assets/sele_button_blue.png');
        game.load.image('sele_button_pink','assets/sele_button_pink.png');
// This function will be executed at the beginning
// That's where we load the game's assets
    },
    create: function() {
        game.stage.backgroundColor = '#3498db';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.cursor = game.input.keyboard.createCursorKeys();
        this.player = game.add.sprite( game.world.centerX,game.world.centerY, 'selector');
         blade_sprite = game.add.sprite( 100,100, 'blade');
        tower_sprite = this.player = game.add.sprite( 147,300, 'tower');
        game.physics.startSystem(Phaser.Physics.BOX2D);
        game.stage.backgroundColor = '#124184';
        game.physics.box2d.setBoundsToWorld();
        var ground = new Phaser.Physics.BOX2D.Body(this.game, null, game.world.centerX, 590, 0);
        ground.setRectangle(700, 20, 0, 0, 0);

        //this.player = game.add.sprite( 500,400, 'range_bar_empty');
      //  this.player = game.add.sprite( 550,400, 'range_bar_filled');
      //  this.player = game.add.sprite( 500,450, 'sele_button_pink');
      //  game.physics.arcade.enable(this.player);
       // this.player.body.gravity.y = 500;
// This function is called after the preload function
// Here we set up the game, display sprites, etc.
    },
    update: function() {
       //this.movePlayer();
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


    },
    render  :function(){
        game.debug.box2dWorld();
    }
// And here we will later add some of our own functions
};
//var game2 = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'gameDiv');
game.state.add('main', mainState);
game.state.start('main');
