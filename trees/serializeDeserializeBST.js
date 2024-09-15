/**
 * Serializes a binary tree to a single string.
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {string} - Serialized string representation of the tree.
 */
function serialize(root) {
    const result = []; // Array to store serialized values

    /**
     * Helper function to perform preorder traversal.
     * @param {TreeNode} node - Current node being visited.
     */
    function serializeHelper(node) {
        if (!node) {
            result.push("null"); // Represent null nodes with "null"
            return;
        }
        result.push(node.val.toString()); // Add current node's value
        serializeHelper(node.left); // Serialize left subtree
        serializeHelper(node.right); // Serialize right subtree
    }

    serializeHelper(root); // Start serialization from root
    return result.join(","); // Join all values with commas
}

/**
 * Deserializes a string back to a binary tree.
 * @param {string} data - Serialized string representation of the tree.
 * @return {TreeNode} - The root node of the deserialized binary tree.
 */
function deserialize(data) {
    const values = data.split(","); // Split the string into an array
    let index = 0; // Pointer to track the current position

    /**
     * Helper function to reconstruct the tree.
     * @return {TreeNode|null} - Reconstructed node or null.
     */
    function deserializeHelper() {
        if (index >= values.length) return null; // If all values are processed

        const val = values[index++]; // Get current value and increment index

        if (val === "null") return null; // If value is "null", return null node

        // Create a new TreeNode with the current value
        const node = new TreeNode(parseInt(val));
        node.left = deserializeHelper(); // Reconstruct left subtree
        node.right = deserializeHelper(); // Reconstruct right subtree
        return node; // Return the reconstructed node
    }

    return deserializeHelper(); // Start deserialization from root
}

// Example Usage:
// Constructing the binary tree:
//     1
//      \
//       2
//      /
//     3
const rootSerialize = new TreeNode(1);
rootSerialize.right = new TreeNode(2, new TreeNode(3), null);

const serialized = serialize(rootSerialize);
console.log(serialized); // Output: "1,null,2,3,null,null,null"

const deserialized = deserialize(serialized);
console.log(deserialized); // Output: Tree structure reconstructed