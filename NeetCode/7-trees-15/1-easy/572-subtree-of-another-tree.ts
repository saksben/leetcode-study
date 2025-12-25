/**
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

 

Example 1:


Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
Example 2:


Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
 

Constraints:

The number of nodes in the root tree is in the range [1, 2000].
The number of nodes in the subRoot tree is in the range [1, 1000].
-104 <= root.val <= 104
-104 <= subRoot.val <= 104
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  // Base cases
  if (!subRoot) return true  // Empty tree is always a subtree
  if (!root) return false    // Can't match an empty main tree

  // If current trees match, we’re done
  if (isSameTree(root, subRoot)) return true

  // Otherwise, keep searching left and right subtrees
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

/**
 * Helper function to check if two trees are identical.
 * @param t1 - First tree node
 * @param t2 - Second tree node
 * @returns boolean - whether the trees are identical
 */
function isSameTree(t1: TreeNode | null, t2: TreeNode | null): boolean {
  // Both null → identical
  if (!t1 && !t2) return true

  // One null or values differ → not identical
  if (!t1 || !t2 || t1.val !== t2.val) return false

  // Both non-null and equal → check children recursively
  return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right)
}
