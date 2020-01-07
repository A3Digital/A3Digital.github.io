function keyPressed() {
    if(keyCode == 87) {
        bluePlayer.move('U');
    }
    if(keyCode == 83) {
        bluePlayer.move('D');
    }
    if(keyCode == 65) {
        bluePlayer.move('L');
    }
    if(keyCode == 68) {
        bluePlayer.move('R');
    }
    if(keyCode == UP_ARROW) {
        redPlayer.move('U');
    }
    if(keyCode == DOWN_ARROW) {
        redPlayer.move('D');
    }
    if(keyCode == LEFT_ARROW) {
        redPlayer.move('L');
    }
    if(keyCode == RIGHT_ARROW) {
        redPlayer.move('R');
    }
}