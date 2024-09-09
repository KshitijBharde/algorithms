function longestCommonSubstr(str1, str2) {
    // code here
    const n = str1.length;
    const m = str2.length;

    const memo = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(null));

    for (let i = 0; i < n + 1; i++) {
        for (let j = 0; j < m + 1; j++) {
            if (i === 0 || j === 0) {
                memo[i][j] = 0;
            }
        }
    }

    let res = 0;
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                memo[i][j] = 1 + memo[i - 1][j - 1];
                res = Math.max(res, memo[i][j]);
            } else {
                memo[i][j] = 0;
            }
        }
    }

    return res;
}

const x = 'ABCDGH';
const y = 'ACDGHR';

const res = longestCommonSubstr(x, y);

console.log({ res });