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
    var brickCount = 0;
    var plane;

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
        var temp = brickArray.pop();
        if(temp == null){
            console.log("nothing on board");
        }
        else{
            temp.destroy();
            typeArray.pop();
        }
        
    }

    function go(){
        if(plane != null){
            plane.destroy();
        }
        // add plane
        plane = game.add.sprite(sourcebrick[0],sourcebrick[1], 'plane3');
        game.add.tween(plane).to( { x: destbrick[0]}, 3000, Phaser.Easing.Linear.None, true,0);
        game.add.tween(plane).to( { y: destbrick[1]}, 3000, Phaser.Easing.Linear.None, true,0);
        endGame(0);
    }

    function checkCollideI(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (((sprite.x + 75 >= wallArray[j][0]) && sprite.x <= wallArray[j][0]) && (sprite.y == wallArray[j][1])){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }
        
    }

    function checkCollideI90(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (((sprite.y + 75 >= wallArray[j][1]) && sprite.y <= wallArray[j][1]) && (sprite.x == wallArray[j][0])){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }

    }

    function checkCollideJ(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (((sprite.x + 50 >= wallArray[j][0]) && sprite.x <= wallArray[j][0]) && (sprite.y == wallArray[j][1])){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 50 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }

            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }

    }

    function checkCollideJ90(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y + 50 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25== wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y + 50 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }
 
    }

    function checkCollideJ180(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x == wallArray[j][0] && sprite.y + 25== wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25== wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 50 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }

    }

    function checkCollideJ270(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x == wallArray[j][0] && sprite.y + 25== wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x == wallArray[j][0] && sprite.y + 50== wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }

    }

    function checkCollideL(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y== wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 50 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }

    }

    function checkCollideL90(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y== wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y  + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x  + 25 == wallArray[j][0] && sprite.y + 50 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }

    }

    function checkCollideL180(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25== wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 50 == wallArray[j][0] && sprite.y  + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x  + 50 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }

    }

    function checkCollideL270(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x == wallArray[j][0] && sprite.y + 25== wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x == wallArray[j][0] && sprite.y  + 50 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x  + 25 == wallArray[j][0] && sprite.y  + 50 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }

    }

    function checkCollideS(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 50 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }

    }

    function checkCollideS90(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x  == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y + 50 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }

    }

    function checkCollideZ(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 50 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }

    }

    function checkCollideZ90(sprite, pointer){
        // check every wall
        for(var j = 0; j < wallArray.length; j++){
            // make sure there is a brick to check
            if(sprite != null){
                // check if wall's x and y match up with bricks
                if (sprite.x + 25 == wallArray[j][0] && sprite.y == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x + 25 == wallArray[j][0] && sprite.y + 25 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
                if (sprite.x == wallArray[j][0] && sprite.y + 50 == wallArray[j][1]){
                    var temp = brickArray.pop();
                    temp.destroy();
                    typeArray.pop();
                }
            }
        }
        //check borders
        if(sprite.x < 25 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        if (sprite.x + sprite.width > 675 && sprite.y < 500){
            var temp = brickArray.pop();
            temp.destroy();
            typeArray.pop();
        }
        // edit brickCount
        if(brickCount == 0){
            brickCount +=4;
        }
        else{
            brickCount +=3;
        }

    }

    //type1
    function placeI(){ 
        var iBrick = game.add.sprite(15,535,'I');
        iBrick.inputEnabled = true;
        iBrick.input.enableDrag(true);
        iBrick.input.enableSnap(25,25,false,true)
        brickArray.push(iBrick);
        typeArray.push(1);
        iBrick.events.onDragStop.add(checkCollideI,this);

    }
    //type2
    function placeI90(){ 
        var i90Brick = game.add.sprite(105,510,'I90');
        i90Brick.inputEnabled = true;
        i90Brick.input.enableDrag(true);
        i90Brick.input.enableSnap(25,25,false,true)
        brickArray.push(i90Brick);
        typeArray.push(2);
        i90Brick.events.onDragStop.add(checkCollideI90,this);
    }
    //type3
    function placeJ(){ 
        var jBrick = game.add.sprite(160,535,'J');
        jBrick.inputEnabled = true;
        jBrick.input.enableDrag(true);
        jBrick.input.enableSnap(25,25,false,true)
        brickArray.push(jBrick);
        typeArray.push(3);
        jBrick.events.onDragStop.add(checkCollideJ,this);
    }
    //type4
    function placeJ90(){ 
        var j90Brick = game.add.sprite(230,520,'J90');
        j90Brick.inputEnabled = true;
        j90Brick.input.enableDrag(true);
        j90Brick.input.enableSnap(25,25,false,true)
        brickArray.push(j90Brick);
        typeArray.push(4);
        j90Brick.events.onDragStop.add(checkCollideJ90,this);
    }
    //type5
    function placeJ180(){ 
        var j180Brick = game.add.sprite(280,535,'J180');
        j180Brick.inputEnabled = true;
        j180Brick.input.enableDrag(true);
        j180Brick.input.enableSnap(25,25,false,true)
        brickArray.push(j180Brick);
        typeArray.push(5);
        j180Brick.events.onDragStop.add(checkCollideJ180,this);
    }
    //type6
    function placeJ270(){ 
        var j270Brick = game.add.sprite(350,520,'J270');
        j270Brick.inputEnabled = true;
        j270Brick.input.enableDrag(true);
        j270Brick.input.enableSnap(25,25,false,true)
        brickArray.push(j270Brick);
        typeArray.push(6);
        j270Brick.events.onDragStop.add(checkCollideJ270,this);
    }
    //type7
    function placeL(){ 
        var lBrick = game.add.sprite(420,535,'L');
        lBrick.inputEnabled = true;
        lBrick.input.enableDrag(true);
        lBrick.input.enableSnap(25,25,false,true)
        brickArray.push(lBrick);
        typeArray.push(7);
        lBrick.events.onDragStop.add(checkCollideL,this);
    }
    //type8
    function placeL90(){ 
        var l90Brick = game.add.sprite(490,520,'L90');
        l90Brick.inputEnabled = true;
        l90Brick.input.enableDrag(true);
        l90Brick.input.enableSnap(25,25,false,true)
        brickArray.push(l90Brick);
        typeArray.push(8);
        l90Brick.events.onDragStop.add(checkCollideL90,this);
    }
    //type9
    function placeL180(){ 
        var l180Brick = game.add.sprite(540,535,'L180');
        l180Brick.inputEnabled = true;
        l180Brick.input.enableDrag(true);
        l180Brick.input.enableSnap(25,25,false,true)
        brickArray.push(l180Brick);
        typeArray.push(9);
        l180Brick.events.onDragStop.add(checkCollideL180,this);
    }
    //type10
    function placeL270(){ 
        var l270Brick = game.add.sprite(610,520,'L270');
        l270Brick.inputEnabled = true;
        l270Brick.input.enableDrag(true);
        l270Brick.input.enableSnap(25,25,false,true)
        brickArray.push(l270Brick);
        typeArray.push(10);
        l270Brick.events.onDragStop.add(checkCollideL270,this);

    }
    //type11
    function placeS(){ 
        var sBrick = game.add.sprite(725,25,'S');
        sBrick.inputEnabled = true;
        sBrick.input.enableDrag(true);
        sBrick.input.enableSnap(25,25,false,true)
        brickArray.push(sBrick);
        typeArray.push(11);
        sBrick.events.onDragStop.add(checkCollideS,this);
    }
    //type12
    function placeS90(){ 
        var s90Brick = game.add.sprite(725,75,'S90');
        s90Brick.inputEnabled = true;
        s90Brick.input.enableDrag(true);
        s90Brick.input.enableSnap(25,25,false,true)
        brickArray.push(s90Brick);
        typeArray.push(12);
        s90Brick.events.onDragStop.add(checkCollideS90,this);
    }
    //type13
    function placeZ(){ 
        var zBrick = game.add.sprite(725,150,'Z');
        zBrick.inputEnabled = true;
        zBrick.input.enableDrag(true);
        zBrick.input.enableSnap(25,25,false,true)
        brickArray.push(zBrick);
        typeArray.push(13);
        zBrick.events.onDragStop.add(checkCollideZ,this);
    }
    //type14
    function placeZ90(){ 
        var z90Brick = game.add.sprite(725,200,'Z90');
        z90Brick.inputEnabled = true;
        z90Brick.input.enableDrag(true);
        z90Brick.input.enableSnap(25,25,false,true)
        brickArray.push(z90Brick);
        typeArray.push(14);
        z90Brick.events.onDragStop.add(checkCollideZ90,this);
    }

    function quitGame() {
        game.state.start('MainMenu');

    }

    function endGame(num){
        var sourcebrick = [0,0]; // TOP LEFT of Grid
        var destbrick = [0,0];
        var brickArray = [];
        var wallArray = [];
        var typeArray = [];
        var orientationArray = []; // 0 up, 1 down 
        var brickCount = 0;
        game.state.start('End', true, false,num);
    }
    
    return {
        init: function(){
            
        },
    
        create: function () {
            //load audio
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
