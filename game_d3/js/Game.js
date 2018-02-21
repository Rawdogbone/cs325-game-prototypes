"use strict";
/** @param {Phaser.Game}game*/
GameStates.makeGame = function( game, shared ) {

    var wallpaper = null;
    var player = null;
    var keys = {};
    var cursors = null;
    var invisWall1 = null;
    var invisWall2 = null;
    var wkey = null;
    var skey = null;
    var akey = null;
    var dkey = null;
    var timer = null;
    var lastDisplayKey = null;
    var wInput = null;
    var aInput = null;
    var sInput = null;
    var dInput = null;
    var score = 0;
    var scoreString = '';
    var scoreText;
    var score2 = 0;
    var scoreString2 = '';
    var scoreText2;
    

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

    function react2(){
        player.y -=5;
    }
    function react(){
        player.y +=5;
    }

    function showletter(){
        //clear letters
        wkey.alpha = 0;
        skey.alpha = 0;
        akey.alpha = 0;
        dkey.alpha = 0;
        // generate unique key
        var randomnum = game.rnd.integerInRange(0,3);
        // check if unique
        while(randomnum == lastDisplayKey){
            randomnum = game.rnd.integerInRange(0,3);
        }
        // remeber key for next generation
        lastDisplayKey = randomnum;
    
        //wkey
        if(randomnum == 0){
            wkey.alpha = 100;
        }
        //skey
        else if(randomnum == 1){
            akey.alpha = 100;
        } 
        //akey
        else if(randomnum == 2){
            skey.alpha = 100;
        }
        //dkey
        else{
            dkey.alpha = 100;
        }
    }

    function processLetter(junk, num){
        
        console.log(num + " : " + lastDisplayKey);
        if(num == lastDisplayKey){
            score++;
            scoreText.setText(scoreString + score);
        }
        else{
            score2++;
            scoreText2.setText(scoreString2 + score2);
        }
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
            invisWall1 = game.add.sprite(800, 300); // upper wall
            invisWall1.scale.setTo(0.1);
            invisWall1.width = game.world.width;
            game.physics.enable( invisWall1, Phaser.Physics.ARCADE );
            invisWall1.body.collideWorldBounds = true;
            invisWall1.body.immovable = true;

            invisWall2 = game.add.sprite(800, 500); // lower wall
            invisWall2.scale.setTo(0.1);
            invisWall2.width = game.world.width;
            game.physics.enable( invisWall2, Phaser.Physics.ARCADE );
            invisWall2.body.collideWorldBounds = true;
            invisWall2.body.immovable = true;

            //load player
            player = game.add.sprite(300,400,'pianoPlayer');
            game.physics.enable(player,Phaser.Physics.ARCADE);
            player.scale.set(0.1);
            player.body.collideWorldBounds = true;

            // load keys
            wkey = game.add.sprite(200,150, 'wkey');
            wkey.scale.setTo(0.1);
            wkey.alpha = 0;

            akey = game.add.sprite(300,150, 'akey');
            akey.scale.setTo(0.1);
            akey.alpha = 0;

            skey = game.add.sprite(400,150, 'skey');
            skey.scale.setTo(0.1);
            skey.alpha = 0;

            dkey = game.add.sprite(500,150, 'dkey');
            dkey.scale.setTo(0.1);
            dkey.alpha = 0;

            // begin timer
            timer = game.time.create(false);
            timer.loop(game.rnd.integerInRange(1000,2000),showletter, this);
            timer.start();
            
	        // initialize extra params
            game.physics.arcade.enable(game.world, true);
            cursors = game.input.keyboard.createCursorKeys();

            //add WASD keys
            wInput = game.input.keyboard.addKey(Phaser.Keyboard.W);
            aInput = game.input.keyboard.addKey(Phaser.Keyboard.A);
            sInput = game.input.keyboard.addKey(Phaser.Keyboard.S);
            dInput = game.input.keyboard.addKey(Phaser.Keyboard.D);
            wInput.onDown.add(processLetter, this, 0, 0);
            aInput.onDown.add(processLetter, this, 0, 1);
            sInput.onDown.add(processLetter, this, 0, 2);
            dInput.onDown.add(processLetter, this, 0, 3);

            //SCORE Properties
            scoreString = 'Love Meter: ';
            scoreText = game.add.text(10, 10, scoreString + score, { font: '15px Arial', fill: '#fff' });

            scoreString2 = 'Hate Meter: ';
            scoreText2 = game.add.text(700, 10, scoreString2 + score2, { font: '15px Arial', fill: '#fff' });
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

            // introduce physics
            game.physics.arcade.collide(player, invisWall1, null, react, this);
            game.physics.arcade.collide(player, invisWall2, null, react2, this);
  
        }
    };
};
