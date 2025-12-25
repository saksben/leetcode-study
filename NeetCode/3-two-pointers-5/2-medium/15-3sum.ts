/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
 */

function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];

    // Step 1: Sort array to allow two-pointer traversal and duplicate skipping
    nums.sort((a, b) => a - b);

    // Step 2: Iterate each number, treating it as the potential first element of the triplet
    for (let i = 0; i < nums.length - 2; i++) { // Stop at the penultimate value in array because we need at least 3 values
        // Skip duplicate 'i' values to avoid duplicate triplets (for each iteration)
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1; // First value in question is i, second is the next value after i
        let right = nums.length - 1; // Third value in question is the last value in the array

        // Step 3: Two-pointer search for pairs that sum to -nums[i]
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum < 0) {
                // Too small -> move left pointer rightward to increase sum
                left++;
            } else if (sum > 0) {
                // Too large -> move right pointer leftward to decrease sum
                right--;
            } else {
                // Found a valid triplet
                result.push([nums[i], nums[left], nums[right]]);

                // Move both pointers inward
                left++;
                right--;

                // Skip duplicate left values after a valid triplet is found (same iteration, next left/right)
                while (left < right && nums[left] === nums[left - 1]) left++;

                // Skip duplicate right values after a valid triplet is found (same iteration, next left/right)
                while (left < right && nums[right] === nums[right + 1]) right--;
            }
        }
    }

    return result;
}