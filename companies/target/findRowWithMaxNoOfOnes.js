// Given matrix binary 2D array, where each row is sorted. Find the row with the maximum number of 1s.

// Input matrix : 0 1 1 1
//                0 0 1 1
//                1 1 1 1
//                0 0 0 0
// Output: 2
// Explanation: Row = 2 has maximum number of 1s, that is 4.

// Input matrix : 0 0 1 1
//                0 1 1 1
//                0 0 1 1  
//                0 0 0 0
// Output: 1
// Explanation: Row = 1 has maximum number of 1s, that is 3.


function getMaxRow(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let col = cols - 1;
    let row = 0;
    let maxRow = -1

    while (row < rows && col >= 0) {
        if (matrix[row][col] === 1) {
            maxRow = row;
            col -= 1;
        }
        row += 1;
    }

    return maxRow === -1 ? 1 : maxRow + 1
}


const m = [[0, 1, 1, 1],
[0, 0, 1, 1],
[1, 1, 1, 1]
[0, 0, 0, 0]];

const res = getMaxRow(m);
console.log({ res });

