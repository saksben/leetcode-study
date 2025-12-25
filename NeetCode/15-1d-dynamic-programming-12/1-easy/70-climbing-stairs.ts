/**
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
 */

function climbStairs(n: number): number {
  if (n <= 1) return 1;

  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1; // base case: 1 way to stay at step 0
  dp[1] = 1; // base case: 1 way to reach step 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // recurrence relation
  }

  return dp[n];
}

// Optimized for space
function climbStairs2(n: number): number {
  if (n <= 1) return 1;

  let prev = 1; // dp[i-2]
  let curr = 1; // dp[i-1]

  for (let i = 2; i <= n; i++) {
    const next = curr + prev; // dp[i] = dp[i-1] + dp[i-2]
    prev = curr;
    curr = next;
  }

  return curr;
}
