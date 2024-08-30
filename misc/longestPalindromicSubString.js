// Input: s = "babad"

// Output: "bab" or "aba"

// Input: s = "cbbd"

// Output: "bb"




function longesPalindromicSubstring(s) {
    let maxLen = 0;

    resArr = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (isPalindrome(s, i, j)) {
                const len = Math.max(maxLen, j - i + 1);
                if (len >= maxLen) {
                    maxLen = len;
                    resArr.push(s.substring(i, j + 1));
                }
            }
        }
    }

    return resArr;

}

function isPalindrome(s, start, end) {
    let stemp = start;
    let etemp = end;

    while (stemp < etemp) {
        if (s[stemp] !== s[etemp]) {
            return false;
        }
        stemp += 1;
        etemp -= 1;
    }

    return true;
}

const res = longesPalindromicSubstring('cbbd');

console.log(res);