"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeLevels = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music2;
    var clickSound;
    var beehiveButton;
    var christmasButton;
    var easterButton;
    var halloweenButton;
    var oceanButton;
    var spaceButton;
    var st_paddysButton;
    var backButton;

    function halloweenLevel(){
        clickSound.play();
        music2.stop();
        game.state.start('Halloween');
    }

    function christmasLevel(){
        clickSound.play();
        music2.stop();
        game.state.start('Christmas');
    }

    function beehiveLevel(){
        clickSound.play();
        music2.stop();
        game.state.start('Beehive');
    }

    function easterLevel(){
        clickSound.play();
        music2.stop();
        game.state.start('Easter');
    }

    function oceanLevel(){
        clickSound.play();
        music2.stop();
        game.state.start('Ocean');
    }

    function spaceLevel(){
        clickSound.play();
        music2.stop();
        game.state.start('Space');
    }

    function st_paddysLevel(){
        clickSound.play();
        music2.stop();
        game.state.start('St_paddys');
    }

    function over(button){
        button.tint = 0xeeeeee * .5;
        button.scale.setTo(.33);
    }

    function out(button){
        button.tint = 0xffffff;
        button.scale.setTo(.3);
    }

    function backover(button){
        button.tint = 0xffffff * .5;
        button.scale.setTo(.85);
    }

    function backout(button){
        button.tint = 0xffffff;
        button.scale.setTo(.75);
    }

    function mainMenu(pointer) {
        //	And start the actual game
        clickSound.play();
        game.state.start('MainMenu',true,false,music2);

    }

    return {
        init: function(music){
            music2 = music;
        },
    
        create: function () {

            if(music2 == null){
                music2 = game.add.audio('titleMusic');
                music2.loop = true;
                music2.play();
                music2.volume = 0.25;
            }
            clickSound =  game.add.audio('click');
            game.add.sprite(0, 0, 'titlePage');

            // add enter key
            enterKey3 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            // MENU TEXT
            // Title Text
            var style = { font: "bold 45px forte", fill: "#000", align: "center" };
            var text = game.add.text( game.world.centerX, 15, "iSpy the Differences!", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // select Text
            var style = { font: "bold 35px forte", fill: "#000", align: "center" };
            var text = game.add.text( game.world.centerX, 515, "Select your level", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // back button
            backButton = game.add.button(600,450, 'back', mainMenu, this, 2, 1, 0);
            backButton.scale.setTo(.75);
            backButton.events.onInputOver.add(backover,this,0,backButton);
            backButton.events.onInputOut.add(backout,this,0,backButton);

            // level buttons
            halloweenButton = game.add.button(75,100, 'halloweenWallpaper', halloweenLevel, this, 2, 1, 0);
            halloweenButton.scale.setTo(.3);
            var style = { font: "20px forte", fill: "#000", align: "left" };
            var text = game.add.text( 135, 265, "Halloween", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            halloweenButton.events.onInputOver.add(over,this,0,halloweenButton);
            halloweenButton.events.onInputOut.add(out,this,0,halloweenButton);
            
            christmasButton = game.add.button(250,100, 'christmasWallpaper', christmasLevel, this, 2, 1, 0);
            christmasButton.scale.setTo(.3);
            var text = game.add.text( 310, 265, "Christmas", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            christmasButton.events.onInputOver.add(over,this,0,christmasButton);
            christmasButton.events.onInputOut.add(out,this,0,christmasButton);

            beehiveButton = game.add.button(425,100, 'beehiveWallpaper', beehiveLevel, this, 2, 1, 0);
            beehiveButton.scale.setTo(.3);
            var text = game.add.text( 485, 265, "Beehive", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            beehiveButton.events.onInputOver.add(over,this,0,beehiveButton);
            beehiveButton.events.onInputOut.add(out,this,0,beehiveButton);

            easterButton = game.add.button(600,100, 'easterWallpaper', easterLevel, this, 2, 1, 0);
            easterButton.scale.setTo(.3);
            var text = game.add.text( 655, 265, "Easter", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            easterButton.events.onInputOver.add(over,this,0,easterButton);
            easterButton.events.onInputOut.add(out,this,0,easterButton);

            oceanButton = game.add.button(75,310, 'oceanWallpaper', oceanLevel, this, 2, 1, 0);
            oceanButton.scale.setTo(.3);
            var text = game.add.text( 135, 475, "Ocean", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            oceanButton.events.onInputOver.add(over,this,0,oceanButton);
            oceanButton.events.onInputOut.add(out,this,0,oceanButton);

            spaceButton = game.add.button(250,310, 'spaceWallpaper', spaceLevel, this, 2, 1, 0);
            spaceButton.scale.setTo(.3);
            var text = game.add.text( 310, 475, "Space", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            spaceButton.events.onInputOver.add(over,this,0,spaceButton);
            spaceButton.events.onInputOut.add(out,this,0,spaceButton);

            st_paddysButton = game.add.button(425,310, 'st_paddysWallpaper', st_paddysLevel, this, 2, 1, 0);
            st_paddysButton.scale.setTo(.3);
            var text = game.add.text( 485, 475, "St. Patricks", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            st_paddysButton.events.onInputOver.add(over,this,0,st_paddysButton);
            st_paddysButton.events.onInputOut.add(out,this,0,st_paddysButton);
            
            game.add.image(435,125,'x');
            game.add.image(610,125,'x');
            game.add.image(85,335,'x');
            game.add.image(260,335,'x');
            game.add.image(435,335,'x');
            beehiveButton.inputEnabled = false;
            easterButton.inputEnabled = false;
            oceanButton.inputEnabled = false;
            spaceButton.inputEnabled = false;
            st_paddysButton.inputEnabled = false;


        },
    
        update: function () {
            if (enterKey3.isDown){
                clickSound.play();
                mainMenu();
            }
        }
        
    };
};