function fastSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const base = array[0];
    const leftArray = [];
    const rightArray = [];
    array.slice(1).forEach(num => {
        if (num < base) {
            leftArray.push(num);
        } else {
            rightArray.push(num);
        }
    });

    return [].concat(fastSort(leftArray), base, fastSort(rightArray));
}

const nums = [4, 5, 1, 3, 2];
let result = fastSort(nums);
console.log(result)