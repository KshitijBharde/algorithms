function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const maxAncestorDiff = function (root) {
    if (!root) {
        return 0;
    }

    function dfs(node, currMax, currMin) {
        if (!node) {
            return currMax - currMin;
        }

        currMax = Math.max(currMax, node.val);
        currMin = Math.min(currMin, node.val);
        const left = dfs(node.left, currMax, currMin);
        const right = dfs(node.right, currMax, currMin);

        return Math.max(left, right);
    }

    return dfs(root, root.val, root.val);
};

const root = new TreeNode(8);
root.left = new TreeNode(3);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);
root.left.right.left = new TreeNode(4);
root.left.right.right = new TreeNode(7);
root.right = new TreeNode(10);
root.right.right = new TreeNode(14);
root.right.right.left = new TreeNode(13);

console.log(maxAncestorDiff(root));