var player = 0;
var smallBoxes = [];
var bigBoxes = [];
var game = 0;
var xWins = 0;
var oWins = 0;

var place = function() {
    let attribute = this.id;
    
    if(this.value != -1) return;
    if(bigBoxes[Math.floor(attribute/9)].value != -1) return;
    
    var img = document.createElement('img');
    img.id = "img";
    
    if(player) {
        img.src = "/images/xSmall.png";    
    } else {
        img.src = "/images/oSmall.png";
    }
    
    
    
    this.appendChild(img);
    this.value = player;
    
    // Complete inner game
    if(checkSmallBoxes(attribute)) {
        img = document.createElement('img');
        img.id = "img";
        
        if(player) {
            img.src = "/images/X.png";
        } else {
            img.src = "/images/O.png";
        }
        
        bigBoxes[Math.floor(attribute/9)].appendChild(img);
        bigBoxes[Math.floor(attribute/9)].value = player;
        bigBoxes[Math.floor(attribute/9)].style.backgroundColor = "#cccccc";
        
        // Check if won outer game
        if(checkBigBoxes(Math.floor(attribute/9))) {
            endGame();
            return;
        }
    } 
    
    if(bigBoxes[attribute%9].value < 0) {
        for(var i = 0; i < 9; i++) {
            if(i == attribute%9) {
                bigBoxes[i].style.backgroundColor = "#eeeeee";
                bigBoxes[i].value = -1;
            } else if(bigBoxes[i].value < 0) {
                bigBoxes[i].style.backgroundColor = "#cccccc";
                bigBoxes[i].value = -2;
            }
        }
    } else {
        for(var i = 0; i < 9; i++) {
            if(bigBoxes[i].value < 0) {
                bigBoxes[i].style.backgroundColor = "#eeeeee";
                bigBoxes[i].value = -1;
            } else {
                bigBoxes[i].style.backgroundColor = "#cccccc";
            }
        }
    }
    
    player = !player;
    
    if(player) {
        document.getElementById("text").innerHTML = "X's Turn."
    } else {
        document.getElementById("text").innerHTML = "O's Turn."
    }
};

function checkSmallBoxes(original) {
    var checking = smallBoxes[original].value;
    var corner = Math.floor(original/9) * 9;
    
    // Horizontal
    for(var i = 0; i < 3; i++) {    
        var possible = 0;
        for(var j = 0; j < 3; j++) {
            if(smallBoxes[corner + i*3 + j].value == checking) possible++;
        }
        if(possible == 3) return 1;
    }
    
    // Vertical
    for(var i = 0; i < 3; i++) {    
        var possible = 0;
        for(var j = 0; j < 3; j++) {
            if(smallBoxes[corner + j*3 + i].value == checking) possible++;
        }
        if(possible == 3) return 1;
    }
    // Diagonal
    var possible = 0;
    for(var i = 0; i < 3; i++) {
        if(smallBoxes[corner + i*3 + i].value == checking) possible++;
    }
    if(possible == 3) return 1;
    
    possible = 0;
    for(var i = 0; i < 3; i++) {
        if(smallBoxes[corner + 2 + i*3 - i].value == checking) possible++;
    }
    if(possible == 3) return 1;
    
    return 0;
}

function checkBigBoxes(original) {
    var checking = bigBoxes[original].value;
    
    // Horizontal
    for(var i = 0; i < 3; i++) {    
        var possible = 0;
        for(var j = 0; j < 3; j++) {
            if(bigBoxes[i*3 + j].value == checking) possible++;
        }
        if(possible == 3) return 1;
    }
    
    // Vertical
    for(var i = 0; i < 3; i++) {    
        var possible = 0;
        for(var j = 0; j < 3; j++) {
            if(bigBoxes[j*3 + i].value == checking) possible++;
        }
        if(possible == 3) return 1;
    }
    // Diagonal
    var possible = 0;
    for(var i = 0; i < 3; i++) {
        if(bigBoxes[i*3 + i].value == checking) possible++;
    }
    if(possible == 3) return 1;
    
    possible = 0;
    for(var i = 0; i < 3; i++) {
        if(bigBoxes[2 + i*3 - i].value == checking) possible++;
    }
    if(possible == 3) return 1;
    
    return 0;
}

function otherFunction() {
    for(var i = 0; i < 81; i++) {
        if(smallBoxes[i].value == -1) continue;

        smallBoxes[i].removeChild( smallBoxes[i].firstChild );

        smallBoxes[i].value = -1;
    }
}

function setup() {
    if(game) return;
    game = 1;
    
    for(var i = 0; i < 9; i++) {
        bigBoxes[i].value = -1; // -2 if locked; -1 is unlocked; 0 if o; 1 if x
        bigBoxes[i].style.backgroundColor = "#eeeeee";
        if(bigBoxes[i].lastChild.id == "img") {
            bigBoxes[i].removeChild(bigBoxes[i].lastChild);
        }
    }        

    for (var i = 0; i < 81; i++) {
        smallBoxes[i].addEventListener('click', place, false);
        smallBoxes[i].id = i;
        smallBoxes[i].value = -1; // -1 if empty; 0 if o; 1 if x
        if(smallBoxes[i].firstChild) {
            smallBoxes[i].removeChild(smallBoxes[i].firstChild);
        }
    }
    
    document.getElementById("status").innerHTML = "X: " + xWins + " | O: " + oWins;
    document.getElementById("text").innerHTML = "O's Turn."
}

function endGame() {
    for(var i = 0; i < 9; i++) {
        bigBoxes[i].style.backgroundColor = "#cccccc";
    }
    
    for(var i = 0; i < 81; i++) {
        smallBoxes[i].removeEventListener('click', place, false);
    }
    
    if(player) {
        document.getElementById("status").innerHTML = "X's Has Won!";
        xWins++;
    } else {
        document.getElementById("status").innerHTML = "O's Has Won!";
        oWins++;
    }
    document.getElementById("text").innerHTML = "Press Space If You Want To Play Again!";
    game = 0;
}