/**
 * Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

 

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
 */

function canPartition(nums: number[]): boolean {
  const total = nums.reduce((a, b) => a + b, 0);

  if (total % 2 !== 0) return false; // cannot partition odd sum

  const target = total / 2;
  const dp: boolean[] = new Array(target + 1).fill(false);
  dp[0] = true; // sum 0 is always possible

  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[target];
}
