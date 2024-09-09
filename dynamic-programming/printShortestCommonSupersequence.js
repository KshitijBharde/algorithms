/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
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

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                memo[i][j] = 1 + memo[i - 1][j - 1];
            } else {
                memo[i][j] = Math.max(
                    memo[i - 1][j],
                    memo[i][j - 1]
                );
            }
        }
    }

    let supersequenceArr = [];
    let i = n;
    let j = m;

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            supersequenceArr.push(str1[i - 1]);
            i -= 1;
            j -= 1;
        } else if (memo[i][j - 1] > memo[i - 1][j]) {
            supersequenceArr.push(str2[j - 1]);
            j -= 1;
        } else if (memo[i - 1][j] >= memo[i][j - 1]) {
            supersequenceArr.push(str1[i - 1]);
            i -= 1;
        }
    }

    while (i > 0) {
        supersequenceArr.push(str1[i - 1]);
        i -= 1;
    }

    while (j > 0) {
        supersequenceArr.push(str2[j - 1]);
        j -= 1;
    }

    // reverse arr
    let x = 0;
    let y = supersequenceArr.length - 1;
    while (x < y) {
        const temp = supersequenceArr[y];
        supersequenceArr[y] = supersequenceArr[x];
        supersequenceArr[x] = temp;
        x += 1;
        y -= 1;
    }

    return supersequenceArr.join('');
};


const a = 'bbbaaaba';
const b = 'bbababbb';

const res = shortestCommonSupersequence(a, b);

console.log({ res });