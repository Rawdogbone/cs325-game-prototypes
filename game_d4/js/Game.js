"use strict";
/** @param {Phaser.Game}game*/
GameStates.makeGame = function( game, shared ) {

    // Variables
    var keys = {};
    var background = null;
    var glass = null;
    var barLeft,barMiddle,barRight = null;
    var iceCubes = null;
    var i = 0;
    var gohead = true;
    var cards = ['2','3','4','beach','hot'];
    var two_1,two_2,two_3,two_4 = null;
    var three_1,three_2,three_3,three_4 = null;
    var four_1,four_2,four_3,four_4 = null;
    var beach_1,beach_2,beach_3,beach_4 = null;
    var hot_1,hot_2,hot_3,hot_4 = null;
    var holdButton_1,holdButton_2,holdButton_3,holdButton_4 = null;
    var highlight_1,highlight_2,highlight_3,highlight_4;
    var drawButton;
    var dealButton;
    var resetButton;
    var score = 0;
    var scoreString = '';
    var scoreText;
    var drawTemp1 = null;
    var drawTemp2 = null;
    var drawTemp3 = null;
    var drawTemp4 = null;
    var cardCount = [0,0,0,0,0];
    var holdClick1 = 0;
    var holdClick2 = 0;
    var holdClick3 = 0;
    var holdClick4 = 0;
    var spawnBuff = 0;
    var arrow1;
    var arrow2;
    var turns = 0;
    var turnString = '';
    var turnText;
    var enterKey;
    var music;
    var clickSound;
    var iceSound;
    var meltSound;

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

    function dropCubes(){
        var ice = iceCubes.getFirstExists(false);
        var possibleSpotsInGlass = [65,115,170,220];
        
        if (ice)
        {
            if(spawnBuff != 0){
                game.time.events.add(Phaser.Timer.SECOND*3.5, playIce, this);
                if(i==4){ // spawn cubes left to right
                    i=0;
                }
                ice.frame = game.rnd.integerInRange(0,6);
                ice.exists = true;
                ice.reset(possibleSpotsInGlass[i], -40);
                ice.scale.setTo(0.15);
                ice.body.bounce.set(.1);
                score++;
                scoreText.setText(scoreString + score);
                i++;
                spawnBuff--;
            }
        }
    }
    function removeGravity(body1,body2){
        var rnd = game.rnd.integerInRange(0,1000); // 1 in 1000 60 times a second
        if(rnd == 0){
            meltSound.play();
            body2.kill();
            score--;
            scoreText.setText(scoreString + score);
        }
    }

    function hold(){
        clickSound.play();
        var temp = this.param1;
        if(temp == 1){
            holdClick1++;

            if(holdClick1 % 2 == 0){
                highlight_1.alpha = 0;
            }
            else{
                highlight_1.alpha = 1;
            }
        }
        else if(temp == 2){
            holdClick2++;

            if(holdClick2 % 2 == 0){
                highlight_2.alpha = 0;
            }
            else{
                highlight_2.alpha = 1;
            }
        }
        else if(temp == 3){
            holdClick3++;

            if(holdClick3 % 2 == 0){
                highlight_3.alpha = 0;
            }
            else{
                highlight_3.alpha = 1;
            }
        }
        else{
            holdClick4++;

            if(holdClick4 % 2 == 0){
                highlight_4.alpha = 0;
            }
            else{
                highlight_4.alpha = 1;
            }
        }
    }
    function draw(){
        clickSound.play();
        turns++;
        turnText.setText(turnString + turns);
        //disable draw button until deal button/function has returned
        drawButton.inputEnabled = false;
        arrow1.alpha = 0;
        // reset hold clicks
        holdClick1 = 0;
        holdClick2 = 0;
        holdClick3 = 0;
        holdClick4 = 0;

        // reset card count
        cardCount = [0,0,0,0,0];
        // reset highlights
        highlight_1.alpha = 0;
        highlight_2.alpha = 0;
        highlight_3.alpha = 0;
        highlight_4.alpha = 0;
        // create array of cards
        var deck_1 = [two_1,three_1,four_1,hot_1,beach_1];
        var deck_2 = [two_2,three_2,four_2,hot_2,beach_2];
        var deck_3 = [two_3,three_3,four_3,hot_3,beach_3];
        var deck_4 = [two_4,three_4,four_4,hot_4,beach_4];
        //clear existing cards
        for(var j = 0; j < 5; j++){
            deck_1[j].alpha = 0;
            deck_2[j].alpha = 0;
            deck_3[j].alpha = 0;
            deck_4[j].alpha = 0;
        }

        var deck_1_select = game.rnd.integerInRange(0,4);
        var deck_2_select = game.rnd.integerInRange(0,4);
        var deck_3_select = game.rnd.integerInRange(0,4);
        var deck_4_select = game.rnd.integerInRange(0,4);

        //pick random card to show
        deck_1[deck_1_select].alpha = 1;
        deck_2[deck_2_select].alpha = 1;
        deck_3[deck_3_select].alpha = 1;
        deck_4[deck_4_select].alpha = 1;

        drawTemp1 = deck_1_select;
        drawTemp2 = deck_2_select;
        drawTemp3 = deck_3_select;
        drawTemp4 = deck_4_select;

        arrow2.alpha = 1;
        dealButton.inputEnabled = true;
    }
    function deal(){
        clickSound.play();
        //disable deal button until draw button/function has returned
        dealButton.inputEnabled = false;
        arrow2.alpha = 0;
        // create array of cards
        var deck_1 = [two_1,three_1,four_1,hot_1,beach_1];
        var deck_2 = [two_2,three_2,four_2,hot_2,beach_2];
        var deck_3 = [two_3,three_3,four_3,hot_3,beach_3];
        var deck_4 = [two_4,three_4,four_4,hot_4,beach_4];

        // clear cards not highlighted
        for(var j = 0; j < 5; j++){
            if(highlight_1.alpha == 0){
                deck_1[j].alpha = 0;
            }
            if(highlight_2.alpha == 0){
                deck_2[j].alpha = 0;
            }
            if(highlight_3.alpha == 0){
                deck_3[j].alpha = 0;
            }
            if(highlight_4.alpha == 0){
                deck_4[j].alpha = 0;
            }
        }

        var deck_1_select = game.rnd.integerInRange(0,4);
        var deck_2_select = game.rnd.integerInRange(0,4);
        var deck_3_select = game.rnd.integerInRange(0,4);
        var deck_4_select = game.rnd.integerInRange(0,4);
        var temp1 = null;
        var temp2 = null;
        var temp3 = null;
        var temp4 = null;

        // deal new cards not highlighted and pass into temps to be checked later
        if(highlight_1.alpha == 0){
            deck_1[deck_1_select].alpha = 1;
            temp1 = deck_1_select;
            cardCount[deck_1_select]++;
        }
        else{
            temp1 = drawTemp1;
            cardCount[drawTemp1]++;
        }
        if(highlight_2.alpha == 0){
            deck_2[deck_2_select].alpha = 1;
            temp2 = deck_2_select;
            cardCount[deck_2_select]++;
        }
        else{
            temp2 = drawTemp2;
            cardCount[drawTemp2]++;
        }
        if(highlight_3.alpha == 0){
            deck_3[deck_3_select].alpha = 1;
            temp3 = deck_3_select;
            cardCount[deck_3_select]++;
        }
        else{
            temp3 = drawTemp3;
            cardCount[drawTemp3]++;
        }
        if(highlight_4.alpha == 0){
            deck_4[deck_4_select].alpha = 1;
            temp4 = deck_4_select;
            cardCount[deck_4_select]++;
        }
        else{
            temp4 = drawTemp4;
            cardCount[drawTemp4]++;
        }

        // pass in cards to be checked for points
        
        var turnScore = checkPairs(temp1,temp2,temp3,temp4);
        spawnBuff = turnScore;
        arrow1.alpha = 1;
        drawButton.inputEnabled = true;

    }
    function checkPairs(card1,card2,card3,card4){
        var result = 0;
        // check for two Pair
        var pairCheck = 0;
        for(var i =0; i < 5; i++){
            if(cardCount[i] == 2){
                pairCheck++;
            }
        }
        if(pairCheck == 2){
            // two pair (reward: 2)
            result +=2;
            return result;
        }

        //check for straights
        var straightcheck = 0;
        for(var i = 0; i < 4;i++){
            if(cardCount[i] == 1){
                straightcheck++;
            }
        }
        var straightcheck2 = 0;
        for(var i = 1; i < 5;i++){
            if(cardCount[i] == 1){
                straightcheck2++;
            }
        }
        if(straightcheck == 4 || straightcheck2 == 4){
            //straight (reward: 4)
            result+=4;
        }

        // check for triples, or four of a kind's of non-symbols
        for(var i = 0; i < 3; i++){
            if(cardCount[i] == 3){
                // triple (reward: 3)
                result +=3;
            }
            else if(cardCount[i] == 4){
                // four of a kind (reward: 4)
                result +=4;
            }
        }

        // check for pair, triples, or four of a kind's for symbols
        for(var i = 3; i < 5; i++){
            if(cardCount[i] == 2){
                // symbol pair (reward: 1)
                result++;
            }
            else if(cardCount[i] == 3){
                // symbol triple (reward: 3)
                result +=3;
            }
            else if(cardCount[i] == 4){
                // symbol four of a kind (reward: 4)
                result +=4;
            }
        }

        return result;
    }

    function resetHolds(){
        clickSound.play();
        highlight_1.alpha = 0;
        highlight_2.alpha = 0;
        highlight_3.alpha = 0;
        highlight_4.alpha = 0;
        holdClick1 = 0;
        holdClick2 = 0;
        holdClick3 = 0;
        holdClick4 = 0;
    }

    function playIce(){
        iceSound.play();
    }

    function quitGame() {
        game.state.start('MainMenu');

    }

    function endGame(num){
        turns = 0;
        score = 0;
        spawnBuff = 0;
        music.stop();
        game.state.start('End', true, false, num);
    }
    
    return {
        init: function(){
            
        },
    
        create: function () {
            //load physics
            game.physics.startSystem(Phaser.Physics.ARCADE);

            //add audio
            music = game.add.audio('july');
            music.loop = true;
            music.play();
            music.volume = 0.3;
            
            iceSound = game.add.audio('iceSound');
            clickSound = game.add.audio('clickSound');
            meltSound = game.add.audio('meltSound');
            
            // load wallpaper and invisible bucket
            background = game.add.tileSprite(0,0,800,600,'wallpaper2');
            barLeft = game.add.sprite(50,550,'bar');
            barLeft.angle += -90;
            barMiddle = game.add.sprite(20,510,'bar');
            barRight = game.add.sprite(280,550,'bar');
            barRight.angle += -90;
            // set bars to invisible
            barLeft.alpha = 0;
            barMiddle.alpha = 0;
            barRight.alpha = 0;
    
            glass = game.add.sprite(50,250,'glass2');

            // create ice cubes
            iceCubes = game.add.group();
            iceCubes.createMultiple(250, 'ice', 0, false);
            game.physics.arcade.gravity.y = 40;
            game.physics.arcade.enable(game.world, true);

            //set bars and glass to immovable
            glass.body.allowGravity = 0;
            glass.body.immovable = true;
            barLeft.body.allowGravity = 0;
            barLeft.body.immovable = true;
            barMiddle.body.allowGravity = 0;
            barMiddle.body.immovable = true;
            barRight.body.allowGravity = 0;
            barRight.body.immovable = true;
            background.body.allowGravity = 0;
            background.body.immovable = true;

            // create cards
            //1st set
            beach_1 = game.add.sprite(385,100,'beach');
            hot_1 = game.add.sprite(385,100,'hot');
            two_1 = game.add.sprite(350,100,'2');
            three_1 = game.add.sprite(350,100,'3');
            four_1 = game.add.sprite(350,100,'4');
            two_1.scale.setTo(.3);
            three_1.scale.setTo(.3);
            four_1.scale.setTo(.3);
            beach_1.scale.setTo(.4);
            hot_1.scale.setTo(.4);
            //2nd set
            beach_2 = game.add.sprite(600,100,'beach');
            hot_2 = game.add.sprite(600,100,'hot');
            two_2 = game.add.sprite(565,100,'2');
            three_2 = game.add.sprite(565,100,'3');
            four_2 = game.add.sprite(565,100,'4');
            two_2.scale.setTo(.3);
            three_2.scale.setTo(.3);
            four_2.scale.setTo(.3);
            beach_2.scale.setTo(.4);
            hot_2.scale.setTo(.4);
            //3rd set
            beach_3 = game.add.sprite(385,300,'beach');
            hot_3 = game.add.sprite(385,300,'hot');
            two_3 = game.add.sprite(350,300,'2');
            three_3 = game.add.sprite(350,300,'3');
            four_3 = game.add.sprite(350,300,'4');
            two_3.scale.setTo(.3);
            three_3.scale.setTo(.3);
            four_3.scale.setTo(.3);
            beach_3.scale.setTo(.4);
            hot_3.scale.setTo(.4);
            //4th set
            beach_4 = game.add.sprite(600,300,'beach');
            hot_4 = game.add.sprite(600,300,'hot');
            two_4 = game.add.sprite(565,300,'2');
            three_4 = game.add.sprite(565,300,'3');
            four_4 = game.add.sprite(565,300,'4');
            two_4.scale.setTo(.3);
            three_4.scale.setTo(.3);
            four_4.scale.setTo(.3);
            beach_4.scale.setTo(.4);
            hot_4.scale.setTo(.4);

            
            //hide cards
            two_1.alpha = 0;
            three_1.alpha = 0;
            four_1.alpha = 0;
            beach_1.alpha = 0;
            hot_1.alpha = 0;
            two_2.alpha = 0;
            three_2.alpha = 0;
            four_2.alpha = 0;
            beach_2.alpha = 0;
            hot_2.alpha = 0;
            two_3.alpha = 0;
            three_3.alpha = 0;
            four_3.alpha = 0;
            beach_3.alpha = 0;
            hot_3.alpha = 0;
            two_4.alpha = 0;
            three_4.alpha = 0;
            four_4.alpha = 0;
            beach_4.alpha = 0;
            hot_4.alpha = 0;
            

            //create hold highlights
            highlight_1 = game.add.sprite(365,80,'highlight');
            highlight_1.scale.setTo(0.2);
            highlight_2 = game.add.sprite(580,80,'highlight');
            highlight_2.scale.setTo(0.2);
            highlight_3 = game.add.sprite(365,280,'highlight');
            highlight_3.scale.setTo(0.2);
            highlight_4 = game.add.sprite(580,280,'highlight');
            highlight_4.scale.setTo(0.2);

            //hide highlights
            highlight_1.alpha = 0;
            highlight_2.alpha = 0;
            highlight_3.alpha = 0;
            highlight_4.alpha = 0;

            //create arrows
            arrow1 = game.add.sprite(475,485,'arrow');
            arrow1.scale.setTo(.3);
            arrow2 = game.add.sprite(265,485,'arrow');
            arrow2.scale.setTo(.3);
            arrow2.alpha = 0;

            //place buttons
            holdButton_1 = game.add.button(405,230, 'hold', hold, {param1: 1}, 2, 1, 0);
            holdButton_2 = game.add.button(620,230, 'hold', hold, {param1: 2}, 2, 1, 0);
            holdButton_3 = game.add.button(405,430, 'hold', hold, {param1: 3}, 2, 1, 0);
            holdButton_4 = game.add.button(620,430, 'hold', hold, {param1: 4}, 2, 1, 0);
            drawButton = game.add.button(600,500, 'draw', draw, this, 2, 1, 0);
            dealButton = game.add.button(385,500, 'deal', deal, this, 2, 1, 0);
            resetButton = game.add.button(650,10, 'reset', resetHolds, this, 2, 1, 0);

            // Ice cube counter (Score)
            scoreString = 'Current Ice Cubes: ';
            scoreText = game.add.text(10, 10, scoreString + score, { font: '30px Arial', fill: '#fff' });
            // Turn Counter
            turnString = 'Current Turn: ';
            turnText = game.add.text(10, 570, turnString + turns, { font: '24px Arial', fill: '#000' });

            game.time.events.loop(1000, dropCubes, this);
            // add enter key
            enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        },

        update: function () {
            game.physics.arcade.collide(barMiddle,iceCubes,null,removeGravity,this);
            game.physics.arcade.collide(barLeft,iceCubes);
            game.physics.arcade.collide(barRight,iceCubes);
            game.physics.arcade.collide(iceCubes,iceCubes);

            if(score>=28){
                endGame(turns);
            }
            else if(score < 0){
                endGame(turns);
            }

            if (enterKey.isDown){
                endGame(turns);
            }
        }
    };
};
