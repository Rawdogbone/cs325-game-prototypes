"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeChristmas = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music;
    var clickSound;
    var vertBar;
    var hortBar;

    var lightsButton;
    var lightsButton2;
    var lightsTween;

    var santaButton;
    var santaButton2
    var santaTween;

    var giftButton;
    var giftButton2;
    var giftTween;
    var giftTween2;

    var gift1Button;
    var gift1Button2;
    var gift1Tween;
    var gift1Tween2;

    var treeButton;

    var tempButton;
    var tempTween;

    var lightskey;
    var santakey;
    var giftkey;
    var gift1key;
    var treekey;

    var score = 5;
    var scoreString = '';
    var scoreText;

    var lightsSound;
    var santaSound;
    var giftSound;
    var gift1Sound;
    var treeSound;

    function lights(){
        lightsSound.play();
        clickSound.play();
        lightsButton.inputEnabled = false;
        lightsButton2.inputEnabled = false;
        lightsTween.stop();
        lightsButton2.alpha = 1;
        score--;
        scoreText.setText(scoreString + score);
        lightskey.alpha = 1;
        console.log(score);
    }

    function santa(){
        santaSound.play();
        clickSound.play();
        santaButton.inputEnabled = false;
        santaButton2.inputEnabled = false;
        santaTween.stop();
        score--;
        scoreText.setText(scoreString + score);
        santakey.alpha = 1;
        console.log(score);
    }

    function gift(){
        giftSound.play();
        clickSound.play();
        giftButton.inputEnabled = false;
        giftButton2.inputEnabled = false;
        giftTween.stop();
        giftTween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        giftkey.alpha = 1;
        console.log(score);
    }

    function gift1(){
        gift1Sound.play();
        clickSound.play();
        gift1Button.inputEnabled = false;
        gift1Button2.inputEnabled = false;
        gift1Tween.stop();
        gift1Tween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        gift1key.alpha = 1;
        console.log(score);
    }

    function tree(){
        treeSound.play();
        clickSound.play();
        treeButton.inputEnabled = false;
        score--;
        scoreText.setText(scoreString + score);
        treekey.alpha = 1;
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
        lightsSound.stop(); 
        giftSound.stop();
        treeSound.stop();
        gift1Sound.stop();
        santaSound.stop();
        music.stop();
        score = 5;
        game.state.start('End');
    }

    return {  
        create: function () {
            music = game.add.audio('christmasMusic');
            music.play();
            music.loop = true;
            music.volume = 0.25;

            clickSound = game.add.audio('click');
            lightsSound = game.add.audio('lightsMusic');
            giftSound = game.add.audio('giftMusic');
            treeSound = game.add.audio('treeMusic');
            gift1Sound= game.add.audio('gift1Music');
            santaSound =  game.add.audio('santaMusic');
            lightsSound.volume = 0.25;    
            giftSound.volume = 0.25; 
            treeSound.volume = 0.25; 
            gift1Sound.volume = 0.25; 
            santaSound.volume = 0.25;        

            game.add.sprite(0, 0, 'titlePage');

            // add enter key
            enterKey3 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            //set wallpaper
            game.add.image(0,0,'christmasWallpaper');
            game.add.image(400,0,'christmasWallpaper');

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

            //add lights
            lightsButton = game.add.button(50,300, 'lights', lights, this, 2, 1, 0);
            lightsButton2 = game.add.button(450,300, 'lights', lights, this, 2, 1, 0);
            //tween right lights
            lightsButton2.alpha = 0;
            lightsTween = game.add.tween(lightsButton2).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        
            //add santa
            santaButton = game.add.button(200,100, 'santa', santa, this, 2, 1, 0);
            santaButton2 = game.add.button(600,100, 'santa', santa, this, 2, 1, 0);
            //tween left santa
            santaTween = game.add.tween(santaButton.scale).to( { x: 1.25, y: 1.25 }, 500, Phaser.Easing.Linear.None, true);
            santaTween.repeat(100, 500);

            //add pumkin
            giftButton = game.add.button(75,75, 'gift', gift, this, 2, 1, 0);
            giftButton2 = game.add.button(475,75, 'gift', gift, this, 2, 1, 0);
            //tween right gift and change color
            giftTween = game.add.tween(giftButton).to( { angle: 360 }, 2000, Phaser.Easing.Linear.None, true,0,-1);
            giftTween2 = game.add.tween(giftButton2).to( { angle: -360 }, 2000, Phaser.Easing.Linear.None, true, 0, -1);

            //add gift1
            gift1Button = game.add.button(336,225, 'gift1', gift1, this, 2, 1, 0);
            gift1Button2 = game.add.button(736,225, 'gift1', gift1, this, 2, 1, 0);
            //tween left and right gift1
            gift1Tween = game.add.tween(gift1Button).to( { x: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            gift1Tween.repeat(-1,1000);
            gift1Tween2 = game.add.tween(gift1Button2).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            gift1Tween2.repeat(-1,1000);

            //add tree
            treeButton = game.add.button(125,436, 'tree', tree, this, 2, 1, 0);
            //only add tree on left

            //add other non-buttons 
            game.add.button(250,0, 'snowman',nonbutton,this);
            game.add.button(650,0, 'snowman',nonbutton,this);

            game.add.button(225,375, 'cane',nonbutton,this);
            game.add.button(625,375, 'cane',nonbutton,this);

            game.add.button(75,125, 'cane',nonbutton,this);
            game.add.button(475,125, 'cane',nonbutton,this);

            game.add.button(336,400, 'lights',nonbutton,this);
            game.add.button(736,400, 'lights',nonbutton,this);

            game.add.button(200,200, 'santa',nonbutton,this);
            game.add.button(600,200, 'santa',nonbutton,this);

            // non-buttons to be tweened
            tempButton = game.add.button(265,265, 'tree',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);
            tempButton = game.add.button(665,265, 'tree',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);

            tempButton = game.add.button(10,425, 'gift',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
            tempButton = game.add.button(410,425, 'gift',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

            tempButton = game.add.button(200,450, 'santa', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(600,450, 'santa', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);

            tempButton = game.add.button(75,425, 'gift1', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [330, 330, 75, 75], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(475,425, 'gift1', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [730, 730, 475, 475], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            
            
            
            
            // add invisible keys
            lightskey = game.add.image(20,530, 'lights');
            santakey = game.add.image(100,530, 'santa');
            giftkey = game.add.image(180,530, 'gift');
            gift1key = game.add.image(260,530, 'gift1');
            treekey = game.add.image(340,530, 'tree');
            lightskey.alpha = 0;
            santakey.alpha = 0;
            giftkey.alpha = 0;
            gift1key.alpha = 0;
            treekey.alpha = 0;
        
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