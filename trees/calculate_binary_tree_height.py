class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key


def tree_height(root):
    if root is None:
        return 0
    else:
        left_height = tree_height(root.left)
        right_height = tree_height(root.right)

        # Height of the tree is maximum of left subtree height and right subtree height plus 1 (for the root)
        return max(left_height, right_height) + 1


# Example usage:
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

print("Height of the binary tree is:", tree_height(root))
