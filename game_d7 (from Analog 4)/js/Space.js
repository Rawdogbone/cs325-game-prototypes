"use strict";
/** @param {Phaser.Game} game*/
GameStates.makeSpace = function(game,shared) {

    var enterKey3 = null;
    var temp = null;
    var music;
    var clickSound;
    var vertBar;
    var hortBar;

    var alienButton;
    var alienButton2;
    var alienTween;

    var earthButton;
    var earthButton2
    var earthTween;

    var astronautButton;
    var astronautButton2;
    var astronautTween;
    var astronautTween2;

    var rocketButton;
    var rocketButton2;
    var rocketTween;
    var rocketTween2;

    var satelliteButton;

    var tempButton;
    var tempTween;

    var alienkey;
    var earthkey;
    var astronautkey;
    var rocketkey;
    var satellitekey;

    var score = 5;
    var scoreString = '';
    var scoreText;

    var alienSound;
    var earthSound;
    var astronautSound;
    var rocketSound;
    var satelliteSound;

    function alien(){
        alienSound.play();
        clickSound.play();
        alienButton.inputEnabled = false;
        alienButton2.inputEnabled = false;
        alienTween.stop();
        alienButton2.alpha = 1;
        score--;
        scoreText.setText(scoreString + score);
        alienkey.alpha = 1;
        console.log(score);
    }

    function earth(){
        earthSound.play();
        clickSound.play();
        earthButton.inputEnabled = false;
        earthButton2.inputEnabled = false;
        earthTween.stop();
        score--;
        scoreText.setText(scoreString + score);
        earthkey.alpha = 1;
        console.log(score);
    }

    function astronaut(){
        astronautSound.play();
        clickSound.play();
        astronautButton.inputEnabled = false;
        astronautButton2.inputEnabled = false;
        astronautTween.stop();
        astronautTween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        astronautkey.alpha = 1;
        console.log(score);
    }

    function rocket(){
        rocketSound.play();
        clickSound.play();
        rocketButton.inputEnabled = false;
        rocketButton2.inputEnabled = false;
        rocketTween.stop();
        rocketTween2.stop();
        score--;
        scoreText.setText(scoreString + score);
        rocketkey.alpha = 1;
        console.log(score);
    }

    function satellite(){
        satelliteSound.play();
        clickSound.play();
        satelliteButton.inputEnabled = false;
        score--;
        scoreText.setText(scoreString + score);
        satellitekey.alpha = 1;
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
        alienSound.stop(); 
        astronautSound.stop();
        satelliteSound.stop();
        rocketSound.stop();
        earthSound.stop();
        music.stop();
        score = 5;
        game.state.start('End');
    }

    return {  
        create: function () {
            music = game.add.audio('spaceMusic');
            music.play();
            music.loop = true;
            music.volume = 0.25;

            clickSound = game.add.audio('click');
            alienSound = game.add.audio('alienMusic');
            astronautSound = game.add.audio('astronautMusic');
            satelliteSound = game.add.audio('satelliteMusic');
            rocketSound= game.add.audio('rocketMusic');
            earthSound =  game.add.audio('earthMusic');
            alienSound.volume = 0.25;    
            //astronautSound.volume = 0.25; 
            satelliteSound.volume = 0.25; 
            rocketSound.volume = 0.25; 
            earthSound.volume = 0.25;        

            game.add.sprite(0, 0, 'black');

            // add enter key
            enterKey3 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            //set wallpaper
            game.add.image(0,0,'spaceWallpaper');
            game.add.image(400,0,'spaceWallpaper');

            //set bars
            vertBar = game.add.image(400,-185,'bar');
            vertBar.angle += 90;
            hortBar = game.add.image(0,500,'bar');
            hortBar = game.add.image(400,500,'bar');

            //text
            var style = { font: "15px forte", fill: "#fff", align: "center" };
            var text = game.add.text(75, 510, "Your Differences:", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0)', 5);

            scoreString = 'Differences Left: ';
            scoreText = game.add.text(525, 550, scoreString + score, { font: '30px forte', fill: '#fff' });

            //add alien
            alienButton = game.add.button(50,300, 'alien', alien, this, 2, 1, 0);
            alienButton2 = game.add.button(450,300, 'alien', alien, this, 2, 1, 0);
            //tween right alien
            alienButton2.alpha = 0;
            alienTween = game.add.tween(alienButton2).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        
            //add earth
            earthButton = game.add.button(200,100, 'earth', earth, this, 2, 1, 0);
            earthButton2 = game.add.button(600,100, 'earth', earth, this, 2, 1, 0);
            //tween left earth
            earthTween = game.add.tween(earthButton.scale).to( { x: 1.25, y: 1.25 }, 500, Phaser.Easing.Linear.None, true);
            earthTween.repeat(100, 500);

            //add pumkin
            astronautButton = game.add.button(75,75, 'astronaut', astronaut, this, 2, 1, 0);
            astronautButton2 = game.add.button(475,75, 'astronaut', astronaut, this, 2, 1, 0);
            //tween right astronaut and change color
            astronautTween = game.add.tween(astronautButton).to( { angle: 360 }, 2000, Phaser.Easing.Linear.None, true,0,-1);
            astronautTween2 = game.add.tween(astronautButton2).to( { angle: -360 }, 2000, Phaser.Easing.Linear.None, true, 0, -1);

            //add rocket
            rocketButton = game.add.button(336,225, 'rocket', rocket, this, 2, 1, 0);
            rocketButton2 = game.add.button(736,225, 'rocket', rocket, this, 2, 1, 0);
            //tween left and right rocket
            rocketTween = game.add.tween(rocketButton).to( { x: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            rocketTween.repeat(-1,1000);
            rocketTween2 = game.add.tween(rocketButton2).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            rocketTween2.repeat(-1,1000);

            //add satellite
            satelliteButton = game.add.button(125,436, 'satellite', satellite, this, 2, 1, 0);
            //only add satellite on left

            //add other non-buttons 
            game.add.button(250,0, 'spider',nonbutton,this);
            game.add.button(650,0, 'spider',nonbutton,this);

            game.add.button(225,375, 'cat',nonbutton,this);
            game.add.button(625,375, 'cat',nonbutton,this);

            game.add.button(75,125, 'cat',nonbutton,this);
            game.add.button(475,125, 'cat',nonbutton,this);

            game.add.button(336,400, 'alien',nonbutton,this);
            game.add.button(736,400, 'alien',nonbutton,this);

            game.add.button(200,200, 'earth',nonbutton,this);
            game.add.button(600,200, 'earth',nonbutton,this);

            // non-buttons to be tweened
            tempButton = game.add.button(265,265, 'satellite',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);
            tempButton = game.add.button(665,265, 'satellite',nonbutton,this);
            tempTween = game.add.tween(tempButton).to( { angle: -360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);

            tempButton = game.add.button(10,425, 'astronaut',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
            tempButton = game.add.button(410,425, 'astronaut',nonbutton,this);
            tempButton.alpha = 0;
            tempTween = game.add.tween(tempButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

            tempButton = game.add.button(200,450, 'earth', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(600,450, 'earth', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { y: 0 }, 1500, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);

            tempButton = game.add.button(75,425, 'rocket', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [330, 330, 75, 75], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            tempButton = game.add.button(475,425, 'rocket', nonbutton, this);
            tempTween = game.add.tween(tempButton).to( { x: [730, 730, 475, 475], y: [425, 25, 25, 425] }, 8000, Phaser.Easing.Bounce.Out, true, -1);
            tempTween.repeat(-1,1000);
            
            
            
            
            // add invisible keys
            alienkey = game.add.image(20,530, 'alien');
            earthkey = game.add.image(100,530, 'earth');
            astronautkey = game.add.image(180,530, 'astronaut');
            rocketkey = game.add.image(260,530, 'rocket');
            satellitekey = game.add.image(340,530, 'satellite');
            alienkey.alpha = 0;
            earthkey.alpha = 0;
            astronautkey.alpha = 0;
            rocketkey.alpha = 0;
            satellitekey.alpha = 0;
        
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