/**
 * Sorts the array in ascending order
 * With the time complexity of O(n^2)
 * With O(1) auxiliary space
*/
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let hole = i;
        let value = arr[i];

        while (hole > 0 && arr[hole - 1] > value) {
            arr[hole] = arr[hole - 1];
            hole -= 1;
        }

        arr[hole] = value;
    }
}




const arr = [2, 7, 4, 1, 5, 3];

console.log(`Unsorted array: ${JSON.stringify(arr)}`);

insertionSort(arr);

console.log(`Sorted array: ${JSON.stringify(arr)}`);
