/**
 * Find the lowest common ancestor of two nodes in a binary tree.
*/

/**
 * Finds the lowest common ancestor of two nodes in a binary tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @param {TreeNode} p - First node.
 * @param {TreeNode} q - Second node.
 * @return {TreeNode} - The lowest common ancestor node.
 */
function lowestCommonAncestor(root, p, q) {
    // If root is null or matches one of the nodes, return root
    if (!root || root === p || root === q) return root;

    // Recursively find LCA in the left subtree
    const left = lowestCommonAncestor(root.left, p, q);
    // Recursively find LCA in the right subtree
    const right = lowestCommonAncestor(root.right, p, q);

    // If both left and right are non-null, root is LCA
    if (left && right) return root;

    // Otherwise, return the non-null child
    return left || right;
}

// Example Usage:
// Constructing the binary tree:
//         3
//        / \
//       5   1
//      / \ / \
//     6  2 0  8
//       / \
//      7   4
const rootLCA = new TreeNode(3);
const node5 = new TreeNode(5);
const node1 = new TreeNode(1);
rootLCA.left = node5;
rootLCA.right = node1;
node5.left = new TreeNode(6);
node5.right = new TreeNode(2, new TreeNode(7), new TreeNode(4));
node1.left = new TreeNode(0);
node1.right = new TreeNode(8);

const p = node5; // Node with value 5
const q = node1; // Node with value 1

console.log(lowestCommonAncestor(rootLCA, p, q).val); // Output: 3