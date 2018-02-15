"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeEnd = function( game, shared ) {

    var scoreResult = null;
    var musicTemp = null;
    var enterKey2 = null;
    function mainMenu(pointer) {

        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        

        //	And start the actual game
        game.state.start('MainMenu');

    }
    
    return {
        init: function(score, music){
            scoreResult = score
            musicTemp = music;
        },
    
        create: function () {
    
            game.add.sprite(0, 0, 'titlePage');
            // add enter key
            enterKey2 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            // MENU TEXT
            // Title Text
            var style = { font: "bold 45px Consolas", fill: "#000000", align: "center" };
            var text = game.add.text( game.world.centerX, 15, "Egg Drop!", style );
            text.anchor.setTo( 0.5, 0.0 );
            text.setShadow(3,3,'rgba(0,0,0,0,.5)',2);
            // Rules Text
            var style2 = { font: "bold 30px Consolas", fill: "#000000", align: "left" };
            var text2 = game.add.text(0,0, "You Scored: " + scoreResult, style2);
            text2.anchor.setTo( 0.0, 0.0 );

            // Rules
            var rules = "Thank you so much for playing,\nPress 'Enter' to go back to the \nMain Menu and try again!."
            var text3 = game.add.text(0, 480, rules, {font: "20px Consolas", fill: '#00000'});

            // particle effects
            var emitter = game.add.emitter(game.world.centerX, -50 , 1000);
            emitter.width = game.world.width;
            emitter.makeParticles('egg');
            emitter.angle = 0;

            emitter.minParticleScale = 0.05;
            emitter.maxParticleScale = 0.3;

            emitter.setYSpeed(0.00001,0.00001);
            emitter.setXSpeed(-20,20);

            emitter.minRotation = 0;
	        emitter.maxRotation = 0;

	        emitter.start(false,10000,5,0);
    
        },
    
        update: function () {
    
            if (enterKey2.isDown){
                musicTemp.stop();
                mainMenu();
            }

    
        }
        
    };
};