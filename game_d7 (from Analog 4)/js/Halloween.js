"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeHalloween = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music;
    var clickSound;
    var vertBar;
    var hortBar;

    var ghostButton;
    var ghostButton2;
    var ghostTween;

    var candyButton;
    var candyButton2
    var candyTween;

    var pumpkinButton;
    var pumpkinButton2;
    var pumpkinTween;
    var pumpkinTween2;

    var witchButton;
    var witchButton2;
    var witchTween;
    var witchTween2;

    var castleButton;

    var tempButton;
    var tempTween;

    var ghostkey;
    var candykey;
    var pumpkinkey;
    var witchkey;
    var castlekey;

    var score = 5;
    var scoreString = '';
    var scoreText;

    var ghostSound;
    var candySound;
    var pumpkinSound;
    var witchSound;
    var castleSound;

    function ghost(){
        ghostSound.play();
        clickSound.play();
        ghostButton.inputEnabled = false;
        ghostButton2.inputEnabled = false;
        ghostTween.stop();
        ghostButton2.alpha = 1;
        score--;
        scoreText.setText(scoreString + score);
        ghostkey.alpha = 1;
        console.log(score);
    }

    function candy(){
        candySound.play();
        clickSound.play();
        candyButton.inputEnabled = false;
        candyButton2.inputEnabled = false;
        candyTween.stop();
        score--;
        scoreText.setText(scoreString + score);
        candykey.alpha = 1;
        console.log(score);
    }

    function pumpkin(){
        pumpkinSound.play();
        clickSound.play();
        pumpkinButton.inputEnabled = false;
        pumpkinButton2.inputEnabled = false;
        pumpkinTween.stop();
        pumpkinTween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        pumpkinkey.alpha = 1;
        console.log(score);
    }

    function witch(){
        witchSound.play();
        clickSound.play();
        witchButton.inputEnabled = false;
        witchButton2.inputEnabled = false;
        witchTween.stop();
        witchTween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        witchkey.alpha = 1;
        console.log(score);
    }

    function castle(){
        castleSound.play();
        clickSound.play();
        castleButton.inputEnabled = false;
        score--;
        scoreText.setText(scoreString + score);
        castlekey.alpha = 1;
        console.log(score);
    }

    function nonbutton(){
        clickSound.play();
    }
    function mainMenu(pointer) {
        //	And start the actual game
        music.stop();
        game.state.start('MainMenu');

    }

    function endGame(){
        ghostSound.stop(); 
        pumpkinSound.stop();
        castleSound.stop();
        witchSound.stop();
        candySound.stop();
        music.stop();
        score = 5;
        game.state.start('End');
    }

    return {  
        create: function () {
            music = game.add.audio('halloweenMusic');
            music.play();
            music.loop = true;
            music.volume = 0.25;

            clickSound = game.add.audio('click');
            ghostSound = game.add.audio('ghostMusic');
            pumpkinSound = game.add.audio('pumpkinMusic');
            castleSound = game.add.audio('castleMusic');
            witchSound= game.add.audio('witchMusic');
            candySound =  game.add.audio('candyMusic');
            ghostSound.volume = 0.25;    
            pumpkinSound.volume = 0.25; 
            castleSound.volume = 0.25; 
            witchSound.volume = 0.25; 
            candySound.volume = 0.25;        

            game.add.sprite(0, 0, 'orange');

            // add enter key
            enterKey3 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            //set wallpaper
            game.add.image(0,0,'halloweenWallpaper');
            game.add.image(400,0,'halloweenWallpaper');

            //set bars
            vertBar = game.add.image(400,-185,'bar');
            vertBar.angle += 90;
            hortBar = game.add.image(0,500,'bar');
            hortBar = game.add.image(400,500,'bar');

            //text
            var style = { font: "15px forte", fill: "#000", align: "center" };
            var text = game.add.text(75, 510, "Your Differences:", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0)', 5);

            scoreString = 'Differences Left: ';
            scoreText = game.add.text(525, 550, scoreString + score, { font: '30px forte', fill: '#000' });

            //add ghost
            ghostButton = game.add.button(50,300, 'ghost', ghost, this, 2, 1, 0);
            ghostButton2 = game.add.button(450,300, 'ghost', ghost, this, 2, 1, 0);
            //tween right ghost
            ghostButton2.alpha = 0;
            ghostTween = game.add.tween(ghostButton2).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        
            //add candy
            candyButton = game.add.button(200,100, 'candy', candy, this, 2, 1, 0);
            candyButton2 = game.add.button(600,100, 'candy', candy, this, 2, 1, 0);
            //tween left candy
            candyTween = game.add.tween(candyButton.scale).to( { x: 1.25, y: 1.25 }, 500, Phaser.Easing.Linear.None, true);
            candyTween.repeat(100, 500);

            //add pumkin
            pumpkinButton = game.add.button(75,75, 'pumpkin', pumpkin, this, 2, 1, 0);
            pumpkinButton2 = game.add.button(475,75, 'pumpkin', pumpkin, this, 2, 1, 0);
            //tween right pumpkin and change color
            pumpkinTween = game.add.tween(pumpkinButton).to( { angle: 360 }, 2000, Phaser.Easing.Linear.None, true,0,-1);
            pumpkinTween2 = game.add.tween(pumpkinButton2).to( { angle: -360 }, 2000, Phaser.Easing.Linear.None, true, 0, -1);

            //add witch
            witchButton = game.add.button(336,225, 'witch', witch, this, 2, 1, 0);
            witchButton2 = game.add.button(736,225, 'witch', witch, this, 2, 1, 0);
            //tween left and right witch
            witchTween = game.add.tween(witchButton).to( { x: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            witchTween.repeat(-1,1000);
            witchTween2 = game.add.tween(witchButton2).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            witchTween2.repeat(-1,1000);

            //add castle
            castleButton = game.add.button(125,436, 'castle', castle, this, 2, 1, 0);
            //only add castle on left

            //add other non-buttons 
            game.add.button(250,0, 'spider',nonbutton,this);
            game.add.button(650,0, 'spider',nonbutton,this);

            game.add.button(225,375, 'cat',nonbutton,this);
            game.add.button(625,375, 'cat',nonbutton,this);

            game.add.button(75,125, 'cat',nonbutton,this);
            game.add.button(475,125, 'cat',nonbutton,this);

            game.add.button(336,400, 'ghost',nonbutton,this);
            game.add.button(736,400, 'ghost',nonbutton,this);

            game.add.button(200,200, 'candy',nonbutton,this);
            game.add.button(600,200, 'candy',nonbutton,this);

            // non-buttons to be tweened
            tempButton = game.add.button(265,265, 'castle',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);
            tempButton = game.add.button(665,265, 'castle',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);

            tempButton = game.add.button(10,425, 'pumpkin',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
            tempButton = game.add.button(410,425, 'pumpkin',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

            tempButton = game.add.button(200,450, 'candy', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(600,450, 'candy', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);

            tempButton = game.add.button(75,425, 'witch', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [330, 330, 75, 75], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(475,425, 'witch', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [730, 730, 475, 475], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            
            
            
            
            // add invisible keys
            ghostkey = game.add.image(20,530, 'ghost');
            candykey = game.add.image(100,530, 'candy');
            pumpkinkey = game.add.image(180,530, 'pumpkin');
            witchkey = game.add.image(260,530, 'witch');
            castlekey = game.add.image(340,530, 'castle');
            ghostkey.alpha = 0;
            candykey.alpha = 0;
            pumpkinkey.alpha = 0;
            witchkey.alpha = 0;
            castlekey.alpha = 0;
        
        },
    
        update: function () {
            if (enterKey3.isDown){
                clickSound.play();
                mainMenu();
            }

            if (score == 0){
                // CHANGE TO ENDLEVEL
                endGame();
            }
        }
        
    };
};