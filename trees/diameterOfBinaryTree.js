/**
 * Finds the diameter of a binary tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {number} - The diameter (number of nodes on the longest path).
 */
function diameterOfBinaryTree(root) {
    let diameter = 0; // Variable to keep track of the maximum diameter

    /**
     * Helper function to compute the depth of the tree.
     * @param {TreeNode} node - Current node being visited.
     * @return {number} - Depth of the subtree rooted at node.
     */
    function depth(node) {
        if (!node) return 0; // Base case: null node has depth 0

        // Recursively find the depth of left and right subtrees
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        // Update the diameter if the path through this node is longer
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // Return the depth of the subtree rooted at this node
        return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root); // Start depth computation from root
    return diameter; // Return the maximum diameter found
}

// Example Usage:
// Constructing the binary tree:
//     1
//    / \
//   2   3
//  / \     
// 4   5    
const rootDiameter = new TreeNode(1);
rootDiameter.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
rootDiameter.right = new TreeNode(3);

console.log(diameterOfBinaryTree(rootDiameter)); // Output: 3 (path: 4 -> 2 -> 1 -> 3 or 5 -> 2 -> 1 -> 3)