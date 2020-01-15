// Code from StackOverflow
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



function makeArray() {
    a = [];
    for(var i = 0; i < numRect; i++) {
        a.push(i);
    }
}

function shuffleArray() {
    for(var i = 0; i < a.length; i++) {
        var j = Math.floor(Math.random() * (a.length))
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
}

function displayArray() {
    background("#000000")
    for(var i = 0; i < numRect; i++) {
        fill("#ffffff");
        rect(i*rectWidth, 0, rectWidth, rectHeight*(a[i]+1));
    }
}

function displayHighlights(i, j, k) {
    
    fill("#ff0000");
    rect(i*rectWidth, 0, rectWidth, rectHeight*(a[i]+1));
    rect(j*rectWidth, 0, rectWidth, rectHeight*(a[j]+1));
    
    if(k >= 0 && k < a.length) {
        fill("#00ff00");
        rect(k*rectWidth, 0, rectWidth, rectHeight*(a[k]+1));
    }
    
}

function shuffleButton() {
    if(!sorting) {
        shuffleArray();
        displayArray(); 
        sorted = false;
        document.getElementById("status").innerHTML = "Choose A Sorting Algorithm And Click \"Sort\".";
    }
}

async function sortButton() {
    var sort = document.getElementById("sort");
    var setting = (sort.options[sort.selectedIndex]).value;

    if(!sorted && !sorting){
        document.getElementById("status").innerHTML = "Sorting...";
        sorting = true;
        if(setting == "In Place Merge Sort") {
            await inPlaceMergeSort(0, a.length-1);    
        } else if(setting == "Selection Sort") {
            await selectionSort();
        } else if(setting == "Insertion Sort") {
            await insertionSort();
        } else if(setting == "Bubble Sort") {
            await bubbleSort();
        }
        displayArray();
        document.getElementById("status").innerHTML = "Sorted Using " + setting + "!";
        sorting = false;
        sorted = true;
    } else if(sorted) {
        document.getElementById("status").innerHTML = "This Is Already Sorted, Shuffle It First!";
    }
}