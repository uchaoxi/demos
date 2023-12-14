const nums = [4, 5, 1, 3, 2];

function bubbleSort(array) {
    let i = 0;
    let j = array.length - 2;
    while (i < array.length) {
        while (i <= j) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                
            }
            console.log(array);
            j--;
        }
        i++
        j = array.length - 2;
    }
}

bubbleSort(nums)
console.log(nums);