// Write a full program that takes an int n > 0 and recursively prints all 
// combinations of characters 'a' and 'b' on the screen. 
// Example for n=3: aaa, baa, bba, aba, bab, aab, abb, bbb. 



function printAllComb(n) {
    const resArr = [];

    function backtrack(currArr) {
        if (currArr.length === n) {
            resArr.push(currArr.join(''));
            return;
        }


        currArr.push('a');
        backtrack(currArr);
        currArr.pop();

        currArr.push('b');
        backtrack(currArr);
        currArr.pop();
    }

    backtrack([]);

    return resArr;
}


// const res = printAllComb(3);

// console.log(JSON.stringify(res, null, 2));


// 2. Given a number n, we need to print all n-digit binary numbers with equal sum in left and right halves. 
// If n is odd, then mid element can be either 0 or 1.

// Examples: 

// Input  : n = 4
// Output : 0000 0101 0110 1001 1010 1111 
// Input : n = 5
// Output : 00000 00100 01001 01101 01010 01110 10001 10101 10010 10110 11011 11111 



// 010 -> 0101 | 0100


// 011

// function isLeftAndRightEqual(arr) {
//     const mid = Math.floor(arr.length / 2);

//     if (arr.length % 2 === 0) {

//     } else {

//     }

// }


function countOneInArr(arr, start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (arr[i] === 1) {
            count += 1;
        }
    }

    return count;
}

function printAllBinaryComb(n) {
    const resArr = [];

    const isNEven = n % 2 === 0;

    function backtrack(leftArr, rightArr, leftSum, rightSum) {
        if (leftArr.length === Math.floor(n / 2) && rightArr.length === Math.floor(n / 2)) {
            if (leftSum === rightSum) {
                if (isNEven) {
                    resArr.push([...leftArr, ...rightArr].join(''));
                } else {
                    resArr.push([...leftArr, 0, ...rightArr].join(''));
                    resArr.push([...leftArr, 1, ...rightArr].join(''));
                }
            }
            return;
        }

        leftArr.push(0);
        rightArr.push(0);
        backtrack(leftArr, rightArr, leftSum, rightSum);
        leftArr.pop();
        rightArr.pop();

        leftArr.push(1);
        rightArr.push(0);
        backtrack(leftArr, rightArr, leftSum + 1, rightSum);
        leftArr.pop();
        rightArr.pop();


        leftArr.push(0);
        rightArr.push(1);
        backtrack(leftArr, rightArr, leftSum, rightSum + 1);
        leftArr.pop();
        rightArr.pop();

        leftArr.push(1);
        rightArr.push(1);
        backtrack(leftArr, rightArr, leftSum + 1, rightSum + 1);
        leftArr.pop();
        rightArr.pop();
    }

    backtrack([], [], 0, 0);

    return resArr;
}

const res = printAllBinaryComb(4);

console.log(JSON.stringify(res, null, 2));