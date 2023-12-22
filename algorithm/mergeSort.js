const nums = [4, 5, 1, 3, 2];


function mergeSort(array) {
    const toMergeArray = array.map(item => [item]);
    return mergeDigui(toMergeArray);
}

function mergeDigui(array) {
    const len = array.length;
    if (len === 1) {
        return array;
    }
    const result = array.slice(0, Math.ceil(len / 2)).map((item, index) => merge(item, array[index + Math.ceil(len / 2)]));
    return mergeDigui(result);
}

function merge(array1, array2) {
    let i = 0;
    let j = 0;
    const result = [];
    if (!array2) {
        return array1;
    }
    while(i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            result.push(array1[i]);
            i++;
        } else {
            result.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }
    return result;
}


function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

let result = mergeSort(nums);

