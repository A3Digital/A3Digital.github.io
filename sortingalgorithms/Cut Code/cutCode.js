/*
The following code was cut from my sorting algorthims visualizer but I still liked their functionality so I kept the code for future sake
*/

// This code makes an array of colors through RGB format that make a rainbow from red to ultraviolet
function makeColorArray() {
    colors = [];
    // Temporary Variables to create array of colors
    var colorChange = numRect / 3;
    
    var rgb = [255, 0, 0];
    var c = 1;
    var increase = true;
    
    // Creates array of colors
    for(var i = 0; i < numRect; i++) {
        if(increase) {
            rgb[c] += colorChange;
            if(rgb[c] >= 255) {
                rgb[c] = 255;
                c = (c + 3 - 1) % 3;
                increase = false;
            }
        } else {
            rgb[c] -= colorChange;
            if(rgb[c] <= 0) {
                rgb[c] = 0;
                c = (c + 2) % 3;
                increase = true;
            }
        }
        
        let temp = color(rgb[0], rgb[1], rgb[2]);
        colors.push(temp);
        
    }
}

