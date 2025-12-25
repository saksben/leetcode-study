/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
 */

function trap(height: number[]): number {
    let left = 0; // Left pointer
    let right = height.length - 1; // Right pointer
    let leftMax = 0; // Track max height from left
    let rightMax = 0; // Track max height from right
    let trappedWater = 0; // Total water trapped

    // Continue until the two pointers meet
    while (left < right) {
        // If current left bar is shorter, process left side
        if (height[left] < height[right]) {
            // Update leftMax if current bar is highest so far
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                // Otherwise, water is trapped; calculate the height from surface to the block -> leftMax - current height
                trappedWater += leftMax - height[left]
            }
            left++; // Move left forward
        } else { // If right bar is shorter than left bar, process right side (the exact same process but for right side)
            // Update rightMax if current bar is highest so far
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                // Otherwise, water is trapped; calculate the height from surface to the block -> rightMax - current height
                trappedWater += rightMax - height[right];
            }
            right--; // Move right backward
        }
    }

    return trappedWater;
}