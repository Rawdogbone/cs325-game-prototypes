"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeBeehive = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music;
    var clickSound;
    var vertBar;
    var hortBar;

    var beeButton;
    var beeButton2;
    var beeTween;

    var bee2Button;
    var bee2Button2
    var bee2Tween;

    var honeycombButton;
    var honeycombButton2;
    var honeycombTween;
    var honeycombTween2;

    var bee1Button;
    var bee1Button2;
    var bee1Tween;
    var bee1Tween2;

    var honeyButton;

    var tempButton;
    var tempTween;

    var beekey;
    var bee2key;
    var honeycombkey;
    var bee1key;
    var honeykey;

    var score = 5;
    var scoreString = '';
    var scoreText;

    var beeSound;
    var bee2Sound;
    var honeycombSound;
    var bee1Sound;
    var honeySound;

    function bee(){
        beeSound.play();
        clickSound.play();
        beeButton.inputEnabled = false;
        beeButton2.inputEnabled = false;
        beeTween.stop();
        beeButton2.alpha = 1;
        score--;
        scoreText.setText(scoreString + score);
        beekey.alpha = 1;
        console.log(score);
    }

    function bee2(){
        bee2Sound.play();
        clickSound.play();
        bee2Button.inputEnabled = false;
        bee2Button2.inputEnabled = false;
        bee2Tween.stop();
        score--;
        scoreText.setText(scoreString + score);
        bee2key.alpha = 1;
        console.log(score);
    }

    function honeycomb(){
        honeycombSound.play();
        clickSound.play();
        honeycombButton.inputEnabled = false;
        honeycombButton2.inputEnabled = false;
        honeycombTween.stop();
        honeycombTween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        honeycombkey.alpha = 1;
        console.log(score);
    }

    function bee1(){
        bee1Sound.play();
        clickSound.play();
        bee1Button.inputEnabled = false;
        bee1Button2.inputEnabled = false;
        bee1Tween.stop();
        bee1Tween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        bee1key.alpha = 1;
        console.log(score);
    }

    function honey(){
        honeySound.play();
        clickSound.play();
        honeyButton.inputEnabled = false;
        score--;
        scoreText.setText(scoreString + score);
        honeykey.alpha = 1;
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
        beeSound.stop(); 
        honeycombSound.stop();
        honeySound.stop();
        bee1Sound.stop();
        bee2Sound.stop();
        music.stop();
        score = 5;
        game.state.start('End');
    }

    return {  
        create: function () {
            music = game.add.audio('beehiveMusic');
            music.play();
            music.loop = true;
            music.volume = 0.25;

            clickSound = game.add.audio('click');
            beeSound = game.add.audio('beeMusic');
            honeycombSound = game.add.audio('honeycombMusic');
            honeySound = game.add.audio('honeyMusic');
            bee1Sound= game.add.audio('bee1Music');
            bee2Sound =  game.add.audio('bee2Music');
            beeSound.volume = 0.25;    
            honeycombSound.volume = 0.25; 
            honeySound.volume = 0.25; 
            bee1Sound.volume = 0.25; 
            bee2Sound.volume = 0.25;        

            game.add.sprite(0, 0, 'yellow');

            // add enter key
            enterKey3 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            //set wallpaper
            game.add.image(0,0,'beehiveWallpaper');
            game.add.image(400,0,'beehiveWallpaper');

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

            //add bee
            beeButton = game.add.button(50,300, 'bee', bee, this, 2, 1, 0);
            beeButton2 = game.add.button(450,300, 'bee', bee, this, 2, 1, 0);
            //tween right bee
            beeButton2.alpha = 0;
            beeTween = game.add.tween(beeButton2).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        
            //add bee2
            bee2Button = game.add.button(200,100, 'bee2', bee2, this, 2, 1, 0);
            bee2Button2 = game.add.button(600,100, 'bee2', bee2, this, 2, 1, 0);
            //tween left bee2
            bee2Tween = game.add.tween(bee2Button.scale).to( { x: 1.25, y: 1.25 }, 500, Phaser.Easing.Linear.None, true);
            bee2Tween.repeat(100, 500);

            //add pumkin
            honeycombButton = game.add.button(75,75, 'honeycomb', honeycomb, this, 2, 1, 0);
            honeycombButton2 = game.add.button(475,75, 'honeycomb', honeycomb, this, 2, 1, 0);
            //tween right honeycomb and change color
            honeycombTween = game.add.tween(honeycombButton).to( { angle: 360 }, 2000, Phaser.Easing.Linear.None, true,0,-1);
            honeycombTween2 = game.add.tween(honeycombButton2).to( { angle: -360 }, 2000, Phaser.Easing.Linear.None, true, 0, -1);

            //add bee1
            bee1Button = game.add.button(336,225, 'bee1', bee1, this, 2, 1, 0);
            bee1Button2 = game.add.button(736,225, 'bee1', bee1, this, 2, 1, 0);
            //tween left and right bee1
            bee1Tween = game.add.tween(bee1Button).to( { x: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            bee1Tween.repeat(-1,1000);
            bee1Tween2 = game.add.tween(bee1Button2).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            bee1Tween2.repeat(-1,1000);

            //add honey
            honeyButton = game.add.button(125,436, 'honey', honey, this, 2, 1, 0);
            //only add honey on left

            //add other non-buttons 
            game.add.button(250,0, 'beehive',nonbutton,this);
            game.add.button(650,0, 'beehive',nonbutton,this);

            game.add.button(225,375, 'beehive1',nonbutton,this);
            game.add.button(625,375, 'beehive1',nonbutton,this);

            game.add.button(75,125, 'beehive1',nonbutton,this);
            game.add.button(475,125, 'beehive1',nonbutton,this);

            game.add.button(336,400, 'bee',nonbutton,this);
            game.add.button(736,400, 'bee',nonbutton,this);

            game.add.button(200,200, 'bee2',nonbutton,this);
            game.add.button(600,200, 'bee2',nonbutton,this);

            // non-buttons to be tweened
            tempButton = game.add.button(265,265, 'honey',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);
            tempButton = game.add.button(665,265, 'honey',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);

            tempButton = game.add.button(10,425, 'honeycomb',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
            tempButton = game.add.button(410,425, 'honeycomb',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

            tempButton = game.add.button(200,450, 'bee2', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(600,450, 'bee2', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);

            tempButton = game.add.button(75,425, 'bee1', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [330, 330, 75, 75], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(475,425, 'bee1', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [730, 730, 475, 475], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            
            
            
            
            // add invisible keys
            beekey = game.add.image(20,530, 'bee');
            bee2key = game.add.image(100,530, 'bee2');
            honeycombkey = game.add.image(180,530, 'honeycomb');
            bee1key = game.add.image(260,530, 'bee1');
            honeykey = game.add.image(340,530, 'honey');
            beekey.alpha = 0;
            bee2key.alpha = 0;
            honeycombkey.alpha = 0;
            bee1key.alpha = 0;
            honeykey.alpha = 0;
        
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