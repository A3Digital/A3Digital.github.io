class LightCycle {
    
    constructor(xPos, yPos, xS, yS) {
        this.xPos = xPos; // X Coordinate
        this.yPos = yPos; // Y Coordinate
        this.xS = xS; // Speed in X-Direction
        this.yS = yS; // Speed in Y-Direction
        this.OxS = xS; // Previous (Old) Speed in X-Direction
        this.OyS = yS; // Previous (Old) Speed in Y-Direction
    }
    
    // True means the Light Cycle lost
    check() {
        if(this.xPos < 0 || this.xPos > 590 || this.yPos < 0 || this.yPos > 590) {
            return true;
        }
        var check = get(this.xPos, this.yPos);
        if((red(check) != 0 || green(check) != 0 || blue(check) != 0) && game == 1) {
            return true;
        }
        return false;
    }
    
    move(dir) {
        if(dir == 'U') { // Up
            if(this.OyS != 1) {
                this.xS = 0;
                this.yS = -1;
            }
        } else if(dir == 'D') { // Down
            if(this.OyS != -1) {
                this.xS = 0;
                this.yS = 1;
            }
        } else if(dir == 'L') { // Left
            if(this.OxS != 1) {
                this.xS = -1;
                this.yS = 0;
            }
        } else if(dir == 'R') { // Right
            if(this.OxS != -1) {
                this.xS = 1;
                this.yS = 0;
            }
        }
    }
    
    update() {
        this.xPos += this.xS * 10;
        this.yPos += this.yS * 10;
        this.OxS = this.xS;
        this.OyS = this.yS;
    }
    
    display(c) {
        fill(c);
        rect(this.xPos, this.yPos, 10, 10);
    }
    
}