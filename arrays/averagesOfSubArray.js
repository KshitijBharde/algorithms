/**
 * Brut force approach
 * Time complexity: O(n*k)
 * 
*/
function findAvgOfSubArraysBrutForce(arr, k) {

    const avgArr = [];

    for (let i = 0; i < arr.length - k + 1; i++) {

        let sum = 0;

        for (let j = i; j < i + k; j++) {
            sum += arr[j]
        }

        avgArr.push(sum / k);
    }


    return avgArr;

}

/**
 * Optimal approach
 * Time complexity: O(n)
 * 
*/
function findAvgOfSubArrays(arr, k) {
    let windowStart = 0;
    let sum = 0;

    let resultArr = [];

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        sum += arr[windowEnd];

        if (windowEnd >= k - 1) {   
            resultArr.push(sum/k);

            sum -= arr[windowStart];

            windowStart++;
        }
    }

    return resultArr;
}

const inputArr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const subArraySize = 5;

console.log(`Finding averages of sub arrays of size: ${subArraySize} for array: ${JSON.stringify(inputArr)}`);

const res = findAvgOfSubArrays(inputArr, subArraySize);

console.log(`Averages array: ${JSON.stringify(res)}`);