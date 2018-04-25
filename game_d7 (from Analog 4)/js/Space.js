"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeSpace = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music2;
    var clickSound;
    var vertBar;
    var hortBar;


    function mainMenu(pointer) {
        //	And start the actual game
        game.state.start('MainMenu',true,false,music2);

    }

    return {
        init: function(music){
            music2 = music;
        },
    
        create: function () {
            clickSound = game.add.audio('click');
            game.add.sprite(0, 0, 'titlePage');

            // add enter key
            enterKey3 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            //set wallpaper
            game.add.image(0,0,'spaceWallpaper');
            game.add.image(400,0,'spaceWallpaper');

            //set bars
            //set bars
            vertBar = game.add.image(400,-185,'bar');
            vertBar.angle += 90;
            hortBar = game.add.image(0,500,'bar');
            hortBar = game.add.image(400,500,'bar');


        },
    
        update: function () {
            if (enterKey3.isDown){
                clickSound.play();
                mainMenu();
            }
        }
        
    };
};