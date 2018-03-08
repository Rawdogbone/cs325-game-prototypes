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
            var text = game.add.text( game.world.centerX, 15, "Pirate-Steam-Sandwich!", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // Rules
            var rules = "Make RULES JOEY\n\nPress 'Enter' to return to menu."
            var text3 = game.add.text(450, 50, rules, {font: "bold 16px Consolas", fill: '#000', align: "center"});
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