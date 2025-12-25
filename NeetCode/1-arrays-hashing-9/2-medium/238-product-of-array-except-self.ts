// Product of array except self
// Medium

/**
 Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 */

// create a prefix array of the product of all numbers before, and a postfix array of the product of all numbers after, and multiply them together to exclude the number at i
function productExceptSelf(nums: number[]): number[] {
    const result = new Array(nums.length).fill(1);
    let prefix = 1;
    let postfix = 1;
    for (let i = 0; i < nums.length; ++i) {
        result[i] *= prefix // multiply the result going forward by the numbers that came before
        result[nums.length - 1 - i] *= postfix; // multiply the result going backward by the numbers that come after
        prefix *= nums[i] // multiply the prefix by the number just now going forward
        postfix *= nums[nums.length - 1 - i]; // multiply the postfix by the number just now going backward
    }
    return result;
};

function productExceptSelf2(nums: number[]): number[] {
  const res: number[] = new Array(nums.length).fill(1);

  // Step 1: Build prefix products
  // res[i] will hold the product of all elements to the *left* of i
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  // Step 2: Build postfix products and multiply in place
  // We walk backward and multiply the existing prefix product (in res[i])
  // by the product of all elements to the *right* of i.
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }

  return res;
}
