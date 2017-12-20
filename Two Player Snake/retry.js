function retry() {
    if(event.keyCode == 32 && game == 0) {
        event.preventDefault();
        for(var i = 0;i < xPos.length;i) {
            xPos.pop();
        }
        for(var i = 0;i < yPos.length;i) {
            yPos.pop();
        }
        for(var i = 0;i < xPos2.length;i) {
            xPos2.pop();
        }
        for(var i = 0;i < yPos2.length;i) {
            yPos2.pop();
        }
        
        seg = 5;
        seg2 = 5;
        
        for(var i = 0;i<seg;i++) { //Makes an arry of 5 with the starting coordinates for Blue and Red
            xPos.push(40);
            yPos.push(300);
            xPos2.push(550);
            yPos2.push(300);
        }
        
        xF = Math.floor(Math.random() * 30) * 20;
        yF = Math.floor(Math.random() * 30) * 20;
        
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
        document.getElementById("text").innerHTML = " ";
        
        game = 1;
        
        loop();
    }
}