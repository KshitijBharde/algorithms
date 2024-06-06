/**
 * Sorts the array in ascending order
 * With the time complexity of O(n^2)
 * With O(1) auxiliary space
*/
function bubbleSort(arr) {
    for (let k = 0; k < arr.length - 1; k++) {
        let swapFlag = false;

        for (let i = 0; i < arr.length - k - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                swapFlag = true;
            }
        }

        if (!swapFlag) {
            // did not swap any item in current iteration, the array is sorted now
            break;
        }
    }
}




const arr = [2, 7, 4, 1, 5, 3];

console.log(`Unsorted array: ${JSON.stringify(arr)}`);

bubbleSort(arr);

console.log(`Sorted array: ${JSON.stringify(arr)}`);
