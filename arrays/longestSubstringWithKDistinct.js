function longestSubstringWithKdistinct(str, k) {
    let windowStart = 0;
    let maxLen = 0;
    let charMap = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const charAtEnd = str[windowEnd];

        charMap[charAtEnd] = (charMap[charAtEnd] || 0) + 1;

        while (Object.keys(charMap).length > k) {
            const charAtStart = str[windowStart];

            charMap[charAtStart] -= 1;

            if (charMap[charAtStart] === 0) {
                delete charMap[charAtStart];
            }

            windowStart += 1;
        }

        const substringLen = windowEnd - windowStart + 1;
        maxLen = Math.max(substringLen, maxLen);
    }

    return maxLen;
}

console.log(`
Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.
`);

const inputStr = 'araaci';
const distinctCharLimit = 2;

console.log({ inputStr, distinctCharLimit });

const result = longestSubstringWithKdistinct(inputStr, distinctCharLimit);

console.log({ result });
