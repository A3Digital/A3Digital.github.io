function retry() {
    if(event.keyCode == 32 && game == 0) {
        background(0);
        
        bluePlayer = new LightCycle(40, 300, 1, 0);
        
        redPlayer = new LightCycle(550, 300, -1, 0);
        
        document.getElementById("status").innerHTML = "Blue: " + bScore + " | Red: " + rScore;
        document.getElementById("text").innerHTML = "...";
        
        game = 1;
        
        loop();
        
        noCursor();
    }
}