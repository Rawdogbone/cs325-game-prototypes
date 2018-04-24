"use strict";

window.onload = function() {

	//	Create your Phaser game and inject it into the 'game' div.
	//	We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
	var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game' );

	//	Add the States your game has.
	//	You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
	
	// An object for shared variables, so that them main menu can show
	// the high score if you want.
	var shared = 0;
	
	game.state.add( 'Boot', GameStates.makeBoot( game ) );
	game.state.add( 'Preloader', GameStates.makePreloader( game ) );
	game.state.add( 'MainMenu', GameStates.makeMainMenu( game, shared ) );
	game.state.add( 'Game', GameStates.makeGame( game, shared ) );
	game.state.add( 'End', GameStates.makeEnd( game, shared ) );
	game.state.add( 'Rules', GameStates.makeRules(game,shared) );
	game.state.add( 'Story', GameStates.makeStory(game,shared) );
	game.state.add( 'Levels', GameStates.makeLevels(game,shared) );

	game.state.add( 'Halloween', GameStates.makeHalloween(game,shared) );
	game.state.add( 'Christmas', GameStates.makeChristmas(game,shared) );
	game.state.add( 'Easter', GameStates.makeEaster(game,shared) );
	game.state.add( 'Beehive', GameStates.makeBeehive(game,shared) );
	game.state.add( 'Ocean', GameStates.makeOcean(game,shared) );
	game.state.add( 'Space', GameStates.makeSpace(game,shared) );
	game.state.add( 'St_paddys', GameStates.makeSt_paddys(game,shared) );

	//	Now start the Boot state.
	game.state.start('Boot');

};
