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


Strategy:

const hint1 = "I need to count the number of ways to reach a target (steps, sums, paths)";
const hint2 = "I need the min/max value to reach a goal with constraints (min coins, max profit)";
const hint3 = "The problem has overlapping subproblems where each state depends on a few previous ones";
const hint4 = "I need to track optimal results over a sequence (subsequence, substring);"
const hint5 = "The problem describes a turn-based game with win/lose states";

// Big picture decision tree

if (problem.requires(optimalChoiceOverTime)) {
    if (problem.structure == "linear steps (like stairs or houses)") {
        useDPClimbOrRob();
    } else if (problem.structure == "sequence accumulation (like sums, coins)") {
        useDPCoinChange();
    } else if (problem.structure == "substring or subsequence on a single string/array") {
        useDPSubsequence();
    } else if (problem.structure == "game with win/lose state") {
        useDPGame();
    }
}

const useDPClimbOrRob = (n: number): number => {
    // Ex. You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the
    //number of distinct ways to reach the top
    
    if (n <= 2) return n; // Base cases of 1 or 2 steps/ways

    const dp: number[] = new Array(n + 1).fill(0) // Create array to store the number of ways to reach step i

    dp[1] = 1; // 1 way to climb 1 step
    dp[2] = 2; // 2 ways to climb 2 steps

    // Fill dp bottom-up
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // Ways to reach step i with 1 step plus 2 steps
    }

    return dp[n];
}

const useDPClimbOrRob = (coins: number[], amount: number): number => {
    // Ex. Given coins [1, 2, 5] and amount 11, return the fewest number of coins to make up that amount. 
    //If not possible, return -1

    const dp: number[] = new Array(ammount + 1).fill(Infinity);

    dp[0] = 0; // Base case: 0 coins to make amount 0

    // Build up solutions from 1 to amount
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) { // For each coin, if i minus the coin up to amount is positive...
                dp[i] = Math.min(dp[i], dp[i - coin] + 1); // Try using coin, update min coins needed
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}

const useDPClimbOrRob = (nums: number[]): number => {
    // Ex. Given an integer array nums, return the length of the longest increasing subsequence
    
    const n = nums.length;

    // dp[i] = length of LIS ending at index i
    const dp: number[] = new Array(n).fill(1); // Each element is at least the LIS of length 1
    let maxLIS = 1;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) { // If sequence is increasing...
                dp[i] = Math.max(dp[i], dp[j] + 1); // Count the iteration max of current or latest val
            }
        }
        maxLIS = Math.max(maxLIS, dp[i]); // The max LIS is the max of current count or latest iteration
    }
    return maxLIS;
}

const useDPClimbOrRob = (n: number): boolean => {
    // Ex. You're playing a game where 2 players take turns subtracting a square number from n.
    //If a player can't move, they lose. Return true if the first player wins

    const dp: boolean[] = new Array(n + 1).fill(false); // dp[i] = true if curr player can win with i stones

    for (let i = 1; i <= n; i++) {
        for (let k = 1; k * k <= i; k++) { // Iterate through squares up to i
            if (!dp[i - k * k]) { // If there are no squares before i...
                dp[i] = true; // Mark this move as true (player 1 wins) and break
                break;
            }
        }
    }
    return dp[n];
}


Quick Tools:
1. Create store with amount of ways and fill with initial val's: 
    const dp: number[] = new Array(amount + 1).fill(0);
2. Base cases before branching: dp[0] = 0; dp[1] = 1;


Quick Summary:
1. **DP Climb or rob**: linear steps
2. **DP coin change**: sequence accumulation
3. **DP subsequence**: substring or subsequence on a single string/array
4. **DP game**: game with win/lose state 
