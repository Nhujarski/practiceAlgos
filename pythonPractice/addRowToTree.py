class Side:
    LEFT = 'left'
    RIGHT = 'right'
class Solution:
    def addOneRow(self, root: TreeNode, val: int, depth: int, side = Side.LEFT) -> TreeNode:
    # Base case: When depth is 1, the row is supposed to be inserted at this layer. Create the root, then add the current subtree to the correct side.
    if depth == 1:
        res = TreeNode(val)
        setattr(res, side, root)
        return res
    # Recursive case: We are not yet at the correct depth
    if root:
        root.left = self.addOneRow(root.left, val, depth - 1)
        root.right = self.addOneRow(root.right, val, depth - 1, Side.RIGHT)
    return root