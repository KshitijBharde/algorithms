// Given a rod of length N inches and an array of prices, price[]. price[i] denotes the value of a piece of length i. Determine the maximum value obtainable by cutting up the rod and selling the pieces.

// Note: Consider 1-based indexing.

// Example 1:

// Input:
// N = 8
// Price[] = {1, 5, 8, 9, 10, 17, 17, 20}
// Output:
// 22
// Explanation:
// The maximum obtainable value is 22 by 
// cutting in two pieces of lengths 2 and 
// 6, i.e., 5+17=22.
// Example 2:

// Input:
// N=8
// Price[] = {3, 5, 8, 9, 10, 17, 17, 20}
// Output: 
// 24
// Explanation: 
// The maximum obtainable value is 
// 24 by cutting the rod into 8 pieces 
// of length 1, i.e, 8*price[1]= 8*3 = 24. 
// Your Task:  
// You don't need to read input or print anything. Your task is to complete the function cutRod() which takes the array A[] and its size N as inputs and returns the maximum price obtainable.

// Expected Time Complexity: O(N2)
// Expected Auxiliary Space: O(N)

// Constraints:
// 1 ≤ N ≤ 1000
// 1 ≤ Ai ≤ 105


// Top Down approach
function cutRod(price, n) {
    const rodArr = [];
    for (let i = 0; i < n; i++) {
        rodArr[i] = i + 1;
    }

    const matrix = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(-1));

    for (let i = 0; i < n + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            if (i === 0 || j === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (rodArr[i - 1] <= j) {
                matrix[i][j] = Math.max(price[i - 1] + matrix[i][j - rodArr[i - 1]], matrix[i - 1][j]);
            } else {
                matrix[i][j] = matrix[i - 1][j];
            }
        }
    }

    return matrix[n][n];
}

const price = [1, 5, 8, 9, 10, 17, 17, 20];

const res = cutRod(price, price.length);
console.log('Top down func result:');
console.log({ maxProfit: res });