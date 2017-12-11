var xPos = Math.floor(Math.random() * 380 + 10), yPos = Math.floor(Math.random() * 40 + 10), xGoal = Math.floor(Math.random() * 385 + 7.5), yGoal = Math.floor(Math.random() * 100) + 292.5;
var ePos = [Math.floor(Math.random() * 380), Math.floor(Math.random() * 351) + 50];
var eBeh = [Math.floor(Math.random() * 2)];
var score = 0;

function setup() {
    createCanvas(400,400);
}

function guard(i) {
    
    var a = xGoal - ePos[i];
    var b = yGoal - ePos[i+1];
    var c = Math.sqrt(a*a + b*b);
    if(c > 30 && c < 100) {
        var rand = Math.floor(Math.random() * 360) + 1;
        ePos[i] += 3 * cos(rand);
        ePos[i+1] += 3 * sin(rand);
    } else if(c < 30) {
        if(Math.abs(a) <= Math.abs(b)) {
            if(xGoal > ePos[i]) {
                ePos[i] -= Math.floor(Math.random() * 2) + 1;
            } else {
                ePos[i] += Math.floor(Math.random() * 2) + 1;
            }
        } else {
            if(yGoal > ePos[i+1]) {
                ePos[i+1] -= Math.floor(Math.random() * 2) + 1;
            } else {
                ePos[i+1] += Math.floor(Math.random() * 2) + 1;
            }
        }
    } else {
        if(Math.abs(b) <= Math.abs(a)) {
            if(xGoal > ePos[i]) {
                ePos[i] += Math.floor(Math.random() * 2) + 1;
            } else {
                ePos[i] -= Math.floor(Math.random() * 2) + 1;
            }
        } else {
            if(yGoal > ePos[i+1]) {
                ePos[i+1] += Math.floor(Math.random() * 2) + 1;
            } else {
                ePos[i+1] -= Math.floor(Math.random() * 2) + 1;
            }
        }
    }
}

function hunter(i) {
    rand = Math.floor(Math.random() * 4);
    if(rand == 0) {
        ePos[i] += Math.floor(Math.random() * 7) - 3;
    } else if(rand == 1) {
        ePos[i+1] += Math.floor(Math.random() * 7) - 3;
    } else if(rand == 2) {
        if (xPos > ePos[i]) {
            ePos[i] += Math.floor(Math.random() * 3) + 1;
        } else {
            ePos[i] -= Math.floor(Math.random() * 3) + 1;
        }
    } else {
        if (yPos > ePos[i+1]) {
            ePos[i+1] += Math.floor(Math.random() * 3) + 1;
        } else {
            ePos[i+1] -= Math.floor(Math.random() * 3) + 1;
        }
    }
}

function enemy(i) {
    if(eBeh[i/2] == 0) {
        fill(256,60,60);
        hunter(i);
    } else {
        fill(60,60,256);
        guard(i);
    }
    ellipse( ePos[i] , ePos[i+1] , 10 , 10 );
    var a = xPos - ePos[i];
    var b = yPos - ePos[i+1];
    var c = Math.sqrt(a*a + b*b);
    if(c < 15) {
        lose();
    }
}

function lose() {
    var levelText = document.getElementById("level");
    levelText.innerHTML = "You lost with a score of " + score + "!";
    noLoop();
}

function check() {
    var a = xPos - xGoal;
    var b = yPos - yGoal;
    var c = Math.sqrt(a*a + b*b);
    if(c < 17.5) {
        var levelText = document.getElementById("level");
        score++;
        levelText.innerHTML = "Score: " + score;
        xPos = Math.floor(Math.random() * 400);
        yPos = Math.floor(Math.random() * 40);
        xGoal = Math.floor(Math.random() * 385 + 7.5);
        yGoal = Math.floor(Math.random() * 100) + 292.5;
        for(var i = 0;i < ePos.length;i += 2) {
            ePos[i] = Math.floor(Math.random() * 390 + 5);
            ePos[i+1] = Math.floor(Math.random() * 200) + 195;
        }
        ePos.push(Math.floor(Math.random() * 390 + 5));
        ePos.push(Math.floor(Math.random() * 200) + 195);
        eBeh.push(Math.floor(Math.random() * 2));
    }
}

function draw() {
    background(0);
    movement();
    fill(60,256,60);
    ellipse(xGoal, yGoal, 15,15);
    fill(256,256,256);
    ellipse(xPos, yPos, 20, 20);
    check();
    for(var i = 0;i < ePos.length;i += 2) {
        enemy(i);
    }
}