/*
 * Given an array of non-negative integers, and a value sum,
 * determine if there is a subset of the given set with sum equal to given sum. 
 * 
 * Examples:

 * Input: n = 6, arr[] = {3, 34, 4, 12, 5, 2}, sum = 9
 * Output: 1 
 * Explanation: Here there exists a subset with sum = 9, 4+3+2 = 9.

 * Input: n = 6, arr[] = {3, 34, 4, 12, 5, 2} , sum = 30
 * Output: 0 
 * Explanation: There is no subset with sum 30.
*/
const arr = [3, 34, 4, 12, 5, 2];
const s = 9;
const n = arr.length;

// Bottom up approach using recursion and memoization
(() => {
    const matrix = Array.from({ length: n + 1 }, () => Array(s + 1).fill(null));

    function subsetSumExists(numArr, sum, n) {
        if (sum === 0) {
            return true;
        }

        if (n === 0) {
            return false;
        }

        if (matrix[n][sum] !== null) {
            return matrix[n][sum];
        }

        if (numArr[n - 1] <= sum) {
            matrix[n][sum] = subsetSumExists(numArr, sum - numArr[n - 1], n - 1) || subsetSumExists(numArr, sum, n - 1);

            return matrix[n][sum];
        }

        return subsetSumExists(numArr, sum, n - 1);
    }



    const res = subsetSumExists(arr, s, arr.length);
    console.log({ subsetSumExistsRecursive: res });
})();


function subsetSumExistsTopDown(numArr, sum, n) {
    const matrix = Array.from({ length: n + 1 }, () => Array(s + 1).fill(null));

    for (let i = 0; i < n + 1; i++) {
        for (let j = 0; j < sum + 1; j++) {
            if (j === 0) {
                matrix[i][j] = true;
                continue;
            }

            if (i === 0) {
                matrix[i][j] = false;
            }
        }
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (numArr[i - 1] <= j) {
                matrix[i][j] = matrix[i - 1][j - numArr[i - 1]] || matrix[i - 1][j];
            } else {
                matrix[i][j] = matrix[i - 1][j];
            }
        }
    }

    return matrix[n][sum];
}

const subSetSumTopDownRes = subsetSumExistsTopDown(arr, s, arr.length);
console.log({ subSetSumTopDownRes });