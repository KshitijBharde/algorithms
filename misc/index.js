/**
 * 
 * 
 * Given a string, find the length of the longest substring that contains at most K distinct characters.

Example:

Input: s = "eceba", k = 2
Output: 3
Explanation: The substring is "ece" with length 3. 
*/


function findLongesSubstringAtMostKChars(str, k) {
    const charMap = new Map();
    let start = 0;
    let maxLen = -Infinity;

    for (let end = 0; end < str.length; end++) {
        const charAtEnd = str[end];

        charMap.set(charAtEnd, (charMap.get(charAtEnd) || 0) + 1);

        while (charMap.size > k) {
            const charAtStart = str[start];

            charMap.set(charAtStart, charMap.get(charAtStart) - 1);

            if (charMap.get(charAtStart) === 0) {
                charMap.delete(charAtStart);
            }

            start += 1;
        }

        if (charMap.size === k) {
            maxLen = Math.max(maxLen, end - start + 1);
        }
    }

    return maxLen === -Infinity ? 0 : maxLen;
}


console.log(findLongesSubstringAtMostKChars('aaaaa', 2));