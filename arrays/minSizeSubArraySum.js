/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let wndwStart = 0;
    let minLen = Infinity;
    let wndwSum = 0;

    for (let wndwEnd = 0; wndwEnd < nums.length; wndwEnd++) {
        wndwSum += nums[wndwEnd];

        while (wndwSum >= target) {
            minLen = Math.min(minLen, wndwEnd - wndwStart + 1);
            wndwSum -= nums[wndwStart];
            wndwStart += 1;
        }
    }

    if (minLen === Infinity) {
        return 0;
    }

    return minLen;
};

const targetSum = 7;
const inputArr = [2, 3, 1, 2, 4, 3];

console.log(`
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray
whose sum is greater than or equal to target.
If there is no such subarray, return 0 instead.
`);

console.log({ targetSum, inputArr });

const result = minSubArrayLen(targetSum, inputArr);

console.log({ result });