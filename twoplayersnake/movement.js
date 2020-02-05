function keyPressed() {
    // Blue Snake
    
    if(keyCode == 87 && bSnake.ospd != 1) { // Up
        bSnake.spd = 0;
    }
    if(keyCode == 83 && bSnake.ospd != 0) { // Down
        bSnake.spd = 1;
    }
    if(keyCode == 65 && bSnake.ospd != 3) { // Left
        bSnake.spd = 2;
    }
    if(keyCode == 68 && bSnake.ospd != 2) { // Right
        bSnake.spd = 3;
    }
    
    // Red Snake
    
    if(keyCode == UP_ARROW && rSnake.ospd != 1) { // Up
        rSnake.spd = 0;
    }
    if(keyCode == DOWN_ARROW && rSnake.ospd != 0) { // Down
        rSnake.spd = 1;
    }
    if(keyCode == LEFT_ARROW && rSnake.ospd != 3) { // Left
        rSnake.spd = 2;
    }
    if(keyCode == RIGHT_ARROW && rSnake.ospd != 2) { // Right
        rSnake.spd = 3;
    }
}