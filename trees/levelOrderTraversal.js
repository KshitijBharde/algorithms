/**
 * Performs level order traversal of a binary tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {number[][]} - Array of levels with node values.
 */
function levelOrder(root) {
    if (!root) return []; // If tree is empty, return empty array
    const result = []; // Array to store the level order traversal
    const queue = [root]; // Initialize queue with root node

    while (queue.length) {
        const level = []; // Array to store current level's node values
        const size = queue.length; // Number of nodes at current level

        for (let i = 0; i < size; i++) {
            const node = queue.shift(); // Dequeue the front node
            level.push(node.val); // Add node's value to current level

            // Enqueue left child if exists
            if (node.left) queue.push(node.left);
            // Enqueue right child if exists
            if (node.right) queue.push(node.right);
        }

        result.push(level); // Add current level to result
    }

    return result; // Return the level order traversal
}

// Example Usage:
// Constructing the binary tree:
//     3
//    / \
//   9  20
//      / \
//     15  7
const rootLevel = new TreeNode(3);
rootLevel.left = new TreeNode(9);
rootLevel.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

console.log(levelOrder(rootLevel)); 
// Output: [[3], [9, 20], [15, 7]]