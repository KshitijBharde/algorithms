/**
 * Sorts the array in ascending order
 * With the time complexity of O(n*Log(n))
 * With O(n) auxiliary space
*/
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(arr1, arr2) {
    const resArr = [];
    let i = 0; // arr1 pointer
    let j = 0; // arr2 pointer
    let k = 0; // resArr pointer

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            resArr[k] = arr1[i];
            i += 1;
        } else {
            resArr[k] = arr2[j];
            j += 1;
        }

        k += 1;
    }

    while (i < arr1.length) {
        resArr[k] = arr1[i];
        i += 1;
        k += 1;
    }

    while (j < arr2.length) {
        resArr[k] = arr2[j];
        j += 1;
        k += 1;
    }

    return resArr;
}




// const arr = [2, 7, 4, 1, 5, 3];

const arr = [5, 2, 3, 1];

console.log(`Unsorted array: ${JSON.stringify(arr)}`);

const sortedArr = mergeSort(arr);

console.log(`Sorted array: ${JSON.stringify(sortedArr)}`);
