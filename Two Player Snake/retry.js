function retry() {
    
    if(event.keyCode == 32 && game == 0) {
        event.preventDefault();
        
        bSnake.load(40,300, 3);
        rSnake.load(550,300, 2)
        
        food.update();
        
        if(document.getElementById("box").checked) {
            megafoodchance = 50;
            megafood.update();
            boostfoodchance = 50;
            boostfood.update();
            poison.update();
        }
        
        
        document.getElementById("status").innerHTML = "Blue: " + bSnake.score + " | Red: " + rSnake.score;
        document.getElementById("text").innerHTML = " ";
        document.getElementById("extras").style.visibility = "hidden";
        
        game = 1;
        
        loop();
        
    }
}