/**
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [3,3,3,3,3]
Output: 3
 

Constraints:

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
 */

function findDuplicate(nums: number[]): number {
    // Step 1: detect the cycle
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow]; // Move one step
        fast = nums[nums[fast]]; // Move two steps
    } while (slow !== fast);

    // Step 2: find the entry point of the cycle
    let finder = nums[0];
    while (finder !== slow) {
        finder = nums[finder];
        slow = nums[slow];
    }

    // The duplicate number
    return finder;
}