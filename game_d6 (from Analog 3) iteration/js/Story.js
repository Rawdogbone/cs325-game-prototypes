"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeStory = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music2;
    var blackBox;
    var source;
    var dest;
    var plane;
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
            clickSound =  game.add.audio('click');
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
            var rules = "You play as a pilot trying to maneuver\nthrough the clouds. You can't go back.\nMake it to the destination or else you die!\n\nPress 'Enter' to go back to Main Menu";
            var text3 = game.add.text(10, 75, rules, {font: "bold 16px Consolas", fill: '#ffe', align: "center"});
            game.world.bringToTop(text3);
            text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            source = game.add.image(100,500,'source');
            dest = game.add.image(625,500,'destination');

            plane = game.add.image(100,500,'plane2');
        
            //path
            game.add.image(125,500,'I');
            game.add.image(225,500,'J');
            game.add.image(300,500,'S');
            game.add.image(375,500,'Z');
            game.add.image(450,500,'L180');
            game.add.image(525,500,'I');

            // tween plane
            game.world.bringToTop(plane);
            game.add.tween(plane).to({ x: '+525'}, 4000, Phaser.Easing.Bounce.Out, true);
            
            // chart

            game.add.image(450,100,'I');
            game.add.image(575,75,'I90');

            var text3 = game.add.text(650, 100, "I Bricks", {font: "bold 16px Consolas", fill: '#ffe', align: "center"});
            game.world.bringToTop(text3);
            text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            game.add.image(325,250,'J');
            game.add.image(425,250,'J90');
            game.add.image(500,250,'J180');
            game.add.image(600,250,'J270');

            var text3 = game.add.text(650, 275, "J Bricks", {font: "bold 16px Consolas", fill: '#ffe', align: "center"});
            game.world.bringToTop(text3);
            text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            game.add.image(325,350,'L');
            game.add.image(425,350,'L90');
            game.add.image(500,350,'L180');
            game.add.image(600,350,'L270');

            var text3 = game.add.text(650, 375, "L Bricks", {font: "bold 16px Consolas", fill: '#ffe', align: "center"});
            game.world.bringToTop(text3);
            text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            game.add.image(25,250,'S');
            game.add.image(125,250,'S90');

            var text3 = game.add.text(200, 275, "S Bricks", {font: "bold 16px Consolas", fill: '#ffe', align: "center"});
            game.world.bringToTop(text3);
            text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            game.add.image(25,350,'Z');
            game.add.image(125,350,'Z90');

            var text3 = game.add.text(200, 375, "Z Bricks", {font: "bold 16px Consolas", fill: '#ffe', align: "center"});
            game.world.bringToTop(text3);
            text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            
        },
    
        update: function () {
            if (enterKey3.isDown){
                clickSound.play();
                mainMenu();
            }
        }
        
    };
};