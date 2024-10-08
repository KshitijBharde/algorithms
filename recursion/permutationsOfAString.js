// Given a string S. The task is to print all unique permutations of the given string that may contain dulplicates in lexicographically sorted order. 

// Example 1:

// Input: ABC
// Output:
// ABC ACB BAC BCA CAB CBA
// Explanation:
// Given string ABC has permutations in 6 
// forms as ABC, ACB, BAC, BCA, CAB and CBA .
// Example 2:

// Input: ABSG
// Output:
// ABGS ABSG AGBS AGSB ASBG ASGB BAGS 
// BASG BGAS BGSA BSAG BSGA GABS GASB 
// GBAS GBSA GSAB GSBA SABG SAGB SBAG 
// SBGA SGAB SGBA
// Explanation:
// Given string ABSG has 24 permutations.
// Your Task:  
// You don't need to read input or print anything. Your task is to complete the function find_permutation() which takes the string S as input parameter and returns a vector of string in lexicographical order.

// Expected Time Complexity: O(n! * n)
// Expected Space Complexity: O(n! * n)

// Constraints:
// 1 <= length of string <= 5


function findPermutations(s) {
    const resArr = [];

    generatePermutationsHelper('', s.split(''), s.length, resArr);

    return resArr;
}

function generatePermutationsHelper(permStr, strArr, maxStrSize, resArr) {
    if (permStr.length === maxStrSize) {
        resArr.push(permStr);
        return;
    }

    for (let i = 0; i < strArr.length; i++) {
        const char = strArr[i];
        const newStrArr = strArr.toSpliced(i, 1);
        generatePermutationsHelper(permStr + char, newStrArr, maxStrSize, resArr);
    }
}

const res = findPermutations('ljr');
console.log(JSON.stringify({ res }, null, 2));
