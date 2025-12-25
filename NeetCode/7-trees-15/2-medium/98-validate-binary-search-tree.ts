/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys strictly less than the node's key.
The right subtree of a node contains only nodes with keys strictly greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
 */

export {}

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isValidBST(root: TreeNode | null): boolean {
  // Helper DFS function that validates the current node
  // given its allowed range: (min < node.val < max)
  function dfs(node: TreeNode | null, min: number, max: number): boolean {
    // Base case: empty tree is valid
    if (!node) return true;

    // The node's value must be within the valid range
    if (node.val <= min || node.val >= max) return false;

    // Recursively validate left and right subtrees
    // Left subtree: all values < node.val
    // Right subtree: all values > node.val
    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  }

  // Start recursion with the full possible numeric range
  return dfs(root, -Infinity, Infinity);
}
