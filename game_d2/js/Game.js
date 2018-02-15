"use strict";
/** @param {Phaser.Game}game*/
GameStates.makeGame = function( game, shared ) {

    // Game Variables
    var wallpaper = null;
    var basket = null;
    var chicken0 = null;
    var chicken1 = null;
    var chicken2 = null;
    var chicken3 = null;
    var chicken4 = null;
    var score = 0;
    var scoreString = '';
    var scoreText;
    var updateInterval = Math.floor(Math.random() * 20) * 60;;
    var i = null;
    var timer = null;
    var timerEvent = null;
    var timerText = null;
    var total = null;
    var eggs;
    var music2 = null;

    function endTimer(){
        timer.stop();
    }
    function formatTime(s){
        var seconds =  "" + (s);
        return seconds;
    }

    function numGen(){
        var i = Math.floor(Math.random() * 5);
        var list = [90,230,380,540,680];
        return list[i];
    }

    function poop(){
        var egg = eggs.getFirstExists(false);

        if(egg){
            egg.frame = game.rnd.integerInRange(0,6);
            egg.exists= true;
            egg.reset(numGen(), 100); //90,230,380,540,680
            egg.body.bounce.y = 0.8;
        }
    }

    function checkBounds(egg){
        if(egg.y>600){
            egg.kill();        
        }
    }
    function scoreUp(body1, body2){
        body2.kill();
        score++;
        scoreText.setText(scoreString + score);
    }

    function quitGame() {

        score = 0
        game.state.start('MainMenu');

    }

    function endGame(){
        var temp = score;
        score = 0;
        game.state.start('End',true,false,temp,music2);
    }
    
    return {
        init: function(music){
            music2 = music;
        },
    
        create: function () {
            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.physics.arcade.gravity.y = 400;
        
            // LOAD VISUALS
            // load wallpaper for game
            wallpaper = game.add.tileSprite(0, 0, 800, 600, 'titlePage');
            game.physics.enable(wallpaper,Phaser.Physics.ARCADE);
            wallpaper.body.allowGravity = false;
            wallpaper.body.immovable = true;
            // load chicken0
            chicken0 = game.add.sprite(0,0,'chicken2');
            game.physics.enable(chicken0,Phaser.Physics.ARCADE);
            chicken0.body.allowGravity = false;
            chicken0.body.immovable = true;
            chicken0.scale.set(0.20);
            chicken0.anchor.setTo(-0.25, 0.1);
            // load chicken1
            chicken1 = game.add.sprite(0,0,'chicken2');
            game.physics.enable(chicken1,Phaser.Physics.ARCADE);
            chicken1.body.allowGravity = false;
            chicken1.body.immovable = true;
            chicken1.scale.set(0.20);
            chicken1.anchor.setTo(-1.25, 0.1);
            // load chicken2
            chicken2 = game.add.sprite(0,0,'chicken2');
            game.physics.enable(chicken2,Phaser.Physics.ARCADE);
            chicken2.body.allowGravity = false;
            chicken2.body.immovable = true;
            chicken2.scale.set(0.20);
            chicken2.anchor.setTo(-2.25, 0.1);
            // load chicken3
            chicken3 = game.add.sprite(0,0,'chicken2');
            game.physics.enable(chicken3,Phaser.Physics.ARCADE);
            chicken3.body.allowGravity = false;
            chicken3.body.immovable = true;
            chicken3.scale.set(0.20);
            chicken3.anchor.setTo(-3.25, 0.1);
            // load chicken4
            chicken4 = game.add.sprite(0,0,'chicken2');
            game.physics.enable(chicken4,Phaser.Physics.ARCADE);
            chicken4.body.allowGravity = false;
            chicken4.body.immovable = true;
            chicken4.scale.set(0.20);
            chicken4.anchor.setTo(-4.25, 0.1);
            // load basket
            basket = game.add.sprite(game.world.centerX,500,'basket3');
            basket.scale.setTo(0.1);

            // BASKET Properties
            // Turn on the arcade physics engine for basket
            game.physics.enable( basket, Phaser.Physics.ARCADE );
            // Make it bounce off of the world bounds.
            basket.body.collideWorldBounds = true;
            basket.body.allowGravity = false;
            basket.body.immovable = true;
            


            // TIMER Properties
            timer = game.time.create();
            timerEvent = timer.add(Phaser.Timer.SECOND * 30, endTimer, this);
            timer.start();

            

            // Spawn all eggs
            eggs = game.add.group();
            eggs.createMultiple(500, 'egg', 0, false);
            game.physics.arcade.enable(game.world, true);
            game.time.events.loop(350, poop, this);

            // SCORE Properties
            scoreString = 'Score : ';
            scoreText = game.add.text(10, 10, scoreString + score, { font: '15px Arial', fill: '#000000' });


            // When you click on the sprite, you go back to the MainMenu.
            basket.inputEnabled = true;
            basket.events.onInputDown.add( function() { quitGame(); }, this );

            
        },

        update: function () {
            // Assign arcade properties to basket (left and right slider)
            if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
            {
                basket.x -= 20;
                
            }
            else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
            {
                basket.x += 20;
            }
            
            // Timer 
            if (timer.running) {
                game.debug.text(formatTime("Time left:\n" + Math.round((timerEvent.delay - timer.ms) / 1000)), 20, 200, "#000000");
            }
            else {
                game.debug.text("GAME OVER!", 20, 200, "#000000");
                endGame();
            }

            game.physics.arcade.collide(basket, eggs, null, scoreUp, this);
            eggs.forEachAlive(checkBounds, this);
        }
    };
};
