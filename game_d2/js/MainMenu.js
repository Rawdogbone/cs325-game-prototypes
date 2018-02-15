"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeMainMenu = function( game, shared ) {

    this.shared = 25;
	var music = null;
    var playButton = null;
    var enterKey = null;
    
    function startGame(pointer) {

        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        //music.stop();

        //	And start the actual game
        game.state.start('Game',true,false,music);

    }
    
    return {
    create: function () {
            music = game.add.audio('titleMusic');
            music.loop = true;
            music.play();
    
            game.add.sprite(0, 0, 'titlePage');

            // add enter key
            enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

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

            // MENU TEXT
            // Title Text
            var style = { font: "bold 45px Consolas", fill: "#000000", align: "center" };
            var text = game.add.text( game.world.centerX, 15, "Egg Drop!", style );
            text.anchor.setTo( 0.5, 0.0 );
            text.setShadow(3,3,'rgba(0,0,0,0,.5)',2);
            // Rules Text
            var style2 = { font: "bold 20px Consolas", fill: "#000000", align: "left" };
            var text2 = game.add.text(0.5,0.5, "Rules", style2);
            text2.anchor.setTo( 0.0, -17.0 );

            // Rules
            var rules = "Use the left and right arrow keys\nto move the basket and catch as many eggs \nas you can before the timer runs out.\n\nPress the 'Enter' key to begin :)"
            var text3 = game.add.text(0, 480, rules, {font: "15px Consolas", fill: '#00000'});
            //playButton = game.add.button( 303, 400, 'playButton', startGame, null, 'over', 'out', 'down');
    
        },
    
        update: function () {
    
            if (enterKey.isDown){
                startGame();
            }

    
        }
        
    };
};
