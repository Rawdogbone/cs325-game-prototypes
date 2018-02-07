"use strict";

window.onload = function() {
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'. https://goo.gl/images/X3UH8D 
        game.load.image( 'background', 'assets/space.png' );
        // load background image https://pixabay.com/photo-2747226/
        game.load.image( 'logo', 'assets/city.png' );
        // load audio background https://www.youtube.com/watch?v=vxWhxA8nfH8
        game.load.audio('spacesound', 'assets/space_soundscape.mp3');

    }
    
    var bouncy;
    var spaceSound;
    
    function create() {
        // create background
        game.add.tileSprite(0, 0, 800, 600, 'background');
        // Change background color
        game.stage.backgroundColor = "#424242";
        // Create a sprite at the center of the screen using the 'logo' image.
        bouncy = game.add.sprite( game.world.centerX, game.world.centerY, 'logo' );
        // change the image to half the size
        bouncy.scale.setTo(0.5,0.5);
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        bouncy.anchor.setTo( 0.5, 0.5 );

        // audio setup
        spaceSound = game.add.audio('spacesound');
        spaceSound.play();
        
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( bouncy, Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
        bouncy.body.collideWorldBounds = true;
        
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "bold 45px Consolas", fill: "#FFFFFF", align: "center" };
        var text = game.add.text( game.world.centerX, 15, "Spin the World my G.", style );
        text.anchor.setTo( 0.5, 0.0 );
        // more text as a highlight
        var style = { font: "45px Consolas", fill: "#000000", align: "center" };
        var text = game.add.text( game.world.centerX, 15, "Spin the World my G.", style );
        text.anchor.setTo( 0.5, 0.0 );
    }
    
    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 60 pixels/second and moving no faster than 60 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        bouncy.rotation = game.physics.arcade.accelerateToPointer( bouncy, game.input.activePointer, 60, 60, 500 );
    }
};
