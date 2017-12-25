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

function setup() {
    var canvas = createCanvas(600,600);
    canvas.parent("canvas");
    background(0);
    frameRate(15);
    ellipseMode(CORNER); // Necessary to make the Items work
    noLoop();
}

function draw() {
    background(0);
    
    /*
        Snakes
                */
    
    stroke(10);
    
    fill(0,0,255);
    bSnake.update();
    
    
    fill(255,0,0);
    rSnake.update();
    
    /*
        Items
                */
    
    noStroke();
    
    fill(0,255,0);
    food.display();
    
    /*
        Extra Items
                      */
    if(document.getElementById("box").checked) {
        if(megafoodchance != 0) {
            megafoodchance = Math.floor(Math.random() * 1000);
        } else {
            fill(255,255,0);
            megafood.display();
        }
        
        if(boostfoodchance != 0) {
            boostfoodchance = Math.floor(Math.random() * 250);
        } else {
            fill(255,255,255);
            boostfood.display();
        }
        
        fill(200,0,255);
        poison.display();
    }
    
    
    /*
        Checks Losses
                        */
                        
    if(bSnake.death(rSnake) && rSnake.death(bSnake) && game == 1) {
        document.getElementById("text").innerHTML = "Press Space If You Want To Play Again!";
        document.getElementById("status").innerHTML = "Tie";
        document.getElementById("extras").style.visibility = "visible";
        game = 0;
        noLoop();
    } else if(bSnake.death(rSnake) && game == 1) {
        document.getElementById("text").innerHTML = "Press Space If You Want To Play Again!";
        document.getElementById("status").innerHTML = "Red Wins";
        document.getElementById("extras").style.visibility = "visible";
        rSnake.score++;
        game = 0;
        noLoop();
    } else if(rSnake.death(bSnake) && game == 1) {
        document.getElementById("text").innerHTML = "Press Space If You Want To Play Again!";
        document.getElementById("status").innerHTML = "Blue Wins";
        document.getElementById("extras").style.visibility = "visible";
        bSnake.score++;
        game = 0;
        noLoop();
    }
}