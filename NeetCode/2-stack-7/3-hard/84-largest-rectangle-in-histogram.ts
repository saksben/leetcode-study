/**
 * Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Example 1:


Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
Example 2:


Input: heights = [2,4]
Output: 4

Constraints:

1 <= heights.length <= 105
0 <= heights[i] <= 104
 */

function largestRectangleArea(heights: number[]): number {
  const stack: number[] = []; // will store indices of bars
  let maxArea = 0;

  // Add a sentinel 0 height bar at the end to flush remaining bars in stack
  heights.push(0);

  // Iterate through all bars
  for (let i = 0; i < heights.length; i++) {
    // While current bar is lower than the last bar in stack, we need to calculate the area for the bar at stack top
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()!]; // height of bar that ends here

      // Width is current index i minus the new top of stack minus 1 (i.e., the distance between the bar to the left and current)
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1; // Remember that the pop happens BEFORE this calc

      // Calculate area and update max. Remember the while loop REPEATS while current height is < previous top height. It's a stack because it takes care of the closest higher bar (and any higher then lower rectangle made) first, then any rectangle made from multiple bars that are higher than current height but lower than last highest bar
      maxArea = Math.max(maxArea, height * width);
    }

    // Push current index onto the stack
    stack.push(i);
  }

  return maxArea;
}

// heights = [2, 1, 5, 6, 2, 3, 0]
// i = 6
// height = 2
// width = 4
// maxArea = 10
// stack = [1]