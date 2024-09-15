/*
You are given two lists of closed intervals, firstList and secondList, 
where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. 
Each list of intervals is pairwise disjoint and in sorted order.  

Return the intersection of these two interval lists.  
 
A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.  

The intersection of two closed intervals is a set of real numbers 
that are either empty or represented as a closed interval. 
For example, the intersection of [1, 3] and [2, 4] is [2, 3].  

Input 1: 
firstList = [[0,2],[5,10],[13,23],[24,25]], 
secondList = [[1,5],[8,12],[15,24],[25,26]] 
Output 1: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]] 

0----2   5---------10    13-----------------23 24-25
  1------5   8--------12    15-----------------24 25-26

 
Input 2: firstList = [[1,3],[5,9]], secondList = [] 
Output 2: [] 

Input 3: firstList = [[0,2],[5,23],[24,25]], secondList = [[1,5],[8,12],[15,21],[25,26]]
Ouptut 3: [[1,2],[5,5],[8,12],[15,21],[25,25]]

Input 4: firstList = [[24,25]], secondList = [[1,5],[8,12],[15,21],[25,26]]
Output 4: ?

Input 5: firstList = [[1,5],[8,12],[15,21],[25,26]], secondList = [[0,2],[5,23],[24,25]]
Output 5: ?

*/

function getInterSections(intervals1, intervals2) {
    let i = 0;
    let j = 0;
    const intersectionsArr = [];

    while (i < intervals1.length && j < intervals2.length) {
        const low = Math.max(intervals1[i][0], intervals2[j][0]);
        const high = Math.min(intervals1[i][1], intervals2[j][1]);

        if (low <= high) {
            intersectionsArr.push([low, high]);
        }

        if (intervals1[i][1] < intervals2[j][1]) {
            i += 1;
        } else {
            j += 1;
        }
    }

    return intersectionsArr;
}

const firstList = [[0, 2], [5, 10], [13, 23], [24, 25]];
const secondList = [[1, 5], [8, 12], [15, 24], [25, 26]];

const res = getInterSections(firstList, secondList);

console.log({ res });