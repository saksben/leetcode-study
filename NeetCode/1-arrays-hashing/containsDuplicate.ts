// 217 Contains Duplicate

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

// Good solution for small arrays. First action is O(n), then O(1), resulting in overall O(n)
function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>(nums); // Create a set of numbers out of the number array. A set is a collection of unique values, so it deletes any duplicates from the array.
    return (set.size < nums.length); // If set becomes smaller than nums, there were therefore duplicates. If set is equal to nums, no values were deleted, therefore it was unique
}

// Good solution for large arrays. The for loop is O(n), then O(1), then O(1), resulting in overall best case O(1) if duplicate found early, and O(n) if found late or never
function containsDuplicate2(nums: number[]) {
    let set = new Set(); // Declare new set
    for (let x of nums) {
        if (set.has(x)) return true; // For each number in nums array, if it already exists in the set, return early as true
        set.add(x); // Otherwise, add it to the set
    }
    return false; // If no duplicates, return false
}