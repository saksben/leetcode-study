/**
 * Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any subarray of nums is guaranteed to fit in a 32-bit integer.
 */

/**
 * Maximum Product Subarray
 * 
 * 1D Dynamic Programming pattern
 */
function maxProduct(nums: number[]): number {
  if (nums.length === 0) return 0;

  let maxEndingHere = nums[0];
  let minEndingHere = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    // Swap if negative to handle min product becoming max
    if (num < 0) {
      [maxEndingHere, minEndingHere] = [minEndingHere, maxEndingHere];
    }

    maxEndingHere = Math.max(num, num * maxEndingHere);
    minEndingHere = Math.min(num, num * minEndingHere);

    result = Math.max(result, maxEndingHere);
  }

  return result;
}
