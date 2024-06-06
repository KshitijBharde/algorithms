/**
 * Sorts the array in ascending order
 * With the time complexity of O(n^2)
 * With O(1) auxiliary space
*/
function selectionSort(arr, order) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minValueIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minValueIdx]) {
                minValueIdx = j;
            }
        }

        const temp = arr[minValueIdx];
        arr[minValueIdx] = arr[i];
        arr[i] = temp;
    }
}




const arr = [2, 7, 4, 1, 5, 3];

console.log(`Unsorted array: ${JSON.stringify(arr)}`);

selectionSort(arr);

console.log(`Sorted array: ${JSON.stringify(arr)}`);
