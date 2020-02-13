var bSnake = new Snake();
var rSnake = new Snake();
var food = new Item();
var poison = new Item();
var megafood = new Item();
var megafoodchance = 50;
var boostfood = new Item();
var boostfoodchance = 50;
var game = 0;
var extras = 0;
var boostMove = 0;

function gameOver() {
    bSnake.death(rSnake);
    rSnake.death(bSnake);
}

function setup() {
    var canvas = createCanvas(600,600);
    canvas.parent("canvas");
    background(0);
    frameRate(30);
    ellipseMode(CORNER); // Necessary to make the Items work
    noLoop();
}

function draw() {
    background(0);
    
    stroke(10);
    /*=============================*/
    
    if(boostMove) {
        bSnake.boost();
    } else {
        bSnake.update();    
    }
    
    if(boostMove) {
        rSnake.boost();
    } else {
        rSnake.update();
    }
    
    
    boostMove = !boostMove;
    
    // gameOver();
    
    /*============================*/
    
    fill(0,0,255);
    bSnake.display();
    
    fill(255,0,0);
    rSnake.display();
    
    gameOver();
    
    /*===========================*/
    
    noStroke();
    
    fill(0,255,0);
    food.display();
    
    if(document.getElementById("box").checked) {
        if(megafoodchance != 0) {
            megafoodchance = Math.floor(Math.random() * 600);
        } else {
            fill(255,255,0);
            megafood.display();
        }
        
        if(boostfoodchance != 0) {
            boostfoodchance = Math.floor(Math.random() * 100);
        } else {
            fill(255,255,255);
            boostfood.display();
        }
        
        fill(200,0,255);
        poison.display();
    }

    
    if(bSnake.loss && rSnake.loss && game) {
        document.getElementById("text").innerHTML = "Press Space If You Want To Play Again!";
        document.getElementById("status").innerHTML = "Tie";
        document.getElementById("extras").style.visibility = "visible";
        game = 0;
        noLoop();
        cursor();
    } else if(bSnake.loss && game) {
        document.getElementById("text").innerHTML = "Press Space If You Want To Play Again!";
        document.getElementById("status").innerHTML = "Red Wins";
        document.getElementById("extras").style.visibility = "visible";
        rSnake.score++;
        game = 0;
        noLoop();
        cursor();
    } else if(rSnake.loss && game) {
        document.getElementById("text").innerHTML = "Press Space If You Want To Play Again!";
        document.getElementById("status").innerHTML = "Blue Wins";
        document.getElementById("extras").style.visibility = "visible";
        bSnake.score++;
        game = 0;
        noLoop();
        cursor();
    }
}