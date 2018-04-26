"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeSt_paddys = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music;
    var clickSound;
    var vertBar;
    var hortBar;

    var leprechaunButton;
    var leprechaunButton2;
    var leprechaunTween;

    var leprechaun2Button;
    var leprechaun2Button2
    var leprechaun2Tween;

    var cloverButton;
    var cloverButton2;
    var cloverTween;
    var cloverTween2;

    var leprechaun1Button;
    var leprechaun1Button2;
    var leprechaun1Tween;
    var leprechaun1Tween2;

    var goldButton;

    var tempButton;
    var tempTween;

    var leprechaunkey;
    var leprechaun2key;
    var cloverkey;
    var leprechaun1key;
    var goldkey;

    var score = 5;
    var scoreString = '';
    var scoreText;

    var leprechaunSound;
    var leprechaun2Sound;
    var cloverSound;
    var leprechaun1Sound;
    var goldSound;

    function leprechaun(){
        leprechaunSound.play();
        clickSound.play();
        leprechaunButton.inputEnabled = false;
        leprechaunButton2.inputEnabled = false;
        leprechaunTween.stop();
        leprechaunButton2.alpha = 1;
        score--;
        scoreText.setText(scoreString + score);
        leprechaunkey.alpha = 1;
        console.log(score);
    }

    function leprechaun2(){
        leprechaun2Sound.play();
        clickSound.play();
        leprechaun2Button.inputEnabled = false;
        leprechaun2Button2.inputEnabled = false;
        leprechaun2Tween.stop();
        score--;
        scoreText.setText(scoreString + score);
        leprechaun2key.alpha = 1;
        console.log(score);
    }

    function clover(){
        cloverSound.play();
        clickSound.play();
        cloverButton.inputEnabled = false;
        cloverButton2.inputEnabled = false;
        cloverTween.stop();
        cloverTween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        cloverkey.alpha = 1;
        console.log(score);
    }

    function leprechaun1(){
        leprechaun1Sound.play();
        clickSound.play();
        leprechaun1Button.inputEnabled = false;
        leprechaun1Button2.inputEnabled = false;
        leprechaun1Tween.stop();
        leprechaun1Tween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        leprechaun1key.alpha = 1;
        console.log(score);
    }

    function gold(){
        goldSound.play();
        clickSound.play();
        goldButton.inputEnabled = false;
        score--;
        scoreText.setText(scoreString + score);
        goldkey.alpha = 1;
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
        leprechaunSound.stop(); 
        cloverSound.stop();
        goldSound.stop();
        leprechaun1Sound.stop();
        leprechaun2Sound.stop();
        music.stop();
        score = 5;
        game.state.start('End');
    }

    return {  
        create: function () {
            music = game.add.audio('st_paddysMusic');
            music.play();
            music.loop = true;
            music.volume = 0.25;

            clickSound = game.add.audio('click');
            leprechaunSound = game.add.audio('leprechaunMusic');
            cloverSound = game.add.audio('cloverMusic');
            goldSound = game.add.audio('goldMusic');
            leprechaun1Sound= game.add.audio('leprechaun1Music');
            leprechaun2Sound =  game.add.audio('leprechaun2Music');
            leprechaunSound.volume = 0.25;    
            cloverSound.volume = 0.25; 
            goldSound.volume = 0.25; 
            leprechaun1Sound.volume = 0.25; 
            leprechaun2Sound.volume = 0.25;        

            game.add.sprite(0, 0, 'green');

            // add enter key
            enterKey3 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            //set wallpaper
            game.add.image(0,0,'st_paddysWallpaper');
            game.add.image(400,0,'st_paddysWallpaper');

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

            //add leprechaun
            leprechaunButton = game.add.button(50,300, 'leprechaun', leprechaun, this, 2, 1, 0);
            leprechaunButton2 = game.add.button(450,300, 'leprechaun', leprechaun, this, 2, 1, 0);
            //tween right leprechaun
            leprechaunButton2.alpha = 0;
            leprechaunTween = game.add.tween(leprechaunButton2).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        
            //add leprechaun2
            leprechaun2Button = game.add.button(200,100, 'leprechaun2', leprechaun2, this, 2, 1, 0);
            leprechaun2Button2 = game.add.button(600,100, 'leprechaun2', leprechaun2, this, 2, 1, 0);
            //tween left leprechaun2
            leprechaun2Tween = game.add.tween(leprechaun2Button.scale).to( { x: 1.25, y: 1.25 }, 500, Phaser.Easing.Linear.None, true);
            leprechaun2Tween.repeat(100, 500);

            //add pumkin
            cloverButton = game.add.button(75,75, 'clover', clover, this, 2, 1, 0);
            cloverButton2 = game.add.button(475,75, 'clover', clover, this, 2, 1, 0);
            //tween right clover and change color
            cloverTween = game.add.tween(cloverButton).to( { angle: 360 }, 2000, Phaser.Easing.Linear.None, true,0,-1);
            cloverTween2 = game.add.tween(cloverButton2).to( { angle: -360 }, 2000, Phaser.Easing.Linear.None, true, 0, -1);

            //add leprechaun1
            leprechaun1Button = game.add.button(336,225, 'leprechaun1', leprechaun1, this, 2, 1, 0);
            leprechaun1Button2 = game.add.button(736,225, 'leprechaun1', leprechaun1, this, 2, 1, 0);
            //tween left and right leprechaun1
            leprechaun1Tween = game.add.tween(leprechaun1Button).to( { x: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            leprechaun1Tween.repeat(-1,1000);
            leprechaun1Tween2 = game.add.tween(leprechaun1Button2).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            leprechaun1Tween2.repeat(-1,1000);

            //add gold
            goldButton = game.add.button(125,436, 'gold', gold, this, 2, 1, 0);
            //only add gold on left

            //add other non-buttons 
            game.add.button(250,0, 'beer1',nonbutton,this);
            game.add.button(650,0, 'beer1',nonbutton,this);

            game.add.button(225,375, 'beer',nonbutton,this);
            game.add.button(625,375, 'beer',nonbutton,this);

            game.add.button(75,125, 'beer',nonbutton,this);
            game.add.button(475,125, 'beer',nonbutton,this);

            game.add.button(336,400, 'leprechaun',nonbutton,this);
            game.add.button(736,400, 'leprechaun',nonbutton,this);

            game.add.button(200,200, 'leprechaun2',nonbutton,this);
            game.add.button(600,200, 'leprechaun2',nonbutton,this);

            // non-buttons to be tweened
            tempButton = game.add.button(265,265, 'gold',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);
            tempButton = game.add.button(665,265, 'gold',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);

            tempButton = game.add.button(10,425, 'clover',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
            tempButton = game.add.button(410,425, 'clover',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

            tempButton = game.add.button(200,450, 'leprechaun2', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(600,450, 'leprechaun2', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);

            tempButton = game.add.button(75,425, 'leprechaun1', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [330, 330, 75, 75], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(475,425, 'leprechaun1', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [730, 730, 475, 475], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            
            
            
            
            // add invisible keys
            leprechaunkey = game.add.image(20,530, 'leprechaun');
            leprechaun2key = game.add.image(100,530, 'leprechaun2');
            cloverkey = game.add.image(180,530, 'clover');
            leprechaun1key = game.add.image(260,530, 'leprechaun1');
            goldkey = game.add.image(340,530, 'gold');
            leprechaunkey.alpha = 0;
            leprechaun2key.alpha = 0;
            cloverkey.alpha = 0;
            leprechaun1key.alpha = 0;
            goldkey.alpha = 0;
        
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