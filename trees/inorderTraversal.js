/*
* Given a binary tree, return its inorder traversal.
*/

// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * Performs inorder traversal of a binary tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {number[]} - Array of node values in inorder.
 */
function inorderTraversal(root) {
    const result = []; // Array to store the traversal result

    /**
     * Helper function to perform recursion.
     * @param {TreeNode} node - Current node being visited.
     */
    function inorder(node) {
        if (!node) return; // Base case: If node is null, return
        inorder(node.left); // Traverse the left subtree
        result.push(node.val); // Visit the current node
        inorder(node.right); // Traverse the right subtree
    }

    inorder(root); // Start traversal from root
    return result; // Return the result array
}

// Example Usage:
// Constructing the binary tree:
//     1
//      \
//       2
//      /
//     3
const root = new TreeNode(1);
root.right = new TreeNode(2, new TreeNode(3), null);

console.log(inorderTraversal(root)); // Output: [1, 3, 2]