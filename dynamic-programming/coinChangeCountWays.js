// Given an integer array coins[ ] of size N representing different denominations of currency and an integer sum, find the number of ways you can make sum by using different combinations from coins[ ].  
// Note: Assume that you have an infinite supply of each type of coin. And you can use any coin as many times as you want.

// Example 1:

// Input:
// N = 3, sum = 4
// coins = {1,2,3}
// Output: 4
// Explanation: Four Possible ways are: {1,1,1,1},{1,1,2},{2,2},{1,3}.
// Example 2:

// Input:
// N = 4, Sum = 10
// coins = {2,5,3,6}
// Output: 5
// Explanation: Five Possible ways are: {2,2,2,2,2}, {2,2,3,3}, {2,2,6}, {2,3,5} and {5,5}.
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function count() which accepts an array coins its size N and sum as input parameters and returns the number of ways to make change for given sum of money. 

// Expected Time Complexity: O(sum*N)
// Expected Auxiliary Space: O(sum)

// Constraints:
// 1 <= sum, N, coins[i] <= 103


function countWays(N, coins, sum) {
    const matrix = Array.from({ length: N + 1 }, () => Array(sum + 1).fill(BigInt(0)));

    for (let i = 0; i < N + 1; i++) {
        for (let j = 0; j < sum + 1; j++) {
            if (j === 0) {
                matrix[i][j] = BigInt(1); // Only one way to make sum 0, which is by not picking any coins.
            }
        }
    }

    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (coins[i - 1] <= j) {
                matrix[i][j] = matrix[i][j - coins[i - 1]] + matrix[i - 1][j];
            } else {
                matrix[i][j] = matrix[i - 1][j];
            }
        }
    }

    return matrix[N][sum].toString();
}

const coins = [1, 2, 3];
const sum = 4;

const res = countWays(coins.length, coins, sum);
console.log({ res });