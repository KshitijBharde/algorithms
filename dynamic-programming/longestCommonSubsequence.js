/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
    const n = text1.length;
    const m = text2.length;

    const memo = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(null));

    for (let i = 0; i < n + 1; i++) {
        for (let j = 0; j < m + 1; j++) {
            if (i === 0 || j === 0) {
                memo[i][j] = 0;
            }
        }
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                memo[i][j] = 1 + memo[i - 1][j - 1];
            } else {
                memo[i][j] = Math.max(
                    memo[i - 1][j],
                    memo[i][j - 1]
                );
            }
        }
    }

    // printing longest common subsequence
    const resArr = [];
    let prevVal = null;
    for (let i = 1; i < memo[n].length; i++) {
        if (memo[n][i] !== prevVal) {
            resArr.push(text2[i - 1]);
        }
        prevVal = memo[n][i];
    }

    console.log(resArr);

    return memo[n][m];
};

const x = 'AGGTAB';
const y = 'GXTXAYB';

longestCommonSubsequence(x, y);