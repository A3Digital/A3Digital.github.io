/*
        Heap Sort
*/
async function swap(i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

async function heapify(n, i) {
    var largest = i;
    var l = (i*2) + 1;
    var r = (i*2) + 2;
    
    if(l < n && a[l] > a[largest])
        largest = l;
    
    if(r < n && a[r] > a[largest])
        largest = r;
    
    if(largest != i) {
        await swap(i, largest);
        await heapify(n, largest);
    }
}

async function heapSort() {
    // Creates Binary Heap
    for(var i = Math.floor(numRect/2) - 1; i >= 0; --i) {
        await heapify(numRect, i);
        displayArray();
        await sleep(25);
    }
    
    // Sorts
    for(var r = numRect-1; r >= 0; r--) {
        await swap(0, r);
        await heapify(r, 0);
        displayArray();
        await sleep(25);
    }
}

/*
        In Place Merge Sort
*/
async function inPlaceMerge(p, m, q) {
    var p2 = m + 1;
    while(p <= m && p2 <= q) {
        if(stop) return;
        
        displayArray();
        displayHighlights(p, p2, q);
        await sleep(25);
        
        if(a[p] <= a[p2]) {
            p++;
        } else {
            var temp = a[p2];
            for(var i = p2; i > p; i--) {
                a[i] = a[i-1];
            }
            a[p] = temp;
            p++;
            m++;
            p2++;
            await sleep(25);
            displayArray();
        }
    }
}

async function inPlaceMergeSort(p, q) {
    if(p < q) {
        if(stop) return;
        var m = Math.floor( (p+q) / 2);
        await inPlaceMergeSort(p, m);
        await inPlaceMergeSort(m+1, q);
        await inPlaceMerge(p, m, q);
    }
}

/*
        Selection Sort
*/
async function selectionSort() {
    for(var i = 0; i < a.length - 1; i++) {
        var minIndex = i;
        for(var j = i; j < a.length; j++) {
            
            displayArray();
            displayHighlights(minIndex, j, i-1);
            await sleep(25);
            
            if(a[minIndex] > a[j]) {    
                minIndex = j;
            }
        }
        var temp = a[i];
        a[i] = a[minIndex];
        a[minIndex] = temp;
        await sleep(25);
        displayArray();
    }
}

/*
        Insertion Sort
*/
async function insertionSort() {
    for(var i = 1; i < a.length; i++) {
        var j = i;
        
        while(true) {
            
            displayArray();
            displayHighlights(j, j-1, i);
            await sleep(25);
            
            if(a[j] < a[j-1]) {
                var temp = a[j];
                a[j] = a[j-1];
                a[j-1] = temp;
            } else {
                break;
            }
            
            j--;
        }
        
    }
}

/*
        Bubble Sort
*/
async function bubbleSort() {
    for(var i = a.length - 1; i >= 0; i--) {
        for(var j = 0; j < i; j++) {
            
            displayArray();
            displayHighlights(j, j+1, i+1);
            await sleep(25);
            
            if(a[j] > a[j+1]) {
                var temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
}

/*
        Bogo Sort
*/
function isSorted() {
    for(var i = 0; i < a.length - 1; i++) {
        if(a[i+1] < a[i]) {
            return false;
        }
    }
    return true;
}

async function bogoSort() {
    while(!isSorted()) {
        
        shuffleArray();
        displayArray();
        await sleep(10);   
    
    }
}

async function stalinSort() {
    var i = 1, n = numRect;
    while(i < n) {
        displayArray();
        displayHighlights(i, i, i-1);
        await sleep(25);
        
        if(a[i] < a[i-1]) {
            a.splice(i, 1);
            --n;
        } else {
            ++i;
        }
        
    }
    displayArray();
    makeArray();
}