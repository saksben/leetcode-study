/**
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
 

Constraints:

1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
 */

function dailyTemperatures(temperatures: number[]): number[] {
  const result = new Array(temperatures.length).fill(0); // default to 0 for days with no warmer future temp
  const stack: number[] = []; // stack holds indices of temperatures in decreasing order

  // Iterate through each day
  for (let i = 0; i < temperatures.length; i++) {
    // While current day's temperature is warmer than the temperature at the top of the stack (previous day), resolve that day
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop()!; // get the previous colder day's index.
      result[prevIndex] = i - prevIndex; // difference in days until warmer temp
    }

    // Push current day's index onto stack (waiting for a warmer day). The while loop waits until the next higher temp and pops each lower temp in between, using the index wait to measure how long
    stack.push(i);
  }

  return result;
}
