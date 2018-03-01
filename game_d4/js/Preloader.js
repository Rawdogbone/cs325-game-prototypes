"use strict";
/** @param {Phaser.Game} game*/
GameStates.makePreloader = function( game ) {

	var background = null;
	var preloadBar = null;

	var ready = false;

    return {
    
        preload: function () {
    
            //	These are the assets we loaded in Boot.js
            //	A nice sparkly background and a loading progress bar
            background = game.add.sprite(0,0, 'preloaderBackground');
            preloadBar = game.add.sprite(100, 400, 'preloaderBar');
    
            //	This sets the preloadBar sprite as a loader sprite.
            //	What that does is automatically crop the sprite from 0 to full-width
            //	as the files below are loaded in.
            game.load.setPreloadSprite(preloadBar);
    
            //	Here we load the rest of the assets our game needs.
            //	As this is just a Project Template I've not provided these assets, swap them for your own.
            game.load.image('titlePage', 'assets/wallpaper3.jpg');
            game.load.audio('titleMusic', ['assets/June.mp3']);
            // Load in-game assets
            game.load.image('wallpaper2', 'assets/wallpaper2.jpg');
            game.load.image('2', 'assets/2.png');
            game.load.image('3', 'assets/3.png');
            game.load.image('4', 'assets/4.png');
            game.load.image('5', 'assets/5.png');
            game.load.image('6', 'assets/6.png');
            game.load.image('7', 'assets/7.png');
            game.load.image('8', 'assets/8.png');
            game.load.image('9', 'assets/9.png');
            game.load.image('highlight', 'assets/highlight.png');
            game.load.image('hold', 'assets/hold.png');
            game.load.image('deal', 'assets/deal.png');
            game.load.image('draw', 'assets/draw.png');
            game.load.image('reset', 'assets/reset.png');
            game.load.image('arrow', 'assets/arrow.png');
            game.load.audio('july', ['assets/July.mp3']);
            game.load.audio('august', ['assets/August.mp3']);
            game.load.audio('clickSound', ['assets/click.mp3']);
            game.load.audio('iceSound', ['assets/ice.mp3']);
            game.load.audio('meltSound', ['assets/melt.mp3']);

            game.load.image('beach', 'assets/beach.png');
            game.load.image('castle', 'assets/castle.png');
            game.load.image('hot', 'assets/hot.png');
            game.load.image('sunny', 'assets/sunny.png');

            game.load.image('glass2', 'assets/glass2.png');

            game.load.image('ice', 'assets/ice.png');
            game.load.image('ice2', 'assets/ice2.png');
            
            game.load.audio('July','assets/July.mp3');
            game.load.audio('August','assets/August.mp3');

            game.load.image('play', 'assets/play.png');
            game.load.image('back', 'assets/back.png');
            game.load.image('rules', 'assets/rules.png');


            game.load.image('bar', 'assets/bar.png');
            
        },
    
        create: function () {
    
            //	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
            preloadBar.cropEnabled = false;
    
        },
    
        update: function () {
    
            //	You don't actually need to do this, but I find it gives a much smoother game experience.
            //	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
            //	You can jump right into the menu if you want and still play the music, but you'll have a few
            //	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
            //	it's best to wait for it to decode here first, then carry on.
            
            //	If you don't have any music in your game then put the game.state.start line into the create function and delete
            //	the update function completely.
            
            if (game.cache.isSoundDecoded('titleMusic') && ready == false)
            {
                ready = true;
                game.state.start('MainMenu'); 
            }
        }
    
    };
};
