function movement() {
    if(keyDown(87)) {
        yPos = constrain(yPos-1.5,0,400);
    }
    if(keyDown(65)) {
        xPos = constrain(xPos-1.5,0,400);
    }
    if(keyDown(83)) {
        yPos = constrain(yPos+1.5,0,400);
    }
    if(keyDown(68)) {
        xPos = constrain(xPos+1.5,0,400);
    }
}