/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
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

function levelOrder(root: TreeNode | null): number[][] {
  // If tree is empty, return an empty array
  if (!root) return [];

  const result: number[][] = []; // Final list of levels
  const queue: TreeNode[] = [root]; // Queue to track nodes to process

  // Process nodes until queue is empty
  while (queue.length > 0) {
    const levelSize = queue.length; // Number of nodes in the current level
    const currentLevel: number[] = []; // To store the current level's values

    // Process all nodes in this level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!; // Remove the first node from the queue
      currentLevel.push(node.val); // Add its value to this level

      // Add children to queue for next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // After processing a level, push it into the result
    result.push(currentLevel);
  }

  return result;
}
