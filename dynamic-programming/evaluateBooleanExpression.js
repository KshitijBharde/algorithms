function countWaysRecursive(str, i, j, isTrue) {
    if (i > j) {
        return 0;
    }

    if (i === j) {
        if (isTrue && str[i] === 'T') {
            return 1;
        } else if (!isTrue && str[i] === 'F') {
            return 1;
        } else {
            return 0;
        }
    }

    let count = 0;
    for (let k = i + 1; k < j; k += 2) {
        const operator = str[k];

        if (operator === '^') {
            let leftTrue = countWaysRecursive(str, i, k - 1, true);
            let leftFalse = countWaysRecursive(str, i, k - 1, false);
            let rightTrue = countWaysRecursive(str, k + 1, j, true);
            let rightFalse = countWaysRecursive(str, k + 1, j, false);
            if (isTrue) {
                count = count + (leftTrue * rightFalse) + (leftFalse * rightTrue);
            } else {
                count = count + (leftTrue * rightTrue) + (leftFalse * rightFalse);
            }
            continue;
        }

        if (operator === '|') {
            let leftFalse = countWaysRecursive(str, i, k - 1, false);
            let rightFalse = countWaysRecursive(str, k + 1, j, false);
            if (isTrue) {
                let leftTrue = countWaysRecursive(str, i, k - 1, true);
                let rightTrue = countWaysRecursive(str, k + 1, j, true);
                count = count + (leftTrue * rightTrue) + (leftTrue * rightFalse) + (leftFalse * rightTrue);
            } else {
                count = count + (leftFalse * rightFalse);
            }
            continue;
        }

        if (operator === '&') {
            let leftTrue = countWaysRecursive(str, i, k - 1, true);
            let rightTrue = countWaysRecursive(str, k + 1, j, true);
            if (isTrue) {
                count = count + (leftTrue * rightTrue);
            } else {
                let leftFalse = countWaysRecursive(str, i, k - 1, false);
                let rightFalse = countWaysRecursive(str, k + 1, j, false);
                count = count + (leftTrue * rightFalse) + (leftFalse * rightTrue) + (leftFalse * rightFalse);
            }
            continue;
        }
    }

    return count;
}

const S = 'T|F^F&T|F^F^F^T|T&T^T|F^T^F&F^T|T^F';

const res = countWaysRecursive(S, 0, S.length - 1, true);

console.log({ res });