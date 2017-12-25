function retry() {
    if(event.keyCode == 32 && game == 0) {
        event.preventDefault();
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
        document.getElementById("status").innerHTML = "Score: 0 Highscore: " + highscore;
        document.getElementById("text").innerHTML = "";
        score = 0;
        game = 1;
        loop();
    }
}