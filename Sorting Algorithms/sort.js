async function inPlaceMerge(p, m, q) {
    var p2 = m + 1;
    while(p <= m && p2 <= q) {
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
            await sleep(50);
            displayArray();
        }
    }
}

async function inPlaceMergeSort(p, q) {
    if(p < q) {
        var m = Math.floor( (p+q) / 2);
        await inPlaceMergeSort(p, m);
        await inPlaceMergeSort(m+1, q);
        await inPlaceMerge(p, m, q);
    }
}

async function selectionSort() {
    for(var i = 0; i < a.length - 1; i++) {
        var minIndex = i;
        for(var j = i; j < a.length; j++) {
            if(a[minIndex] > a[j]) {
                minIndex = j;
            }
        }
        var temp = a[i];
        a[i] = a[minIndex];
        a[minIndex] = temp;
        await sleep(50);
        displayArray();
    }
}