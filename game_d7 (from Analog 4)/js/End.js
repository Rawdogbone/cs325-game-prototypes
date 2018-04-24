"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeEnd = function( game, shared ) {
    var temp = null;
    var gameOutcome = null;
    var enterKey2 = null;
    var music = null;
    var result;
    var resultNum;
    var iscore;
    var jscore;
    var lscore;
    var sscore;
    var zscore;

    function mainMenu(pointer) {

        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        music.stop();

        //	And start the actual game
        game.state.start('MainMenu');

    }

    return {
        init: function(num,i,j,l,s,z){
            resultNum = num;
            iscore = i;
            jscore = j;
            lscore = l;
            sscore = s;
            zscore = z; 
        },
    
        create: function () {
            music = game.add.audio('victory');
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
            var text2 = game.add.text(425,425, "Your Score: " + resultNum , style2);
            text2.anchor.setTo( 0.0, 0.0 );
            text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            //score text
            var style2 = { font: "bold 18px Consolas", fill: "#000", align: "center" };
            var text2 = game.add.text(425,460, "I Bricks: " + iscore + "    x 3 = " + iscore * 3 , style2);
            text2.anchor.setTo( 0.0, 0.0 );
            text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            var style2 = { font: "bold 18px Consolas", fill: "#000", align: "center" };
            var text2 = game.add.text(425,475, "J Bricks: " + jscore  + "    x 2 = " + jscore * 2, style2);
            text2.anchor.setTo( 0.0, 0.0 );
            text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            var style2 = { font: "bold 18px Consolas", fill: "#000", align: "center" };
            var text2 = game.add.text(425,490, "L Bricks: " + lscore + "    x 2 = " + lscore * 2, style2);
            text2.anchor.setTo( 0.0, 0.0 );
            text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            var style2 = { font: "bold 18px Consolas", fill: "#000", align: "center" };
            var text2 = game.add.text(425,505, "S Bricks: " + sscore + "    x 1 = " + sscore * 1, style2);
            text2.anchor.setTo( 0.0, 0.0 );
            text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            var style2 = { font: "bold 18px Consolas", fill: "#000", align: "center" };
            var text2 = game.add.text(425,520, "Z Bricks: " + zscore + "    x 2 = " + zscore * 1, style2);
            text2.anchor.setTo( 0.0, 0.0 );
            text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            var style2 = { font: "bold 18px Consolas", fill: "#000", align: "center" };
            var text2 = game.add.text(425,535, "Total Bricks:        " + (iscore + jscore + lscore + sscore + zscore), style2);
            text2.anchor.setTo( 0.0, 0.0 );
            text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // Rules
            var rules = "Thank you so much for playing,\nPress 'Enter' to go back to the \nMain Menu and try again!"
            var text3 = game.add.text(0, 480, rules, {font: "20px Consolas", fill: '#000'});
            text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // version Num
            var style = { font: "bold 20px Consolas", fill: "#000", align: "center" };
            var text = game.add.text( game.world.centerX, 100, "version 2.0", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

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