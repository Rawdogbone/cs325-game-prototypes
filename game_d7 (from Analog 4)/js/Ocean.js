"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeOcean = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music;
    var clickSound;
    var vertBar;
    var hortBar;

    var crabButton;
    var crabButton2;
    var crabTween;

    var whaleButton;
    var whaleButton2
    var whaleTween;

    var goldfishButton;
    var goldfishButton2;
    var goldfishTween;
    var goldfishTween2;

    var divingButton;
    var divingButton2;
    var divingTween;
    var divingTween2;

    var dolphinButton;

    var tempButton;
    var tempTween;

    var crabkey;
    var whalekey;
    var goldfishkey;
    var divingkey;
    var dolphinkey;

    var score = 5;
    var scoreString = '';
    var scoreText;

    var crabSound;
    var whaleSound;
    var goldfishSound;
    var divingSound;
    var dolphinSound;

    function crab(){
        crabSound.play();
        clickSound.play();
        crabButton.inputEnabled = false;
        crabButton2.inputEnabled = false;
        crabTween.stop();
        crabButton2.alpha = 1;
        score--;
        scoreText.setText(scoreString + score);
        crabkey.alpha = 1;
        console.log(score);
    }

    function whale(){
        whaleSound.play();
        clickSound.play();
        whaleButton.inputEnabled = false;
        whaleButton2.inputEnabled = false;
        whaleTween.stop();
        score--;
        scoreText.setText(scoreString + score);
        whalekey.alpha = 1;
        console.log(score);
    }

    function goldfish(){
        goldfishSound.play();
        clickSound.play();
        goldfishButton.inputEnabled = false;
        goldfishButton2.inputEnabled = false;
        goldfishTween.stop();
        goldfishTween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        goldfishkey.alpha = 1;
        console.log(score);
    }

    function diving(){
        divingSound.play();
        clickSound.play();
        divingButton.inputEnabled = false;
        divingButton2.inputEnabled = false;
        divingTween.stop();
        divingTween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        divingkey.alpha = 1;
        console.log(score);
    }

    function dolphin(){
        dolphinSound.play();
        clickSound.play();
        dolphinButton.inputEnabled = false;
        score--;
        scoreText.setText(scoreString + score);
        dolphinkey.alpha = 1;
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
        crabSound.stop(); 
        goldfishSound.stop();
        dolphinSound.stop();
        divingSound.stop();
        whaleSound.stop();
        music.stop();
        score = 5;
        game.state.start('End');
    }

    return {  
        create: function () {
            music = game.add.audio('oceanMusic');
            music.play();
            music.loop = true;
            music.volume = 0.25;

            clickSound = game.add.audio('click');
            crabSound = game.add.audio('crabMusic');
            goldfishSound = game.add.audio('goldfishMusic');
            dolphinSound = game.add.audio('dolphinMusic');
            divingSound= game.add.audio('divingMusic');
            whaleSound =  game.add.audio('whaleMusic');
            crabSound.volume = 0.25;    
            goldfishSound.volume = 0.25; 
            dolphinSound.volume = 0.25; 
            divingSound.volume = 0.25; 
            whaleSound.volume = 0.25;        

            game.add.sprite(0, 0, 'blue');

            // add enter key
            enterKey3 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            //set wallpaper
            game.add.image(0,0,'oceanWallpaper');
            game.add.image(400,0,'oceanWallpaper');

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

            //add crab
            crabButton = game.add.button(50,300, 'crab', crab, this, 2, 1, 0);
            crabButton2 = game.add.button(450,300, 'crab', crab, this, 2, 1, 0);
            //tween right crab
            crabButton2.alpha = 0;
            crabTween = game.add.tween(crabButton2).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        
            //add whale
            whaleButton = game.add.button(200,100, 'whale', whale, this, 2, 1, 0);
            whaleButton2 = game.add.button(600,100, 'whale', whale, this, 2, 1, 0);
            //tween left whale
            whaleTween = game.add.tween(whaleButton.scale).to( { x: 1.25, y: 1.25 }, 500, Phaser.Easing.Linear.None, true);
            whaleTween.repeat(100, 500);

            //add pumkin
            goldfishButton = game.add.button(75,75, 'goldfish', goldfish, this, 2, 1, 0);
            goldfishButton2 = game.add.button(475,75, 'goldfish', goldfish, this, 2, 1, 0);
            //tween right goldfish and change color
            goldfishTween = game.add.tween(goldfishButton).to( { angle: 360 }, 2000, Phaser.Easing.Linear.None, true,0,-1);
            goldfishTween2 = game.add.tween(goldfishButton2).to( { angle: -360 }, 2000, Phaser.Easing.Linear.None, true, 0, -1);

            //add diving
            divingButton = game.add.button(336,225, 'diving', diving, this, 2, 1, 0);
            divingButton2 = game.add.button(736,225, 'diving', diving, this, 2, 1, 0);
            //tween left and right diving
            divingTween = game.add.tween(divingButton).to( { x: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            divingTween.repeat(-1,1000);
            divingTween2 = game.add.tween(divingButton2).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            divingTween2.repeat(-1,1000);

            //add dolphin
            dolphinButton = game.add.button(125,436, 'dolphin', dolphin, this, 2, 1, 0);
            //only add dolphin on left

            //add other non-buttons 
            game.add.button(250,0, 'fish',nonbutton,this);
            game.add.button(650,0, 'fish',nonbutton,this);

            game.add.button(225,375, 'lobster',nonbutton,this);
            game.add.button(625,375, 'lobster',nonbutton,this);

            game.add.button(75,125, 'lobster',nonbutton,this);
            game.add.button(475,125, 'lobster',nonbutton,this);

            game.add.button(336,400, 'crab',nonbutton,this);
            game.add.button(736,400, 'crab',nonbutton,this);

            game.add.button(200,200, 'whale',nonbutton,this);
            game.add.button(600,200, 'whale',nonbutton,this);

            // non-buttons to be tweened
            tempButton = game.add.button(265,265, 'dolphin',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);
            tempButton = game.add.button(665,265, 'dolphin',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);

            tempButton = game.add.button(10,425, 'goldfish',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
            tempButton = game.add.button(410,425, 'goldfish',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

            tempButton = game.add.button(200,450, 'whale', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(600,450, 'whale', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);

            tempButton = game.add.button(75,425, 'diving', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [330, 330, 75, 75], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(475,425, 'diving', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [730, 730, 475, 475], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            
            
            
            
            // add invisible keys
            crabkey = game.add.image(20,530, 'crab');
            whalekey = game.add.image(100,530, 'whale');
            goldfishkey = game.add.image(180,530, 'goldfish');
            divingkey = game.add.image(260,530, 'diving');
            dolphinkey = game.add.image(340,530, 'dolphin');
            crabkey.alpha = 0;
            whalekey.alpha = 0;
            goldfishkey.alpha = 0;
            divingkey.alpha = 0;
            dolphinkey.alpha = 0;
        
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