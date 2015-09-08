var loadState = {

	preload: function () {		
		// Add a loading label 
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		// Add a progress bar
		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);


        game.load.image('scoreBar', 'assets/scoreBar.png');
        game.load.image('pauseBtn', 'assets/pauseBtn.png');
        game.load.image('timeBarFill', 'assets/timeBarFill.png');
        game.load.image('timeBarFG', 'assets/timeBarFG.png');
        game.load.image('timeBarBG', 'assets/timeBarBG.png');
		game.load.image('turbine', 'assets/shooter.png');

		// ...
	},

	create: function() { 
		game.state.start('menu');
	}
};