function retry() {
    background(0);
    xPos = 40;
    yPos = 300;
    xPos2 = 550;
    yPos2 = 300;
    xS = 1;
    yS = 0;
    xS2 = -1;
    yS2 = 0;
    oxS = 0;
    oyS = 0;
    oxS2 = 0;
    oyS2 = 0;
    bLoss = 0;
    rLoss = 0;
    document.getElementById("status").innerHTML = "Blue: " + bScore + " | Red: " + rScore;
    document.getElementById("retry").style.visibility = "hidden";
    loop();
}