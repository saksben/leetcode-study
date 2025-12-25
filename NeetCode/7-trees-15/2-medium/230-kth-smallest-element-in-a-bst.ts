/**
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1
Example 2:


Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
 

Constraints:

The number of nodes in the tree is n.
1 <= k <= n <= 104
0 <= Node.val <= 104
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

function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 0;          // Number of nodes visited so far
  let result: number = 0; // Store kth smallest value

  function inOrder(node: TreeNode | null) {
    if (!node) return;

    // Visit left subtree
    inOrder(node.left);

    // Visit current node
    count++;
    if (count === k) {
      result = node.val;
      return; // Stop traversal once kth element is found
    }

    // Visit right subtree
    inOrder(node.right);
  }

  inOrder(root);
  return result;
}
