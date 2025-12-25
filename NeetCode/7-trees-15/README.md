# Trees Pattern
Trees Pattern: use when you need to traverse, manipulate, or search through a tree data structure efficiently.

The Trees pattern involves operations on a hierarchical data structure consisting of nodes connected by edges. This pattern is essential for problems requiring hierarchical relationships between elements, such as binary trees, n-ary trees, or balanced trees like AVL or Red-Black trees. It optimizes operations like insertion, deletion, and traversal compared to linear data structures.

# Explanation of the Pattern
A Tree consists of nodes where each node contains a data field and references (or links) to child nodes. Operations involve traversing nodes from the root to leaf nodes or vice versa, manipulating nodes to maintain balance, and searching for specific elements or patterns within the tree structure.

# Key Concepts
* Node: Basic unit containing data and references to child nodes.
* Root, Parent, and Child Nodes: Fundamental relationships in tree structures.
* Traversal Algorithms: Methods for visiting nodes (e.g., depth-first, breadth-first).
* Balancing: Techniques to keep the tree structure balanced (e.g., rotations in AVL trees).
* Binary vs. N-ary Trees: Distinctions based on the number of child nodes per parent node.

# When to Use This Pattern
* Representing hierarchical data relationships (e.g., organizational charts, file systems).
* Implementing efficient searching, insertion, or deletion operations.
* Problems involving pathfinding, subtree operations, or binary search tree properties.

# Common Use Cases and Approaches
1. Binary Tree Traversal (Inorder, Preorder, Postorder)
* Use recursive or iterative methods to visit nodes in a specific order.
* Adjust traversal strategies based on the desired sequence.
Time Complexity: O(n), Space Complexity: O(h) where h is the height of the tree.

2. Level Order Traversal (Breadth-First Search)
* Use a queue to visit nodes level by level, starting from the root.
* Adjust queue operations to process child nodes in a structured manner.
Time Complexity: O(n), Space Complexity: O(n) (worst case when the tree is completely unbalanced).

3. Binary Search Tree (BST) Operations (Insertion, Deletion, Search)
* Use recursive or iterative methods to maintain the BST properties.
* Adjust pointers to insert, delete, or search for nodes efficiently.
Time Complexity: O(log n) on average for balanced trees, O(n) worst-case for unbalanced trees; Space Complexity: O(h).

4. Serialize and Deserialize a Binary Tree
* Convert a binary tree into a string or array format and vice versa.
* Adjust serialization and deserialization methods to preserve tree structure.
Time Complexity: O(n), Space Complexity: O(n) for serialization and O(n) for deserialization.


Strategy:
// Big picture decision tree:
if (problem.requires(visitingEveryNodeInOrder)) {
    useTraversalDFS(root); // Preorder, inorder, postorder
} else if (problem.requires(visitingByLevels)) {
    useBFSLevelOrder(root);
} else if (problem.requires(searchingBST)) {
    useBinarySearchOnTree(root, target);
} else if (problem.requires(findingLowestCommonAncestor)) {
    useLCATemplate(root, p, q);
} else if (problem.requires(serializationOrDeserialization)) {
    useSerializeDeserialize(root);
} else if (problem.requires(pathBasedSumOrCheck)) {
    useDFSPathSum(root, target);
} else if (problem.requires(heightOrBalancedCheck)) {
    useHeightBalanceDFS(root);
} else if (problem.requires(modifyStructure)) {
    useInvertOrBuildTree(root);
} else {
    useGenericDFS(root); // Default template
}

const useGenericDFS = (root: TreeNode | null): void => {
    if (!root) return; // If no root, return early

    process(root.val); // Custom logic

    dfsGeneric(root.left); // Recursively run on the left node
    dfsGeneric(root.right); // Recursively run on the right node
}

const invertTree = (root: TreeNode | null): TreeNode | null => {
    // Ex. Invert a binary tree
    if (!root) return null; // If no root, return early

    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]; // Recursively set left root as 
    //right root's return node and right root as left root's return node
    return root;
}

const useTraversalDFS = (root: TreeNode | null): number[] => {
    // If I need to visit every node in a specific order
    // Ex. Return the preorder traversal of a binary tree

    const res: number[] = []; // Empty number array for result
    // Function to recursively push each node in some kind of order
    const dfs = (node: TreeNode | null) => {
        if (!node) return; // Notnull check
        res.push(node.val) // Preorder: process BEFORE children. Swap order of push/recursions for inorder/post
        dfs(node.left); // Recursively push left node
        dfs(node.right); // Recursively push right node
    }

    dfs(root);
    return res;
}

