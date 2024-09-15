// Given a set of N items, each with a weight and a value, represented by the array wt and val respectively. Also, a knapsack with weight limit W.
// The task is to fill the knapsack in such a way that we can get the maximum profit. Return the maximum profit.
// Note: Each item can be taken any number of times.

// Examples:

// Input: N = 2, W = 3, val = {1, 1}, wt = {2, 1}
// Output: 3
// Explanation: 1.Pick the 2nd element thrice. 2.Total profit = 1 + 1 + 1 = 3. Also the total weight = 1 + 1 + 1  = 3 which is <= 3.
// Input: N = 4, W = 8, val[] = {6, 1, 7, 7}, wt[] = {1, 3, 4, 5}
// Output: 48
// Explanation: The optimal choice is to pick the 1st element 8 times.
// Your Task:
// You do not need to read input or print anything. Your task is to complete the function knapSack() which takes the values N, W and the arrays val and wt as input parameters and returns the maximum possible value.

// Expected Time Complexity: O(N*W)
// Expected Auxiliary Space: O(W)

// Constraints:
// 1 ≤ N, W ≤ 1000
// 1 ≤ val[i], wt[i] ≤ 100

const val = [6, 1, 7, 7];
const wt = [1, 3, 4, 5];
const n = val.length;
const w = 8;

// Bottom up approach
(() => {
    const matrix = Array.from({ length: n + 1 }, () => new Array(w + 1).fill(-1));

    function getMaximumProfit(valArr, wtArr, N, W) {
        if (N === 0 || W === 0) {
            return 0;
        }

        if (matrix[N][W] !== -1) {
            return matrix[N][W];
        }

        const currVal = valArr[N - 1];
        const currWt = wtArr[N - 1];
        if (currWt <= W) {
            matrix[N][W] = Math.max(currVal + getMaximumProfit(valArr, wtArr, N, W - currWt), getMaximumProfit(valArr, wtArr, N - 1, W));
            return matrix[N][W];
        }

        matrix[N][W] = getMaximumProfit(valArr, wtArr, N - 1, W);
        return matrix[N][W];
    }

    const res = getMaximumProfit(val, wt, n, w);
    console.log('Recursive func result:');
    console.log({ maxProfit: res });
})();


// Top Down approach
function getMaximumProfitTopDown(valArr, wtArr, N, W) {
    const matrix = Array.from({ length: N + 1 }, () => new Array(W + 1).fill(-1));

    for (let i = 0; i < N + 1; i++) {
        for (j = 0; j < W + 1; j++) {
            if (i === 0 || j === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let i = 1; i < N + 1; i++) {
        for (j = 1; j < W + 1; j++) {
            if (wtArr[i - 1] <= j) {
                matrix[i][j] = Math.max(valArr[i - 1] + matrix[i][j - wtArr[i - 1]], matrix[i - 1][j]);
            } else {
                matrix[i][j] = matrix[i - 1][j];
            }
        }
    }

    return matrix[N][W];
}

const res = getMaximumProfitTopDown(val, wt, n, w);
console.log('Top down func result:');
console.log({ maxProfit: res });