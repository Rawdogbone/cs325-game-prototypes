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
            game.load.image('titlePage', 'assets/wallpaper.jpg');
            game.load.audio('titleMusic', ['assets/theme.mp3']);
            game.load.image('ispy', 'assets/ispy.jpg');
            game.load.image('ispy2', 'assets/ispy2.jpg');

            //game buttons
            game.load.image('back','assets/back.png');
            game.load.image('play','assets/play.png');
            game.load.image('rules','assets/rules.png');
            game.load.image('story','assets/story.png');
            game.load.image('main','assets/main.png');
            game.load.image('level','assets/level.png');

            game.load.image('orange','assets/orange.jpg');
            game.load.image('red','assets/red.jpg');
            game.load.image('yellow','assets/yellow.jpg');
            game.load.image('lightblue','assets/lightblue.png');
            game.load.image('blue','assets/blue.jpg');
            game.load.image('black','assets/black.jpg');
            game.load.image('green','assets/green.jpg');


            game.load.image('check','assets/check.png');
            game.load.image('x','assets/x.png');

            //beehive
            game.load.image('bee','assets/beehive/bee.png');
            game.load.image('bee1','assets/beehive/bee1.png');
            game.load.image('bee2','assets/beehive/bee2.png');
            game.load.image('beehiveWallpaper','assets/beehive/beehive.jpg');
            game.load.image('beehive','assets/beehive/beehive.png');
            game.load.image('beehive1','assets/beehive/beehive1.png');
            game.load.image('honey','assets/beehive/honey.png');
            game.load.image('honeycomb','assets/beehive/honeycomb.png');
            game.load.audio('beehiveMusic', ['assets/beehive/beehive.mp3']);
            game.load.audio('beeMusic', ['assets/beehive/bee.mp3']);
            game.load.audio('bee1Music', ['assets/beehive/bee1.mp3']);
            game.load.audio('bee2Music', ['assets/beehive/bee2.mp3']);
            game.load.audio('honeyMusic', ['assets/beehive/honey.mp3']);
            game.load.audio('honeycombMusic', ['assets/beehive/honeycomb.mp3']);


            //christmas
            game.load.image('cane','assets/christmas/cane.png');
            game.load.image('christmasWallpaper','assets/christmas/christmas.jpg');
            game.load.image('gift','assets/christmas/gift.png');
            game.load.image('gift1','assets/christmas/gift1.png');
            game.load.image('lights','assets/christmas/lights.png');
            game.load.image('santa','assets/christmas/santa.png');
            game.load.image('snowman','assets/christmas/snowman.png');
            game.load.image('tree','assets/christmas/tree.png');
            game.load.audio('christmasMusic', ['assets/christmas/christmas.mp3']);
            game.load.audio('lightsMusic', ['assets/christmas/lights.mp3']);
            game.load.audio('gift1Music', ['assets/christmas/gift1.mp3']);
            game.load.audio('giftMusic', ['assets/christmas/gift.mp3']);
            game.load.audio('santaMusic', ['assets/christmas/santa.mp3']);
            game.load.audio('treeMusic', ['assets/christmas/tree.wav']);
            
            //easter
            game.load.image('coco','assets/easter/coco.png');
            game.load.image('chicken','assets/easter/chicken.png');
            game.load.image('egg','assets/easter/egg.png');
            game.load.image('egg1','assets/easter/egg1.png');
            game.load.image('egg2','assets/easter/egg2.png');
            game.load.image('egg3','assets/easter/egg3.png');
            game.load.image('rabbit','assets/easter/rabbit.png');
            game.load.audio('easterMusic', ['assets/easter/easter.mp3']);
            game.load.image('easterWallpaper','assets/easter/easter.jpg');
            game.load.audio('chickenMusic', ['assets/easter/chicken.mp3']);
            game.load.audio('cocoMusic', ['assets/easter/coco.mp3']);
            game.load.audio('eggMusic', ['assets/easter/egg.mp3']);
            game.load.audio('egg1Music', ['assets/easter/egg1.mp3']);
            game.load.audio('rabbitMusic', ['assets/easter/rabbit.mp3']);

            //halloween
            game.load.image('candy','assets/halloween/candy.png');
            game.load.image('castle','assets/halloween/castle.png');
            game.load.image('cat','assets/halloween/cat.png');
            game.load.image('ghost','assets/halloween/ghost.png');
            game.load.image('pumpkin','assets/halloween/pumpkin.png');
            game.load.image('spider','assets/halloween/spider.png');
            game.load.image('witch','assets/halloween/witch.png');
            game.load.image('halloweenWallpaper','assets/halloween/halloween.jpg');
            game.load.audio('halloweenMusic', ['assets/halloween/halloween.mp3']);
            game.load.audio('ghostMusic', ['assets/halloween/ghost.mp3']);
            game.load.audio('candyMusic', ['assets/halloween/candy.mp3']);
            game.load.audio('castleMusic', ['assets/halloween/castle.mp3']);
            game.load.audio('witchMusic', ['assets/halloween/witch.mp3']);
            game.load.audio('pumpkinMusic', ['assets/halloween/pumpkin.mp3']);

            //ocean
            game.load.image('crab','assets/ocean/crab.png');
            game.load.image('diving','assets/ocean/diving.png');
            game.load.image('dolphin','assets/ocean/dolphin.png');
            game.load.image('fish','assets/ocean/fish.png');
            game.load.image('goldfish','assets/ocean/goldfish.png');
            game.load.image('lobster','assets/ocean/lobster.png');
            game.load.image('whale','assets/ocean/whale.png');
            game.load.image('oceanWallpaper','assets/ocean/ocean.jpg');
            game.load.audio('oceanMusic', ['assets/ocean/ocean.mp3']);
            game.load.audio('crabMusic', ['assets/ocean/crab.mp3']);
            game.load.audio('dolphinMusic', ['assets/ocean/dolphin.mp3']);
            game.load.audio('divingMusic', ['assets/ocean/diving.mp3']);
            game.load.audio('goldfishMusic', ['assets/ocean/goldfish.mp3']);
            game.load.audio('whaleMusic', ['assets/ocean/whale.mp3']);


            //space
            game.load.image('alien','assets/space/alien.png');
            game.load.image('astronaut','assets/space/astronaut.png');
            game.load.image('earth','assets/space/earth.png');
            game.load.image('jupiter','assets/space/jupiter.png');
            game.load.image('rocket','assets/space/rocket.png');
            game.load.image('satellite','assets/space/satellite.png');
            game.load.image('startup','assets/space/startup.png');
            game.load.image('spaceWallpaper','assets/space/space.jpg');
            game.load.audio('spaceMusic', ['assets/space/space.mp3']);
            game.load.audio('alienMusic', ['assets/space/alien.mp3']);
            game.load.audio('astronautMusic', ['assets/space/astronaut.mp3']);
            game.load.audio('earthMusic', ['assets/space/earth.mp3']);
            game.load.audio('rocketMusic', ['assets/space/rocket.mp3']);
            game.load.audio('satelliteMusic', ['assets/space/satellite.mp3']);

            //st_paddys
            game.load.image('beer','assets/st_paddys/beer.png');
            game.load.image('beer1','assets/st_paddys/beer1.png');
            game.load.image('clover','assets/st_paddys/clover.png');
            game.load.image('gold','assets/st_paddys/gold.png');
            game.load.image('leprechaun','assets/st_paddys/leprechaun.png');
            game.load.image('leprechaun1','assets/st_paddys/leprechaun1.png');
            game.load.image('leprechaun2','assets/st_paddys/leprechaun2.png');
            game.load.image('st_paddysWallpaper','assets/st_paddys/st_paddys.jpg');
            game.load.audio('st_paddysMusic', ['assets/st_paddys/st_paddys.mp3']);
            game.load.audio('cloverMusic', ['assets/st_paddys/clover.mp3']);
            game.load.audio('goldMusic', ['assets/st_paddys/gold.mp3']);
            game.load.audio('leprechaunMusic', ['assets/st_paddys/leprechaun.mp3']);
            game.load.audio('leprechaun1Music', ['assets/st_paddys/leprechaun1.mp3']);
            game.load.audio('leprechaun2Music', ['assets/st_paddys/leprechaun2.mp3']);

            //extra sounds
            game.load.audio('click','assets/click.mp3');
            game.load.audio('pop','assets/pop.mp3');
            game.load.audio('clip','assets/clip.mp3');
            game.load.audio('victory','assets/victory.mp3');

            game.load.image('yellow','assets/yellow.jpg');
            game.load.image('bar','assets/bar.png');


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
