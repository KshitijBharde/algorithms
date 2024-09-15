/**
 * Validates whether a binary tree is a Binary Search Tree (BST).
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {boolean} - True if valid BST, else false.
 */
function isValidBST(root) {
    /**
     * Helper function to validate BST.
     * @param {TreeNode} node - Current node being validated.
     * @param {number|null} min - Minimum allowed value for current node.
     * @param {number|null} max - Maximum allowed value for current node.
     * @return {boolean} - True if subtree is valid BST, else false.
     */
    function validate(node, min, max) {
        if (!node) return true; // An empty node is valid

        // Check current node's value against min and max constraints
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false; // Violation found
        }

        // Recursively validate left and right subtrees with updated constraints
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }

    return validate(root, null, null); // Start with no constraints
}

// Example Usage:
// Valid BST:
//     2
//    / \
//   1   3
const validBST = new TreeNode(2, new TreeNode(1), new TreeNode(3));

console.log(isValidBST(validBST)); // Output: true

// Invalid BST:
//     5
//    / \
//   1   4
//      / \
//     3   6
const invalidBST = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));

console.log(isValidBST(invalidBST)); // Output: false