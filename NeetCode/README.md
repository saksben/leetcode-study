Each pattern is a lens for manipulating/searching a collection of values (array, list, tree, graph, etc.) efficiently.
The choice depends on:
Access style (random vs sequential vs hierarchical).
Constraints (sorted? dynamic? fixed size?).
Operations (lookup, update, combine, search, backtrack).

Given an array, if you need FIFO order (from the start or the array), use Queue/Deque pattern. If you need LIFO order (from the end of the array), use Stack pattern. If you need random access lookup (somewhere in the array), use Array & Hashing pattern. If you need optimal substructure and overlapping subproblems, use Dynamic Programming pattern. If you need to traverse from 2 indices efficiently instead of brute force, use the Two Pointers pattern.

1. **90%** Arrays & Hashing → direct/random access, counting, fast lookup
When you can index directly or need hash-based access.
Example: check duplicates, frequency count, grouping.
2. **50%** Stack (LIFO) → last seen / backtracking state machine
Push when exploring, pop when done.
Example: Valid Parentheses, Monotonic Stack (next greater element).
3. **70%** Two Pointers → relative movement inside a linear collection
Opposite ends, converging, or parallel traversal.
Example: 2-sum sorted, reverse array, merge arrays.
4. **70%** Sliding Window → two moving bounds (subset of array/string)
Shrink/expand range until condition met.
Example: Longest substring without repeat, min subarray length.
5. **60%** Binary Search → divide-and-conquer index jump in sorted structure
Search by halving until condition found.
Example: Search rotated array, first/last position.
6. **40%** Linked List → sequential traversal with dynamic memory
Best when frequent insert/delete, bad for random access.
Example: cycle detection (Floyd’s algorithm), merge two lists.
7. **50%** Trees → hierarchical collections (parent-child)
Use recursion or stack/queue traversal.
Example: BST operations, level order traversal.
8. **10%** Tries → tree specialized for strings/keys
Character-by-character traversal.
Example: prefix search, word dictionary.
9. **20%** Heap / Priority Queue → always retrieve min/max efficiently
Collection with priority-based ordering.
Example: Kth largest element, merge K sorted lists.
10. **30%** Backtracking → exploring all possibilities (DFS with undo)
Place choice → recurse → undo choice.
Example: permutations, N-Queens.
11. **50%** Graphs → nodes + edges traversal
BFS, DFS to explore connectivity.
Example: connected components, shortest path.
12. **10%** Advanced Graphs → optimized traversal on weighted/complex graphs
Dijkstra, Bellman-Ford, Union-Find.
Example: min spanning tree, shortest weighted path.
13. **30%** Greedy → local choice leads to global optimum
Sort + greedy pick until condition breaks.
Example: interval scheduling, coin change (when canonical).
14. **40%** Intervals → sort + merge or sweep-line technique
Overlaps, merging, counting.
Example: merge intervals, meeting rooms.
15. **40%** 1-D Dynamic Programming → linear subproblems (index-based)
dp[i] depends on previous states.
Example: house robber, climbing stairs.
16. **30%** 2-D Dynamic Programming → grid/subsequence subproblems
dp[i][j] = combine smaller sub-solutions.
Example: longest common subsequence, edit distance.
17. **15%** Bit Manipulation → direct manipulation of binary representation
Fast tricks for subsets, XOR uniqueness.
Example: single number, subsets via bitmasks.
18. **10%** Math & Geometry → formula-driven manipulation of collections in space
GCD/LCM, geometry checks, combinatorics.
Example: rotate image, count lattice points.

