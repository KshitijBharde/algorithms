// Given an array of size n, generate and print all possible combinations of r elements in the array.

// Example:

// Input: arr=[1,2,3,4], r=2

// Output:
// 1 2
// 1 3
// 1 4
// 2 3
// 2 4
// 3 4

// Input: arr=[1,2,3,4], r=3

// Output:
// 1 2 3
// 1 2 4
// 1 3 4
// 2 3 4


function getAllCombinations(arr, r) {
    const resArr = [];
    function backtrack(currArr, index) {
        if (currArr.length === r) {
            resArr.push([...currArr]);
            return;
        }

        for (let i = index + 1; i < arr.length; i++) {
            currArr.push(arr[i]);
            backtrack(currArr, i);
            currArr.pop();
        }
    }

    backtrack([], -1);

    return resArr;
}

const res = getAllCombinations([1, 2, 3, 4], 3);

console.log(JSON.stringify(res.map((r) => r.join(', ')), null, 2));