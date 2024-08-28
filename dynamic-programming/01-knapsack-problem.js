const wt = [1, 3, 4, 5];
const val = [1, 4, 5, 7];
const maxWeight = 7;

// Bottom up approach using recursion with memoization
(() => {
    const matrix = Array.from({ length: val.length + 1 }, () => Array(maxWeight + 1).fill(-1));

    const knapsackRecursive = (wtArr, valArr, w, n) => {
        if (n === 0 || w === 0) {
            return 0;
        }

        if (matrix[n][w] !== -1) {
            return matrix[n][w];
        }

        if (wtArr[n - 1] <= w) {
            matrix[n][w] = Math.max(
                valArr[n - 1] + knapsackRecursive(wtArr, valArr, w - wtArr[n - 1], n - 1),
                knapsackRecursive(wtArr, valArr, w, n - 1)
            );

            return matrix[n][w];
        }

        return knapsackRecursive(wtArr, valArr, w, n - 1)
    }

    const result = knapsackRecursive(wt, val, maxWeight, wt.length);
    console.log({ knapsackRecursive: result });
})();

// Top down approach using iterative code
(() => {

    const knapsack = (wtArr, valArr, w, n) => {
        const matrix = Array.from({ length: val.length + 1 }, () => Array(maxWeight + 1));

        // initializing matrix
        for (let i = 0; i < n + 1; i++) {
            for (let j = 0; j < w + 1; j++) {
                if (i === 0 || j === 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        for (let i = 1; i < n + 1; i++) {
            for (let j = 1; j < w + 1; j++) {
                const itemValue = valArr[i - 1];
                const itemWeight = wtArr[i - 1];


                if (itemWeight <= j) {
                    matrix[i][j] = Math.max(itemValue + matrix[i - 1][j - itemWeight], matrix[i - 1][j]);
                } else {
                    matrix[i][j] = matrix[i - 1][j];
                }
            }
        }

        return matrix[n][w];
    };

    const result = knapsack(wt, val, maxWeight, wt.length);
    console.log({ knapsackTopDown: result });
})();