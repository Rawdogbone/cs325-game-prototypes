"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeEnd = function( game, shared ) {
    var temp = null;
    var gameOutcome = null;
    var enterKey2 = null;
    var music = null;
    var result;
    var resultNum;

    function mainMenu(pointer) {

        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        music.stop();

        //	And start the actual game
        game.state.start('MainMenu');

    }

    return {
        init: function(num){
            resultNum = num; 
        },
    
        create: function () {
            music = game.add.audio('titleMusic');
            music.play();
            game.add.sprite(0, 0, 'titlePage');
            // add enter key
            enterKey2 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            // MENU TEXT
            // Title Text
            // Title Text
            var style = { font: "bold 45px Consolas", fill: "#000", align: "center" };
            var text = game.add.text( game.world.centerX, 15, "Bridge It, Bridget...", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            // Rules Text
            var style2 = { font: "bold 30px Consolas", fill: "#000", align: "center" };
            var text2 = game.add.text(250,300, "Your Result: TBD (next version)" , style2);
            text2.anchor.setTo( 0.0, 0.0 );
            text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // Rules
            var rules = "Thank you so much for playing,\nPress 'Enter' to go back to the \nMain Menu and try again!"
            var text3 = game.add.text(0, 480, rules, {font: "20px Consolas", fill: '#000'});
            text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // particle effects
            var emitter = game.add.emitter(game.world.centerX, -50 , 50);
            emitter.width = game.world.width;
            emitter.makeParticles('plane1');
            
            emitter.angle = 0;

            emitter.minParticleScale = 0.5;
            emitter.maxParticleScale = 1.5;

            emitter.setYSpeed(0.00001,0.00001);
            emitter.setXSpeed(-20,20);

            emitter.minRotation = 0;
	        emitter.maxRotation = 0;

            emitter.start(false,5000,5,0);
    
        },
    
        update: function () {
            if (enterKey2.isDown){
                mainMenu();
            }
        }
        
    };
};