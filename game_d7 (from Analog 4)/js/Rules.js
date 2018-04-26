"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeRules = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music2;
    var clickSound;
    var black;
    var temp;
    var backButton;

    function mainMenu(pointer) {
        //	And start the actual game
        game.state.start('MainMenu',true,false,music2);

    }

    function backover(button){
        button.tint = 0xffffff * .5;
        button.scale.setTo(.85);
    }

    function backout(button){
        button.tint = 0xffffff;
        button.scale.setTo(.75);
    }

    return {
        init: function(music){
            music2 = music;
        },
    
        create: function () {
            clickSound =  game.add.audio('click');
            game.add.sprite(0, 0, 'titlePage');
            black = game.add.sprite(0,100, 'black');
            black.scale.setTo(1,0.6);
            black.alpha = 0.6;

            // add enter key
            enterKey3 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            // MENU TEXT
            // Title Text
            // Title Text
            var style = { font: "bold 45px forte", fill: "#000", align: "center" };
            var text = game.add.text( game.world.centerX, 15, "iSpy the Differences!", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // story
            var rules = "Click on whatever level you want to play and then\nlook for differences between the two sets. These differences could be\nanything like a different movement pattern, or that one image might\nbe on one set and not the other. When you see a difference, click on the difference.\n Once you see all the differences indicated by a count meter at the bottom, \nyou win that level :)\n\nNOTE: Since this is like pre-alpha, there are seven levels but \nthey are all basically the same in regards to their differences.";
            var text3 = game.add.text(100, 110, rules, {font: "24px pristina", fill: '#fff', align: "center"});
            game.world.bringToTop(text3);
            text3.setShadow(3, 3, 'rgba(0,0,0,0)', 5);

            // back button
            backButton = game.add.button(315,475, 'back', mainMenu, this, 2, 1, 0);
            backButton.scale.setTo(.75);
            backButton.events.onInputOver.add(backover,this,0,backButton);
            backButton.events.onInputOut.add(backout,this,0,backButton);
            
        },
    
        update: function () {
            if (enterKey3.isDown){
                clickSound.play();
                mainMenu();
            }
        }
        
    };
};