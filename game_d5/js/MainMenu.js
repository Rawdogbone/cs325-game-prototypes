"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeMainMenu = function( game, shared ) {

	var music = null;
    var playButton = null;
    var enterKey = null;
    var playButton;
    var rulesButton;
    
    function startGame(pointer) {

        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        music.stop();

        //	And start the actual game
        game.state.start('Game');

    }

    function rules(){
        music.stop();
        game.state.start('Rules');
    }
    
    return {
    create: function () {
            // play music
            music = game.add.audio('titleMusic');
            music.loop = true;
            music.play();
    
            game.add.sprite(0, 0, 'titlePage');

            // add enter key
            enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            // MENU TEXT
            // Title Text
            var style = { font: "bold 45px Consolas", fill: "#000", align: "center" };
            var text = game.add.text( game.world.centerX, 15, "Pirate-Steam-Sandwich!", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // Buttons
            playButton = game.add.button(350,475, 'play', startGame, this, 2, 1, 0);
            rulesButton = game.add.button(380, 420, 'rules', rules, this, 2, 1, 0);
            rulesButton.scale.setTo(.9);
            playButton.scale.setTo(2);

            // Rules
            
    
    
        },
    
        update: function () {
    
        }
        
    };
};
