function keyPressed() {
    if(keyCode == 87 && oyS != 1) {
        xS = 0;
        yS = -1;
    }
    if(keyCode == 83 && oyS != -1) {
        xS = 0;
        yS = 1;
    }
    if(keyCode == 65 && oxS != 1) {
        xS = -1;
        yS = 0;
    }
    if(keyCode == 68 && oxS != -1) {
        xS = 1;
        yS = 0;
    }
    if(keyCode == UP_ARROW && oyS2 != 1) {
        xS2 = 0;
        yS2 = -1;
    }
    if(keyCode == DOWN_ARROW && oyS2 != -1) {
        xS2 = 0;
        yS2 = 1;
    }
    if(keyCode == LEFT_ARROW && oxS2 != 1) {
        xS2 = -1;
        yS2 = 0;
    }
    if(keyCode == RIGHT_ARROW && oxS2 != -1) {
        xS2 = 1;
        yS2 = 0;
    }
}