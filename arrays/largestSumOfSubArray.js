const getLargestSumOfSubArray = (arr) => {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let firstIdx = 0;
    let secondIdx = 0;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];

            if (sum > maxSum) {
                firstIdx = i + 1;
                secondIdx = j;
                maxSum = sum;
            }
        }
    }

    console.log({ firstIdx, secondIdx });

    return maxSum;
};

console.log(getLargestSumOfSubArray([-2, -3, 4, -1, -2, 1, 5, -3]));