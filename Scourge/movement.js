function movement() {
    if(keyDown(87) || keyDown(UP_ARROW)) {
        yPos = constrain(yPos-1.5,0,400);
    }
    if(keyDown(65) || keyDown(LEFT_ARROW)) {
        xPos = constrain(xPos-1.5,0,400);
    }
    if(keyDown(83) || keyDown(DOWN_ARROW)) {
        yPos = constrain(yPos+1.5,0,400);
    }
    if(keyDown(68) || keyDown(RIGHT_ARROW)) {
        xPos = constrain(xPos+1.5,0,400);
    }
}