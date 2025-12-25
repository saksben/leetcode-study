/**
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const deque: number[] = []; // Stores indices, not values

    for (let i = 0; i < nums.length; i++) {
        // Step 1: remove leftmost index if it is outside of the current window
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Step 2: maintain a decreasing deque. Keep removing indices from the end if their values are less than the current number, since they are useless
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Step 3: Add the current index to the deque.
        deque.push(i);

        // Step 4: The start of the deque is the max for the current window. Start recording results 
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}