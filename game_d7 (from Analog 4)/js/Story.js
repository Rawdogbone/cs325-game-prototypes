"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeStory = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music2;
    var clickSound;
    var black;
    var backButton;
    var temp;

    function mainMenu(pointer) {
        clickSound.play();
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
            black.scale.setTo(1,0.5);
            black.alpha = 0.6;
            temp = game.add.sprite(50, 400, 'ispy');
            temp.scale.setTo(0.5);
            temp = game.add.sprite(560, 400, 'ispy2');
            temp.scale.setTo(0.5);

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
            var rules = "For our last game, I wanted to make a game that payed homage to my childhhod, \nthat game turned out to be a book, specifically the iSpy books.\nI loved them as a kid and I wanted to make a game inspired from them.\n 'iSpy the Differences' attempts to take the well crafted themes of the iSpy books and combine them with\n anmation and movement along with the 'spot the difference' mechanic. \nI really enjoyed making this and I hope you enjoy it. \n\n NOTE: This is only like pre-alpha so just enjoy the scenes and music for now ;)";
            var text3 = game.add.text(75, 125, rules, {font: "20px pristina", fill: '#fff', align: "center"});
            game.world.bringToTop(text3);
            text3.setShadow(3, 3, 'rgba(0,0,0,0)', 5);

            // back button
            backButton = game.add.button(315,450, 'back', mainMenu, this, 2, 1, 0);
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