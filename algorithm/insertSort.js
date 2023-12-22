const nums = [4, 5, 1, 3, 2];

function insertSort(array) {
    let i = 0;

    while(i < array.length) {
        let j = i + 1;
        while(j >= 0 ) {
            if (array[j] < array[j-1]) {
                const temp = array[j-1];
                array[j-1] = array[j];
                array[j] = temp;
                console.log(array)
            }
            j--;
        }
        i++;
    }
}

insertSort(nums);