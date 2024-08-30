// [a,b,c] 3m
// [a] 3m
// [b] 3m
// [c] 2m
// [ab] 3m
// [ac] 3m
// ba 3m
// bc 3m
// abc 2m
// [] 


function getCombinations(arr) {
    const resArr = [];

    function backtrack(currArr, index) {
        resArr.push(currArr.join(''));

        for (let i = 0; i < arr.length; i++) {
            const char = arr[i];
            if (!currArr.includes(char)) {
                currArr.push(char);
                backtrack(currArr, i + 1);
                currArr.pop();
            }
        }
    }

    backtrack([], 0);

    return resArr;
}

const res = getCombinations(['a', 'b', 'c']);

console.log(JSON.stringify(res, null, 2));
