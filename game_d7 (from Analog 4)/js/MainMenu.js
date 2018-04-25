"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeMainMenu = function( game, shared ) {

	var music3 = null;
    var playButton = null;
    var enterKey = null;
    var playButton;
    var rulesButton;
    var storyButton;
    var clickSound;
    var emitter;

    
    function startGame(pointer) {
        clickSound.play();
        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)

        //	And start the actual game
        game.state.start('Levels', true, false,music3);

    }

    function rules(){
        clickSound.play();
        game.state.start('Rules',true,false,music3);
    }

    function story(){
        clickSound.play();
        game.state.start('Story',true,false,music3);
    }   
    
    function over(button){
        button.tint = 0xffffff * 0.5;
        button.scale.setTo(1.1);
    }

    function out(button){
        button.tint = 0xffffff;
        button.scale.setTo(1);
    }


    return {
    init: function(music){
        music3 = music;
    },
    create: function () {
            if(music3 == null){
                // play music
                music3 = game.add.audio('titleMusic');
                music3.loop = true;
                music3.play();
                music3.volume = 0.25;
            }

            clickSound = game.add.audio('click');
            
            game.add.sprite(0, 0, 'titlePage');

            // add enter key
            enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            //emitter
            emitter = game.add.emitter(game.world.centerX, -25, 100);
            emitter.width = 800;
            emitter.makeParticles(['bee', 'cane', 'coco', 'ghost', 'goldfish', 'rocket', 'beer']);
            emitter.minParticleSpeed.set(.5);
            emitter.maxParticleSpeed.set(2);
            emitter.setRotation(0, 25);
            emitter.setAlpha(0.3, 0.8);

            emitter.start(false, 5000, 100);
            
            
            // MENU TEXT
            // Title Text
            var style = { font: "bold 45px forte", fill: "#000", align: "center" };
            var text = game.add.text( game.world.centerX, 15, "iSpy the Differences!", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // version Num
            var style = { font: "bold 20px Consolas", fill: "#000", align: "center" };
            var text2 = game.add.text( game.world.centerX, 100, "version 1.0 Alpha", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            var style = { font: "17px forte", fill: "#000", align: "center" };
            var text3 = game.add.text( 585, 575, "A Game by Joseph Bessette", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text3.setShadow(3, 3, 'rgba(0,0,0,0)', 5);

            // Buttons
            playButton = game.add.button(300,250, 'play', startGame, this, 2, 1, 0);
            playButton.events.onInputOver.add(over,this,0,playButton);
            playButton.events.onInputOut.add(out,this,0,playButton);

            rulesButton = game.add.button(290, 350, 'rules', rules, this, 2, 1, 0);
            rulesButton.events.onInputOver.add(over,this,0,rulesButton);
            rulesButton.events.onInputOut.add(out,this,0,rulesButton);
            
            storyButton = game.add.button(280, 450, 'story', story, this, 2, 1, 0);
            storyButton.events.onInputOver.add(over,this,0,storyButton);
            storyButton.events.onInputOut.add(out,this,0,storyButton);
    
    
        },
    
        update: function () {
        }
        
    };
};
