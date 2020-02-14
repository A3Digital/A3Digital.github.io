// Code from StackOverflow
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function makeArray() {
    rectWidth = 640 / numRect;
    rectHeight = 360 / numRect;
    a = [];
    for(var i = 0; i < numRect; i++) {
        a.push(i);
    }
}

function shuffleArray() {
    shuffle(a, true);
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
    // If not sorted and not sorting
    if(!sorted && !sorting){
        var sort = document.getElementById("sort");
        var setting = (sort.options[sort.selectedIndex]).value;
        var stopButton = document.getElementById("stop");
        // stopButton.style.display = "inline";
        stop = 0;
        document.getElementById("status").innerHTML = "Sorting...";
        document.getElementById("mySlider").disabled = true;
        document.getElementById("myOutput").disabled = true;
        sorting = true;
        if(setting == "In Place Merge Sort") {
            await inPlaceMergeSort(0, a.length-1);    
        } else if(setting == "Heap Sort") {
            await heapSort();
        } else if(setting == "Selection Sort") {
            await selectionSort();
        } else if(setting == "Insertion Sort") {
            await insertionSort();
        } else if(setting == "Bubble Sort") {
            await bubbleSort();
        } else if(setting == "Bogo Sort") {
            await bogoSort();
        } else if(setting == "Stalin Sort") {
            await stalinSort();
        }
        
        
        if(setting != "Stalin Sort") displayArray();
        if(stop) {
            document.getElementById("status").innerHTML = "Sort Has Been Cancled.";
        } else {
            document.getElementById("status").innerHTML = "Sorted Using " + setting + "!";
            sorted = true;
        }
        document.getElementById("mySlider").disabled = false;
        document.getElementById("myOutput").disabled = false;
        stopButton.style.display = "none";
        sorting = false;
    } 
    // Already sorted
    else if(sorted) {
        document.getElementById("status").innerHTML = "This Is Already Sorted, Shuffle It First!";
    }
}

function stopButton() {
    stop = 1;
}