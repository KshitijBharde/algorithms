class Solution {

    memo = []
    palindromeMap = new Map();

    palindromicPartition(S) {
        //your code here
        this.memo = Array.from({ length: S.length + 1 }, () => new Array(S.length + 1).fill(-1));
        this.palindromeMap = new Map();

        return this.getNoOfPartitions(S, 0, S.length - 1);
    }

    getNoOfPartitions(str, i, j) {
        if (i >= j) {
            return 0;
        }
        if (this.memo[i][j] !== -1) {
            return this.memo[i][j];
        }
        if (this.isPalindrome(str, i, j)) {
            return 0;
        }


        let min = Number.MAX_SAFE_INTEGER;
        for (let k = i; k < j; k++) {
            let left = this.memo[i][k];
            if (left === -1) {
                left = this.getNoOfPartitions(str, i, k);
                this.memo[i][k] = left;
            }

            let right = this.memo[k + 1][j];
            if (right === -1) {
                right = this.getNoOfPartitions(str, k + 1, j)
                this.memo[k + 1][j] = right;
            }

            const res = 1 + right + left;

            if (res < min) {
                min = res;
            }
        }

        this.memo[i][j] = min;

        return min;
    }

    isPalindrome(str, i, j) {
        if (this.palindromeMap.has(`${i}${j}`)) {
            return this.palindromeMap.get(`${i}${j}`);
        }

        let x = i;
        let y = j;

        while (x < y) {
            if (str[x] !== str[y]) {
                this.palindromeMap.set(`${i}${j}`, false);
                return false;
            }
            x += 1;
            y -= 1;
        }

        this.palindromeMap.set(`${i}${j}`, true);
        return true;
    }
}