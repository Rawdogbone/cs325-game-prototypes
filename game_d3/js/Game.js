"use strict";
/** @param {Phaser.Game}game*/
GameStates.makeGame = function( game, shared ) {

    var wallpaper = null;
    var player = null;
    var keys = {};
    var cursors = null;
    var invisWall1 = null;
    var invisWall2 = null;
    
    // fix locked arrow keys
    window.addEventListener("keydown",
        function(e){
            keys[e.keyCode] = true;
            switch(e.keyCode){
                case 37: case 39: case 38:  case 40: // Arrow keys
                case 32: e.preventDefault(); break; // Space
                default: break; // do not block other keys
            }
        },
    false);
    window.addEventListener('keyup',
        function(e){
            keys[e.keyCode] = false;
        },
    false);

    function react(){
        player.y +=5;
    }
    

    function quitGame() {
        game.state.start('MainMenu');

    }

    function endGame(){
        
        game.state.start('End');
    }
    
    return {
        init: function(music){
            
        },
    
        create: function () {
            game.physics.startSystem(Phaser.Physics.ARCADE);

            //load wallpaper
            wallpaper = game.add.tileSprite(0, 0, 800, 600, 'theater3');

            // load invisble walls
            invisWall1 = game.add.sprite(100, 100, 'tomato');
            invisWall1.scale.setTo(0.1);
            game.physics.enable( invisWall1, Phaser.Physics.ARCADE );
            invisWall1.body.collideWorldBounds = true;
            invisWall1.body.bounce.setTo(1, 1);
            invisWall1.body.immovable = true;

            //	Enable ARCADE physics
	        game.physics.startSystem(Phaser.Physics.ARCADE);

            //load player
            player = game.add.sprite(game.world.centerX,game.world.centerY,'pianoPlayer');
            game.physics.enable(player,Phaser.Physics.ARCADE);
            player.scale.set(0.1);
            player.body.collideWorldBounds = true;
            
	        
            game.physics.arcade.enable(game.world, true);
            cursors = game.input.keyboard.createCursorKeys();
        },

        update: function () {
            //movement

            if (cursors.left.isDown)
            {
                player.x -= 5;
            }
            else if (cursors.right.isDown)
            {
                player.x += 5;
            }

            if (cursors.up.isDown)
            {
                player.y -= 5;
            }
            else if (cursors.down.isDown)
            {
                player.y += 5;
            }
            game.physics.arcade.collide(player, invisWall1, null, react, this);
        }
    };
};
