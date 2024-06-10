/**
 * 
 * We are given two strings, s and t , and our task is to find the smallest substring in s that contains all characters in t . 
 * Let's visualize this with an example. Consider s = "ADOBECODEBANC" and t = "ABC" . 
 * The minimum window substring is "BANC" , which contains all characters in t 
*/
function getSmallestSubstringWithCharsOfT(s, t) {
    let windowStart = 0;
    let charMap = new Map();
    let minSubStrLen = Number.MAX_SAFE_INTEGER;

    let charSetOfT = new Set(t.split(''));

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const charAtEnd = s[windowEnd];

        if (charSetOfT.has(charAtEnd)) {
            charMap.set(charAtEnd, (charMap.get(charAtEnd) || 0) + 1);
        }

        while (charMap.size === charSetOfT.size) {
            minSubStrLen = Math.min(minSubStrLen, windowEnd - windowStart + 1);

            let nextUniqueCharFound = false;
            while (!nextUniqueCharFound) {
                const charAtStart = s[windowStart];

                if (charSetOfT.has(charAtStart)) {
                    charMap.set(charAtStart, charMap.get(charAtEnd) - 1);

                    if (charMap.get(charAtStart) === 0) {
                        charMap.delete(charAtStart);
                    }

                    nextUniqueCharFound = true;
                    break;
                }

                windowStart += 1;
            }
        }
    }

    return minSubStrLen;
}

console.log(getSmallestSubstringWithCharsOfT('ADOBECODEBANC', 'ABC'));
