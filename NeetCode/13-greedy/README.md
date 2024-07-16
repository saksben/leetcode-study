# Greedy Pattern
Greedy Pattern: use when you need to make a series of choices that result in the optimal solution at each step, hoping that this will lead to the globally optimal solution.

The Greedy pattern involves making locally optimal choices at each stage with the hope of finding a global optimum. This pattern is useful for problems where a greedy choice can lead to an optimal solution without needing to reconsider previous choices. It optimizes operations by minimizing or maximizing a certain value step-by-step.

# Explanation of the Pattern
Greedy algorithms build up a solution piece by piece, always choosing the next piece that offers the most immediate benefit. They do not always guarantee an optimal solution globally but can be efficient and easy to implement. Greedy algorithms are ideal for problems where choosing the locally optimal solution at each stage leads to the globally optimal solution.

# Key Concepts
* Greedy Choice Property: Selecting the best immediate option at each step.
* Optimal Substructure: The problem can be solved by combining optimal solutions to subproblems.
* No Backtracking: Decisions made are final and not reconsidered.
* Feasibility: Problems where greedy algorithms can be used often have constraints that make greedy choices feasible.

# When to Use This Pattern
* Problems where a sequence of decisions affects the final outcome.
* Optimizing resource allocation or scheduling based on immediate gains.
* Problems with constraints that allow greedy choices to work effectively without reconsideration.

# Common Use Cases and Approaches
1. Activity Selection Problem
* Select the maximum number of activities that do not overlap.
* Sort activities by end time and select non-overlapping intervals.
Time Complexity: O(n log n), Space Complexity: O(1).

2. Huffman Coding
* Efficiently encode data using variable-length codes to minimize the total encoded length.
* Build a Huffman tree by repeatedly combining the two least frequent characters.
Time Complexity: O(n log n), Space Complexity: O(n).

3. Minimum Spanning Tree (Prim's Algorithm)
* Connect all nodes in a graph with the minimum total edge weight without forming cycles.
* Start from an arbitrary node and grow the tree by adding the smallest edge that connects a vertex outside the tree.
Time Complexity: O(E log V), Space Complexity: O(V + E).

4. Knapsack Problem (Fractional Knapsack)
* Maximize the total value of items that can be put into a knapsack without exceeding its capacity.
* Sort items by value-to-weight ratio and add fractions of items until the capacity is filled.
Time Complexity: O(n log n), Space Complexity: O(1).