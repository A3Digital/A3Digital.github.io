class Item {
    
    constructor() {
        this.xF = -30;
        this.yF = -30;
    }
    
    update() {
        this.xF = Math.floor(Math.random() * 30) * 20;
        this.yF = Math.floor(Math.random() * 30) * 20;
    }
    
    display() {
        ellipse(this.xF, this.yF, 10, 10);
    }
}