// Input: n = 20
// Output: 4
// Explanation: The possible combinations are:
// (10 + 10)
// (5 + 5 + 5 + 5)
// (5 + 5 + 10)
// (3 + 3 + 3 + 3 + 3 + 5) 

// 3,5,10

// Input: a[] = {2, 3, 5, 8}, b[] = {10, 12, 14, 16, 18, 20}
// Output: The median is 11.
// Explanation : The merged array is: ar3[] = {2, 3, 5, 8, 10, 12, 14, 16, 18, 20}
// If the number of the elements are even. So there are two middle elements.
// Take the average between the two: (10 + 12) / 2 = 11. 


function findMedian(arr1, arr2) {
    const mergedArr = [];

    let i = 0; // arr1
    let j = 0; // arr2
    let x = 0; // merged arr

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr[x] = arr1[i];
            i += 1;
        } else {
            mergedArr[x] = arr2[j];
            j += 1;
        }

        x += 1;
    }

    while (i < arr1.length) {
        mergedArr[x] = arr1[i];
        i += 1;
        x += 1;
    }

    while (j < arr2.length) {
        mergedArr[x] = arr2[j];
        j += 1;
        x += 1;
    }

    const midIndex = Math.floor(mergedArr.length / 2);
    if (mergedArr.length % 2 === 0) {
        return Math.floor((mergedArr[midIndex - 1] + mergedArr[midIndex]) / 2);
    } else {
        return mergedArr[midIndex];
    }
}

console.log(findMedian([2, 3, 5, 8], [10, 12, 14, 16, 18, 20]));

