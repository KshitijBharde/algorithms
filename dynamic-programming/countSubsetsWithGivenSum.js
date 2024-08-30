function countSubsetsWithGivenSum(numArr, sum, n) {
    const matrix = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(null));

    for (let i = 0; i < n + 1; i++) {
        for (let j = 0; j < sum + 1; j++) {
            if (j === 0) {
                matrix[i][j] = 1;
                continue;
            }

            if (i === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (numArr[i - 1] <= j) {
                matrix[i][j] = matrix[i - 1][j - numArr[i - 1]] + matrix[i - 1][j];
            } else {
                matrix[i][j] = matrix[i - 1][j];
            }
        }
    }

    return matrix[n][sum];
}

const arr = [2, 3, 5, 6, 8, 10];
const s = 10;

const res = countSubsetsWithGivenSum(arr, s, arr.length);
console.log({ res });