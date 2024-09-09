function getMaxProfit(arr, i, j) {
    if (i > j) {
        return 0;
    }

    let maxProfit = Number.MIN_SAFE_INTEGER;
    for (let k = i; k <= j; k++) {
        const currProfit = arr[i - 1] * arr[k] * arr[j + 1];
        const remainingProfit = getMaxProfit(arr, i, k - 1) + getMaxProfit(arr, k + 1, j);

        maxProfit = Math.max(maxProfit, currProfit + remainingProfit);
    }

    return maxProfit;
}


const nums = [3, 1, 5, 8]; // 167

const res = getMaxProfit(nums, 1, nums.length - 1);

console.log({ res });