function countSubsetsWithGivenSum(numArr, sum, n) {
    const matrix = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(null));

    matrix[0][0] = 1;

    for (let j = 1; j < sum + 1; j++) {
        matrix[0][j] = 0;
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 0; j < sum + 1; j++) {
            if (numArr[i - 1] <= j) {
                matrix[i][j] = matrix[i - 1][j - numArr[i - 1]] + matrix[i - 1][j];
            } else {
                matrix[i][j] = matrix[i - 1][j];
            }
        }
    }

    return matrix[n][sum];
}

function countPartitions(n, d, arr) {
    // code here
    let totalSum = 0;
    for (const num of arr) {
        totalSum += num;
    }

    const targetSum = Math.ceil((d + totalSum) / 2);
    console.log({ targetSum });

    return countSubsetsWithGivenSum(arr, targetSum, n);
}

const arr1 = [5, 2, 6, 4];
const d1 = 3; // output: 1

const arr2 = [1, 1, 1, 1];
const d2 = 0; // output: 6

const arr3 = [1, 3, 3, 2, 1];
const d3 = 5; // output: 6


const res = countPartitions(arr3.length, d3, arr3);
console.log({ res });