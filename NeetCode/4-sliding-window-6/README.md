# Sliding Window Pattern
Sliding Window Pattern: use when you need to maintain a subset of elements in an array or string and efficiently calculate a result based on that subset.

The Sliding Window pattern involves creating a window of a certain size that moves across the array or string. This pattern is useful for problems where you need to find a substring, subarray, or any other contiguous segment of elements that satisfies certain conditions. It optimizes time complexity by reducing unnecessary re-computation through the sliding mechanism.

# Explanation of the Pattern
The Sliding Window pattern typically uses two pointers to define the current window and expands or contracts it based on the problem's requirements. By sliding the window from the beginning to the end of the array or string, you can efficiently find the desired subset. This pattern is commonly used in problems involving strings, arrays, or linked lists.

# Key Concepts
* Window: Defines the subset of elements being considered.
* Expand/Contract: Adjust the window size based on conditions.
* Calculate Result: Efficiently compute results based on the window.
* Avoid Redundancy: Minimize unnecessary recalculations.

# When to Use This Pattern
* Finding a substring or subarray with a maximum/minimum value
* Longest substring without repeating characters
* Fixed-size sliding window problems
* Problems requiring a dynamic window size based on conditions

# Common Use Cases and Approaches
1. Maximum Sum Subarray of Size K
* Initialize the sum of the first K elements.
* Slide the window by adding the next element and subtracting the first element of the previous window.
Time Complexity: O(n), Space Complexity: O(1)

2. Longest Substring Without Repeating Characters
* Use a hashmap to track characters and their positions.
* Adjust the window boundaries based on duplicate characters.
Time Complexity: O(n), Space Complexity: O(min(m, n)) where m is the size of the character set.

3. Fixed-size Sliding Window Median
* Use two heaps (max-heap and min-heap) to maintain the elements within the window.
* Adjust the window by adding and removing elements based on the median condition.
Time Complexity: O(n log k), Space Complexity: O(k)

4. Minimum Window Substring
* Use two pointers to expand and contract the window until finding a valid substring.
* Adjust the window size based on character frequencies.
Time Complexity: O(n), Space Complexity: O(m) where m is the number of unique characters in the pattern.

Strategy:
const hint1 = "I need to compare or combine values at different positions in a sorted array";
const hint2 = "I need to find max/min sum, average, or length of subarrays/substrings";
const hint3 = "I need to find a subarray/substring under a constraint (sum, count, uniqueness)";
const hint4 = "I need to track counts or frequencies of characters/elements in a range";
const hint5 = "I need a variable-sized window based on meeting a condition rather than a fixed size";

// Big picture decision tree:
if (problem.requires(fixedSizeWindow)) {
    useFixedWindow(input, windowSize);
} else if (problem.requires(variableSizeWindow)) {
    if (problem.requires(maximumOrMinimum)) {
        useDynamicWindowWithTwoPointers(input);
    } else if (problem.requires(subarrayOrSubstringMatching)) {
        useDynamicWindowWithHashMap(input);
    } else if (problem.requires(specificSumOrCount)) {
        useDynamicWindowWithRunningSum(input);
    }
} else if (problem.requires(allSubarraysOrSubstringsWithConstraints)) {
    if (problem.requires(countUniqueElements)) {
        useDynamicWindowWithSet(input);
    } else if (problem.requires(characterFrequencyTracking)) {
        useDynamicWindowWithFrequencyMap(input);
    }
}

const useFixedWindow = (arr, k) {
    // If I need to find the sum, avg, min, or max of a window of size k
    // Ex. Find the max sum of any subarray of size k
    let windowSum = 0; // Start sum at 0
    for (let i = 0; i < k; i++) {
        windowSum += arr[i]; // Sum the first k elems in arr
    }

    let maxSum = windowSum;

    for (let i = k; i < arr.length; i++) { // For every elem after k...
        windowSum += arr[i] - arr[i - k]; // WindowSum = windowSum + newElement - oldElement
        //shift window right by 1 without needing to recalculate the sum of k elements every time
        maxSum = Math.max(maxSum, windowSum); // The max sum is either the original window sum or the calc
    }
    
    return maxSum
}

const useDynamicWindowWithTwoPointers(arr, constraintFn) {
    // If you need a max/min of a variable sized window with a constraint
    // Ex. Find the length of the window in which the sum of elements = x
    let left = 0;
    let result = 0;

    for (let right = 0; right < arr.length; right++) {
        while (!constraintFn(arr, left, right)) { // While the contents of the window don't meet
        //the constraint...
            left++; // Move left to the right 
        } // Then move right to the right and repeat.

        result = Math.max(result, right - left + 1); // The max is either 0 or the length of the window
    }

    return result;
}

