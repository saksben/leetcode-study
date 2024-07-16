# Dynamic Programming Pattern (2D)
Dynamic Programming Pattern (2D): use when you need to solve problems by breaking them down into overlapping subproblems and storing the results of subproblems to avoid redundant computations.

The Dynamic Programming (2D) pattern involves solving complex problems by breaking them down into simpler overlapping subproblems. This pattern is useful for problems where the solution can be constructed efficiently from solutions to subproblems, avoiding the inefficiencies of recalculating the same subproblems multiple times. It optimizes operations by storing intermediate results in a table (memoization) or building solutions bottom-up (tabulation) in a two-dimensional array.

# Explanation of the Pattern
Dynamic Programming (2D) builds a solution by solving subproblems recursively and storing the results to avoid redundant computations. It typically involves two approaches: memoization (top-down), where results of subproblems are stored in a cache, and tabulation (bottom-up), where solutions are built iteratively based on previously computed values in a two-dimensional array. DP (2D) is suited for problems with optimal substructure (solutions to subproblems contribute to the overall solution) and overlapping subproblems (subproblems share solutions).

# Key Concepts
* Memoization and Tabulation: Techniques to store and reuse computed results in a two-dimensional array.
* Optimal Substructure: Solutions to subproblems contribute to the overall optimal solution.
* State Representation: Defining states that encapsulate necessary information for computation.
* Recurrence Relations: Formulating relationships between subproblems involving two dimensions.
* Space and Time Complexity: Analyzing efficiency in terms of memory and computation using a two-dimensional array.

# When to Use This Pattern
* Problems with overlapping subproblems where solutions to subproblems can be reused.
* Optimization problems where solutions can be built incrementally from previously computed values.
* Problems where recursive solutions without DP would result in exponential time complexity.

# Common Use Cases and Approaches
1. Longest Common Subsequence (LCS)
* Find the longest subsequence that appears in both given strings.
* Use a two-dimensional array to store lengths of LCS for substrings and build the solution iteratively.
Time Complexity: O(m * n), Space Complexity: O(m * n) where m and n are the lengths of the two strings.

2. Matrix Chain Multiplication
* Find the most efficient way to multiply a given sequence of matrices.
* Build a table to store minimum multiplications for subproblems and construct the solution.
Time Complexity: O(n^3), Space Complexity: O(n^2) where n is the number of matrices.
Edit Distance

3. Determine the minimum number of operations required to convert one string into another (e.g., insertions, deletions, substitutions).
* Use a two-dimensional array to store minimum edit distances for substrings and compute the solution iteratively.
* Time Complexity: O(m * n), Space Complexity: O(m * n) where m and n are the lengths of the two strings.

4. Knapsack Problem
* Maximize the total value of items that can be put into a knapsack without exceeding its capacity, considering both weight and value.
* Use a two-dimensional array to store solutions for subproblems (weights and capacities) and compute the solution iteratively.
Time Complexity: O(n * W), Space Complexity: O(n * W) where n is the number of items and W is the capacity of the knapsack.