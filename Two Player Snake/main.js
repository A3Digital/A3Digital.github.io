var xS = 1, yS = 0, xS2 = -1, yS2 = 0, oxS, oyS, oxS2, oyS2;
var xF = Math.floor(Math.random() * 30) * 20;
var yF = Math.floor(Math.random() * 30) * 20;

var xPos = [];
var yPos = [];
var seg = 5;

var xPos2 = [];
var yPos2 = [];
var seg2 = 5;

var bLoss, rLoss;

var bScore = 0, rScore = 0;

function setup() {
    var canvas = createCanvas(600,600);
    canvas.parent("canvas");
    stroke(10);
    frameRate(15);
    ellipseMode(CORNER);//Necessary to make the fruit work
    for(var i = 0;i<seg;i++) { //Makes an arry of 5 with the starting coordinates for Blue and Red
        xPos.push(40);
        yPos.push(300);
        xPos2.push(550);
        yPos2.push(300);
    }
    document.getElementById("retry").style.visibility = "hidden";
}

function updateBlue() {
    //Sets the Old Speed to the New Speed: Used to prevent from quick switching speeds and going into one's tail
    oxS = xS;
    oyS = yS;
    //Starting from the back of the array, retrieves the values from the previous index so the values are not lost
    for(var i = seg - 1;i >= 1;i--) {
        xPos[i] = xPos[i-1];
        yPos[i] = yPos[i-1];
    }
    //Moves the head
    xPos[0] += xS * 10;
    yPos[0] += yS * 10;
    //Displays the snake
    fill(0,0,255);//Blue
    for(var i = 0;i<seg;i++) {
        rect(xPos[i],yPos[i],10,10);
    }
}

function updateRed() {
    //Sets the Old Speed to the New Speed: Used to prevent from quick switching speeds and going into one's tail
    oxS2 = xS2;
    oyS2 = yS2;
    //Starting from the back of the array, retrieves the values from the previous index so the values are not lost
    for(var i = seg2 - 1;i >= 1;i--) {
        xPos2[i] = xPos2[i-1];
        yPos2[i] = yPos2[i-1];
    }
    //Moves the head
    xPos2[0] += xS2 * 10;
    yPos2[0] += yS2 * 10;
    //Displays the snake
    fill(255,0,0);//Red
    for(var i = 0;i<seg2;i++) {
        rect(xPos2[i],yPos2[i],10,10);
    }
}

function updateFruit() {
    //Checks if the blue has reached the fruit
    if(xPos[0] == xF && yPos[0] == yF) {
        for(var x = 5;x>0;x--) {
            xPos.push(xPos[seg-1]);
            yPos.push(yPos[seg-1]);
            seg++;
        }
        //New coordinates
        xF = Math.floor(Math.random() * 30) * 20;
        yF = Math.floor(Math.random() * 30) * 20;
    }
    //Checks if the red has reached the fruit
    if(xPos2[0] == xF && yPos2[0] == yF) {
        for(var x = 5;x>0;x--) {
            xPos2.push(xPos2[seg2-1]);
            yPos2.push(yPos2[seg2-1]);
            seg2++;
        }
        //New coordinates
        xF = Math.floor(Math.random() * 30) * 20;
        yF = Math.floor(Math.random() * 30) * 20;
    }
    //Displays fruit
    fill(0,255,0);
    ellipse(xF,yF,10,10);
}

function checkBlue() {
    //Checks if the borders have been passed
    if(xPos[0] < 0 || xPos[0] > 590 || yPos[0] < 0 || yPos[0] > 590) {
        bLoss = 1;
    }
    //Checks against self: Starts at one to not check with their own head
    for(var i = 1;i<seg;i++) {
        if(xPos[0] == xPos[i] && yPos[0] == yPos[i]) {
            bLoss = 1;
        }
    }
    //Checks against enemy: Starts at 0 to check with the enemy's head
    for(var i = 0;i<seg2;i++) {
        if(xPos[0] == xPos2[i] && yPos[0] == yPos2[i]) {
            bLoss = 1;
        }
    }
}

function checkRed() {
    //Checks if the borders have been passed
    if(xPos2[0] < 0 || xPos2[0] > 590 || yPos2[0] < 0 || yPos2[0] > 590) {
        rLoss = 1;
    }
    //Checks against self: Starts at one to not check with their own head
    for(var i = 1;i<seg2;i++) {
        if(xPos2[0] == xPos2[i] && yPos2[0] == yPos2[i]) {
            rLoss = 1;
        }
    }
    //Checks against enemy: Starts at 0 to check with the enemy's head
    for(var i = 0;i<seg;i++) {
        if(xPos2[0] == xPos[i] && yPos2[0] == yPos[i]) {
            rLoss = 1;
        }
    }
}

function draw() {
    var status = document.getElementById("status");
    background(0);
    updateBlue();
    updateRed();
    updateFruit();
    checkBlue();
    checkRed();
    if(bLoss == 1 && rLoss == 1) {
        status.innerHTML = "It's A Tie!";
        noLoop();
        document.getElementById("retry").style.visibility = "visible";
    } else if(bLoss == 1) {
        rScore++;
        status.innerHTML = "Red Wins!";
        noLoop();
        document.getElementById("retry").style.visibility = "visible";
    } else if(rLoss == 1) {
        bScore++;
        status.innerHTML = "Blue Wins!";
        noLoop();
        document.getElementById("retry").style.visibility = "visible";
    }
}