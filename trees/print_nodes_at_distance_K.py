class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key


# def print_nodes(node, k, dist=0):
#     if node is None:
#         return

#     if dist == k:
#         print(node.val)
#     elif dist < k:
#         print_nodes(node.left, k, dist + 1)
#         print_nodes(node.right, k, dist + 1)
#     else:
#         return


def print_nodes_at_k_dist(node, k):

    if node is None or k < 0:
        return

    if k == 0:
        print(node.val)
        return

    print_nodes_at_k_dist(node.left, k - 1)
    print_nodes_at_k_dist(node.right, k - 1)


# Example usage:
# root = Node(10)
# root.left = Node(6)
# root.right = Node(8)
# root.right.right = Node(7)
# root.right.right.left = Node(11)
# root.right.right.right = Node(12)

root = Node(10)
root.left = Node(20)
root.right = Node(30)
root.right.right = Node(70)
root.left.right = Node(50)
root.left.left = Node(40)

print_nodes_at_k_dist(root, 2)
