var xS = 1, yS = 0, xS2 = -1, yS2 = 0, oxS, oyS, oxS2, oyS2;

var xPos = 40;
var yPos = 300;

var xPos2 = 550;
var yPos2 = 300;

var bLoss, rLoss;

var x = 1;

function setup() {
    createCanvas(600,600);
    background(0);
    
    frameRate(15);
    noStroke();
    fill(0,0,255);
    rect(xPos,yPos,10,10);
    fill(255,0,0);
    rect(xPos2,yPos2,10,10);
}

function checkBlue() {
    if(xPos < 0 || xPos > 590 || yPos < 0 || yPos > 590) {
        bLoss = 1;
    }
    var check = get(xPos,yPos);
    if(red(check) != 0 && green(check) != 0 && blue(check) != 0) {
        bLoss = 1;
    }
}

function checkRed() {
    if(xPos2 < 0 || xPos2 > 590 || yPos2 < 0 || yPos2 > 590) {
        rLoss = 1;
    }
    var check = get(xPos2,yPos2);
    if(red(check) != 0 && green(check) != 0 && blue(check) != 0) {
        rLoss = 1;
    }
}

function draw() {
    var status = document.getElementById("status");
    //Fills the trail
    fill(111,195,223);
    rect(xPos,yPos,10,10);
    fill(222,116,12);
    rect(xPos2,yPos2,10,10);
    //Sets old speeds to new speeds to prevent running into self
    oxS = xS;
    oyS = yS;
    oxS2 = xS2;
    oyS2 = yS2;
    //Updates Vehicle
    xPos += xS * 10;
    yPos += yS * 10;
    xPos2 += xS2 * 10;
    yPos2 += yS2 * 10;
    //Checks for a collision
    checkRed();
    checkBlue();
    //Fills vehicle
    fill(111,135,255);
    rect(xPos,yPos,10,10);
    fill(255,56,12);
    rect(xPos2,yPos2,10,10);
    if(rLoss == 1 && bLoss == 1) {
        status.innerHTML = "It's A Tie!";
        noLoop();
    } else if(rLoss == 1) {
        status.innerHTML = "Blue Wins!";
        noLoop();
    } else if(bLoss == 1) {
        status.innerHTML = "Red Wins!";
        noLoop();
    }
}