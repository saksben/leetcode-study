/**
 * Given a binary tree, determine if it is height-balanced.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
 */

export {}

// Definition for a binary tree node
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function isBalanced(root: TreeNode | null): boolean {
  // Helper DFS function returns height if balanced, -1 if unbalanced
  function dfs(node: TreeNode | null): number {
    if (!node) return 0 // base case: empty tree has height 0

    // Recursively get heights of left and right subtrees
    const leftHeight = dfs(node.left)
    const rightHeight = dfs(node.right)

    // If left or right subtree is unbalanced, propagate failure
    if (leftHeight === -1 || rightHeight === -1) return -1

    // If current node is unbalanced (height difference > 1)
    if (Math.abs(leftHeight - rightHeight) > 1) return -1

    // Return the height of current subtree
    return 1 + Math.max(leftHeight, rightHeight)
  }

  // If dfs(root) returns -1 → unbalanced
  return dfs(root) !== -1
}
