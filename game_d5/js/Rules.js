"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeRules = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music;
    var blackBox;

    function mainMenu(pointer) {
        music.stop();
        //	And start the actual game
        game.state.start('MainMenu');

    }

    return {
        init: function(music){
        },
    
        create: function () {
            music = game.add.audio('titleMusic');
            music.play();
            game.add.sprite(0, 0, 'titlePage');
            blackBox = game.add.sprite(0,0,'black');
            blackBox.alpha = 0.6;

            // add enter key
            enterKey3 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            // MENU TEXT
            // Title Text
            // Title Text
            var style = { font: "bold 45px Consolas", fill: "#000", align: "center" };
            var text = game.add.text( game.world.centerX, 15, "Pirate-Steam-Sandwich!", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // Rules
            var rules = "The goal of this game is to make the randomly \ngenerated sandwich you see at the top of the screen.\nYou will do this by solving math problems, fun right?\nFor example, for the first phase, you need a piece of bread,\nclick the answer to the math equation and when that answer is \ncorresponding to bread, you will get a 'yay'. This will proceed \nyou to the next phase of making the sandwich.\n\nNOTE: the teapot to the left will be spewing out 'steam' towards\nthe pirate bay ship, because steam fights piracy. The steam\nwill spew faster as you progress. Click the steam to make\nit disappear and keep the ships health above 0. If you manage \nthis and finish building your snadwich, you will win.\nOtherwise, you suck...\nControls: the mouse\n\nPress 'Enter' to return to menu."
            var text3 = game.add.text(120, 50, rules, {font: "bold 16px Consolas", fill: '#ffe', align: "center"});
            text3.setTextBounds(0, 100, 800, 100);
            game.world.bringToTop(text3);
            text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    
        },
    
        update: function () {
            if (enterKey3.isDown){
                mainMenu();
            }
        }
        
    };
};