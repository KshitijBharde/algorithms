from collections import deque


class TreeNode:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None


def level_order_traversal(node):
    if node is None:
        return

    queue = deque()
    queue.append(node)

    while len(queue) > 0:
        level_size = len(queue)

        for _ in range(level_size):
            curr = queue.popleft()
            print(curr.val, end=" ")

            if curr.left:
                queue.append(curr.left)
            if curr.right:
                queue.append(curr.right)

        print("")


# Example usage:
# Constructing a binary tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.right.left = TreeNode(6)
root.right.right = TreeNode(7)

level_order_traversal(root)
