class Snake {
    
    constructor() {
        this.score = 0;
        this.xPos = [];
        this.yPos = [];
    }
    
    load(xPos, yPos, spd) {
        this.boosttemp = 0;
        this.spd = spd;
        this.ospd = spd;
        for(var i = 0; i < this.xPos.length; i) {
            this.xPos.pop();
            this.yPos.pop();
        }
        for(var i = 0; i < 5; i++) {
            this.xPos.push(xPos);
            this.yPos.push(yPos);
        }
        
    }
    
    shrink() {
        for(var i = 0;i < 5; i++) {
            this.xPos.pop();
            this.yPos.pop();
        }
    }
    
    grow(x) {
        for(var i = 0;i < x; i++) {
            this.xPos.push(this.xPos[this.xPos.length-1]);
            this.yPos.push(this.yPos[this.yPos.length-1]);
        }
    }
    
    movement() {
        for(var i = this.xPos.length - 1; i > 0; i--) {
            this.xPos[i] = this.xPos[i-1]; // Update xPos[]
            this.yPos[i] = this.yPos[i-1]; // Update yPos[]
        }
        
        this.ospd = this.spd;
        switch(this.spd) {
            case 0:
                this.yPos[0] -= 10; // Up
                break;
            case 1:
                this.yPos[0] += 10; // Down
                break;
            case 2:
                this.xPos[0] -= 10; // Left
                break;
            case 3:
                this.xPos[0] += 10; // Right
                break;
        }
    }
    
    update() {
        // Update Tail
        
        this.movement();
        if(this.boosttemp > 0) {
            this.movement();
            this.boosttemp--;
        }
        
        if(this.xPos[0] == food.xF && this.yPos[0] == food.yF) {
            food.update();
            this.grow(5);
        }
        if(this.xPos[0] == megafood.xF && this.yPos[0] == megafood.yF) {
            megafoodchance = 50;
            megafood.update();
            this.grow(15);
        }
        
        if(this.xPos[0] == boostfood.xF && this.yPos[0] == boostfood.yF) {
            boostfoodchance = 50;
            boostfood.update();
            this.boosttemp = 75;
        }
        
        if(this.xPos[0] == poison.xF && this.yPos[0] == poison.yF) {
            poison.update();
            this.shrink();
        }
        for(var i = 0; i < this.xPos.length; i++) {
            rect(this.xPos[i],this.yPos[i],10,10);
        }
    }
    
    death(other) {
        if(this.xPos.length == 0) {
            return 1;
        }
        if(this.xPos[0] < 0 || this.xPos[0] > 590 || this.yPos[0] < 0 || this.yPos[0] > 590) {
            return 1;
        }
        for(var i = 1;i < this.xPos.length; i++) {
            if(this.xPos[0] == this.xPos[i] && this.yPos[0] == this.yPos[i]) {
                return 1;
            }
        }
        for(var i = 0;i < other.xPos.length; i++) {
            if(this.xPos[0] == other.xPos[i] && this.yPos[0] == other.yPos[i]) {
                return 1;
            }
        }
        return 0;
    }
};