
// [3, 1, 9, 2, 0, 20]
const mergeSort = (arr, start, end) => {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor((start + (end - start)) / 2);

    mergeSort(arr, start, mid - 1);
    mergeSort(arr, mid, end);

    return merge(arr, start, mid - 1, mid, end);
}


const merge = (arr, leftStart, leftEnd, rightStart, rightEnd) => {
    const mergedArr = [];

    let i = leftStart; // leftArr pointer
    let j = rightStart; // rightArr pointer

    while (i <= leftEnd && j <= rightEnd) {
        if (arr[i] < arr[j]) {
            mergedArr.push(arr[i]);
            i++;
        } else {
            mergedArr.push(arr[j]);
            j++;
        }
    }

    while (i < arr.length) {
        mergedArr.push(arr[i]);
        i++;
    }

    while (j < arr.length) {
        mergedArr.push(arr[j]);
        j++;
    }

    return mergedArr;
}


const arr = [3, 1, 9, 2, 0, 20];

console.log(mergeSort(arr, 0, arr.length - 1));