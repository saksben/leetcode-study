/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
 */

function maxArea(height: number[]): number {
    let left = 0;                         // left pointer at start
    let right = height.length - 1;        // right pointer at end
    let maxWater = 0;                     // track maximum water found

    while (left < right) {
        // Width between the two lines
        const width = right - left;

        // Height is determined by the shorter line
        const h = Math.min(height[left], height[right]);

        // Calculate current area
        const area = width * h;

        // Update max if needed
        maxWater = Math.max(maxWater, area);

        // Move the pointer that's shorter (to try to find a taller line)
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}
