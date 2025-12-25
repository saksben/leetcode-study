// Longest Consecutive Sequence
// Medium

/**
 Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
 */

function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  
  // Step 1: put all numbers into a Set for O(1) lookups
  let set = new Set(nums);
  let longest = 0; // The counter for longest consecutive numbers

// Step 2: For each number in the set, if the previous number isn't in the set and while the next number is in the set, count the streak
  for (let num of set) {
    // Only start counting if it's the beginning of a sequence
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Step 3: expand the sequence forward
      while (set.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      // Step 4: track the maximum length
      longest = Math.max(longest, currentStreak);
    }
  }

  return longest;
}
