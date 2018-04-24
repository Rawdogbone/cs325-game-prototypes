"use strict";
/** @param {Phaser.Game}game*/
GameStates.makeGame = function( game, shared ) {

    // Variables
    var keys = {};
    var key;
    var wallpaper;
    var bar1;
    var bar2;
    //var background;
    var iButton;
    var i90Button;
    var jButton;
    var j90Button;
    var j180Button;
    var j270Button;
    var lButton;
    var l90Button;
    var l180Button;
    var l270Button;
    var zButton;
    var z90Button;
    var sButton;
    var s90Button;
    var undoButton;
    var goButton;
    var location;
    var location2;
    var location3;
    var sourcebrick = [0,0]; // TOP LEFT of Grid
    var destbrick = [0,0];
    var brickArray = [];
    var wallArray = [];
    var typeArray = [];
    var orientationArray = []; // 0 up, 1 down 
    var brickCount = 0; // technically a 'tile' count
    var plane;
    var score = 0;
    var numBricks = 0;
    var iBrickCount = 0;
    var jBrickCount = 0;
    var lBrickCount = 0;
    var sBrickCount = 0;
    var zBrickCount = 0;
    var audio;
    var clickSound;
    var clipSound;
    var popSound;
    
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

    function undo(){
        clickSound.play();
        var temp = brickArray.pop();
        if(temp == null){
            console.log("nothing on board");
        }
        else{
            temp.destroy();
            var temp = typeArray.pop();
            if(temp < 3){
                numBricks--;
                iBrickCount--;
            }
            else if(temp < 7){
                numBricks--;
                jBrickCount--;
            }
            else if(temp < 11){
                numBricks--;
                lBrickCount--;
            }
            else if(temp < 13){
                numBricks--;
                sBrickCount--;
            }
            else{
                numBricks--;
                zBrickCount--;
            }
        }
        
    }

    function go(){
        clickSound.play();
        if(plane != null){
            plane.destroy();
        }
        // add plane
        var temp = 200;
        plane = game.add.sprite(sourcebrick[0],sourcebrick[1], 'plane3');
        console.log("numBricks: " + numBricks);
        console.log("iBricks: " + iBrickCount);
        console.log("jBricks: " + jBrickCount);
        console.log("lBricks: " + lBrickCount);
        console.log("sBricks: " + sBrickCount);
        console.log("zBricks: " + zBrickCount);
        score = numBricks + ((iBrickCount * 3) + (lBrickCount * 2) + (jBrickCount * 2) + (sBrickCount) + (zBrickCount));
        endGame(score);
    }

    function checkCollideI(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (((sprite.x + 75 >= wallArray[j][0]) && sprite.x <= wallArray[j][0]) && (sprite.y == wallArray[j][1])){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    iBrickCount--;
                    break;
                }
            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            else if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            else{
                clipSound.play();
            }
        }
    }

    function checkCollideI90(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (((sprite.y + 75 >= wallArray[j][1]) && sprite.y <= wallArray[j][1]) && (sprite.x == wallArray[j][0])){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    iBrickCount--;
                    break;
                }
            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
        }
        clipSound.play();

    }

    function checkCollideJ(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (((sprite.x + 50 >= wallArray[j][0]) && sprite.x <= wallArray[j][0]) && (sprite.y == wallArray[j][1])){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }
                else if (sprite.x + 50 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }

            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
        }
        clipSound.play();

    }

    function checkCollideJ90(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y + 50 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25== wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y + 50 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }
            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
        }
        clipSound.play();
 
    }

    function checkCollideJ180(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }
                else if (sprite.x == wallArray[j][0] && sprite.y + 25== wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25== wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }
                else if (sprite.x + 50 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }
            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
        }
        clipSound.play();

    }

    function checkCollideJ270(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }
                else if (sprite.x == wallArray[j][0] && sprite.y + 25== wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }
                else if (sprite.x == wallArray[j][0] && sprite.y + 50== wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    jBrickCount--;
                    break;
                }
            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();                                             
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
        }
        clipSound.play();
    }

    function checkCollideL(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y== wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
                else if (sprite.x + 50 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
                else if (sprite.x == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
        }
        clipSound.play();
    }

    function checkCollideL90(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y== wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y  + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
                else if (sprite.x  + 25 == wallArray[j][0] && sprite.y + 50 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
        }
        clipSound.play();
    }

    function checkCollideL180(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25== wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
                else if (sprite.x + 50 == wallArray[j][0] && sprite.y  + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
                else if (sprite.x  + 50 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
        }
        clipSound.play();
    }

    function checkCollideL270(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
                else if (sprite.x == wallArray[j][0] && sprite.y + 25== wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
                else if (sprite.x == wallArray[j][0] && sprite.y  + 50 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
                else if (sprite.x  + 25 == wallArray[j][0] && sprite.y  + 50 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    lBrickCount--;
                    break;
                }
            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
        }
        clipSound.play();

    }

    function checkCollideS(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    sBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    sBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    sBrickCount--;
                    break;
                }
                else if (sprite.x + 50 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    sBrickCount--;
                    break;
                }
            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
        }
        clipSound.play();
    }

    function checkCollideS90(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    sBrickCount--;
                    break;
                }
                else if (sprite.x  == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    sBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    sBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y + 50 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    sBrickCount--;
                    break;
                }
            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
        }
        clipSound.play();
    }

    function checkCollideZ(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    zBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    zBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    zBrickCount--;
                    break;
                }
                else if (sprite.x + 50 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    zBrickCount--;
                    break;
                }
            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
        }
        clipSound.play();
    }

    function checkCollideZ90(sprite, pointer){
        // check every wall
        var wallcollide = false;
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    zBrickCount--;
                    break;
                }
                else if (sprite.x == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    zBrickCount--;
                    break;
                }
                else if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    zBrickCount--;
                    break;
                }
                else if (sprite.x == wallArray[j][0] && sprite.y + 50 == wallArray[j][1]){
                    wallcollide = true;
                    popSound.play();
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                    numBricks--;
                    zBrickCount--;
                    break;
                }
            }
        }
        //check borders
        if(!wallcollide){
            if(sprite.x < 25 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
            if (sprite.x + sprite.width > 675 && sprite.y < 500){
                popSound.play();
                var temp = brickArray.pop();
                temp.destroy();
                typeArray.pop();
                numBricks--;
                iBrickCount--;
            }
        }
        clipSound.play();
    }

    //type1
    function placeI(){
        clickSound.play();
        var iBrick = game.add.sprite(15,535,'I');
        iBrick.inputEnabled = true;
        iBrick.input.enableDrag(true);
        iBrick.input.enableSnap(25,25,false,true)
        brickArray.push(iBrick);
        typeArray.push(1);
        numBricks++;
        iBrickCount++;
        iBrick.events.onDragStop.add(checkCollideI,this);

    }
    //type2
    function placeI90(){ 
        clickSound.play();
        var i90Brick = game.add.sprite(105,510,'I90');
        i90Brick.inputEnabled = true;
        i90Brick.input.enableDrag(true);
        i90Brick.input.enableSnap(25,25,false,true)
        brickArray.push(i90Brick);
        typeArray.push(2);
        numBricks++;
        iBrickCount++;
        i90Brick.events.onDragStop.add(checkCollideI90,this);
    }
    //type3
    function placeJ(){ 
        clickSound.play();
        var jBrick = game.add.sprite(160,535,'J');
        jBrick.inputEnabled = true;
        jBrick.input.enableDrag(true);
        jBrick.input.enableSnap(25,25,false,true)
        brickArray.push(jBrick);
        typeArray.push(3);
        numBricks++;
        jBrickCount++;
        jBrick.events.onDragStop.add(checkCollideJ,this);
    }
    //type4
    function placeJ90(){ 
        clickSound.play();
        var j90Brick = game.add.sprite(230,520,'J90');
        j90Brick.inputEnabled = true;
        j90Brick.input.enableDrag(true);
        j90Brick.input.enableSnap(25,25,false,true)
        brickArray.push(j90Brick);
        typeArray.push(4);
        numBricks++;
        jBrickCount++;
        j90Brick.events.onDragStop.add(checkCollideJ90,this);
    }
    //type5
    function placeJ180(){ 
        clickSound.play();
        var j180Brick = game.add.sprite(280,535,'J180');
        j180Brick.inputEnabled = true;
        j180Brick.input.enableDrag(true);
        j180Brick.input.enableSnap(25,25,false,true)
        brickArray.push(j180Brick);
        typeArray.push(5);
        numBricks++;
        jBrickCount++;
        j180Brick.events.onDragStop.add(checkCollideJ180,this);
    }
    //type6
    function placeJ270(){ 
        clickSound.play();
        var j270Brick = game.add.sprite(350,520,'J270');
        j270Brick.inputEnabled = true;
        j270Brick.input.enableDrag(true);
        j270Brick.input.enableSnap(25,25,false,true)
        brickArray.push(j270Brick);
        typeArray.push(6);
        numBricks++;
        jBrickCount++;
        j270Brick.events.onDragStop.add(checkCollideJ270,this);
    }
    //type7
    function placeL(){ 
        clickSound.play();
        var lBrick = game.add.sprite(420,535,'L');
        lBrick.inputEnabled = true;
        lBrick.input.enableDrag(true);
        lBrick.input.enableSnap(25,25,false,true)
        brickArray.push(lBrick);
        typeArray.push(7);
        numBricks++;
        lBrickCount++;
        lBrick.events.onDragStop.add(checkCollideL,this);
    }
    //type8
    function placeL90(){ 
        clickSound.play();
        var l90Brick = game.add.sprite(490,520,'L90');
        l90Brick.inputEnabled = true;
        l90Brick.input.enableDrag(true);
        l90Brick.input.enableSnap(25,25,false,true)
        brickArray.push(l90Brick);
        typeArray.push(8);
        numBricks++;
        lBrickCount++;
        l90Brick.events.onDragStop.add(checkCollideL90,this);
    }
    //type9
    function placeL180(){ 
        clickSound.play();
        var l180Brick = game.add.sprite(540,535,'L180');
        l180Brick.inputEnabled = true;
        l180Brick.input.enableDrag(true);
        l180Brick.input.enableSnap(25,25,false,true)
        brickArray.push(l180Brick);
        typeArray.push(9);
        numBricks++;
        lBrickCount++;
        l180Brick.events.onDragStop.add(checkCollideL180,this);
    }
    //type10
    function placeL270(){ 
        clickSound.play();
        var l270Brick = game.add.sprite(610,520,'L270');
        l270Brick.inputEnabled = true;
        l270Brick.input.enableDrag(true);
        l270Brick.input.enableSnap(25,25,false,true)
        brickArray.push(l270Brick);
        typeArray.push(10);
        numBricks++;
        lBrickCount++;
        l270Brick.events.onDragStop.add(checkCollideL270,this);

    }
    //type11
    function placeS(){ 
        clickSound.play();
        var sBrick = game.add.sprite(725,25,'S');
        sBrick.inputEnabled = true;
        sBrick.input.enableDrag(true);
        sBrick.input.enableSnap(25,25,false,true)
        brickArray.push(sBrick);
        typeArray.push(11);
        numBricks++;
        sBrickCount++;
        sBrick.events.onDragStop.add(checkCollideS,this);
    }
    //type12
    function placeS90(){ 
        clickSound.play();
        var s90Brick = game.add.sprite(725,75,'S90');
        s90Brick.inputEnabled = true;
        s90Brick.input.enableDrag(true);
        s90Brick.input.enableSnap(25,25,false,true)
        brickArray.push(s90Brick);
        typeArray.push(12);
        numBricks++;
        sBrickCount++;
        s90Brick.events.onDragStop.add(checkCollideS90,this);
    }
    //type13
    function placeZ(){ 
        clickSound.play();
        var zBrick = game.add.sprite(725,150,'Z');
        zBrick.inputEnabled = true;
        zBrick.input.enableDrag(true);
        zBrick.input.enableSnap(25,25,false,true)
        brickArray.push(zBrick);
        typeArray.push(13);
        numBricks++;
        zBrickCount++;
        zBrick.events.onDragStop.add(checkCollideZ,this);
    }
    //type14
    function placeZ90(){ 
        clickSound.play();
        var z90Brick = game.add.sprite(725,200,'Z90');
        z90Brick.inputEnabled = true;
        z90Brick.input.enableDrag(true);
        z90Brick.input.enableSnap(25,25,false,true)
        brickArray.push(z90Brick);
        typeArray.push(14);
        numBricks++;
        zBrickCount++;
        z90Brick.events.onDragStop.add(checkCollideZ90,this);
    }

    function quitGame() {
        audio.stop();
        game.state.start('MainMenu');

    }

    function endGame(endscore){
        audio.stop();
        var temp = endscore;
        var tempiBrick = iBrickCount;
        var tempjBrick = jBrickCount;
        var templBrick = lBrickCount;
        var tempsBrick = sBrickCount;
        var tempzBrick = zBrickCount;
        sourcebrick = [0,0]; // TOP LEFT of Grid
        destbrick = [0,0];
        brickArray = [];
        wallArray = [];
        typeArray = [];
        orientationArray = []; // 0 up, 1 down 
        brickCount = 0;
        numBricks = 0
        iBrickCount = 0;
        jBrickCount = 0;
        lBrickCount = 0;
        sBrickCount = 0;
        zBrickCount = 0;
        game.state.start('End', true, false,temp,tempiBrick,tempjBrick,templBrick,tempsBrick,tempzBrick);
    }
    
    return {
        init: function(){
            
        },
    
        create: function () {

            //load audio
            audio = game.add.audio('background');
            audio.loop = true;
            audio.play();

            clickSound = game.add.audio('click');
            popSound = game.add.audio('pop');
            clipSound = game.add.audio('clip');

            //load background
            game.stage.backgroundColor = '#2d2d2d';
            wallpaper = game.add.image(0,0,'smallBackground');
            bar1 = game.add.image(0,0,'bar');
            bar1.alpha = 0.5;
            bar2 = game.add.image(675,0,'bar');
            bar2.alpha = 0.5;
            
            //debug key
            key = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            //load buttons
            iButton = game.add.button(15,535,'I',placeI);
            iButton.scale.setTo(0.75);

            i90Button = game.add.button(105,510,'I90',placeI90);
            i90Button.scale.setTo(0.75);

            jButton = game.add.button(160,535,'J',placeJ);
            jButton.scale.setTo(0.75);   
            j90Button = game.add.button(230,520,'J90',placeJ90);
            j90Button.scale.setTo(0.75);
            j180Button = game.add.button(280,535,'J180',placeJ180);
            j180Button.scale.setTo(0.75);
            j270Button = game.add.button(350,520,'J270',placeJ270);
            j270Button.scale.setTo(0.75);

            lButton = game.add.button(420,535,'L',placeL);
            lButton.scale.setTo(0.75);
            l90Button = game.add.button(490,520,'L90',placeL90);
            l90Button.scale.setTo(0.75);
            l180Button = game.add.button(540,535,'L180',placeL180);
            l180Button.scale.setTo(0.75);
            l270Button = game.add.button(610,520,'L270',placeL270);
            l270Button.scale.setTo(0.75);

            sButton = game.add.button(725,25,'S',placeS);
            sButton.scale.setTo(0.75);
            s90Button = game.add.button(725,75,'S90',placeS90);
            s90Button.scale.setTo(0.75);

            zButton = game.add.button(725, 150, 'Z',placeZ);
            zButton.scale.setTo(0.75);
            z90Button = game.add.button(725, 200, 'Z90',placeZ90);
            z90Button.scale.setTo(0.75);

            undoButton = game.add.button(680,525,'undo',undo);
            goButton = game.add.button(710,465,'go',go);

            //add text and menu stuff
            var text = "Click any\npiece then\ndrag to \nbuild the\nbridge. :)\nPress go\nwhen done"
            var text3 = game.add.text(715, 270, text, {font: "bold 12px Consolas", fill: '#ffe', align: "center"});
            game.world.bringToTop(text3);
            text3.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

            game.add.image(705,405,'source');
            game.add.image(740,405,'arrow');
            game.add.image(770,405,'destination');
            
            //add source and destination
            location = game.rnd.integerInRange(0,8) * 25 * 2;
            location2 = game.rnd.integerInRange(0,19) * 25;
            location3 = game.rnd.integerInRange(0,8) * 25 * 2;
            game.add.image(0,location, 'source');
            game.add.image(675,location3, 'destination');
            // initilize placement of bricks
            sourcebrick[0] = 0;
            sourcebrick[1] = location;
            destbrick[0] = 675;
            destbrick[1] = location3;


            //spawn walls
            for(var i = 0; i < 12; i++){
                var temp1 = game.rnd.integerInRange(1,25) * 25;
                var temp2 = game.rnd.integerInRange(0,19) * 25;
                //check to make sure wall isnt blocking the entrance
                if(temp2 == sourcebrick[1]){ // same y as source brick
                    if(temp1 == 25){ // right next to it
                        if(temp2 == 475){
                            temp2 = temp2 - 25;
                        }
                        else{
                            temp2 = temp2 + 25;
                        }
                    }
                }
                if(temp2 == destbrick[1]){ // same y as dest brick
                    if(temp1 == 650){ // right next to it
                        if(temp2 == 475){
                            temp2 = temp2 - 25;
                        }
                        else{
                            temp2 = temp2 + 25;
                        }
                    }
                }
                game.add.image(temp1,temp2, 'wall');
                wallArray[i] = [temp1,temp2];
            }
            
            
        },

        update: function () {
            /*
            if(brickArray[0]!= null){
                // Sprite debug info
                game.debug.spriteInfo(brickArray[0], 32, 32);
            }
            */
            
            if (key.isDown){
                endGame(0);
            }
        }
    };
};
