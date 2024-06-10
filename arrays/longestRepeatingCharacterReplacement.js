/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(str, k) {
    let maxLenOfSubStr = 0;

    for (let i = 0; i < str.length; i++) {
        const charFreqMap = {};

        for (j = i; j < str.length; j++) {
            const currChar = str[j];

            charFreqMap[currChar] = (charFreqMap[currChar] || 0) + 1;

            const mostFreqCharCount = Math.max(Object.values(charFreqMap));

            const substrLen = j - i + 1;

            const changeOperationsNeeded = substrLen - mostFreqCharCount;

            if (changeOperationsNeeded <= k) {
                maxLenOfSubStr = Math.max(maxLenOfSubStr, substrLen);
            } else {

            }
        }
    }

    return maxLenOfSubStr;
};

function getMostFrequentCharCount(charFreqMap) {
    let max = Number.MIN_SAFE_INTEGER;

    const chars = Object.keys(charFreqMap);

    for (const char of chars) {
        max = Math.max(max, charFreqMap[char]);
    }

    return max;
}

console.log(characterReplacement('ABAB', 2));