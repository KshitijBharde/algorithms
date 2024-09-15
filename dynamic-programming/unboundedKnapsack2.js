// Given an array of distinct integers candidates and a target integer target,
// return all unique combinations of candidates where the chosen numbers sum to target.
// The same number may be chosen from candidates an unlimited number of times.

// Example:
// plaintext
// Copy code
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]


const candidates = [2, 3, 6, 7];
const target = 7;

// const memo = Array.from({ length: candidates.length + 1 }, () => new Array(target + 1).fill(null));

// for (let i = 0; i < candidates.length + 1; i++) {
//     for (let j = 0; j < target + 1; j++) {
//         if (j === 0) {
//             memo[i][j] = true;
//         }
//     }
// }


// function unboundedKnapsack(nums, n, k) {
//     if (k === 0) {
//         return true;
//     }

//     if (n === 0) {
//         return false;
//     }

//     if (memo[n][k] !== null) {
//         return memo[n][k];
//     }

//     const currValue = nums[n - 1];


//     if (currValue <= k) {
//         const res = unboundedKnapsack(nums, n, k - currValue) || unboundedKnapsack(nums, n - 1, k);
//         memo[n][k] = res;
//         return res;
//     }

//     const res = unboundedKnapsack(nums, n - 1, k);
//     memo[n][k] = res;
//     return res;
// }


function topDownFn(nums, k) {
    const n = candidates.length;
    const memo = Array.from({ length: candidates.length + 1 }, () => new Array(target + 1).fill(null));
    for (let i = 0; i < candidates.length + 1; i++) {
        for (let j = 0; j < target + 1; j++) {
            if (j === 0) {
                memo[i][j] = true; // If target is 0, we can achieve it by choosing no elements
            } else if (i === 0) {
                memo[i][j] = false; // If no candidates and target is not 0, it's impossible
            }
        }
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < target + 1; j++) {

            if (candidates[i - 1] <= j) {
                memo[i][j] = memo[i - 1][j] || memo[i][j - candidates[i - 1]];
            } else {
                memo[i][j] = memo[i - 1][j];
            }

        }
    }

    const result = []

    function backtrack(i, j, path) {
        if (j === 0) {
            // found a solution, push it to result
            result.push([...path]);
            return;
        }

        if (i === 0) {
            // checked all coins, solution not found
            return;
        }

        if (memo[i - 1][j]) {
            backtrack(i - 1, j, path);
        }

        if (candidates[i - 1] <= j && memo[i][j - candidates[i - 1]]) {
            path.push(candidates[i - 1]);
            backtrack(i, j - candidates[i - 1], path);
            path.pop();
        }
    }

    if (memo[n][k]) {
        backtrack(n, k, [])
    }

    return result;
}

const result = topDownFn(candidates, target);
console.log({ result });