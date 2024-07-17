// Two Sum
// Easy

/**
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */

// 62ms
function twoSum(nums: number[], target: number): number[] {
    let map = new Map() // Create a map
    for (let i = 0; i < nums.length; ++i) {
        if (map.has(target - nums[i])) { // Looping through nums, if the map already has a number that equals target when the current index's number is subtracted (using .has() to get the key, which is the integer), return that index and this index
            return [map.get(target - nums[i]), i] // (using .get() to get the value, which is the index)
        }
        map.set(nums[i], i) // Otherwise, add this number and its index to the map
    }
    return [-1, -1]
}
