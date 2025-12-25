/**
 * There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
 */

function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    // Standard binary search loop
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        // Step 1: Found the target
        if (nums[mid] === target) return mid;

        // Step 2: Determine which half is sorted (this is the problem's main question). Basically, figure out which half is sorted, and then whether target is in the sorted half or the unsorted half
        // If left half is sorted
        if (nums[left] <= nums[mid]) {
            // Check if target lies within the left sorted range
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1; // Move to left half
            } else {
                left = mid + 1; // Move to right half
            }
        }

        // Right half is sorted
        else {
            // Check if target lies within the right sorted range
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1; // Move to right half
            } else {
                right = mid - 1; // Move to left half
            }
        }
    }

    return -1; // Target not found
}