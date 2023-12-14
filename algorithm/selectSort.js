const nums = [4, 5, 1, 3, 2];

function selectSort(array) {
    let i = 0;
    while (i < array.length) {
        let minIndex = getMinIndex(array, i, array.length);
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        i++;
        console.log(array);
    }
}

function getMinIndex(array, start, end) {
    let minIndex = -1;
    let minVal = Infinity;
    let index = start;
    while(index < end) {
        if (minVal > array[index]) {
            minIndex = index;
            minVal = array[index];
        }
        index++;
    }

    return minIndex;
}

selectSort(nums);