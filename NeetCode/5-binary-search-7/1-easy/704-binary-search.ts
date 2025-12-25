/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
 */

function binarySearch(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    // Continue searching while there's a valid range
    while (left <= right) {
        // Step 1: Find the middle index (avoid overflow with this formula)
        const mid = Math.floor(left + (right - left) / 2); // In many low-level languages, big numbers flips it to negative so we need this. In JS/TS this it's okay to use Math.floor((left + right) / 2)

        // Step 2: Compare mid element with target
        if (nums[mid] === target) {
            return mid; // Found the target
        } else if (nums[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    return -1; // Target not found
}