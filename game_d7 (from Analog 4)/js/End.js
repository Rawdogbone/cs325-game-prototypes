"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeEnd = function( game, shared ) {
    var temp = null;
    var enterKey2 = null;
    var music = null;
    var mainButton;
    var levelButton;
    var emitter;
    var clickSound;

    function mainMenu(pointer) {
        clickSound.play();
        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        music.stop();

        //	And start the actual game
        game.state.start('MainMenu');

    }

    function level(){
        clickSound.play();
        music.stop();

        game.state.start('Levels');
    }

    return {
 
        create: function () {
            music = game.add.audio('victory');
            music.play();
            clickSound = game.add.audio('click');
            game.add.sprite(0, 0, 'titlePage');
            // add enter key
            enterKey2 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            // MENU TEXT
            // Title Text
            // Title Text
            var style = { font: "bold 45px forte", fill: "#000", align: "center" };
            var text = game.add.text( game.world.centerX, 15, "iSpy the Differences", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            // Rules Text
            var style2 = { font: "bold 40px forte", fill: "#000", align: "center" };
            var text2 = game.add.text(200,200, "LEVEL COMPLETE :)", style2);
            text2.anchor.setTo( 0.0, 0.0 );
            text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // version Num
            var style = { font: "bold 20px Consolas", fill: "#000", align: "center" };
            var text2 = game.add.text( game.world.centerX, 100, "version 1.0 Alpha", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            mainButton = game.add.button(150,300, 'main', mainMenu, this, 2, 1, 0);
            levelButton = game.add.button(150,400, 'level', level, this, 2, 1, 0);

            // emitter
            emitter = game.add.emitter(game.world.centerX, -25, 100);
            emitter.width = 800;
            emitter.makeParticles(['bee', 'cane', 'coco', 'ghost', 'goldfish', 'rocket', 'beer']);
            emitter.minParticleSpeed.set(.5);
            emitter.maxParticleSpeed.set(2);
            emitter.setRotation(0, 25);
            emitter.setAlpha(0.3, 0.8);

            emitter.start(false, 5000, 100);

        },
    
        update: function () {
            if (enterKey2.isDown){
                mainMenu();
            }
        }
        
    };
};