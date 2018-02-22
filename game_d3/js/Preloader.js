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
            preloadBar = game.add.sprite(200, 400, 'preloaderBar');
    
            //	This sets the preloadBar sprite as a loader sprite.
            //	What that does is automatically crop the sprite from 0 to full-width
            //	as the files below are loaded in.
            game.load.setPreloadSprite(preloadBar);
    
            //	Here we load the rest of the assets our game needs.
            //	As this is just a Project Template I've not provided these assets, swap them for your own.
            game.load.image('titlePage', 'assets/theater.jpg');
            game.load.audio('titleMusic', ['assets/table4four.mp3']);
            // Load in-game assets
            game.load.image('wkey', 'assets/wkey.png');
            game.load.image('akey', 'assets/akey.png');
            game.load.image('skey', 'assets/skey.png');
            game.load.image('dkey', 'assets/dkey.png');
            game.load.image('pianoPlayer', 'assets/pianoPlayer.png');
            game.load.image('rose', 'assets/rose.png');
            game.load.image('tomato', 'assets/tomato.png');
            game.load.image('theater3', 'assets/theater3.png')
            game.load.audio('wsound', ['assets/a3.mp3']);
            game.load.audio('ssound', ['assets/c4.mp3']);
            game.load.audio('asound', ['assets/d4.mp3']);
            game.load.audio('dsound', ['assets/f3.mp3']);
            game.load.audio('yay', ['assets/yay.mp3']);
            game.load.audio('boo', ['assets/boo.mp3']);
            game.load.audio('pop', ['assets/pop.mp3']);
            game.load.audio('splat', ['assets/splat.mp3']);
            game.load.audio('bad', ['assets/bad note.mp3']);
            game.load.image('blackBox', 'assets/blackbox.jpeg')
            
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
                if(game.cache.isSoundDecoded('wsound') && game.cache.isSoundDecoded('ssound') && game.cache.isSoundDecoded('asound') && game.cache.isSoundDecoded('dsound')){
                    if(game.cache.isSoundDecoded('yay') && game.cache.isSoundDecoded('boo') && game.cache.isSoundDecoded('pop') && game.cache.isSoundDecoded('splat') && game.cache.isSoundDecoded('bad')){
                        ready = true;
                        game.state.start('MainMenu');
                    }
                    
                }    
            }
        }
    
    };
};
