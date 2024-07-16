# Dynamic Programming Pattern (1D)
Dynamic Programming Pattern (1D): use when you need to solve problems by breaking them down into overlapping subproblems and storing the results of subproblems to avoid redundant computations.

The Dynamic Programming (1D) pattern involves solving complex problems by breaking them down into simpler overlapping subproblems. This pattern is useful for problems where the solution can be constructed efficiently from solutions to subproblems, avoiding the inefficiencies of recalculating the same subproblems multiple times. It optimizes operations by storing intermediate results in a cache (memoization) or building solutions bottom-up (tabulation) in a one-dimensional array.

# Explanation of the Pattern
Dynamic Programming (1D) builds a solution by solving subproblems recursively and storing the results to avoid redundant computations. It typically involves two approaches: memoization (top-down), where results of subproblems are stored in a cache, and tabulation (bottom-up), where solutions are built iteratively based on previously computed values in a one-dimensional array. DP (1D) is suited for problems with optimal substructure (solutions to subproblems contribute to the overall solution) and overlapping subproblems (subproblems share solutions).

# Key Concepts
* Memoization and Tabulation: Techniques to store and reuse computed results in a one-dimensional array.
* Optimal Substructure: Solutions to subproblems contribute to the overall optimal solution.
* State Representation: Defining states that encapsulate necessary information for computation.
* Recurrence Relations: Formulating relationships between subproblems.
* Space and Time Complexity: Analyzing efficiency in terms of memory and computation using a single-dimensional array.

# When to Use This Pattern
* Problems with overlapping subproblems where solutions to subproblems can be reused.
* Optimization problems where solutions can be built incrementally from previously computed values.
* Problems where recursive solutions without DP would result in exponential time complexity.

# Common Use Cases and Approaches
1. Fibonacci Sequence
* Compute the nth Fibonacci number using dynamic programming in a one-dimensional array.
* Use memoization or tabulation to store computed values and avoid redundant calculations.
Time Complexity: O(n), Space Complexity: O(n) for memoization or O(1) for tabulation.

2. Longest Increasing Subsequence (LIS)
* Find the length of the longest subsequence where elements are in increasing order.
* Use a one-dimensional array to store lengths of LIS for subarrays and build the solution iteratively.
Time Complexity: O(n^2) using dynamic programming, Space Complexity: O(n).

3. Coin Change Problem
* Determine the minimum number of coins required to make a certain amount using a given set of denominations.
* Use a one-dimensional array to store minimum coins for subproblems and compute the solution iteratively.
Time Complexity: O(n * m), Space Complexity: O(n) where n is the amount and m is the number of denominations.

4. Maximum Subarray Sum (Kadane's Algorithm)
* Find the contiguous subarray within a one-dimensional array of numbers that has the largest sum.
* Use dynamic programming to keep track of the maximum sum subarray ending at each position.
Time Complexity: O(n), Space Complexity: O(1).