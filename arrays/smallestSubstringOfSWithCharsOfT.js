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

            let counter = 0;
            while (counter <= 1) {
                const charAtStart = s[windowStart];

                if (charSetOfT.has(charAtStart)) {
                    counter += 1;

                    if (counter === 2) {
                        break;
                    }

                    charMap.set(charAtStart, charMap.get(charAtStart) - 1);

                    if (charMap.get(charAtStart) === 0) {
                        charMap.delete(charAtStart);
                    }

                }

                windowStart += 1;
            }
        }
    }

    return minSubStrLen;
}


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t === '') {
        return '';
    }

    if (t.length > s.length) {
        return '';
    }

    const windowMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < t.length; i++) {
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    }

    let start = 0;
    let minLen = Number.MAX_SAFE_INTEGER;
    const resIdxArr = [-1, -1];
    let have = 0;
    const need = tMap.size;
    

    for (let end = 0; end < s.length; end++) {
        const charAtEnd = s[end];

        windowMap.set(charAtEnd, (windowMap.get(charAtEnd) || 0) + 1);

        if (tMap.has(charAtEnd) && windowMap.get(charAtEnd) === tMap.get(charAtEnd)) {
            have += 1;
        }

        while (have === need) {
            if (end - start + 1 < minLen) {
                minLen = end - start + 1;
                resIdxArr[0] = start;
                resIdxArr[1] = end;
            }

            const charAtStart = s[start];

            windowMap.set(charAtStart, windowMap.get(charAtStart) - 1);

            if (tMap.has(charAtStart) && windowMap.get(charAtStart) < tMap.get(charAtStart)) {
                have -= 1;
            }

            start += 1;
        }
    }

    if (minLen === Number.MAX_SAFE_INTEGER) {
        return '';
    }

    return s.slice(resIdxArr[0], resIdxArr[1] + 1);
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));