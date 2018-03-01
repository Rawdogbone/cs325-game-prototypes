"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeRules = function(game,shared) {

    var enterKey3 = null;
    var temp = null;

    function mainMenu(pointer) {
        //	And start the actual game
        game.state.start('MainMenu');

    }

    return {
        init: function(music){
        },
    
        create: function () {
            game.add.sprite(0, 0, 'titlePage');
            // add enter key
            enterKey3 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            // MENU TEXT
            // Title Text
            // Title Text
            var style = { font: "bold 45px Consolas", fill: "#000", align: "center" };
            var text = game.add.text( game.world.centerX, 15, "Before it Melts!", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // Rules
            var rules = "GOAL\n-Fill glass up with 28 ice cubes in the least amount of turns possible-\nHOW\n-Press 'Draw'. Here's what could show up:-\n-There are numbers 2,3,and 4-\n-There are symbols 'Popsicle' and 'Sandals'-\n\n-Ice cubes are awarded in the following fashion:-\n-Pair of symbols (e.g. two popsicles): 1 ice cube-\n-Triple of any number or symbol: 3 ice cubes-\n-Four of a kind for any number or symbol: 4 ice cubes-\n-Two pair(e.g. pair of this and a pair of that): 2 ice cubes-\n-Straight (e.g. 2,3,4,popsicle OR 3,4,popsicle,sandals): 4 ice cubes-\n\n-Press hold to save what you want, then press 'Deal'-\n-You are then awarded your ice cubes, that is one turn-\n-BEWARE: you must be fast, ice cubes will melt!\n\nPress 'Enter' to return to menu."
            var text3 = game.add.text(100, 50, rules, {font: "bold 16px Consolas", fill: '#000', align: "center"});
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