const useBFSLevelOrder = (root: TreeNode | null): number[][] => {
    // Ex. Return values level by level in a tree

    if (!root) return []; // Empty check
    
    const res: number[][] = [];
    const queue: (TreeNode | null)[] = [root]; // Create a queue out of the root node

    while (queue.length) {
        const size = queue.length; // Grab the queue's size
        const level: number[] = [];

        for (let i = 0; i < size; i++) {
            const node = queue.shift()!; // Grab queue's first node and remove it from queue
            level.push(node.val); // Add node to level array
            if (node.left) {
                queue.push(node.left); // Add node's left node to level array
            }
            if (node.right) {
                queue.push(node.right); // Add node's right node to level array
            }
        }

        res.push(level); // Push each node's nodes to the result and restart at next in queue
    }
    return res;
}

const useBinarySearchOnTree = (root: TreeNode | null, target: number): Treenode | null => {
    // If I need to find a value in a binary search tree
    // Ex. Given BST root and value, return node if exists

    let node = root;

    while (node) {
        if (node.val === target) return node; // If current node is target, return it
        if (target < node.val) {
            node = node.left; // If target is smaller than node, move search left
        } else {
            node = node.right; // If target is bigger than node, move search right
        }
    }
    return null;
}

const useLCATemplate = (root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null => {
    // If I need to find the common ancestor of two nodes
    if (!root || root === p || root === q) return root; // Return if empty or root found

    const left = lowestCommonAncestor(root.left, p, q); // Recursively search left side for root
    const right = lowestCommonAncestor(root.right, p, q); // Recursively search right side for root

    if (left && right) return root; // If both left and right return a root that matches p or q, you win
    return left || right;
}

const useDFSPathSum = (root: TreeNode | null, target: number): boolean => {
    // If I need to check sums or paths from root to leaf
    // Ex. Does any root-to-leaf path sum equal target?

    if (!root) return false; // Empty check
    if (!root.left && !root.right) return root.val === target; // If root has no left or right, is it target?
    return hasPathSum(root.left, target - root.val) || hasPathSum(root.right, target - root.val) // Recursively
    //check if left node and right node has no left and right and equals target
}

const useHeightBalanceDFS = (root: TreeNode | null): boolean => {
    // If I need height or to check if balanced
    // Ex. Is the tree height-balanced?

    const dfs = (node: TreeNode | null): number {
        if (!node) return 0; // If no node, return 0
        const left = dfs(node.left); // Recursively check left side
        if (left === -1) return -1; // Return -1 (false) if node exists

        const right = dfs(node.right); // Recursively check right side
        if (right === -1) return -1; // Return -1 (false) if node exists
        
        if (Math.abs(left - right) > 1) return -1; // If left and right both exist (-1), return false
        return Math.max(left, right) + 1; // Return true (1)
    }
    return dfs(root) !== -1; // Run on the root node and return whether no nodes are left (true)
}

const useSerializeDeserialize = (root: TreeNode | null): string => {
    // If I need to rebuild a tree structure
    // Ex. Serialise/deserialize a binary tree with BFS

    const serialize = (root: TreeNode | null): string {
        if (!root) return "[]"; // Empty check

        const queue: (TreeNode | null)[] = [root]; // Create a queue out of the root node
        const res: string[] = [];

        while (queue.length) {
            const node = queue.shift(); // Grab the queue's first node and remove it
            if (node) {
                res.push(String(node.val)); // Push the node to the results
                queue.push(node.left, node.right); // Add the left and right nodes to the queue
            } else {
                res.push("null"); // If there is no node, push null
            }
        }
        return "[" + res.join(",") + "]"; // Return string array of all nodes
    }

    const deserialize = (data: string): TreeNode | null {
        if (data === "[]") return null; // Empty check

        const vals = data.slice(1, -1).split(","); // Get all node values and cut out the brackets
        const root = new TreeNode(Number(vals[0])); // Make a node out of the first node value
        const queue: TreeNode[] = [root]; // Create a queue out of the root node
        let i = 1;

        while (queue.length) {
            const node = queue.shift()!; // Grab the first node in the queue and remove it
            if (vals[i] !== "null") {
                node.left = new TreeNode(Number(vals[i])); // Make the left node the next val in queue
                queue.push(node.left); // Add the left node to the queue
            }
            i++;
            if (vals[i] !== "null") {
                node.right = new TreeNode(Number(vals[i])); // Make the right node the next val in queue
                queue.push(node.right); // Add the right node to the queue
            }
            i++;
        }
        return root;
    }
}


Quick Tools:
1. Recursion on left and right nodes: fun( fun(node.left); fun(node.right))
2. Create a queue out of the root node: const queue: (TreeNode | null)[] = [root];
3. Add each node in the queue:
    while (queue.length) {
        const node = queue.shift(); // Grab the queue's first node and remove it
        if (node) {
            res.push(String(node.val)); // Push the node to the results
        }
    }

Quick Summary:
1. Generic DFS: basic recursion
2. Invert binary tree
3. Traversal DFS: visiting every node in order
4. BFS level order: visiting by levels
5. Binary search on tree: searching the tree
6. Finding the lowest common ancestor
7. Serialize or deserialize
8. DFS path sum: path-based sum or check
9. Check height or if balanced DFS