const useDynamicWindowWithHashMap = (s, t) => {
    // If I need to track counts or frequency in a variable-sized window
    // Ex. find the min substring that contains all chars of another string
    const targetMap: Record<string, number> = {}; // Create an object as map
    for (const char of t) {
        targetMap[char] = (targetMap[char] || 0) + 1 // Count each elem of t
    };

    const windowMap: Record<string, number> = {}; // Create an object as map for the window
    let left = 0; right = 0; valid = 0;
    let minLen =  Infinity, start = 0; // Start at 0, start min length at infinity

    while (right < s.length) {
        const c = s[right];
        right++;

        if (targetMap[c] !== undefined) {
            window[c] = (window[c] || 0) + 1; // Count right char of the window
            if (window[c] === targetMap[c]) {
                valid++; // If the char on the right has the same count in the windowMap and targetMap,
            //increase valid
            }
        }

        while (valid === Object.keys(targetMap).length) { // While valid === the number of chars in targetMap,
            if (right - left < minLen) { // If the window is < minLen, start at left and set minLen to the 
            //window length
                start = left;
                minLen = right - left;
            }
            const d = s[left];
            left++; // Mark the left elem and increase left
            if (targetMap[d] !== undefined) {
                if (window[d] === targetMap[d]) { If the elem's count in window and target are the same...
                    valid--; // decrease valid and its count in window
                    window[d]--;
                }
            }
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}

const useDynamicWindowWithRunningSum = (nums: number[], k: number) => {
    // If I need to find/count subarrays with a target sum using a running total
    // Ex. Find how many subarrays have a sum equal to k
    let count = 0;
    let sum = 0;
    const prefixSums: Record<number, number> = { 0: 1 }; // Create a count object starting with 0

    for (let num of nums) {
        sum += num; // Add each num to sum
        if (prefixSums[sum - k] !== undefined) {
            count += prefixSums[sum - k]; // Increase count for valid subarrays
        }
        prefixSums[sum] = (prefixSums[sum] || 0) + 1; // Count each time sum equals k
    }
    
    return count;
}

const useDynamicWindowWithSet = (s: string) => {
    // If I need the longest subarray with unique elements
    // Ex. Given a string s, find the length of the longest substring without repeating chars

    const set = new Set<string>();
    let left = 0; maxLen = 0;

    // Keep setting the new maxLen by deleting all previous in set when it already has right
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}

const useDynamicWindowWithFrequencyMap = (s: string, p: string) => {
    // If I need exact char counts in a substring
    // Ex. Min window substring with exact counts of chars
    const need: Record<string, number> = {};
    for (const c of p) {
        need[c] = (need[c] || 0) + 1; // Count char and add to need
    }

    const window: Record<string, number> = {};
    let left = 0, right = 0;
    let valid = 0;
    const res: number[] = [];

    while (right < s.length) {
        const c = s[right];
        right++;
        if (need[c] !== undefined) {
            window[c] = (window[c] || 0) + 1; // Count each char in s
            if (window[c] === need[c]) {
                valid++; // If the char count equals its count in need, increase valid
            }
        }

        while (right - left >= p.length) { // While the window is at least the length of p...
            if (valid === Object.keys(need).length) {
                res.push(left); // If valid equals the length of need's keys, push left index to res
            }
            const d = s[left];
            left++; // Mark char at left pointer and increase left
            if (need[d] !== undefined) {
                if (window[d] === need[d]) { // If window count at left pointer equals need count at 
                //left pointer...
                    valid--; // Decrease valid
                }
                window[d]--; // Decrease window count at left pointer and restart while loop
            }
        }
    }

    return res;
}

Quick Tools:
1. Calculate the width of the window
2. Right and left pointers, move one or both to the right
3. For loop
4. Keep track of the current max: let currentMax = 0; currentMax = Math.max(currentMax, num);

Quick Summary:
1. **Fixed window**: fixed window size
    - Calculate width of window
2. **Dynamic window with 2 pointers**: variable window size, min/max
3. **Dynamic window with hash map**: variable window size, subarray/substring
4. **Dynamic window with running sum**: variable window size, specific sum or count
5. **Dynamic window with Set**: count unique elements with all subarrays with constraints
6. **Dynamic window with frequency map**: char frequency tracking with all subarrays with constraints