var bluePlayer, redPlayer;

var bScore = 0, rScore = 0;

var game = 0;

function setup() {
    var canvas = createCanvas(600,600);
    canvas.parent("canvas");
    background(0);
    frameRate(15);
    noStroke();
    noLoop();
}

function draw() {
    
    var status = document.getElementById("status");
    var text = document.getElementById("text");
    
    // Displays Trail
    var c = color(111,195,223);
    bluePlayer.display(c);
    
    c = color(222,116,12);
    redPlayer.display(c);
    
    // Updates Light Cycles
    bluePlayer.update();
    redPlayer.update();
    
    // Checks for a collision
    var bLoss = bluePlayer.check();
    var rLoss = redPlayer.check();
    
    // Displays Light Cycle
    c = color(111,135,255);
    bluePlayer.display(c);
    
    c = color(255,56,12);
    redPlayer.display(c);
    
    // Outcomes
    if(rLoss == true && bLoss == true) {
        status.innerHTML = "It's A Tie!";
        noLoop();
        text.innerHTML = "Press Space If You Want To Play Again!";
        game = 0;
    } else if(rLoss == true) {
        bScore++;
        status.innerHTML = "Blue Wins!";
        noLoop();
        text.innerHTML = "Press Space If You Want To Play Again!";
        game = 0;
    } else if(bLoss == true) {
        rScore++;
        status.innerHTML = "Red Wins!";
        noLoop();
        text.innerHTML = "Press Space If You Want To Play Again!";
        game = 0;
    }
    
}
