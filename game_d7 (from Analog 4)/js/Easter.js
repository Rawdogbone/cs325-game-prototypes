"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeEaster = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music;
    var clickSound;
    var vertBar;
    var hortBar;

    var chickenButton;
    var chickenButton2;
    var chickenTween;

    var eggButton;
    var eggButton2
    var eggTween;

    var cocoButton;
    var cocoButton2;
    var cocoTween;
    var cocoTween2;

    var rabbitButton;
    var rabbitButton2;
    var rabbitTween;
    var rabbitTween2;

    var egg1Button;

    var tempButton;
    var tempTween;

    var chickenkey;
    var eggkey;
    var cocokey;
    var rabbitkey;
    var egg1key;

    var score = 5;
    var scoreString = '';
    var scoreText;

    var chickenSound;
    var eggSound;
    var cocoSound;
    var rabbitSound;
    var egg1Sound;

    function chicken(){
        chickenSound.play();
        clickSound.play();
        chickenButton.inputEnabled = false;
        chickenButton2.inputEnabled = false;
        chickenTween.stop();
        chickenButton2.alpha = 1;
        score--;
        scoreText.setText(scoreString + score);
        chickenkey.alpha = 1;
        console.log(score);
    }

    function egg(){
        eggSound.play();
        clickSound.play();
        eggButton.inputEnabled = false;
        eggButton2.inputEnabled = false;
        eggTween.stop();
        score--;
        scoreText.setText(scoreString + score);
        eggkey.alpha = 1;
        console.log(score);
    }

    function coco(){
        cocoSound.play();
        clickSound.play();
        cocoButton.inputEnabled = false;
        cocoButton2.inputEnabled = false;
        cocoTween.stop();
        cocoTween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        cocokey.alpha = 1;
        console.log(score);
    }

    function rabbit(){
        rabbitSound.play();
        clickSound.play();
        rabbitButton.inputEnabled = false;
        rabbitButton2.inputEnabled = false;
        rabbitTween.stop();
        rabbitTween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        rabbitkey.alpha = 1;
        console.log(score);
    }

    function egg1(){
        egg1Sound.play();
        clickSound.play();
        egg1Button.inputEnabled = false;
        score--;
        scoreText.setText(scoreString + score);
        egg1key.alpha = 1;
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
        chickenSound.stop(); 
        cocoSound.stop();
        egg1Sound.stop();
        rabbitSound.stop();
        eggSound.stop();
        music.stop();
        score = 5;
        game.state.start('End');
    }

    return {  
        create: function () {
            music = game.add.audio('easterMusic');
            music.play();
            music.loop = true;
            music.volume = 0.25;

            clickSound = game.add.audio('click');
            chickenSound = game.add.audio('chickenMusic');
            cocoSound = game.add.audio('cocoMusic');
            egg1Sound = game.add.audio('egg1Music');
            rabbitSound= game.add.audio('rabbitMusic');
            eggSound =  game.add.audio('eggMusic');
            chickenSound.volume = 0.25;    
            cocoSound.volume = 0.25; 
            egg1Sound.volume = 0.25; 
            rabbitSound.volume = 0.25; 
            eggSound.volume = 0.25;        

            game.add.sprite(0, 0, 'lightblue');

            // add enter key
            enterKey3 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            //set wallpaper
            game.add.image(0,0,'easterWallpaper');
            game.add.image(400,0,'easterWallpaper');

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

            //add chicken
            chickenButton = game.add.button(50,300, 'chicken', chicken, this, 2, 1, 0);
            chickenButton2 = game.add.button(450,300, 'chicken', chicken, this, 2, 1, 0);
            //tween right chicken
            chickenButton2.alpha = 0;
            chickenTween = game.add.tween(chickenButton2).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        
            //add egg
            eggButton = game.add.button(200,100, 'egg', egg, this, 2, 1, 0);
            eggButton2 = game.add.button(600,100, 'egg', egg, this, 2, 1, 0);
            //tween left egg
            eggTween = game.add.tween(eggButton.scale).to( { x: 1.25, y: 1.25 }, 500, Phaser.Easing.Linear.None, true);
            eggTween.repeat(100, 500);

            //add pumkin
            cocoButton = game.add.button(75,75, 'coco', coco, this, 2, 1, 0);
            cocoButton2 = game.add.button(475,75, 'coco', coco, this, 2, 1, 0);
            //tween right coco and change color
            cocoTween = game.add.tween(cocoButton).to( { angle: 360 }, 2000, Phaser.Easing.Linear.None, true,0,-1);
            cocoTween2 = game.add.tween(cocoButton2).to( { angle: -360 }, 2000, Phaser.Easing.Linear.None, true, 0, -1);

            //add rabbit
            rabbitButton = game.add.button(336,225, 'rabbit', rabbit, this, 2, 1, 0);
            rabbitButton2 = game.add.button(736,225, 'rabbit', rabbit, this, 2, 1, 0);
            //tween left and right rabbit
            rabbitTween = game.add.tween(rabbitButton).to( { x: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            rabbitTween.repeat(-1,1000);
            rabbitTween2 = game.add.tween(rabbitButton2).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            rabbitTween2.repeat(-1,1000);

            //add egg1
            egg1Button = game.add.button(125,436, 'egg1', egg1, this, 2, 1, 0);
            //only add egg1 on left

            //add other non-buttons 
            game.add.button(250,0, 'egg2',nonbutton,this);
            game.add.button(650,0, 'egg2',nonbutton,this);

            game.add.button(225,375, 'egg3',nonbutton,this);
            game.add.button(625,375, 'egg3',nonbutton,this);

            game.add.button(75,125, 'egg3',nonbutton,this);
            game.add.button(475,125, 'egg3',nonbutton,this);

            game.add.button(336,400, 'chicken',nonbutton,this);
            game.add.button(736,400, 'chicken',nonbutton,this);

            game.add.button(200,200, 'egg',nonbutton,this);
            game.add.button(600,200, 'egg',nonbutton,this);

            // non-buttons to be tweened
            tempButton = game.add.button(265,265, 'egg1',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);
            tempButton = game.add.button(665,265, 'egg1',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);

            tempButton = game.add.button(10,425, 'coco',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
            tempButton = game.add.button(410,425, 'coco',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

            tempButton = game.add.button(200,450, 'egg', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(600,450, 'egg', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);

            tempButton = game.add.button(75,425, 'rabbit', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [330, 330, 75, 75], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(475,425, 'rabbit', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [730, 730, 475, 475], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            
            
            
            
            // add invisible keys
            chickenkey = game.add.image(20,530, 'chicken');
            eggkey = game.add.image(100,530, 'egg');
            cocokey = game.add.image(180,530, 'coco');
            rabbitkey = game.add.image(260,530, 'rabbit');
            egg1key = game.add.image(340,530, 'egg1');
            chickenkey.alpha = 0;
            eggkey.alpha = 0;
            cocokey.alpha = 0;
            rabbitkey.alpha = 0;
            egg1key.alpha = 0;
        
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