"use strict";
/** @param {Phaser.Game}game*/
GameStates.makeGame = function( game, shared ) {

    // Variables
    var keys = {};
    var wallpaper;
    var teapot1;
    var teapot2;
    var teapot3;
    var ship;
    var steams;
    var topBun;
    var topBun2;
    var topBun3;
    var bottomBun;
    var bottomBun2;
    var bottomBun3;
    var randomSandwichLayers = {};
    var randomSandwichLayers2 = {};
    var randomSandwichLayers3 = {};
    var sandwichParts = ['avocado','bacon','lettuce','sauce','sp','tomato'];
    var allSandwichParts = ['avocado','bacon','bread','lettuce','sauce','sp','tomato']
    var equationText;
    var equation = '';
    var choice1 = '';
    var choice1Text;
    var choice2 = '';
    var choice2Text;
    var choice3 = '';
    var choice3Text;
    var choice4 = '';
    var choice4Text;
    var choice5 = '';
    var choice5Text;
    var choice6 = '';
    var choice6Text;
    var choice7 = '';
    var choice7Text;
    var choice8 = '';
    var choice8Text;
    var button1;
    var button2;
    var button3;
    var button4;
    var button5;
    var button6;
    var button7;
    var button8;
    var choices = [choice1,choice2,choice3,choice4,choice5,choice6,choice7,choice8];
    var choicesText;
    var roundAnswer;
    var phase = 0;
    var shipHealth = 100;
    var nextButton;
    var playButton;
    var tempLayers = {};
    var buttons = {button1,button2,button3,button4,button5,button6,button7,button8};
    var possibleLayer;

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

    function throwSteam(){
        var steam = steams.getFirstExists(false);

        if(steam){
            steam.frame = game.rnd.integerInRange(0,6);
            steam.exists = true;
            steam.reset(50,275);
            steam.scale.setTo(.25);
            if(phase < 3){
                game.physics.arcade.moveToObject(steam,ship,240);
            }
            else if(phase < 6){
                game.physics.arcade.moveToObject(steam,ship,480);
            }
            else{
                game.physics.arcade.moveToObject(steam,ship,720);
            }
            
        }
    }

    function hitShip(body1,body2){
        shipHealth-=10;
        body2.kill();
    }

    function killSteam(body){
        body.kill();
    }

    function randomSandwich(){
        //top bun
        topBun = game.add.sprite(25,25,'bread');
        topBun.scale.setTo(0.3);
        topBun2 = game.add.sprite(25,130,'bread');
        topBun2.scale.setTo(0.3);
        topBun2.alpha = 0.4;
        topBun3 = game.add.sprite(25,130,'bread');
        topBun3.scale.setTo(0.3);
        topBun3.alpha = 0;
        //toppings
        var x = 110;
        var y = 25;
        for(var i = 0; i < 6; i++){
            var rndTemp = game.rnd.integerInRange(0,5);
            randomSandwichLayers[i] = game.add.sprite(x,y,sandwichParts[rndTemp]);
            randomSandwichLayers[i].scale.setTo(0.3);
            randomSandwichLayers2[i] = game.add.sprite(x,130,sandwichParts[rndTemp]);
            randomSandwichLayers2[i].scale.setTo(0.3);
            randomSandwichLayers2[i].alpha = 0.4;
            randomSandwichLayers3[i] = game.add.sprite(x,130,sandwichParts[rndTemp]);
            randomSandwichLayers3[i].scale.setTo(0.3);
            randomSandwichLayers3[i].alpha = 0;
            x+=100;
        }
        //bottom bun
        bottomBun = game.add.sprite(700,25,'bread');
        bottomBun.scale.setTo(0.3);
        bottomBun2 = game.add.sprite(700,130,'bread');
        bottomBun2.scale.setTo(0.3);
        bottomBun2.alpha = 0.4;
        bottomBun3 = game.add.sprite(700,130,'bread');
        bottomBun3.scale.setTo(0.3);
        bottomBun3.alpha = 0;
        
    }

    function generateEquation(num1){
        //reset layers
        for(var i = 0; i <8; i++){
            tempLayers[i].destroy();
        }
        // add possible layers
        
        nextButton = game.add.button(50,450, 'next', generateEquation);
        playButton.pendingDestroy = true;
        var answer = 0;
        var temp = game.rnd.integerInRange(0,1);
        var first = game.rnd.integerInRange(1,10);
        var second = game.rnd.integerInRange(1,10);
        if(temp==1){
            equation = first + ' + ' + second + ' ?';
            answer = first + second;
        }
        else{
            equation = first + ' - ' + second + ' ?';
            answer = first - second;
        }
        roundAnswer = answer.toString();
        equationText.setText(equation);
    
        // choice of actual anser
        var actualAnswer = game.rnd.integerInRange(0,7);
        choices[actualAnswer] = answer.toString();
        // generate possible answers
        var j = 10;
        for(var i = 0; i < 8; i++){
            if(i!=actualAnswer){
                choices[i] = (game.rnd.integerInRange(-9,20)).toString();
                
            }
            possibleLayer = game.rnd.integerInRange(0,6);
            tempLayers[i] = game.add.sprite(j,500,allSandwichParts[possibleLayer]);
            tempLayers[i].scale.setTo(0.3);
            tempLayers[i].alpha = 0.7;
            choicesText[i].setText(choices[i]);
            game.world.bringToTop(choicesText[i])
            game.world.bringToTop(button1);
            game.world.bringToTop(button2);
            game.world.bringToTop(button3);
            game.world.bringToTop(button4);
            game.world.bringToTop(button5);
            game.world.bringToTop(button6);
            game.world.bringToTop(button7);
            game.world.bringToTop(button8);
            j+=100;
        }
        
    }

    function selection(){
        //remove bottom sandwich layers
        for(var i = 0; i < 8; i++){
            tempLayers[i].destroy();
        }
        var selectChoice = this.param1;
        if(choices[selectChoice-1] == roundAnswer){
            if(phase == 0){
                if(tempLayers[selectChoice-1].key == 'bread'){
                    topBun3.alpha = 1;
                    phase++;
                }
            }
            // last bun, end game with a win!
            else if(phase == 7){
                if(tempLayers[selectChoice-1].key == 'bread'){
                    bottomBun3.alpha = 1;
                    // END GAME HERE *******************************************************
                    endGame(0);
                    phase++;
                }
            }
            else{
                console.log(randomSandwichLayers[phase-1].key);
                console.log(tempLayers[selectChoice-1].key);
                if(tempLayers[selectChoice-1].key == randomSandwichLayers[phase-1].key){
                    console.log("Made it!!")
                    randomSandwichLayers3[phase-1].alpha = 1;
                    phase++;
                }
            }
            console.log(phase);
            
        }
        else{
            console.log('wrong!');
            throwSteam();
        }
        generateEquation(0);
    }

    function play(){
        generateEquation(0);

    }

    function quitGame() {
        game.state.start('MainMenu');

    }

    function endGame(num){
        game.state.start('End', true, false, num);
    }
    
    return {
        init: function(){
            
        },
    
        create: function () {
            wallpaper = game.add.tileSprite(0,0,800,600,'titlePage');
            // spawn teapot and ship
            teapot1 = game.add.sprite(5,275,'teapot1');
            teapot1.scale.setTo(.5);
            teapot2 = game.add.sprite(5,275,'teapot2');
            teapot2.scale.setTo(.5);
            teapot2.alpha = 0;
            teapot3 = game.add.sprite(5,275,'teapot3');
            teapot3.scale.setTo(.5);
            teapot3.alpha = 0;

            ship = game.add.sprite(660,245,'piratebay');
            ship.scale.setTo(.3);

            //spawn steam logos
            steams = game.add.group();
            steams.inputEnableChildren = true;
            steams.createMultiple(500,'steam',0,false);

            //spawn buttons
            button1 = game.add.button(30,535, 'button', selection, {param1: 1}, 2, 1, 0);
            button2 = game.add.button(130,535, 'button', selection, {param1: 2}, 2, 1, 0);
            button3 = game.add.button(230,535, 'button', selection, {param1: 3}, 2, 1, 0);
            button4 = game.add.button(330,535, 'button', selection, {param1: 4}, 2, 1, 0);
            button5 = game.add.button(430,535, 'button', selection, {param1: 5}, 2, 1, 0);
            button6 = game.add.button(530,535, 'button', selection, {param1: 6}, 2, 1, 0);
            button7 = game.add.button(630,535, 'button', selection, {param1: 7}, 2, 1, 0);
            button8 = game.add.button(730,535, 'button', selection, {param1: 8}, 2, 1, 0);
            button1.scale.setTo(0.3);
            button2.scale.setTo(0.3);
            button3.scale.setTo(0.3);
            button4.scale.setTo(0.3);
            button5.scale.setTo(0.3);
            button6.scale.setTo(0.3);
            button7.scale.setTo(0.3);
            button8.scale.setTo(0.3);
            var j = 10;
            for(var i = 0;i<8;i++){
                possibleLayer = game.rnd.integerInRange(0,6);
                tempLayers[i] = game.add.sprite(j,500,allSandwichParts[possibleLayer]);
                tempLayers[i].scale.setTo(0.3);
                tempLayers[i].alpha = 0.7;
                j+=100;
            }
            game.world.bringToTop(button1);
            game.world.bringToTop(button2);
            game.world.bringToTop(button3);
            game.world.bringToTop(button4);
            game.world.bringToTop(button5);
            game.world.bringToTop(button6);
            game.world.bringToTop(button7);
            game.world.bringToTop(button8);
            playButton = game.add.button(700,450, 'play', play);


            //enable physics
            game.physics.arcade.enable(steams,true);
            game.physics.arcade.enable(ship,true);
            ship.body.immovable = true;

            steams.inputEnableChildren = true;
            steams.onChildInputDown.add(killSteam,this);

            //generate texts
            var style = { font: "bold 15px Consolas", fill: "#000", align: "left" };
            var text = game.add.text(75, 5, "Sandwich to make", style );
            text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text);
            text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            var text2 = game.add.text(95, 110, "Your current sandwich", style );
            text2.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text2);
            text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            var text3 = game.add.text(420, 400, "What is: ", style );
            text3.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text2);
            text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            var style2 = { font: "bold 30px Consolas", fill: "#000", align: "left" };
            equationText = game.add.text(410, 430, equation, style2 );
            equationText.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text2);
            equationText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            var style2 = { font: "bold 30px Consolas", fill: "#000", align: "center" };
            equationText = game.add.text(410, 430, equation, style2 );
            equationText.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text2);
            equationText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            // choice 1 text
            choice1Text = game.add.text(45, 500, choice1, style2 );
            choice1Text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text2);
            choice1Text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            // choice 2 text
            choice2Text = game.add.text(145, 500, choice2, style2 );
            choice2Text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text2);
            choice2Text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            // choice 3 text
            choice3Text = game.add.text(245, 500, choice3, style2 );
            choice3Text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text2);
            choice3Text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            // choice 4 text
            choice4Text = game.add.text(345, 500, choice4, style2 );
            choice4Text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text2);
            choice4Text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            // choice 5 text
            choice5Text = game.add.text(445, 500, choice5, style2 );
            choice5Text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text2);
            choice5Text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            // choice 6 text
            choice6Text = game.add.text(545, 500, choice6, style2 );
            choice6Text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text2);
            choice6Text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            // choice 7 text
            choice7Text = game.add.text(645, 500, choice7, style2 );
            choice7Text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text2);
            choice7Text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            // choice 8 text
            choice8Text = game.add.text(745, 500, choice8, style2 );
            choice8Text.anchor.setTo( 0.5, 0.0 );
            game.world.bringToTop(text2);
            choice8Text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            choicesText = [choice1Text,choice2Text,choice3Text,choice4Text,choice5Text,choice6Text,choice7Text,choice8Text];

            //generate random sandwich
            randomSandwich();

            //randomly throw steam for added dificulty
            game.time.events.loop(Phaser.Timer.SECOND * game.rnd.integerInRange(5,10),throwSteam,this);
            
            

        },

        update: function () {
            game.physics.arcade.collide(ship, steams, null, hitShip, this);
            if(shipHealth == 0){
                endGame(1);
            }
        }
    };
};
