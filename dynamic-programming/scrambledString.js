function isScrambledFn(str1, str2) {
    if (str1 === str2) {
        return true;
    }

    if (str1.length !== str2.length) {
        return false;
    }

    const n = str1.length;

    if (n <= 1) {
        return false;
    }

    const memoKey = `${str1}_${str2}`;

    if (memoMap[memoKey] !== undefined) {
        return memoMap[memoKey];
    }

    let flag = false;
    for (let i = 0; i < n; i++) {
        if (
            (isScrambledFn(str1.substring(0, i + 1), str2.substring(i + 1, n))
                && isScrambledFn(str1.substring(i + 1, n), str2.substring(0, i + 1)))
            || (isScrambledFn(str1.substring(0, i + 1), str2.substring(0, i + 1))
                && isScrambledFn(str1.substring(i + 1, n), str2.substring(i + 1, n)))
        ) {
            flag = true;
            break;
        }
    }

    memoMap[memoKey] = flag;

    return flag;
}

const memoMap = {};

const S1 = 'coder';
const S2 = 'ocder';

const res = isScrambledFn(S1, S2);
console.log({ res });