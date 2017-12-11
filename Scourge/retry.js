function retry() {
    xPos = Math.floor(Math.random() * 380 + 10);
    yPos = Math.floor(Math.random() * 40 + 10);
    xGoal = Math.floor(Math.random() * 385 + 7.5);
    yGoal = Math.floor(Math.random() * 100) + 292.5;
    for(var i = 0;i < ePos.length;i) {
        ePos.pop();
    }
    for(var i = 0;i < eBeh.length;i) {
        eBeh.pop();
    }
    ePos.push(Math.floor(Math.random() * 380));
    ePos.push(Math.floor(Math.random() * 351) + 50);
    eBeh.push(Math.floor(Math.random() * 2));
    document.getElementById("retry").style.visibility = "hidden";
    document.getElementById("level").innerHTML = "Score: 0 Highscore: " + highscore;
    score = 0;
    loop();
}