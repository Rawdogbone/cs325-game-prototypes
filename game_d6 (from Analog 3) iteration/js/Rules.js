"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeRules = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music2;
    var blackBox;
    var clickSound;

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
            blackBox = game.add.sprite(0,0,'black');
            blackBox.alpha = 0.6;

            // add enter key
            enterKey3 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            // MENU TEXT
            // Title Text
            // Title Text
            var style = { font: "bold 45px Consolas", fill: "#000", align: "center" };
            var text = game.add.text( game.world.centerX, 15, "Bridge It, Bridget...", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // Rules
            var rules = "The goal of this game is to build a bridge across\nthe grid as effciently as possible. Do this\nby keeping your score as low as possible using\nthe most efficient bridge pieces. Click on what\npiece you want then drag it where you want\n it to go. You can undo pieces you place.\nYour score is calculated as follows:\n\nScore = [(L OR J bricks*2) + (I-bricks*3) + (S OR Z bricks*1)] + total number of bricks\n\n Press 'Enter' to return to main menu.\n\nRules as follows:\nDONT stack endpieces\nDont build along shaded bars\nIf you cant solve, just refresh and try again.\n'GO' calculates your score when your\n bridge has been built (just eyeball it).\nHAVE FUN :)"
            var text3 = game.add.text(10, 25, rules, {font: "bold 16px Consolas", fill: '#ffe', align: "center"});
            text3.setTextBounds(0, 100, 800, 100);
            game.world.bringToTop(text3);
            text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            game.add.image(25,400,'I90');
            game.add.image(25,375,'S');
            game.add.image(80,450,'x');

            game.add.image(620,400,'I90');
            game.add.image(645,375,'S');
            game.add.image(675,450,'check');
    
        },
    
        update: function () {
            if (enterKey3.isDown){
                clickSound.play();
                mainMenu();
            }
        }
        
    };
};