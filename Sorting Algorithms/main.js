var a = [];
var numRect = 128;
var rectWidth = 640 / numRect;
var rectHeight = 360 / numRect;
var sorted = false;
var sorting = false;

function setup() {    
    // Sets up canvas
    var canvas = createCanvas(641, 361);
    canvas.parent("canvas");
    strokeWeight(1);
    
    // Flips Canvas so that 0, 0 is the bottom left, makes displaying rectangles easier
    translate(0, height);  //moves the origin to bottom left
    scale(1, -1);  //flips the y values so y increases "up"
    
    makeArray();
    
    shuffleArray();
        
    displayArray();
    
    noLoop();
}
