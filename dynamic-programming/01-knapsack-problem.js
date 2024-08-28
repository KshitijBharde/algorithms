const wt = [1, 3, 4, 5];
const val = [1, 4, 5, 7];
const maxWeight = 7;


const knapsackRecursive = (wtArr, valArr, w, n) => {
    if (n === 0 || w === 0) {
        return 0;
    }

    if (wtArr[n - 1] <= w) {
        return Math.max(
            valArr[n - 1] + knapsackRecursive(wtArr, valArr, w - wtArr[n - 1], n - 1),
            knapsackRecursive(wtArr, valArr, w, n - 1)
        );
    }

    return knapsackRecursive(wtArr, valArr, w, n - 1)
}

const result = knapsackRecursive(wt, val, maxWeight, wt.length);
console.log({ result });