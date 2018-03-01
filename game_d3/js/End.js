"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeEnd = function( game, shared ) {
    var temp = null;
    var gameOutcome = null;
    var enterKey2 = null;
    var music = null;

    function mainMenu(pointer) {

        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        

        //	And start the actual game
        game.state.start('MainMenu');

    }

    return {
        init: function(num){
            temp = num;
            if(num == 0){
                gameOutcome = "You WIN :)"
            }
            else{
                gameOutcome = "You LOSE :("
            }
        },
    
        create: function () {
            game.add.sprite(0, 0, 'titlePage');
            // add enter key
            enterKey2 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            // MENU TEXT
            // Title Text
            // Title Text
            var style = { font: "bold 45px Consolas", fill: "#000", align: "center" };
            var text = game.add.text( game.world.centerX, 15, "Before it Melts!", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            // Rules Text
            var style2 = { font: "bold 30px Consolas", fill: "#fff", align: "center" };
            var text2 = game.add.text(400,300, gameOutcome, style2);
            text2.anchor.setTo( 0.0, 0.0 );

            // Rules
            var rules = "Thank you so much for playing,\nPress 'Enter' to go back to the \nMain Menu and try again!."
            var text3 = game.add.text(0, 480, rules, {font: "20px Consolas", fill: '#fff'});

            // particle effects
            var emitter = game.add.emitter(game.world.centerX, -50 , 1000);
            emitter.width = game.world.width;
            if(temp == 0){
                emitter.makeParticles('ice');
            }
            
            emitter.angle = 0;

            emitter.minParticleScale = 0.03;
            emitter.maxParticleScale = 0.04;

            emitter.setYSpeed(0.00001,0.00001);
            emitter.setXSpeed(-20,20);

            emitter.minRotation = 0;
	        emitter.maxRotation = 0;

            emitter.start(false,10000,5,0);

            // play music
            music = game.add.audio('titleMusic');
            music.loop = true;
            music.play();
    
        },
    
        update: function () {
            if (enterKey2.isDown){
                music.stop();
                mainMenu();
            }
        }
        
    };
};