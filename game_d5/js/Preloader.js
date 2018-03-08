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
            preloadBar = game.add.sprite(300, 400, 'preloaderBar');
    
            //	This sets the preloadBar sprite as a loader sprite.
            //	What that does is automatically crop the sprite from 0 to full-width
            //	as the files below are loaded in.
            game.load.setPreloadSprite(preloadBar);
    
            //	Here we load the rest of the assets our game needs.
            //	As this is just a Project Template I've not provided these assets, swap them for your own.
            game.load.image('titlePage', 'assets/kitchen3.jpg');
            game.load.audio('titleMusic', ['assets/theme.mp3']);
            // Load in-game assets
            game.load.audio('blop', ['assets/blop.mp3']);
            game.load.audio('crash', ['assets/crash.mp3']);
            game.load.audio('fart', ['assets/fart.mp3']);
            game.load.audio('smash', ['assets/smash.mp3']);
            game.load.audio('woosh', ['assets/woosh.mp3']);
            game.load.audio('yay', ['assets/yay.mp3']);
            game.load.audio('zoey', ['assets/zoey101.mp3']);
            game.load.image('avocado', 'assets/avocado.png');
            game.load.image('bacon', 'assets/bacon.png');
            game.load.image('bread', 'assets/bread.png');
            game.load.image('lettuce', 'assets/lettuce.png');
            game.load.image('sauce', 'assets/sauce.png');
            game.load.image('sp', 'assets/sp.png');
            game.load.image('play', 'assets/play.png');
            game.load.image('rules', 'assets/rules.png');
            game.load.image('back', 'assets/back.png');
            game.load.image('piratebay', 'assets/piratebay.png');
            game.load.image('steam', 'assets/steam.png');
            game.load.image('tomato', 'assets/tomato.png');
            game.load.image('teapot1', 'assets/teapot1.png');
            game.load.image('teapot2', 'assets/teapot2.png');
            game.load.image('teapot3', 'assets/teapot3.png');
            game.load.image('button', 'assets/button.png');
            game.load.image('next', 'assets/next.png');
            game.load.image('black', 'assets/black.jpg');
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
