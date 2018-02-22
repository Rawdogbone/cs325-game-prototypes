"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeMainMenu = function( game, shared ) {

    this.shared = 25;
	var music = null;
    var playButton = null;
    var enterKey = null;
    var box = null;
    
    function startGame(pointer) {

        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        music.stop();

        //	And start the actual game
        game.state.start('Game',true,false,music);

    }
    
    return {
    create: function () {
            // play music
            music = game.add.audio('titleMusic');
            music.loop = true;
            music.play();
    
            game.add.sprite(0, 0, 'titlePage');
            box = game.add.sprite(0,140,'blackBox');
            box.alpha = 100;
            box.scale.setTo(5, 1.15);


            // add enter key
            enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            // MENU TEXT
            // Title Text
            var style = { font: "bold 45px Consolas", fill: "#fff", align: "center" };
            var text = game.add.text( game.world.centerX, 15, "Sing It off!", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            // Rules
            var rules = "STORY:\nYour Goal.\n-Raise your love meter to 100 to win over the crowd.\nHow? \n-Press the corresponding WASD key you see on screen to raise the meter.\nSounds easy, whats the catch? \n-If you press the wrong key, the crowd will boo which grows\nyour hate meter and a tomato will be thrown at you. \nIf this tomato hits you, your hate meter will rise\neven more. If your hate meter reaches 100 before your love meter, you lose.\nYikes, help me out.\n -When you get a streak of notes correct, the crowd will cheer and throw a rose on the stage. \nPicking up this rose will further increase your love meter.\n How do I get roses and dodge tomatoes?\n-Use the arrow keys\nLet's Play.\n\n\n\n-Press 'Enter' to begin";
            var text3 = game.add.text(0, 50, rules, {font: "15px Consolas", fill: '#fff', align: "center"});
            text3.setTextBounds(0, 100, 800, 100);
            game.world.bringToTop(text3);


            // PARTICLE EFFECTS
            // tomatoes
            var emitter = game.add.emitter(game.world.centerX, -100 , 10);
            emitter.width = game.world.width;
            emitter.makeParticles('tomato');
            emitter.angle = 0;

            emitter.minParticleScale = 0.04;
            emitter.maxParticleScale = 0.04;

            emitter.setYSpeed(0.00001,0.00001);
            emitter.setXSpeed(-20,20);

            emitter.minRotation = 0;
            emitter.maxRotation = 200;
            

	        emitter.start(false,5000,5,0);


            // roses
            var emitter2 = game.add.emitter(game.world.centerX, -100 , 10);
            emitter2.width = game.world.width;
            emitter2.makeParticles('rose');
            emitter2.angle = 0;

            emitter2.minParticleScale = 0.04;
            emitter2.maxParticleScale = 0.04;

            emitter2.setYSpeed(0.00001,0.00001);
            emitter2.setXSpeed(-20,20);

            emitter2.minRotation = 0;
	        emitter2.maxRotation = 100;

	        emitter2.start(false,5000,5,0);
    
    
        },
    
        update: function () {
    
            if (enterKey.isDown){
                startGame();
            }

    
        }
        
    };
};
